// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import { ProjektCardCom } from './ProjektCardCom';
// _mock_
import { _carouselsMembers } from '../../_mock/_others';

import { m } from 'framer-motion';
import getVariant from '../../sections/overview/extra/animate/getVariant';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));
export function ReferenzenListCom() {
  const { themeStretch } = useSettings();
  return (
    <RootStyle>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <Stack direction="row" spacing={2} justifyContent="center"  >
              <Typography variant="overline" component="p" paragraph color='text.secondary'>
                Mehrfamilien
              </Typography>
              <Typography variant="overline" component="p" paragraph color='text.secondary'>
                Gewerbe
              </Typography>
              <Typography variant="overline" component="p" paragraph color='text.secondary'>
                Hotel
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              spacing={4}
            >
              {/*<Box
                component={m.img}
                src="https://minimal-assets-api-dev.vercel.app/assets/images/feeds/feed_8.jpg"

                {...getVariant('kenburnsTop')}
                sx={{ width: 1, height: 1, objectFit: 'cover' }}
  />*/}
              {_carouselsMembers.map((member, i) => {
                const result = (i % 2 == 0) ? true : false;
                return (
                  <Grid item key={member.id}>
                    <ProjektCardCom member={member} i={i} direction={result ? "column-reverse" : "column"} />
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}