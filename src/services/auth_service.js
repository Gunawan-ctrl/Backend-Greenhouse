require("dotenv").config();
const model = require("../models/user_model");
const { requestResponse } = require("../utils");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { readFileSync } = require("fs");
// const user_model = require("../models/user_model");
const privateKey = readFileSync("./private.key", "utf-8");

let response;

// const login = async ({ EMAIL, PASSWORD }) => {
//   // console.log(PASSWORD);
//   const admin = await model.findOne(
//     { EMAIL: EMAIL },
//     { _id: false },
//     { lean: true }
//   );

//   if (admin === null) {
//     response = { ...requestResponse.unauthorized };
//     return response;
//   }

//   const comparePassword = await bcrypt.compare(PASSWORD, admin.PASSWORD);
//   // console.log(comparePassword);
//   if (!comparePassword) {
//     return { ...requestResponse.authorized_failed };
//   }
//   const token = jwt.sign(
//     {
//       guid: admin.GUID,
//       ...(admin.EMAIL && { email: admin.EMAIL }),
//       ...(admin.PASSWORD && { password: admin.PASSWORD }),
//       ...(admin.ROLE && { role: admin.ROLE })
//     },
//     privateKey,
//     {
//       algorithm: "RS256"
//     },
//     {
//       expiresIn: "7d"
//     }
//   );
//   // console.log(admin.GUID)

//   const result = {
//     ...requestResponse.success,
//     data: {
//       admin,
//       token
//     }
//   };
//   return result;
// };

const login = async ({ EMAIL, PASSWORD }) => {
  // console.log(PASSWORD);
  const user = await model.findOne(
    { EMAIL: EMAIL },
    { _id: false },
    { lean: true }
  );
  // console.log(user)
  if (user === null) {
    response = { ...requestResponse.unauthorized };
    return response;
  }

  const comparePassword = await bcrypt.compare(PASSWORD, user.PASSWORD);
  // console.log(comparePassword);
  if (!comparePassword) {
    return { ...requestResponse.authorized_failed };
  }
  const token = jwt.sign(
    {
      guid: user.GUID,
      ...(user.EMAIL && { email: user.EMAIL }),
      ...(user.PASSWORD && { password: user.PASSWORD }),
      ...(user.ROLE && { role: user.ROLE })
    },
    privateKey,
    {
      algorithm: "RS256"
    },
    {
      expiresIn: "7d"
    }
  );
  // console.log()

  const result = {
    ...requestResponse.success,
    data: {
      user,
      token
    }
  };
  return result;
};

module.exports = {
  // login,
  login
};
