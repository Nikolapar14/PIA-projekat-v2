import express from 'express'
import Restoran from "../models/restoran";


export class RestoranController{

    dohvatiRestorane = (req: express.Request, res: express.Response) =>{
        
        
        Restoran.find({
            }).then((restorani)=>{
                res.json(restorani)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    dodajRestoran = (req: express.Request, res: express.Response)=>{
        
        let restoran = req.body.restoran
        
        new Restoran(restoran).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err =>{
            console.log(err)
        })

    }

    dodajRadnoVreme = (req: express.Request, res: express.Response) =>{
        
        let nazivRestorana = req.body.nazivRestorana
        let novoRadnoVremeOd = req.body.novoRadnoVremeOd
        let novoRadnoVremeDo = req.body.novoRadnoVremeDo
        let novoRadnoVremeOdVikend = req.body.novoRadnoVremeOdVikend
        let novoRadnoVremeDoVikend = req.body.novoRadnoVremeDoVikend
        
        Restoran.findOneAndUpdate({ "naziv": nazivRestorana
            },{$set: {"radnoVremeOdRD": novoRadnoVremeOd , "radnoVremeDoRD": novoRadnoVremeDo, "radnoVremeOdVikend": novoRadnoVremeOdVikend, "radnoVremeDoVikend": novoRadnoVremeDoVikend}}).then((x)=>{
                res.json({"msg": "ok"})
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    dodajKonobaraZaRestoran = (req: express.Request, res: express.Response)=>{

        let nazivRestorana = req.body.nazivRestorana
        let imePrezime = req.body.imePrezime
        
        Restoran.findOneAndUpdate({ "naziv": nazivRestorana
            },{$push:{"konobari": imePrezime}}).then((zahtevi)=>{
                res.json({"msg": "ok"})
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    

}