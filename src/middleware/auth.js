const jwt = require("jsonwebtoken");

const authenticate = function (req, res, next) {
  //check the token in request header
  //validate this token
  let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  let decoded = jwt.verify(
    token,
    "functionup-plutonium-very-very-secret-key",
    function (err, decodedToken) {
      if (err) {
        res.send({ status: false, msg: "token is invalid.!!!" });
      } else {
        // console.log(decodedToken);
        req["decodedToken"] = decodedToken;
        next();
      }
    }
  );
};

const authorise = function (req, res, next) {
  // comapre the logged in user's id and the id in request
  let tokenUserId = req.decodedToken.userId;
  let paramUserId = req.params.userId;
//   console.log(tokenUserId, paramUserId);
  if (tokenUserId == paramUserId) {
    next();
  } else {
    res.send({ status: false, msg: "Authorization Failed... milicious user" });
  }
};

module.exports = {
  authenticate,
  authorise,
};
