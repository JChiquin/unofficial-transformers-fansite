import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import Container from '@mui/material/Container';
import { getVideogamesAPI } from '../../../api/modules'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


async function getData() {
  const res = await getVideogamesAPI()
  if (res?.errors?.length > 0) {
    throw new Error(res.errors[0].error)
  }

  return res
}

export default async function Videogames() {
  const response = await getData()

  return (
    <Container sx={{ py: 6 }} maxWidth={'xl'}>
      <Grid container spacing={4}>
        {response.data.map((videogame, i) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea sx={{ height: '100%' }} LinkComponent={Link} href={`/videogames/${videogame.id}`}>
                <CardMedia
                  component="img"
                  sx={{ height: '65vh', objectFit: 'fill' }}
                  image={videogame.images[0]}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {videogame.title} ({videogame.release_year})
                  </Typography>

                  {videogame.platforms.map((platform, i) => (
                    <Chip key={i} sx={{mr:1}} label={platform} color="primary" />
                  ))}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}