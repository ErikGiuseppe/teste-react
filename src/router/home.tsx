import Headers from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import GridHome from "../components/GridHome.tsx"
import ImageAboutUs from "../components/ImageAboutUs.tsx"
import TextBox from "../components/TextBox.tsx"
import FabCellPhone from "../components/FabCellPhone.tsx"
const Home = () => {


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }} >
            <main style={{ flex: 1 }}>
                <Headers />
                <ImageAboutUs />
                <TextBox
                    title='Conquiste Seus Objetivos com Nossos Produtos: '
                    text='Descubra como é fácil conquistar seus objetivos com nossos consórcios de automóveis, imóveis, caminhões e serviços!'

                />
                <GridHome />
                <FabCellPhone />
            </main>
            <Footer />

        </div>
    )
}
export default Home
