import User from "../../others/mongoModels/userModel.js";
const createUserMongo = async ({ username, email, tel, password }) => {
  await User.create({
    username,
    email,
    tel,
    password,
  });
};

const getUserByUsernameOrTelOrEmail = async ({ username, tel, email }) => {
  return (
    await User.aggregate([
      {
        $match: { $or: [{ username }, { tel }, { email }] },
      },
      {
        $project: { _id: 1, username: 1, tal: 1, email: 1, password: 1 },
      },
    ])
  )[0];
};

export { createUserMongo, getUserByUsernameOrTelOrEmail };
