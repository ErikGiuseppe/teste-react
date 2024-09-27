import Headers from "../components/Header.tsx"
import BackgroundImageComponent from "../components/BackgroundImageComponent.tsx"
import { Box, Button, Fab } from "@mui/material"
import Footer from "../components/Footer.tsx"
import GridHome from "../components/GridHome.tsx"
const Home = () => {

    const redirect = () => {
        const url = `https://api.whatsapp.com/send?phone=5511999339150&text=Olá, gostaria de falar com um atendente.`
        window.open(url, '_blank')

    };
    return (
        <div>
            <Headers />
            <Box className="px-0 h-52  md:h-80 lg:h-96 xl:h-96 w-full" >
                <Box
                    sx={{
                        width: '100%',       // Largura 100% da viewport
                        height: '100%',      // Altura 100% da viewport
                        backgroundImage: 'url(/public/Home-Auto-Life-Insurance.jpg)', // Caminho da imagem
                        backgroundSize: 'cover',  // Faz a imagem cobrir todo o box
                        backgroundPosition: 'center', // Centraliza a imagem
                        backgroundRepeat: 'no-repeat' // Não repete a imagem
                    }}
                    className={`flex flex-col items-center  justify-center`}
                    id='imageMenu'

                >


                    <Box
                        sx={{
                            height: '100%',      // Altura 100% da viewport
                            backgroundSize: 'cover',  // Faz a imagem cobrir todo o box
                            backgroundPosition: 'center', // Centraliza a imagem
                            backgroundRepeat: 'no-repeat' // Não repete a imagem
                        }}
                        className='flex flex-col  items-center md:items-start w-screen lg:w-1/2  justify-center '

                    >
                        <h2 className='text-center   md:text-start font-mono  text-sm md:text-base lg:text-lg xl:text-2xl'>Realize Seus Sonhos com Nossos Consórcios!</h2>

                        <p className='text-center md:text-start font-mono  text-xs md:text-sm lg:text-base xl:text-xl'>Você já imaginou conquistar aquele carro novo, a casa dos seus sonhos ou até mesmo fazer uma viagem inesquecível? Com nossos consórcios, isso é possível!</p>
                        <div className="flex justify-center lg:justify-start w-full  mt-5">
                            <Button
                                onClick={redirect}
                                variant="contained"
                                size="small"
                                color='warning'
                                sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}
                            >
                                Simule Agora
                            </Button>
                        </div>

                    </Box>

                </Box>

            </Box>
            <Box className="flex px-0  items-center justify-center   w-full" >

                <Box
                    sx={{
                        height: '100%',      // Altura 100% da viewport
                        backgroundSize: 'cover',  // Faz a imagem cobrir todo o box
                        backgroundPosition: 'center', // Centraliza a imagem
                        backgroundRepeat: 'no-repeat' // Não repete a imagem
                    }}
                    className='flex flex-col  items-center md:items-start w-screen lg:w-1/2  justify-center '
                    id='produtos'

                >
                    <h2 className='text-center  md:text-start font-mono  text-sm md:text-base lg:text-lg xl:text-2xl'>Conquiste Seus Objetivos com Nossos Produtos: </h2>

                    <p className='text-center md:text-start font-mono my-3 text-xs md:text-sm lg:text-base xl:text-xl'>Descubra como é fácil conquistar seus objetivos com nossos consórcios de automóveis, imóveis, caminhões e serviços! </p>

                </Box>
            </Box>
            <GridHome />
            <Footer />
            <Fab color="success" onClick={redirect} aria-label="add" style={{
                position: 'fixed',
                bottom: '16px', // distância do fundo
                right: '16px', // distância da direita
            }}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp icon</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            </Fab>
        </div>
    )
}
export default Home
