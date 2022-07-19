const { Router } = require("express");
// const { check } = require("express-validator");
// const { postUser, getUserById, getUsers, updateUser, deleteUser, undeleteUser, userUpdateRole } = require("../controllers/users");
// const { validation } = require("../middlewares/validator");
// const { jwtValidator, adminRole, hasRole } = require("../middlewares");
// const { rolValidator, userExistById, emailExist } = require("../helpers/db-validators");
const router = Router();

/* router.get("/", [jwtValidator, hasRole("ADMIN_ROLE")], getUsers);

router.put(
  "/:id",
  [
    check("id", "Invalid ID").isMongoId(),
    check("id").custom(userExistById),
    check("role").custom(rolValidator),
    validation,
  ],
  updateUser
);

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("password", "Password must contain at least 6 characters").isLength({
      min: 6,
    }),
    check("email").custom(emailExist),
    validation,
  ],
  postUser
);

router.get(
  "/:id",
  [
    jwtValidator,
    check("id", "Invalid ID").isMongoId(),
    check("id").custom(userExistById),
    validation,
  ],
  getUserById
);

router.delete(
  "/:id",
  [
    jwtValidator,
    hasRole("ADMIN_ROLE"),
    check("id", "Invalid ID").isMongoId(),
    check("id").custom(userExistById),
    validation,
  ],
  deleteUser
);

//undelete users
router.patch(
  "/:id",
  [
    jwtValidator,
    hasRole("ADMIN_ROLE"),
    check("id", "Invalid ID").isMongoId(),
    check("id").custom(userExistById),
    validation,
  ],
  undeleteUser
);

router.put(
  "/update/:id",
  [
    jwtValidator,
    hasRole("ADMIN_ROLE"),
    check("id", "Invalid ID").isMongoId(),
    check("id").custom(userExistById),
    validation,
  ],
  userUpdateRole
); */

module.exports = router;
