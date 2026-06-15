import mongoose, { Schema } from "mongoose";

const aiLogSchema = new Schema(
    {
        quotation: {
            type: Schema.Types.ObjectId,
            ref: 'Quotation',
            default: null, // optional — log exists even before quotation is saved
        },
        requirement: {
            type: String,
            required: [true, 'Requirement is required'],
            trim: true,
        },
        prompt: {
            type: String,
            required: [true, 'Prompt is required'],
        },
        raw_response: {
            type: String,
            required: [true, 'Raw response is required'],
        },
        project_type: {
            type: String,
            trim: true,
            default: '',
        },
        items_count: {
            type: Number,
            default: 0, // how many items AI suggested
        },
        success: {
            type: Boolean,
            default: true, // false if AI failed or returned invalid response
        },
        error_message: {
            type: String,
            default: null, // stores error details if success is false
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: null,
        },
    },
    { timestamps: true }
);

export default mongoose.model('AILog', aiLogSchema);