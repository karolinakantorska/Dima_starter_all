// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

// hooks
import useSettings from '../../hooks/useSettings';
// components
import { ProjektCardSmallCom } from '../../components/_Projekte/ProjektCardSmallCom';
// _mock_
import { _carouselsMembers } from '../../_mock/_others';
import { ProjektCardReverseSmallCom } from './ProjektCardReverseSmallCom';
import { ProjektCardBigCom } from './ProjektCardBigCom copy';

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
              {_carouselsMembers.map((member) => (
                <Grid item key={member.id}>
                  <ProjektCardBigCom member={member} big={true} direction="column-reverse" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}