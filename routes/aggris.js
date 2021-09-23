const router = require("express").Router();
const aggriController = require("../controllers/aggriController")


router.post("/" ,aggriController.aggriga)
// router.get("/", aggriController.aggriga_get_all)
// router.get("/:markId",aggriController.aggriga_get_byid)
// router.put("/:markId",aggriController.aggriga_put_byid)
// router.delete("/:markId",aggriController.aggriga_delete_byid)

module.exports =router ;