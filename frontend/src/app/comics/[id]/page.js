import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { getComicAPI } from '../../../api/modules'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';

async function getData(id) {
    const res = await getComicAPI(id)
    if (res?.errors?.length > 0) {
        throw new Error(res.errors[0].error)
    }

    return res
}

export default async function Comic({ params: { id } }) {
    const response = await getData(id)
    const comic = response.data

    return (
        <Container sx={{ py: 3 }} maxWidth={'xl'}>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <img
                        style={{ height: "55vh" }}
                        src={comic.images[0]}
                        alt={comic.title}
                        loading="lazy"
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Typography variant="h4" component="div">
                        {comic.title} ({comic.release_year})
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{mt:2}}>
                <Grid item>
                    <Typography variant="subtitle1" color="text.secondary">
                        {comic.long_summary}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2}}>
                <Grid item>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Editor:</strong> {comic.publisher}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Personajes principales:</strong> {comic.main_characters.join(', ')}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>Números:</strong> {comic.issues}
                    </Typography>
                    <Divider/>
                </Grid>
            </Grid>
        </Container>
    );
}