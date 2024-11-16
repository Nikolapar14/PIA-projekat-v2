import mongoose from 'mongoose'

const Admin = new mongoose.Schema(
    {
        
        
        korisnickoIme: {
            type: String
        },
        lozinka: {
            type: String
        }


    }
);

export default mongoose.model('Admin',Admin,'admin');