import mongoose from 'mongoose'

const Restoran = new mongoose.Schema(
    {
        
        
        naziv: {
            type: String
        },
        tip: {
            type: String
        },
        adresa: {
            type: String
        },
        opis: {
            type: String
        },
        kontaktTelefon: {
            type: String
        },
        radnoVremeOdRD: {
            type: String
        },
        radnoVremeDoRD: {
            type: String
        },
        radnoVremeOdVikend: {
            type: String
        },
        radnoVremeDoVikend: {
            type: String
        },
        profilnaSlika: {
            type: String
        },
        brojStolova: {
            type: Number
        },
        brojKupatila:{
            type: Number
        },
        brojKuhinja:{
            type: Number
        },
        stolovi:{
            type: Array
        },
        jelovnik:{
            type: Array
        },
        konobari:{
            type: Array
        }


    }
);

export default mongoose.model('Restoran',Restoran,'restorani');