import express from 'express';
import { Socks } from '../../../db/models';
import authCheck from '../../middlewares/authCheck';


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
  router.post('/custom', async (req, res) => {
    try {
      const { design, img, color } = req.body;
      console.log(req.body);
      // Проверяем наличие необходимых данных
      if (!design || !img || !color) {
        return res.status(400).json({ message: 'Недостаточно данных для создания объекта' });
      }
  
      const newSocks = await Socks.create({ design, img, color });
      return res.json(newSocks);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  });

  router.get('/basket', async(req,res)=>{
    const sock = await Socks.findAll({where:{id:req.session?.user.id}
      })
 res.json(sock);  
  })



export default router;

