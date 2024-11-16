import mongoose from 'mongoose'

const Konobar = new mongoose.Schema(
    {
        
        
        korisnickoIme: {
            type: String
        },
        lozinka: {
            type: String
        },
        bezbedonosnoPitanje: {
            type: String
        },
        odgovor: {
            type: String
        },
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        pol: {
            type: String
        },
        adresa: {
            type: String
        },
        kontaktTelefon: {
            type: String
        },
        email: {
            type: String
        },
        profilnaSlika: {
            type: String
        },
        brojKreditneKartice:{
            type: String
        },
        aktivan:{
            type: Number
        },
        restoran:{
            type: String
        }


    }
);

export default mongoose.model('Konobar',Konobar,'konobari');