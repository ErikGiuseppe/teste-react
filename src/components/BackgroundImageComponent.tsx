import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { BackgroundImageComponentProps } from '../interfaces/BackgroundImageComponentProps';
function BackgroundImageComponent(props: BackgroundImageComponentProps) {

    const {
        image,
        title,
        text,
        textButton,
        textColor,
        backGroudColor
    } = props
    return (
        <Box
            sx={{
                width: '100%',       // Largura 100% da viewport
                height: '100%',      // Altura 100% da viewport
                backgroundImage: image ? image : null, // Caminho da imagem
                backgroundColor: backGroudColor ? backGroudColor : "white", // Caminho da imagem
                backgroundSize: 'cover',  // Faz a imagem cobrir todo o box
                backgroundPosition: 'center', // Centraliza a imagem
                backgroundRepeat: 'no-repeat' // Não repete a imagem
            }}
            className="flex flex-col items-center justify-center"
        >
            <h2 className='text-center {textColor} text-3xl'> {title} </h2>

            <p className='text-center {textColor} text-3xl'> {text} </p>
            <div className='pr-3'>
                {textButton?.map((buttonText, index) => (
                    <Button variant="text" key={index}>{buttonText}</Button>
                ))}
            </div>

        </Box>
    );
}

export default BackgroundImageComponent;

