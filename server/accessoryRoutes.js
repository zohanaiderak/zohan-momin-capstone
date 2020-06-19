const express = require('express');
const fs = require('fs');
const router = express.Router();
const accessories = require('./accessories.json');

router.get('/', (req, res) => {
    fs.readFile('./accessories.json', 'utf8', (_, accessoryData) =>{
    return res.status(200).json(JSON.parse(accessoryData));
  });
})

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

router.post('/', (req, res) => {
    console.log(req.body)
    fs.readFile('./accessories.json', 'utf8', (_, accessoryData) => {
      const newAccessory = [
        ...JSON.parse(accessoryData),
        {
          ...req.body
        }
      ];
      console.log(newAccessory);

      fs.writeFile('./accessories.json', JSON.stringify(newAccessory), () => {
        return res.status(201).json(newAccessory);
      });
    });
  });

module.exports = router;