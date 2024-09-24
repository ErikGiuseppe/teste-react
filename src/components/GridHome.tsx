import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import BackgroundImageComponent from "../components/BackgroundImageComponent.tsx"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function RowAndColumnSpacing() {
    return (
        <Box
            sx={{ width: '100%' }}>
            <Grid className='px-3' container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className="px-0 h-52  md:h-80 lg:h-96 xl:h-96 w-screen" size={20}>

                    <BackgroundImageComponent
                        title='Erik'
                        text='Este é um texto de exemplo.'
                        textButton={['Botão 1', 'Botão 2']}
                        image='url(https://images.unsplash.com/photo-1516802273409-68526ee1bdd6)'
                    />

                </Grid>
                <Grid className="px-0 h-52  md:h-80 lg:h-96 xl:h-96 w-screen" size={6}>
                    <BackgroundImageComponent

                        image='url(https://images.unsplash.com/photo-1516802273409-68526ee1bdd6)'
                    />
                </Grid>
                <Grid className="px-0 h-52  md:h-80 lg:h-96 xl:h-96 w-screen" size={6}>
                    <BackgroundImageComponent
                        title='Erik'
                        text='Este é um texto de exemplo.'
                        textButton={['Botão 1', 'Botão 2']}
                        cor='black'
                    />
                </Grid>
                <Grid className="px-0 h-52  md:h-80 lg:h-96 xl:h-96 w-screen" size={6}>
                    <BackgroundImageComponent
                        title='Erik'
                        text='Este é um texto de exemplo.'
                        textButton={['Botão 1', 'Botão 2']}
                        cor='black'
                    />

                </Grid>
                <Grid className="px-0 h-52  md:h-80 lg:h-96 xl:h-96 w-screen" size={6}>
                    <BackgroundImageComponent
                        title='Erik'
                        text='Este é um texto de exemplo.'
                        image='url(https://images.unsplash.com/photo-1516802273409-68526ee1bdd6)'
                        textButton={['Botão 1', 'Botão 2']}
                        cor='black'
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
