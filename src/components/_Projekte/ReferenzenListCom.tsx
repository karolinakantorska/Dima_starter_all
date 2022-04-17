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

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));
export function ReferenzenListCom() {
  const { themeStretch } = useSettings();
  const isDesktop = useResponsive('up', 'lg');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  return (
    <RootStyle>
      <Container maxWidth={themeStretch ? false : 'xl'}>
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
              gridAutoFlow="dense"
              columnGap="12px"
              rowGap="20px"
              //sx={{ maxWidth: '1000px' }}
            >
              {_carouselsMembers.map((member, i) => {
                const result = i % 2 == 0 ? true : false;
                return (
                  <ProjektCardCom
                    key={member.id}
                    member={member}
                    i={i}
                    gridRow={isSmall ? '1' : result ? '1' : '2'}
                  />
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
