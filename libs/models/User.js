import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
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
    tags: {
        type: [String],
        default: []
    }
}, { timestamps: true });

const Users = mongoose.models && mongoose.models.Users
    ? mongoose.models.Users
    : mongoose.model('Users', UsersSchema);

export default Users;