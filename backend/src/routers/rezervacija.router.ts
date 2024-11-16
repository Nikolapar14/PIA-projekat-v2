import express from 'express'
import { RezervacijaController } from '../controllers/rezervacija.controller'



const rezervacijaRouter = express.Router()

rezervacijaRouter.route('/dohvatiRezervacije').get(
    (req,res) => new RezervacijaController().dohvatiRezervacije(req,res)
)

rezervacijaRouter.route('/dodajRezervaciju').post(
    (req,res) => new RezervacijaController().dodajRezervaciju(req,res)
)

rezervacijaRouter.route('/azurirajRezervaciju').post(
    (req,res) => new RezervacijaController().azurirajRezervaciju(req,res)
)





export default rezervacijaRouter