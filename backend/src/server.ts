import cors from 'cors'
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import gostRouter from './routers/gost.router';
import konobarRouter from './routers/konobar.router';
import restoranRouter from './routers/restoran.router';
import rezervacijaRouter from './routers/rezervacija.router';
import dostavaRouter from './routers/dostava.router';


const app = express();

app.use(express.json({ limit: '1000mb' }))
app.use(cors())





mongoose.connect('mongodb://127.0.0.1:27017/KutakDobreHraneDatabase')
    
const conn = mongoose.connection
conn.once('open', ()=>{
    console.log("DB ok")
})

const router = express.Router();

router.use('/gost',gostRouter);
router.use('/konobar',konobarRouter);
router.use('/restoran',restoranRouter);
router.use('/rezervacija',rezervacijaRouter);
router.use('/dostava',dostavaRouter);

app.use('/' ,router);
app.listen(4000, () => console.log(`Express server running on port 4000`));