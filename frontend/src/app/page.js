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
              <img src="https://phantom-marca-mx.unidadeditorial.es/68016166388901db4d9d297ea2d6c071/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/06/10/16864310596537.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>Películas</Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href="/series">
            <Box className="card">
              <img src="https://pm1.aminoapps.com/6490/6d2eef6cf94fb45b75019b7a981bddbab3f202a4_hq.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>Series</Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href="/videogames">
            <Box className="card">
              <img src="https://play-lh.googleusercontent.com/OwjqycgJF3Og2EcMJdxJUMxEvGS-8oQZKkvE4byqM8w4emlK6PfdRAOZztEhoN91wTw=w526-h296-rw" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>Videojuegos</Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href="/comics">
            <Box className="card">
              <img src="https://assets.skybound.com/wp-content/uploads/2023/06/13175511/Transformers01A_Cover_cropped.jpg" />
              <Box className="card-text" sx={{ color: 'text.primary' }}>Comics</Box>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}