const router = require("express").Router();                                   
const markController = require("../controllers/markController")

router.post("/", markController.mark_create);
router.get("/", markController.mark_all);
router.get("/:markId", markController.mark_details);
router.put("/:markId", markController.mark_update);
router.delete("/:markId", markController.mark_delete);


module.exports = router;


