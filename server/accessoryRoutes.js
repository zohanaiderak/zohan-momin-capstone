const express = require('express');
const router = express.Router();
const accessories = require('./accessories.json');

router.get('/', (req, res) => {
    res.status(200).json(accessories);
  });

router.get('/:accessoryId', (req,res)=>{
    if(accessories.find(accessory=>{return accessory.id === req.params.accessoryId})){
        res.status(200).json(accessories.find(accessory=>{
            return accessory.id === req.params.accessoryId
        })
        )}else{
            res.status(404).send("Page Not Found")
        }
    }
)

module.exports = router;