import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { getSerieAPI } from '../../../api/modules'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';

async function getData(id) {
    const res = await getSerieAPI(id)
    if (res?.errors?.length > 0) {
        throw new Error(res.errors[0].error)
    }

    return res
}

export default async function Serie({ params: { id } }) {
    const response = await getData(id)
    const serie = response.data

    return (
        <Container sx={{ py: 3 }} maxWidth={'xl'}>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <img
                        style={{ height: "55vh" }}
                        src={serie.images[0]}
                        alt={serie.title}
                        loading="lazy"
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Typography variant="h4" component="div">
                        {serie.title} ({serie.release_year})
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                        {serie.original_title}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{mt:2}}>
                <Grid item>
                    <Typography variant="subtitle1" color="text.secondary">
                        {serie.long_summary}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2}}>
                <Grid item>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Escritores:</strong> {serie.writers.join(', ')}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Reparto:</strong> {serie.stars.join(', ')}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Temporadas:</strong> {serie.seasons}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Episodios:</strong> {serie.episodes}
                    </Typography>
                    <Divider/>
                </Grid>
            </Grid>
        </Container>
    );
}