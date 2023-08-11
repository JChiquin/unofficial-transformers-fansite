import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { getVideogameAPI } from '../../../api/modules'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'

async function getData(id) {
    const res = await getVideogameAPI(id)
    if (res?.errors?.length > 0) {
        throw new Error(res.errors[0].error)
    }

    return res
}

export default async function Videogame({ params: { id } }) {
    const response = await getData(id)
    const videogame = response.data

    return (
        <Container sx={{ py: 3 }} maxWidth={'xl'}>
            <Grid container>
                <Grid item xs={12} md>
                    <IconButton LinkComponent={Link} href="/videogames" sx={{ ml: 1 }} color="inherit">
                        <ArrowBackIcon />
                        Volver
                    </IconButton>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Grid container justifyContent={"center"}>
                        <img
                            style={{ height: "55vh" }}
                            src={videogame.images[0]}
                            alt={videogame.title}
                            loading="lazy"
                        />
                    </Grid>
                </Grid>
                <Grid item md />
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Typography variant="h4" component="div">
                        {videogame.title} ({videogame.release_year})
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{mt:2}}>
                <Grid item>
                    <Typography variant="subtitle1" color="text.secondary">
                        {videogame.long_summary}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2}}>
                <Grid item>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Plataformas:</strong> {videogame.platforms.join(', ')}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Desarrollador:</strong> {videogame.developer}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Categorias:</strong> {videogame.categories.join(', ')}
                    </Typography>
                    <Divider/>
                </Grid>
            </Grid>
        </Container>
    );
}