import { Schema, model } from 'mongoose';

export interface IUser {
    name:string;
    email:string;
    password: string;
}

export const UserSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export const UserModel = model<IUser>('User', UserSchema);
