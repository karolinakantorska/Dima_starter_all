import { useState, ReactNode, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
// hooks
import useSettings from '../../hooks/useSettings';

import useResponsive from '../../hooks/useResponsive';
// components
import { ProjektCardCom } from './ProjektCardCom';
// _mock_
import { _carouselsMembers } from '../../_mock/_others';
import { _mockProjekts } from 'src/_mock/referenzen/referenzen';

export function ReferenzenListCom() {
  const isDesktop = useResponsive('up', 'lg');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  return (
    <Container>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Typography variant="overline" component="p" paragraph color="text.secondary">
              Mehrfamilien
            </Typography>
            <Typography variant="overline" component="p" paragraph color="text.secondary">
              Gewerbe
            </Typography>
            <Typography variant="overline" component="p" paragraph color="text.secondary">
              Hotel
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Box
            display="grid"
            gridTemplateColumns={gtc}
            //gridAutoFlow="dense"
            columnGap="12px"
            rowGap="20px"
          >
            {_mockProjekts.map((project, i) => {
              const divideIn2 = i % 2 == 0 ? true : false;
              const divideIn4 = (i + 1) % 4 == 0 ? true : false;
              const divideIn8 = (i + 1) % 8 == 0 ? true : false;
              return (
                <ProjektCardCom
                  key={project.id}
                  project={project}
                  gridRow={divideIn2 ? '1' : '2'}
                  big={divideIn4 ? true : false}
                  //big={true}
                  rewerseBig={divideIn8 ? true : false}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
