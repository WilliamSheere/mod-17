import { Schema, Types, model, type Document } from "mongoose";

interface IThought extends Document {
    thoughtText: string,
    createdAt: Schema.Types.Date,
    username: string,
    reactions: [typeof reactionsSchema]
}
interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId,
    reactionBody: string,
    username: string,
    createdAt: Schema.Types.Date
}
const reactionsSchema = new Schema<IReaction>({
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

}

)

const thoughtSchema = new Schema<IThought>(
    {
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

    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true,
    }
);

const Thought = model<IThought>("Thought", thoughtSchema);

export default Thought;
