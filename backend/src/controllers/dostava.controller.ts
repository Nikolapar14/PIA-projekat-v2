import express from 'express'

import Dostava from "../models/dostava"


export class DostavaController{

    dohvatiDostave = (req: express.Request, res: express.Response) =>{
        
        
        Dostava.find({
            }).then((dostave)=>{
                res.json(dostave)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    dodajDostavu = (req: express.Request, res: express.Response)=>{
        
        let dostava = req.body.dostava
        
        new Dostava(dostava).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err =>{
            console.log(err)
        })

    }

    azuriraj = (req: express.Request, res: express.Response) =>{
        
        let dostava = req.body.dostava
        
        Dostava.findOneAndUpdate({ "korisnickoIme": dostava.korisnickoIme, "porudzbina" : dostava.porudzbina
            },{$set: {"ocekivanoVreme" : dostava.ocekivanoVreme, "status" : dostava.status}}).then((ucenici)=>{
                res.json({"msg": "ok"})
                
            }).catch((err)=>{
                console.log(err)
            })

    }



    

    

}