import mongoose from 'mongoose';

const WebsitesSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    desc: {
        type: String
    },
    imgurl: {
        type: String
    },
    link: {
        type: String
    }
    
}, { timestamps: true });

// Check if the model is already defined to avoid re-defining it
const Websites = mongoose.models && mongoose.models.Websites
    ? mongoose.models.Websites
    : mongoose.model('Websites', WebsitesSchema);

export default Websites;