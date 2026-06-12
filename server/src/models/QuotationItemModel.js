import mongoose, { Schema } from "mongoose";

const quotationItemSchema = new Schema({
    quotation: {
        type: Schema.Types.ObjectId,
        ref: 'Quotation',
        required: [true, 'Quotation reference is required'],
    },
    title: {
        type: String,
        required: [true, 'Item title is required'],
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        default: '',
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [1, 'Quantity must be at least 1'],
        default: 1,
    },
    unit_price: {
        type: Number,
        default: null,
        min: 0,
    },
    total: {
        type: Number,
        default: 0,
        min: 0,
    },
}, { timestamps: true });

export default mongoose.model('QuotationItem', quotationItemSchema);