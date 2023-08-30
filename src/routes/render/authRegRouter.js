import express from 'express';

const render = express.Router();

render.get('/reg', (req, res) => {
    res.render('Layout')
})

render.get('/auth', (req, res) => {
    res.render('Layout')
})

export default render