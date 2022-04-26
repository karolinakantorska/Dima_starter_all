import { useState, ReactNode, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
// hooks

import useResponsive from '../../hooks/useResponsive';
// components
import { ProjektCardCom } from './ProjektCardCom';
// _mock_
import { _mockProjekts } from 'src/_mock/referenzen/referenzen';
import { phaseArray, regionenArray } from 'src/utils/TS/interface';

export function ReferenzenListCom() {
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';

  const phase = phaseArray.slice(0, -1);
  const regions = regionenArray.slice(0, -1);
  return (
    <Container>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item>
          <Stack direction="row" spacing={2} justifyContent="center">
            {phase.map((ph) =>
              <Typography key={ph} variant="overline" component="p" paragraph color="text.secondary">
                {ph}
              </Typography>
            )}
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="center">
            {regions.map((region) =>
              <Typography key={region} variant="overline" component="p" paragraph color="text.secondary">
                {region}
              </Typography>
            )}
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
