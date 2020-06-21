const express = require('express');
const fs = require('fs');
const router = express.Router();
const phones = require('./phones.json');
const accessories = require('./accessories.json');

router.get('/', (req, res) => {
    fs.readFile('./phones.json', 'utf8', (_, phoneData) =>{
    return res.status(200).json(JSON.parse(phoneData));
  });
})

router.get('/:phoneId', (req, res) => {
    let phonesMatch = phones.filter(phone=>{
        if(phone.id === req.params.phoneId){return phone};
    });
            let accessoryMatch = accessories.filter(accessory=>{
                if(accessory.phoneid=== req.params.phoneId){return accessory};
            })
            phonesMatch[0].accessory = accessoryMatch;
            res.status(200).json(phonesMatch[0]);
  });

  router.post('/', (req, res) => {
    console.log(req.body)
    fs.readFile('./phones.json', 'utf8', (_, phoneData) => {
      const newPhones = [
        ...JSON.parse(phoneData),
        {
          ...req.body
        }
      ];
      console.log(newPhones);

      fs.writeFile('./phones.json', JSON.stringify(newPhones), () => {
        return res.status(201).json(newPhones);
      });
    });
  });

  router.delete("/:phoneId",(req,res)=>{
    if(phones.find(phone=> {return phone.id === req.params.phoneId}
    )){ 
      let index = phones.findIndex(item=> item.id === req.params.phoneId)
      phones.splice(index,1)
      res.status(200).send({...phones})
    }else{res.status(400).send("Cant Find")}
  });


module.exports = router;