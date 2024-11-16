import express from 'express'
import Restoran from "../models/restoran";
import Rezervacija from "../models/rezervacija"


export class RezervacijaController{

    dohvatiRezervacije = (req: express.Request, res: express.Response) =>{
        
        
        Rezervacija.find({
            }).then((rezervacije)=>{
                res.json(rezervacije)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    dodajRezervaciju = (req: express.Request, res: express.Response)=>{
        
        let rezervacija = req.body.rezervacija
        
        new Rezervacija(rezervacija).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err =>{
            console.log(err)
        })

    }

    azurirajRezervaciju = (req: express.Request, res: express.Response) =>{
        
        let rezervacija = req.body.rezervacija
        
        Rezervacija.findOneAndUpdate({ "korisnickoIme": rezervacija.korisnickoIme, "restoran" : rezervacija.restoran, "rezervacijaOd" : rezervacija.rezervacijaOd
            },{$set: {"zaduzenKonobar": rezervacija.zaduzenKonobar, "sto": rezervacija.sto, "status": rezervacija.status, "opisOdgovor": rezervacija.opisOdgovor, "potvrda":rezervacija.potvrda}}).then((ucenici)=>{
                res.json({"msg": "ok"})
                
            }).catch((err)=>{
                console.log(err)
            })

    }


    

    

}