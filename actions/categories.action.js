'use server'
import cloudinary from 'cloudinary'
import Users from "@/libs/models/User";
import Tags from "@/libs/models/Tag";
import { connectToDB } from "@/libs/mongoose";
import Websites from '@/libs/models/Website';



export const addnewcinema = async (formData) => {
    const title = formData.get('title');
    const desc = formData.get('desc');
    const image = formData.get('image');
    const link = formData.get('link');
    const linkb = formData.get('linkb');
    const linkc = formData.get('linkc');
    const season = formData.get('season');
    const episode = formData.get('episode');
    const rating = formData.get('rating');
    const options = formData.get('options')
    console.log(2, 'running addnewcinema', title)
    let uploadedImageUrl = null;

    await connectToDB(); // Ensure database connection

    if (image) {
        try {
            // Wait for the image to be uploaded to Cloudinary
            const imageUploadResponse = await uploadImageToCloudinary(image);
            if (imageUploadResponse) {
                try {
                    // After successful image upload, create the user in MongoDB
                    const newUser = await Tags.create({
                        title: title,
                        desc: desc,
                        imgurl: imageUploadResponse, // Save the Cloudinary image URL
                        link: link, // Save the link
                        linkb: linkb, // Save the link
                        linkc: linkc, // Save the link
                        season: season, // Save the link
                        episode: episode, // Save the link
                        rating: rating, // Save the link
                        options: options,
                    });

                    console.log('New user created:', newUser);

                    return true; // Return the newly created user
                } catch (err) {
                    console.log('Error creating user:', err.message);
                    return null; // Handle the error accordingly
                }
            }


        } catch (err) {
            console.log('Error uploading image to Cloudinary:', err.message);
            return null; // Handle image upload failure accordingly
        }
    }

    console.log('Form data:', title, desc);


};


export const addnewcategories = async (formData) => {
    const title = formData.get('title');
    const desc = formData.get('desc');
    const image = formData.get('image');
    const link = formData.get('link');

    let uploadedImageUrl = null;

    await connectToDB(); // Ensure database connection

    if (image) {
        try {
            // Wait for the image to be uploaded to Cloudinary
            const imageUploadResponse = await uploadImageToCloudinary(image);
            if (imageUploadResponse) {
                try {
                    // After successful image upload, create the user in MongoDB
                    const newUser = await Users.create({
                        title: title,
                        desc: desc,
                        imgurl: imageUploadResponse, // Save the Cloudinary image URL
                        link: link, // Save the link
                    });

                    console.log('New user created:', newUser);

                    return true; // Return the newly created user
                } catch (err) {
                    console.log('Error creating user:', err.message);
                    return null; // Handle the error accordingly
                }
            }


        } catch (err) {
            console.log('Error uploading image to Cloudinary:', err.message);
            return null; // Handle image upload failure accordingly
        }
    }

    console.log('Form data:', title, desc);


};


export const createMessage = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 250));

    const image = formData.get('image');

    let uploadedImageUrl = null;

    if (image) {
        // Convert image to base64 or stream format
        const imageUploadResponse = await uploadImageToCloudinary(image);
        uploadedImageUrl = imageUploadResponse.secure_url;
        console.log('Uploaded Image URL:', imageUploadResponse);
    }
};


const uploadImageToCloudinary = async (imageFile) => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true,
    });

    try {
        // Convert the file to a buffer
        const buffer = await imageFile.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');
        const imageDataUri = `data:${imageFile.type};base64,${base64Image}`;

        const resultUnsigned = await cloudinary.v2.uploader.unsigned_upload(imageDataUri, "books_preset", {
            folder: "tvshows", // Optional: specify a folder in Cloudinary
            asset_folder: "tvshows", // Optional: specify a folder in Cloudinary"

        })

        return resultUnsigned.secure_url; // This will contain the secure_url among other data
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
};


export const addnewWebsite = async (formData) => {
    const title = formData.get('title');
    const desc = formData.get('desc');
    const image = formData.get('image');
    const link = formData.get('link');

    let uploadedImageUrl = null;

    await connectToDB(); // Ensure database connection

    if (image) {
        try {
            // Wait for the image to be uploaded to Cloudinary
            const imageUploadResponse = await uploadImageToCloudinary(image);
            if (imageUploadResponse) {
                try {
                    // After successful image upload, create the user in MongoDB
                    const newWebsite = await Websites.create({
                        title: title,
                        desc: desc,
                        imgurl: imageUploadResponse, // Save the Cloudinary image URL
                        link: link, // Save the link
                    });

                    console.log('New user created:', newWebsite);

                    return true; // Return the newly created user
                } catch (err) {
                    console.log('Error creating user:', err.message);
                    return null; // Handle the error accordingly
                }
            }


        } catch (err) {
            console.log('Error uploading image to Cloudinary:', err.message);
            return null; // Handle image upload failure accordingly
        }
    }

    console.log('Form data:', title, desc);


};


