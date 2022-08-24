import blogImage1 from '../assets/blog/big-image-1.webp'
import blogImage2 from '../assets/blog/big-image-2.webp'
import blogImage3 from '../assets/blog/big-image-3.webp'

//small pics
import blogSmallImage1 from '../assets/blog/small-image-1.webp'
import blogSmallImage2 from '../assets/blog/small-image-2.webp'
import blogSmallImage3 from '../assets/blog/small-image-3.webp'

export const blogData = [
        {
            id:1,
            date:{
                day:22,
                month:"Jan",
                year:2018
            },
            image:{ 
                src:blogImage1,
                alt:"Winter-Dress"
            },
            title:"8 Inspiring Ways to Wear Dresses in the Winter",
            description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
        },
        {
            id:2,
            date:{
                day:18,
                month:"Jan",
                year:2018
            },
            image:{ 
                src:blogImage2,
                alt:"Holiday-gifts"
            },
            title:"The Great Big List of Men’s Gifts for the Holidays",
            description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
        },
        {
            id:3,
            date:{
                day:16,
                month:"Jan",
                year:2018
            },
            image:{ 
                src:blogImage3,
                alt:"Winter-fashion-girl"
            },
            title:"5 Winter-to-Spring Fashion Trends to Try Now",
            description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"
        }
]

export const blogDataFeatured = [
    {
        id:1,
        image:{
            src:blogSmallImage1,
            alt:"White-Shirt"
        },
        description:"White Shirt With Pleat Detail Back",
        price:"$19.00"
    },
    {
        id:2,
        image:{
            src:blogSmallImage2,
            alt:"Black-Canvas"
        },
        description:"Converse All Star Hi Black Canvas",
        price:"$39.00"
    }
    ,
    {
        id:3,
        image:{
            src:blogSmallImage3,
            alt:"Nixon-Porter"
        },
        description:"Nixon Porter Leather Watch In Tan",
        price:"$17.00"
    }
]