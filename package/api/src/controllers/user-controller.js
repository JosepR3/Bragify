const { UserRepo } = require("../repositories");
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
  console.log(req)
  // try {
    // const { email, firstName,lastName,username} = req.user;
    // console.log(req.user)
  // const response = await UserRepo.findOneAndUpdate({ email: "sergi.sergi@gmail.com" }, {$inc:{"firstName": "sergiño","lastName": "roca","username":"serroca"}});
  //   console.log(response);
//     if (response.error) {
//       return res.status(400).send({
//         data: null,
//         error: response.error,
//       });
//     }

//     if (response.data) {
//       return res.status(200).send({
//         data: "OK",
//         error: null,
//       });
//     }
// // console.log(req)
//     await data.findOneAndUpdate({
//       email: email,
//       firstName: "sergiño",
//       lastName: "roca",
//       username:"serroca"
      
//     });

  //   res.status(201).send({
  //     data: uid,
  //     error: null,
  //   });
  // } catch (error) {
  //   next(error);
  // }
}

module.exports = {
  signUp: signUp,
  signOut: signOut,
  updateUser:updateUser
};
