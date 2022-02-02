const { UserRepo } = require("../repositories");
const db = require("../models");
async function signUp(req, res, next) {

  try {
    const { email, uid } = req.user;
    console.log(email)
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
      firstName: "",
      lastName: "",
      username:""

    });

    res.status(201).send({
      data: uid,
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

async function updateUser(req, res, next) {
  try {
    const response = await UserRepo.findOne({ email: "ch1@gmail.com" },);
    // const response=await UserRepo.findOneAndUpdate({ email: "ch1@gmail.com" },{
    //   email: "sergiño@gmail.com",
    // }, { useFindAndModify: false })
  
console.log(response);
    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    await UserRepo.findOneAndUpdate({ email: "joseprrr@gmail.com" },{
      firstName: "sergiño",
      lastName: "roca",
      username: "serroca"
    }, { useFindAndModify: true })
  

    if (response.data) {
      return res.status(200).send({
        data: "",
        error: null,
      });
    }

    res.status(201).send({
      data: "andresito",
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp: signUp,
  signOut: signOut,
  updateUser:updateUser
};
