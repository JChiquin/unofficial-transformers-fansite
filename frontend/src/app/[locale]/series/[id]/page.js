import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { getSerieAPI } from '../../../../api/modules'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'
import { useTranslations } from 'next-intl';

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

    return <SerieContent serie={serie} />
}


function SerieContent({ serie }) {
    const t = useTranslations();

    return (
        <Container sx={{ py: 3 }} maxWidth={'xl'}>
            <Grid container>
                <Grid item xs={12} md>
                    <IconButton LinkComponent={Link} href="/series" sx={{ ml: 1 }} color="inherit">
                        <ArrowBackIcon />
                        {t('back')}
                    </IconButton>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Grid container justifyContent={"center"}>
                        <img
                            style={{ height: "55vh" }}
                            src={serie.images[0]}
                            alt={serie.title}
                            loading="lazy"
                        />
                    </Grid>
                </Grid>
                <Grid item md />
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Typography variant="h4" component="div">
                        {serie.title} ({serie.release_year})
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
                        <strong>{t('writers')}:</strong> {serie.writers.join(', ')}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>{t('stars')}:</strong> {serie.stars.join(', ')}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>{t('seasons')}:</strong> {serie.seasons}
                    </Typography>
                    <Divider/>
                    <Typography variant="h6" color="text.secondary">
                        <strong>{t('episodes')}:</strong> {serie.episodes}
                    </Typography>
                    <Divider/>
                </Grid>
            </Grid>
        </Container>
    );
}