import mongoose from 'mongoose'

const Rezervacija = new mongoose.Schema(
    {
        
        
        restoran: {
            type: String
        },
        korisnickoIme: {
            type: String
        },
        rezervacijaOd: {
            type: String
        },
        rezervacijaDo: {
            type: String
        },
        brojMesta: {
            type: Number
        },
        sto: {
            type: Number
        },
        status: {
            type: Number
        },
        zaduzenKonobar: {
            type: String
        },
        opisOdgovor: {
            type: String
        },
        gotov: {
            type: Number
        },
        potvrda:{
            type:Number
        }


    }
);

export default mongoose.model('Rezervacija',Rezervacija,'rezervacije');