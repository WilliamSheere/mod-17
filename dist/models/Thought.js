import { Schema, Types, model } from "mongoose";
const reactionsSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 50,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionsSchema]
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true,
});
const Thought = model("Thought", thoughtSchema);
export default Thought;
