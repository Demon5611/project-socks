import express from 'express';
const fs = require('fs/promises');
const router = express.Router();
router.get('/lol', async (req, res) => {
    try {
      const files = await fs.readdir('public/img/customImg');
      const initState = {files}
      res.render('Layout', initState)
      console.log(files);
      res.json(files);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
export default router;