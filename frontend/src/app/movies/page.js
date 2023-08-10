import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import Container from '@mui/material/Container';
import { getMoviesAPI } from '../../api/modules'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


async function getData() {
  const res = await getMoviesAPI()
  if (res?.errors?.length > 0) {
    throw new Error(res.errors[0].error)
  }
 
  return res
}

export default async function Movies() {
  const response = await getData()

  return (
    <Container sx={{ py: 6 }} maxWidth={'xl'}>
      <Grid container spacing={4}>
        {response.data.map((movie, i) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea sx={{ height: '100%' }} LinkComponent={Link} href={`/movies/${movie.id}`}>
                <CardMedia
                  component="img"
                  sx={{ height:'65vh', objectFit:'fill' }}
                  image={movie.images[0]}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {movie.title} ({movie.release_year})
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                    {movie.original_title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.short_summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}