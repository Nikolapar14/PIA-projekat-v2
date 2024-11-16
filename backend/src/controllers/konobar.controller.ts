import express from 'express'
import Konobar from '../models/konobar'


export class KonobarController{

    
    nadjiKonobaraUsername = (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        
        Konobar.findOne({"korisnickoIme": username 
            }).then((user)=>{
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    nadjiKonobaraEmail= (req: express.Request, res: express.Response) =>{
        let email = req.body.email
        
        Konobar.findOne({"email": email
            }).then((user)=>{
                
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    login= (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        let password = req.body.password
        
        Konobar.findOne({"korisnickoIme": username,"lozinka": password
            }).then((user)=>{
                
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    promenaLozinke = (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        let staraLozinka = req.body.staraLozinka
        let novaLozinka = req.body.novaLozinka
        
        Konobar.findOneAndUpdate({"korisnickoIme": username, "lozinka": staraLozinka 
            },{$set: {"lozinka": novaLozinka}}).then((user)=>{
                
                if(user != null){
                    res.json({"msg": "Prosao"})
                }
                
                
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    azurirajKonobar = (req: express.Request, res: express.Response) =>{
        
        let konobar = req.body.konobar
        
        Konobar.findOneAndUpdate({ "korisnickoIme": konobar.korisnickoIme
            },{$set: {"ime": konobar.ime, "prezime": konobar.prezime, "adresa": konobar.adresa, "email": konobar.email, "kontaktTelefon": konobar.kontaktTelefon, "brojKreditneKartice" : konobar.brojKreditneKartice, "profilnaSlika": konobar.profilnaSlika}}).then((ucenici)=>{
                res.json({"msg": "ok"})
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    dohvatiKonobare = (req: express.Request, res: express.Response) =>{
        
        
        Konobar.find({
            }).then((konobari)=>{
                res.json(konobari)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    registracijaKonobra = (req: express.Request, res: express.Response)=>{
        
        let konobar = req.body.konobar

        

        new Konobar(konobar).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err =>{
            console.log(err)
        })

    }


    


}