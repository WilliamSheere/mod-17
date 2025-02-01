import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
}, {
    toJSON: {
        getters: true,
    },
    timestamps: true,
});
const User = model('User', userSchema);
export default User;
