import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
function BackgroundImageComponent() {
    return (
        <Box
            sx={{
                width: '100%',       // Largura 100% da viewport
                height: '100%',      // Altura 100% da viewport
                backgroundImage: 'url(https://images.unsplash.com/photo-1516802273409-68526ee1bdd6)', // Caminho da imagem
                backgroundSize: 'cover',  // Faz a imagem cobrir todo o box
                backgroundPosition: 'center', // Centraliza a imagem
                backgroundRepeat: 'no-repeat' // Não repete a imagem
            }}
            className="flex flex-col items-center justify-center"
        >
            <h2 className='text-center text-white text-3xl'> titulo ajfjla </h2>

            <p className='text-center text-white text-3xl'> lorem uaifaifiafaj iafjaiofafj aoja </p>
            <div className='pr-3'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
            </div>

        </Box>
    );
}

export default BackgroundImageComponent;

