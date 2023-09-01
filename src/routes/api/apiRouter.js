import express from 'express';
import {Socks} from '../../../db/models'
import { rmSync } from 'fs';
const fs = require('fs/promises');

const router = express.Router();

router.get('/img', async (req, res) => {
    try {
      const images = await fs.readdir('public/img/customImg');
      res.json(images);
      console.log(images);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
  router.get('/design', async (req, res) => {
    try {
      const files = await fs.readdir('public/img/design');
      console.log(files);
      res.json(files);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

  router.post('/', async(req,res)=>{
    // const {color,img,design} = req.body
    const socks = await Socks.create(req.body)
    console.log('socks!!!',socks);
    res.redirect('/basket')
      
  })
  // router.get('/basket', async(req,res)=>{
  //   // const {color,img,design} = req.body
  //   const socks = await Socks.findOne(where:{

  //   })

      
  // })



export default router;

