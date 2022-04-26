import { m } from 'framer-motion';
import { useState, ReactNode, useEffect } from 'react';
// @mui
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
// _mock_
import { _carouselsMembers, _carouselsExample } from '../../_mock/_others';
import { ProjectType } from 'src/utils/TS/interface';

import Image from 'next/image';

export function OneProjectCom({ project }: { project: ProjectType }) {
  /*
    const { photo, photos, id, title, description, year, objektAlter, objektType, services, region, phase, client, architect, cooperation, location } = project;
    */
  //const { themeStretch } = useSettings();
  console.log('project: ', project)
  return (
    <Container >
      {project && <Grid
        container
        direction="column"
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h6" component="h2" paragraph color="dima">
            {project.title}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
          >
            <Stack direction="column" spacing={2} >
              <Typography variant="body1" component="p" paragraph color="text.primary">
                Jahr: <b>{project.year}</b>
              </Typography>
              <Typography variant="body1" component="p" paragraph color="text.primary">
                Lokation: <b>{project.location}</b>
              </Typography>
              <Typography variant="body1" component="p" paragraph color="text.primary">
                Zustand: <b>{project.objektAlter}</b>
              </Typography>
              <Typography variant="body1" component="p" paragraph color="text.primary">
                Type: <b>{project.objektType}</b>
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2} >
              <Typography variant="body1" component="p" paragraph color="text.primary">
                Unsere Leistungen:
              </Typography>
              {project.services.map((service) => <Typography key={service} variant="body1" component="p" paragraph color="text.primary">
                <b>{service}</b>
              </Typography>)}
            </Stack>
            <Stack direction="column" spacing={2} >
              <Typography variant="body1" component="p" paragraph color="text.primary">
                Bauher: <b>{project.client}</b>
              </Typography>
              <Typography variant="body1" component="p" paragraph color="text.primary">
                Architektur: <b>{project.architect}</b>
              </Typography>
              {project.cooperation && <Typography variant="body1" component="p" paragraph color="text.primary">
                {project.cooperation.service}: <b>{project.cooperation.company}</b>
              </Typography>}
            </Stack>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent="center"
          >
            <Image
              src={project.photo.url}
              alt={project.photo.alt}
              width='1200px'
              height='674px'
            //layout='fill' 
            />
          </Grid>

        </Grid>
        <Grid item>
          <Typography variant="body1" component="p" paragraph color="text.secondary">
            {project.description}
          </Typography>
        </Grid>
      </Grid>}
    </Container>

  );
}

