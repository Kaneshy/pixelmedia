import mongoose from 'mongoose';

const TagsSchema = new mongoose.Schema({
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
    },
    linkb: {
        type: String
    },
    linkc: {
        type: String
    },
    episode: {
        type: Number
    },
    season: {
        type: Number
    },
    rating: {
        type: Number
    },
    options: {
        type: String
    }
    
}, { timestamps: true });

// Check if the model is already defined to avoid re-defining it
const Tags = mongoose.models && mongoose.models.Tags
    ? mongoose.models.Tags
    : mongoose.model('Tags', TagsSchema);

export default Tags;