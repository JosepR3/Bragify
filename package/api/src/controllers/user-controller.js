const { UserRepo } = require("../repositories");

async function signUp(req, res, next) {

  try {
    const username = req.headers.data
    const { email, uid } = req.user;
    const response = await UserRepo.findOne({ email: email });

    if (response.data) {
      return res.status(200).send({
        data: email,
        error: null,
      });
    }

    await UserRepo.create({
      _id: uid,
      username: username,
      email: email,
    });

    res.status(201).send({
      data: firstName,
      email,
      error: null,
    });
  } catch (error) {
    console.log(error)
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

module.exports = {
  signUp: signUp,
  signOut: signOut,
};
