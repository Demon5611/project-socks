import express from 'express';
import { Map } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
const point = await Map.findOne({where: {id: 1}});
console.log(point, '<<<---------------');
  const initState = {point};
  res.render('Layout' initState);
});

router.get('/basket', (req, res) => {
  res.render('Layout' );
})

router.get('/favorite', (req, res) => {
  res.render('Layout' );
})

export default router;
