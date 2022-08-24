import Layout from "../../components/layout/Layout"
import BaseTitleImage from "../../components/common/baseTitleImage/BaseTitleImage"
import PageBg from "../../assets/pageBackgroundImages/contact-page.webp"
import AboutInfo from "../../components/about/aboutInfo/AboutInfo"

const AboutPage = () => {
  return (
    <Layout>
            <main className="page-main">
                <BaseTitleImage title="About" image={ PageBg } />
                <div className="page-main-wrapper">
                    <AboutInfo />
                </div>
            </main>
    </Layout>
  )
}

export default AboutPage