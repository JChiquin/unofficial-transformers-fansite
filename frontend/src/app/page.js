import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import Container from '@mui/material/Container';
import './style.css'

export default function Home() {
  return (
    <Container sx={{ pt: 6 }} maxWidth={false}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Link href="/movies">
            <div class="card">
              <img src="https://phantom-marca-mx.unidadeditorial.es/68016166388901db4d9d297ea2d6c071/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/06/10/16864310596537.jpg" />
              <div class="card-text">Películas</div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link href="/series">
            <div class="card">
              <img src="https://pm1.aminoapps.com/6490/6d2eef6cf94fb45b75019b7a981bddbab3f202a4_hq.jpg" />
              <div class="card-text">Series</div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link href="/videogames">
            <div class="card">
              <img src="https://play-lh.googleusercontent.com/OwjqycgJF3Og2EcMJdxJUMxEvGS-8oQZKkvE4byqM8w4emlK6PfdRAOZztEhoN91wTw=w526-h296-rw" />
              <div class="card-text">Videojuegos</div>
            </div>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={4} mt={2} justifyContent={'center'}>
        <Grid item xs={12} md={4}>
          <Link href="/comics">
            <div class="card">
              <img src="https://assets.skybound.com/wp-content/uploads/2023/06/13175511/Transformers01A_Cover_cropped.jpg" />
              <div class="card-text">Comics</div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link href="/toys">
            <div class="card">
              <img src="https://elcomercio.pe/resizer/OWR6ZDMiCkh0VqMp86HjPW9aZv8=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VJYIFE7MKVE3BOTYORTRYL262Y.jpeg" />
              <div class="card-text">Juguetes</div>
            </div>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}