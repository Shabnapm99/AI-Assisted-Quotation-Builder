import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Client name is required'],
        trim: true,
    },
    company: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Client email is required'],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address'],
    },
    phone: {
        type: String,
        trim: true,
        default: '',
        required: true,
    },
    notes: {
        type: String,
        trim: true,
        default: '',
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

}, { timestamps: true })

clientSchema.index({ email: 1, createdBy: 1 }, { unique: true });

export default mongoose.model('Client', clientSchema);