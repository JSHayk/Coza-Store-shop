// Import Category Images.
import WomenImage from "../assets/category/women.jpg"
import MenImage from "../assets/category/man.jpg"
import AccessoriesImage from "../assets/category/accessories.jpg"
// Import Product Images.
import ProductImage1 from "../assets/product/items/product-1.jpg"
import ProductImage2 from "../assets/product/items/product-2.jpg"
import ProductImage3 from "../assets/product/items/product-3.jpg"
import ProductImage4 from "../assets/product/items/product-4.jpg"
import ProductImage5 from "../assets/product/items/product-5.jpg"
import ProductImage6 from "../assets/product/items/product-6.jpg"
import ProductImage7 from "../assets/product/items/product-7.jpg"
import ProductImage8 from "../assets/product/items/product-8.jpg"
import ProductImage9 from "../assets/product/items/product-9.jpg"
import ProductImage10 from "../assets/product/items/product-10.jpg"
import ProductImage11 from "../assets/product/items/product-11.jpg"
import ProductImage12 from "../assets/product/items/product-12.jpg"
import ProductImage13 from "../assets/product/items/product-13.jpg"
import ProductImage14 from "../assets/product/items/product-14.jpg"
import ProductImage15 from "../assets/product/items/product-15.jpg"
import ProductImage16 from "../assets/product/items/product-16.jpg"
// Modal Images.
import ProductModal1 from "../assets/product/modal/modal-1.webp"
import ProductModal2 from "../assets/product/modal/modal-2.webp"
import ProductModal3 from "../assets/product/modal/modal-3.webp"



export const productCategoryData = [
    {
        id: 1,
        type: "Women",
        info: "Spring 2018",
        image: {
            src: WomenImage,
            alt: "Women-Image"
        }
    },
    {
        id: 2,
        type: "Men",
        info: "Spring 2018",
        image: {
            src: MenImage,
            alt: "Women-Image"
        }
    },
    {
        id: 3,
        type: "Accessories",
        info: "New Trend",
        image: {
            src: AccessoriesImage,
            alt: "Accessories-Image"
        }
    }
]

export const productData = {
    types: [
        {
            text: "All Products",
            isActive: true,
            id: 1
        }, 
        {
            text: "Women",
            isActive: false,
            id: 2
        }, 
        {
            text: "Men",
            isActive: false,
            id: 3
        },
        {
            text: "Bag",
            isActive: false,
            id: 4
        },
        {
            text: "Shoes",
            isActive: false,
            id: 5
        }, 
        {
            text: "Watches",
            isActive: false,
            id: 6
        }
    ],
    items: [
        {
            id: 1,
            type: "women",
            price: "$16.64",
            isLiked: false,
            modelName: "Esprit Ruffle Shirt",
            image: {
                src: ProductImage1,
                alt: "Girl Shirt"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 2,
            type: "women",
            price: "$35.31",
            isLiked: false,
            modelName: "Herschel supply",
            image: {
                src: ProductImage2,
                alt: "Girl Supply"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 3,
            type: "men",
            price: "$25.50",
            isLiked: false,
            modelName: "Only Check Trouser",
            image: {
                src: ProductImage3,
                alt: "Men Trouser"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 4,
            type: "women",
            price: "$75.00",
            isLiked: true,
            modelName: "Classic Trench Coat",
            image: {
                src: ProductImage4,
                alt: "Women Coat"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 5,
            type: "women",
            price: "$34.75",
            isLiked: false,
            modelName: "Front Pocket Jumper",
            image: {
                src: ProductImage5,
                alt: "Women Jumper"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 6,
            type: "watches",
            price: "$93.20",
            isLiked: false,
            modelName: "Vintage Inspired Classic",
            image: {
                src: ProductImage6,
                alt: "Watch"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 7,
            type: "women",
            price: "$52.66",
            isLiked: false,
            modelName: "Shirt in Stretch Cotton",
            image: {
                src: ProductImage7,
                alt: "Shirt"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 8,
            type: "women",
            price: "$18.96",
            isLiked: false,
            modelName: "Pieces Metallic Printed",
            image: {
                src: ProductImage8,
                alt: "Shirt"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 9,
            type: "shoes",
            price: "$75.00",
            isLiked: false,
            modelName: "Converse All Star Hi Plimsolls",
            image: {
                src: ProductImage9,
                alt: "Shoes"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 10,
            type: "women",
            price: "$25.85",
            isLiked: false,
            modelName: "Femme T-Shirt In Stripe",
            image: {
                src: ProductImage10,
                alt: "Shirt Women"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 11,
            type: "men",
            price: "$63.16",
            isLiked: false,
            modelName: "Herschel supply",
            image: {
                src: ProductImage11,
                alt: "Supply"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 12,
            type: "belt",
            price: "$63.15",
            isLiked: false,
            modelName: "Herschel supply",
            image: {
                src: ProductImage12,
                alt: "Belt"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 13,
            type: "women",
            price: "$18.49",
            isLiked: false,
            modelName: "T-Shirt with Sleeve",
            image: {
                src: ProductImage13,
                alt: "Shirt"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 14,
            type: "women",
            price: "$54.79",
            isLiked: false,
            modelName: "Pretty Little Thing",
            image: {
                src: ProductImage14,
                alt: "Shirt"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 15,
            type: "watches",
            price: "$86.85",
            isLiked: false,
            modelName: "Mini Silver Mesh Watch",
            image: {
                src: ProductImage15,
                alt: "Watch"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        },
        {
            id: 16,
            type: "women",
            price: "$29.64",
            isLiked: false,
            modelName: "Square Neck Back",
            image: {
                src: ProductImage16,
                alt: "Neck Back"
            },
            modal: {
                image1: ProductModal1,
                image2: ProductModal2,
                image3: ProductModal3   
            }
        }
    ]
}