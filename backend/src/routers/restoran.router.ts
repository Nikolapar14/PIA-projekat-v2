import express from 'express'
import { RestoranController } from '../controllers/restoran.controller'



const restoranRouter = express.Router()

restoranRouter.route('/dohvatiRestorane').get(
    (req,res) => new RestoranController().dohvatiRestorane(req,res)
)

restoranRouter.route('/dodajRestoran').post(
    (req,res) => new RestoranController().dodajRestoran(req,res)
)

restoranRouter.route('/dodajRadnoVreme').post(
    (req,res) => new RestoranController().dodajRadnoVreme(req,res)
)

restoranRouter.route('/dodajKonobaraZaRestoran').post(
    (req,res) => new RestoranController().dodajKonobaraZaRestoran(req,res)
)



export default restoranRouter