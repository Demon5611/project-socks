import express from 'express';

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


export default router;

