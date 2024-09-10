'use server'
import { NextResponse } from "next/server"
import Users from "@/libs/models/User";
import Tags from "@/libs/models/Tag";
import { connectToDB } from "@/libs/mongoose";
import Websites from "@/libs/models/Website";

// export const AddTagsMB = async ({ tagsArr }) => {
//     console.log('running add tag')
//     console.log(tagsArr)
//     connectToDB();

//     try {
//         const newTag = new Users({ tags: tagsArr })

//         const savedTag = await newTag.save();
//         console.log('hhh', savedTag)
//         // return NextResponse.json(savedTag)

//     } catch (err) {
//         console.log(err.message)
//         return NextResponse.json('error api/user', err.message)
//     }
// };

// export const AddTagsMB = async ({ tagsArr }) => {
//     console.log('Running add tags');
//     console.log('Tags Array:', tagsArr);

//     await connectToDB();

//     try {
//         // Fetch existing tags
//         const existingTags = await Users.find({ tags: { $in: tagsArr } }).distinct('tags');

//         // Filter out existing tags from the input array
//         const newTags = tagsArr.filter(tag => !existingTags.includes(tag));

//         // Only proceed if there are new tags to add
//         if (newTags.length > 0) {
//             const newTagEntry = new Users({ tags: newTags });
//             const savedTag = await newTagEntry.save();
//             console.log('Saved Tags:', savedTag);
//             // return savedTag; // Return the saved tags if needed
//         } else {
//             console.log('No new tags to add.');
//             return null; // Or return an appropriate response
//         }

//     } catch (err) {
//         console.log('Error:', err.message);
//         return null; // Handle the error accordingly, e.g., return an error response
//     }
// };

export const EditCinema = async (preValue) => {
    console.log(preValue)

    console.log('gettags',)

    await connectToDB();

    try {
        console.log('runinng get')
        const tag = await Tags.findByIdAndUpdate(preValue._id, preValue);
        console.log('user', tag)
        return true
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }

}



export const editEpisodeNumber = async (id, epi, sea) => {
    console.log('gettags',)

    await connectToDB();

    try {
        console.log('runinng get')
        const tag = await Tags.findByIdAndUpdate(id, {
            episode: epi,
            season: sea
        });
        console.log('user', tag)

        return true
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
}

export const Fetchcategories = async () => {

    console.log('gettags',)

    await connectToDB();

    try {
        console.log('runinng get')
        const user = await Users.find().sort({ title: 1 });
        return user
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};

export const FetchWebsites = async () => {

    console.log('gettags',)

    await connectToDB();

    try {
        console.log('runinng get')
        const websites = await Websites.find().sort({ title: 1 });
        return websites
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};



export const Fetchcinema = async () => {

    await connectToDB();

    try {
        console.log('runinng get')
        const res = await Tags.find().sort({ createdAt: -1 });
        return res
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};

export const Fetchmovie = async () => {

    await connectToDB();

    try {
        console.log('runinng get')
        const res = await Tags.find({
            options: 'movie'
        }).sort({ title: 1 });
        return res
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};

export const DeleteAction = async (id) => {
    await connectToDB();

    try {
        console.log('runinng get')
        const res = await Tags.findByIdAndDelete(id);
        return true
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
}

export const deleteCategorie = async (id) => {
    await connectToDB();

    try {
        console.log('runinng get')
        const res = await Users.findByIdAndDelete(id);
        return true
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
}

export const deleteWebsite = async (id) => {
    await connectToDB();

    try {
        console.log('runinng get')
        const res = await Websites.findByIdAndDelete(id);
        return true
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
}



export const Fetchserie = async () => {

    await connectToDB();

    try {
        console.log('runinng get')
        const res = await Tags.find({
            options: 'serie'
        }).sort({ title: 1 });

        return res
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};

export const FetchAnimes = async () => {

    await connectToDB();

    try {
        console.log('runinng get')
        const res = await Tags.find({
            options: 'anime'
        }).sort({ title: 1 });

        return res
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};

export const AddTagsMB = async ({ tagsArr }) => {
    console.log('Running add tags if not exists');
    console.log('New Tags:', tagsArr);

    await connectToDB();

    try {
        // Find the user by ID
        const user = await Users.findById('66c67da0078ee9d7db337949');

        if (user) {
            // Filter out tags that already exist in the user's tags array
            const uniqueTags = tagsArr.filter(tag => !user.tags.includes(tag));

            if (uniqueTags.length > 0) {
                // Add the new unique tags to the existing tags array
                user.tags.push(...uniqueTags);

                // Save the updated user document
                const updatedUser = await user.save();
                console.log('Updated User:', updatedUser);
                // return updatedUser; // Return the updated document if needed
            } else {
                console.log('No new tags to add.');
                return user; // Return the original user if no new tags were added
            }
        } else {
            console.log('User not found');
            return null; // Return null or handle the case when the user is not found
        }

    } catch (err) {
        console.log('Error:', err.message);
        return null; // Handle the error accordingly, e.g., return an error response
    }
};


export const GetTagsMB = async () => {

    console.log('gettags',)

    await connectToDB();

    try {
        console.log('runinng get')
        const user = await Users.findById('66c67da0078ee9d7db337949');
        console.log('user', user.tags)

        return user.tags
    } catch (err) {
        console.log(err.message)
        return NextResponse.json('error api/tarjet', err.message)
    }
};