import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { LinkFooterProps } from '../interfaces/LinkFooterProps';
function LinkFooter(props: LinkFooterProps) {

    const {
        title,
        textColor,
        backGroudColor,
        links,

    } = props
    return (
        <Box
            sx={{
                width: '100%',       // Largura 100% da viewport
                height: '100%',      // Altura 100% da viewport
                backgroundSize: 'cover',  // Faz a imagem cobrir todo o box
                backgroundPosition: 'center', // Centraliza a imagem
                backgroundRepeat: 'no-repeat' // Não repete a imagem
            }}
            className={`flex flex-col items-center ${backGroudColor} justify-center`}
        >
            {title ? <h2 className={`text-center font-mono ${textColor} text-sm md:text-base lg:text-lg xl:text-2xl`}> {title} </h2> : null}

            <Box className="hidden md:flex" sx={{ flexGrow: 1, }}>
                {links.map((link, index) => (
                    <Link key={index} className="my-2 mr-3 display: block" to={link.link}>
                        {link.title}
                    </Link>))}
            </Box>
        </Box>
    );
}

export default LinkFooter;
