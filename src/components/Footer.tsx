import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BackgroundImageComponent from "../components/BackgroundImageComponent.tsx"


import { Typography } from '@mui/material';
import LinkFooter from './LinkFooter.tsx';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1f2937',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function RowAndColumnSpacing() {
    const linksProdutos = [
        { title: 'carro', link:'carro'}
    ]
    return (
        <Box className='bg-gray-800 text-white py-4'
            sx={{ width: '100%' }}>
            <Grid className='px-3' container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className="flex flex-col items-center justify-center px-0 h-96  md:h-80 lg:h-96 xl:h-96 w-screen" size={3.5}>
                    <Item>
                        <BackgroundImageComponent
                            title='Sobre Nós'
                            text='Fundada em 2023, a Flagcon é representante oficial da BB Consórcio e da Promotiva, dedicada a transformar sonhos em realidade. Nossa equipe experiente oferece soluções personalizadas em consórcios, priorizando transparência e atendimento de excelência. Venha conquistar seus objetivos com a gente!'
                            textColor='text-white'
                            backGroudColor='bg-gray-800'

                        />

                    </Item>

                </Grid>
                <Grid className="flex flex-col items-center justify-center px-0   md:h-80 lg:h-96 xl:h-96 w-screen" size={4}>
                    <Item>
                        <LinkFooter
                            title='Produtos:'
                            links={linksProdutos}
                        textColor='text-white'

                        backGroudColor='bg-gray-800'


                        />
                    </Item>
                </Grid>
                <Grid className="flex flex-col items-center justify-center px-0   md:h-80 lg:h-96 xl:h-96 w-screen" size={4}>
                    <Item>
                        <BackgroundImageComponent
                            title='Realize o Sonho do Lar Próprio!'
                            text='Você deseja conquistar a casa dos seus sonhos, mas não quer se endividar com altas taxas de juros? O consórcio de casas é a alternativa perfeita para quem busca uma forma planejada e econômica de adquirir o seu imóvel.'
                            containedButton='Simule Agora'
                        />
                    </Item>

                </Grid>

            </Grid>
            <Typography variant="body2" align="center" className="mt-4">
                © {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.
            </Typography>
        </Box>
    );
}

