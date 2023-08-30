import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout', );
});

router.get('/basket', (req, res) => {
  res.render('Layout' );
})

router.get('/favorite', (req, res) => {
  res.render('Layout' );
})

export default router;
