const { UserRepo } = require("../repositories");
const { User } = require("../models/index")


async function signUp(req, res, next) {

  try {
    const { email, uid } = req.user;
    const response = await UserRepo.findOne({ email: email });
    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(200).send({
        data: "OK",
        error: null,
      });
    }
    await UserRepo.create({
      _id: uid,
      email: email,
    });

    res.status(201).send({
      email,
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

async function signOut(req, res) {
  req.signOut();
  res.status(200).send({
    data: "OK",
    error: null,
  });
}

const editUser = (req, res) => {
  const { uid } = req.user;

  User.findByIdAndUpdate(uid, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${uid}. Maybe User was not found!`
        });
      }
      else {
        res.send({ message: "User was updated successfully." });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error updating User with id=" + uid
      });
    });
};

async function getUser(req, res) {
  const { uid } = req.user;
  console.log(uid)
  User.findById(uid)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + uid });
      else res.send(data);
    })
    .catch(error => {
      res
        .status(500)
        .send({ message: "Error retrieving user with id=" + uid });
    });
}

module.exports = {
  signUp: signUp,
  signOut: signOut,
  editUser: editUser,
  getUser: getUser
};