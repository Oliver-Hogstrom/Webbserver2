const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
  res.send('walla igen broder')
})

module.exports = router