import express from 'express'
import { KonobarController } from '../controllers/konobar.controller'



const konobarRouter = express.Router()

konobarRouter.route('/nadjiKonobaraUsername').post(
    (req,res) => new KonobarController().nadjiKonobaraUsername(req,res)
)

konobarRouter.route('/nadjiKonobaraEmail').post(
    (req,res) => new KonobarController().nadjiKonobaraEmail(req,res)
)


konobarRouter.route('/login').post(
    (req,res) => new KonobarController().login(req,res)
)

konobarRouter.route('/promenaLozinke').post(
    (req,res) => new KonobarController().promenaLozinke(req,res)
)

konobarRouter.route('/azurirajKonobara').post(
    (req,res) => new KonobarController().azurirajKonobar(req,res)
)

konobarRouter.route('/dohvatiKonobare').get(
    (req,res) => new KonobarController().dohvatiKonobare(req,res)
)

konobarRouter.route('/registracijaKonobra').post(
    (req,res) => new KonobarController().registracijaKonobra(req,res)
)

export default konobarRouter