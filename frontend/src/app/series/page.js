import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import Container from '@mui/material/Container';
import { getSeriesAPI } from '../../api/modules'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


async function getData() {
  const res = await getSeriesAPI()
  if (res?.errors?.length > 0) {
    throw new Error(res.errors[0].error)
  }
 
  return res
}

export default async function Series() {
  const response = await getData()

  return (
    <Container sx={{ py: 6 }} maxWidth={false}>
      <Grid container spacing={4}>
        {response.data.map((serie, i) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card >
              <CardActionArea LinkComponent={Link} href={`/series/${serie.id}`}>
                <CardMedia
                  component="img"
                  sx={{ height:'65vh', objectFit:'fill' }}
                  image={serie.images[0]}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {serie.title} ({serie.release_year})
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {serie.short_summary}
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