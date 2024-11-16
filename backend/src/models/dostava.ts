import mongoose from 'mongoose'

const Dostava = new mongoose.Schema(
    {
        
        
        korisnickoIme: {
            type: String
        },
        restoran: {
            type: String
        },
        status: {
            type: Number
        },
        ocekivanoVreme: {
            type: String
        },
        porudzbina: {
            type: String
        },
        sto: {
            type: Number
        }


    }
);

export default mongoose.model('Dostava',Dostava,'dostave');