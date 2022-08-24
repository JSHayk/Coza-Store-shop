import Slider from "../../components/header/slider/Slider";
import Layout from "../../components/layout/Layout";
import ProductCategory from "../../components/productCategory/ProductCategory";
import { productCategoryData, productData } from "../../data/productData";
import Product from "../../components/product/Product";

const HomePage = () => {
    return (
        <Layout>
            <main className="page-main">
                <Slider/>
                <div className="page-main-wrapper">
                    <ProductCategory productCategoryData={ productCategoryData } />
                    <Product productData={ productData } productTitle="PRODUCT OVERVIEW" />
                </div>
            </main>
        </Layout>
    )
}

export default HomePage;