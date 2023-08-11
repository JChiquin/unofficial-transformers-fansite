import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from 'next/link'
import Container from '@mui/material/Container';
import './style.css'
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();
  
  return (
    <Container sx={{ pt: 6 }} maxWidth={"xl"}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Link href="/movies">
            <Box className="card">
              <img src="movies.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>{t('movies')}</Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href="/series">
            <Box className="card">
              <img src="series.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>{t('series')}</Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href="/videogames">
            <Box className="card">
              <img src="videogames.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>{t('videogames')}</Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href="/comics">
            <Box className="card">
              <img src="comics.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>{t('comics')}</Box>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}