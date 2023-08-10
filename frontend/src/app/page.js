import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from 'next/link'
import Container from '@mui/material/Container';
import './style.css'

export default function Home() {
  return (
    <Container sx={{ pt: 6 }} maxWidth={"xl"}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Link href="/movies">
            <Box className="card">
              <img src="movies.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>Películas</Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href="/series">
            <Box className="card">
              <img src="series.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>Series</Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href="/videogames">
            <Box className="card">
              <img src="videogames.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>Videojuegos</Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href="/comics">
            <Box className="card">
              <img src="comics.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>Comics</Box>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}