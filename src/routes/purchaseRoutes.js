const { Router } = require("express");
// const { purchaseStatus, getPurchase, getPurchases, updateState, getPurchaseId, confirmationEmail } = require("../controllers/purchase");
// const { purchaseValidator } = require("../helpers/db-validators");
// const { jwtValidator, adminRole } = require("../middlewares");
// const { validation } = require("../middlewares/validator");
// const { check } = require("express-validator");

const router = Router();

/* router.get('/email',[jwtValidator, validation],confirmationEmail)

router.get("/", [jwtValidator, validation], getPurchase);

router.get("/all", [jwtValidator, adminRole, validation], getPurchases);

router.get(
  "/:id",
  [
    jwtValidator,
    check("id", "The Id Doesnt exist").isMongoId(),
    check("id").custom(purchaseValidator),
    validation,
  ],
  getPurchaseId
);

router.put(
  "/:id",
  [
    jwtValidator,
    check("id", "The Id Doesnt exist").isMongoId(),
    check("id").custom(purchaseValidator),
    validation,
  ],
  updateState
);

router.post("/", [jwtValidator, validation], purchaseStatus); */

module.exports = router;
