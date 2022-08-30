const jwt = require("jsonwebtoken");

const authenticate = function (req, res, next) {
  //check the token in request header
  //validate this token
  try {
    let token = req.headers["x-auth-token"];
    if (!token)
      return res
        .status(401)
        .send({ status: false, msg: "token must be present" });
    let decoded = jwt.verify(
      token,
      "functionup-plutonium-very-very-secret-key"
    );
    req["decodedToken"] = decoded;
    next();
  } catch (err) {
    res.status(403).send({ status: false, msg: err.message });
  }
};

const authorise = function (req, res, next) {
  // comapre the logged in user's id and the id in request
  try {
    let tokenUserId = req.decodedToken.userId;
    let paramUserId = req.params.userId;
    //   console.log(tokenUserId, paramUserId);
    if (tokenUserId == paramUserId) {
      next();
    } else {
      res
        .status(403)
        .send({ status: false, msg: "Authorization Failed... milicious user" });
    }
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

module.exports = {
  authenticate,
  authorise,
};
