const express = require('express');
const router = express.Router();
const phones = require('./phones.json');
const accessories = require('./accessories.json');

router.get('/', (req, res) => {
    res.status(200).json(phones);
  });

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

module.exports = router;