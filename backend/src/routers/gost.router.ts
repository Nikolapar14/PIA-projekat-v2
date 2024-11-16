import express from 'express'
import { GostController } from '../controllers/gost.controller'


const gostRouter = express.Router()

gostRouter.route('/nadjiGostaUsername').post(
    (req,res) => new GostController().nadjiGostaUsername(req,res)
)

gostRouter.route('/nadjiGostaEmail').post(
    (req,res) => new GostController().nadjiGostaEmail(req,res)
)

gostRouter.route('/register').post(
    (req,res) => new GostController().register(req,res)
)

gostRouter.route('/login').post(
    (req,res) => new GostController().login(req,res)
)

gostRouter.route('/loginAdmin').post(
    (req,res) => new GostController().loginAdmin(req,res)
)

gostRouter.route('/promenaLozinke').post(
    (req,res) => new GostController().promenaLozinke(req,res)
)

gostRouter.route('/azurirajGosta').post(
    (req,res) => new GostController().azurirajGosta(req,res)
)

gostRouter.route('/dohvatiGoste').get(
    (req,res) => new GostController().dohvatiGoste(req,res)
)

gostRouter.route('/aktivirajGosta').post(
    (req,res) => new GostController().aktivirajGosta(req,res)
)

gostRouter.route('/deaktivirajGosta').post(
    (req,res) => new GostController().deaktivirajGosta(req,res)
)

export default gostRouter