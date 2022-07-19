const { response } = require("express");

const adminRole = (req, res = response, next) => {
  if (!req.user) {
    return res.status(500).json({
      msg: "You must validated the token first",
    });
  }

  const { role, name } = req.user;

  if (role !== "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `${name} , isnt an admin. please contact with the admin`,
    });
  }
  next();
};

const hasRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(500).json({
        msg: "You must validated the token first",
      });
    }
    if(!roles.includes(req.user.role)){
        return res.status(401).json({
            msg: `Must be contain this ${roles}`
        })
    }

    next();
  };
};

module.exports = {
  adminRole,
  hasRole,
};
