import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { getMovieAPI } from '../../../api/modules'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';

async function getData(id) {
    const res = await getMovieAPI(id)
    if (res?.errors?.length > 0) {
        throw new Error(res.errors[0].error)
    }

    return res
}

export default async function Movie({ params: { id } }) {
    const response = await getData(id)
    const movie = response.data

    return (
        <Container sx={{ py: 3 }} maxWidth={'xl'}>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <img
                        style={{ height: "55vh" }}
                        src={movie.images[0]}
                        alt={movie.title}
                        loading="lazy"
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Typography variant="h4" component="div">
                        {movie.title} ({movie.release_year})
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                        {movie.original_title}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{mt:2}}>
                <Grid item>
                    <Typography variant="subtitle1" color="text.secondary">
                        {movie.long_summary}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2}}>
                <Grid item>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Director:</strong> {movie.director}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Escritores:</strong> {movie.writers.join(', ')}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Reparto:</strong> {movie.stars.join(', ')}
                    </Typography>
                    <Divider/>
                </Grid>
            </Grid>
        </Container>
    );
}