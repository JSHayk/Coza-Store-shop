import Layout from "../../components/layout/Layout"
import Product from "../../components/product/Product"
import { productData } from "../../data/productData"
import { createContext } from "react"

const ShopPage = () => {
  return (
    <Layout>
      <main className="page-main">
        <div className="page-main-wrapper">
          <Product productData={ productData } distanceStyle={{marginTop: "10%"}} />
        </div>
      </main>
    </Layout>
    )
}

export default ShopPage