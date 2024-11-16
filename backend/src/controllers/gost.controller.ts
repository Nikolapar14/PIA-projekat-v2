import express from 'express'
import Gost from '../models/gost'
import Admin from '../models/admin'


export class GostController{

    register = (req: express.Request, res: express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme
        let lozinka = req.body.lozinka
        let bezbedonosnoPitanje = req.body.bezbedonosnoPitanje
        let odgovor = req.body.odgovor
        let ime = req.body.ime
        let prezime = req.body.prezime
        let pol = req.body.pol
        let adresa = req.body.adresa
        let kontaktTelefon = req.body.kontaktTelefon
        let email = req.body.email
        let profilnaSlika = req.body.profilnaSlika
        let brojKreditneKartice = req.body.brojKreditneKartice
        let aktivan = req.body.aktivan

        let gost = {
            korisnickoIme: korisnickoIme,
            lozinka: lozinka,
            bezbedonosnoPitanje: bezbedonosnoPitanje,
            odgovor: odgovor,
            ime: ime,
            prezime: prezime,
            pol: pol,
            adresa: adresa,
            kontaktTelefon: kontaktTelefon,
            email: email,
            profilnaSlika: profilnaSlika,
            brojKreditneKartice: brojKreditneKartice,
            aktivan : aktivan
        }

        new Gost(gost).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err =>{
            console.log(err)
        })

    }

    
    nadjiGostaUsername = (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        
        Gost.findOne({"korisnickoIme": username 
            }).then((user)=>{
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    nadjiGostaEmail= (req: express.Request, res: express.Response) =>{
        let email = req.body.email
        
        Gost.findOne({"email": email
            }).then((user)=>{
                
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    login= (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        let password = req.body.password
        
        Gost.findOne({"korisnickoIme": username,"lozinka": password
            }).then((user)=>{
                
                res.json(user)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    loginAdmin= (req: express.Request, res: express.Response) =>{
        let username = req.body.username
        let password = req.body.password
        
        Admin.findOne({"korisnickoIme": username,"lozinka": password
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
        
        Gost.findOneAndUpdate({"korisnickoIme": username, "lozinka": staraLozinka 
            },{$set: {"lozinka": novaLozinka}}).then((user)=>{
                
                if(user != null){
                    res.json({"msg": "Prosao"})
                }
                
                
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    azurirajGosta = (req: express.Request, res: express.Response) =>{
        
        let gost = req.body.gost
        
        Gost.findOneAndUpdate({ "korisnickoIme": gost.korisnickoIme
            },{$set: {"ime": gost.ime, "prezime": gost.prezime, "adresa": gost.adresa, "email": gost.email, "kontaktTelefon": gost.kontaktTelefon, "brojKreditneKartice" : gost.brojKreditneKartice, "profilnaSlika": gost.profilnaSlika}}).then((ucenici)=>{
                res.json({"msg": "ok"})
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    dohvatiGoste = (req: express.Request, res: express.Response) =>{
        
        
        Gost.find({
            }).then((gosti)=>{
                res.json(gosti)
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    aktivirajGosta = (req: express.Request, res: express.Response) =>{
        
        let korisnickoIme = req.body.korisnickoIme
        
        Gost.findOneAndUpdate({ "korisnickoIme": korisnickoIme
            },{$set: {"aktivan": 1}}).then((ucenici)=>{
                res.json({"msg": "ok"})
                
            }).catch((err)=>{
                console.log(err)
            })

    }

    deaktivirajGosta = (req: express.Request, res: express.Response) =>{
        
        let korisnickoIme = req.body.korisnickoIme
        
        Gost.findOneAndUpdate({ "korisnickoIme": korisnickoIme
            },{$set: {"aktivan": -1}}).then((ucenici)=>{
                res.json({"msg": "ok"})
                
            }).catch((err)=>{
                console.log(err)
            })

    }


    


}