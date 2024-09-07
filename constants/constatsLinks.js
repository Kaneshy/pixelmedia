import { GrMultiple } from "react-icons/gr";
import { FaImage } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";



export const constatsLinks = [
    {
        link: 'https://sflix.to/tv/free-we-bare-bears-hd-38148',
        imgUrl: 'https://res.cloudinary.com/dztz492su/image/upload/v1725580227/Screenshot_2024-09-05_185015_rgpoww.jpg',
        title: 'We Bare Bears',
        episode: 2,
        season: 1
    },
    {
        link: 'https://sflix.to/tv/free-futurama-hd-39387',
        imgUrl: 'https://res.cloudinary.com/dztz492su/image/upload/v1725580468/Screenshot_2024-09-05_185418_faphsy.jpg',
        title: 'FUTURAMA',
        episode: 12,
        season: 4
    },
    {
        link: 'https://sflix.to/tv/free-family-guy-hd-39549',
        imgUrl: 'https://res.cloudinary.com/dztz492su/image/upload/v1725580677/Screenshot_2024-09-05_185716_mxavh1.jpg',
        title: 'FAMILY GUY',
        episode: 23,
        season: 2
    },
    {
        link: 'https://sflix.to/tv/free-planet-earth-ii-hd-38958',
        imgUrl: 'https://res.cloudinary.com/dztz492su/image/upload/v1725581318/Screenshot_2024-09-05_190822_gknjh3.jpg',
        title: 'Planet Earth II',
        episode: 2,
        season: 1
    },
    {
        link: 'https://sflix.to/tv/free-house-of-the-dragon-hd-84837',
        imgUrl: 'https://res.cloudinary.com/dztz492su/image/upload/v1725584593/Screenshot_2024-09-05_200040_krmop6.jpg',
        title: 'House of the Dragon',
        episode: 2,
        season: 1
    },
    
];


export const constatsLinksB = [
    {
        link: 'https://peliculasflix.co/',
        imgUrl: 'https://res.cloudinary.com/dztz492su/image/upload/v1725560861/Screenshot_2024-09-05_132616_uggent.jpg',
        title: 'PELICULASFLIX',
        desc: 'Movies / Latino - spanish subtitles ',
    },
    {
        link: 'https://sflix.to/',
        imgUrl: 'https://res.cloudinary.com/dztz492su/image/upload/v1725579885/Screenshot_2024-09-05_184400_oaxa3e.jpg',
        title: 'SFLIX',
        desc: 'Movies TV Shows - english subtitles',
    }
];




export const bottonBarC = [
    {
        name: 'Pictures',
        route: '/categorieVideo/All',
        logo: <FaVideo size={24} />
    },
    {
        name: 'Videos',
        route: '/categorie/All',
        logo: <FaImage size={24} />
    }

]
