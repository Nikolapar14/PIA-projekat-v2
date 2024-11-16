import express from 'express'

import { DostavaController } from '../controllers/dostava.controller'



const dostavaRouter = express.Router()

dostavaRouter.route('/dohvatiDostave').get(
    (req,res) => new DostavaController().dohvatiDostave(req,res)
)

dostavaRouter.route('/dodajDostavu').post(
    (req,res) => new DostavaController().dodajDostavu(req,res)
)

dostavaRouter.route('/azuriraj').post(
    (req,res) => new DostavaController().azuriraj(req,res)
)





export default dostavaRouter