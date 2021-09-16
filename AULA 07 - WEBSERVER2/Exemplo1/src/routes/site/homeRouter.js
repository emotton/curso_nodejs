const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("park-henri/home")
})

module.exports = router;