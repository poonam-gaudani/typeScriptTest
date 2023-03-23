import { Schema, Document, model } from "mongoose";

export interface IUser {
    name: string;
    mobile_no: string;
    password: string
};

interface IUserModel extends IUser, Document{};

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});

// const user = model('users', userSchema);
// export { user };

export default model<IUserModel>("users", userSchema);