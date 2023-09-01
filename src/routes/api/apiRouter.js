import express from 'express';
import { rmSync } from 'fs';
import {Socks} from '../../../db/models'

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

  router.get('/basket', async(req,res)=>{
    const sock = await Socks.findAll({where:{id:req.session?.user.id}
      })
 res.json(sock);  
  })



export default router;

