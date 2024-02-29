let User = require("../models/user.model");

exports.create = (req, res) => {
  const userData = {
    userID: req.body.userID,
    password: req.body.password,
    company: req.body.company,
  };

  const user = new User(userData);

  user
    .save()
    .then((savedUser) => {
      return res.status(200).json({
        message: `${savedUser._id} successfully created`,
      });
    })
    .catch((err) => {
      console.error("Error saving user:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    });
};

exports.getUser = async (req, res) => {
  const userID = req.body;
  try {
    const foundUser = await User.find(userID);
    res.status(200).json(foundUser);
  } catch (error) {
    console.error("Error in fetching user:", error);
    res.status(500).json({ error: "Error fetching user" });
  }
};

