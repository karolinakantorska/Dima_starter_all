import { ReactElement } from 'react';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
// layouts
import Layout from '../layouts';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import { ProjektCardSmallCom } from '../components/_Projekte/ProjektCardSmallCom';
// _mock_
import { _carouselsMembers } from '../_mock/_others';
import { MotionViewport, varFade } from '../components/animate';
// TODO CHANGE FOR PROJEKT



// TILL HERE
const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

ReferenzenCom.getLayout = function getLayout(page: ReactElement) {
  return <Layout  >{page}</Layout>;
};

export default function ReferenzenCom() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Dima & Partner | Glarus Zurich Arosa">
      <RootStyle>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid 
        container 
        direction="column"
        justifyContent="center" 
        spacing={2}
        >
          <Grid item>
          <Stack direction="row" spacing={2}justifyContent="center"  >
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
                <ProjektCardSmallCom member={member} />
                </Grid>          
            ))}
        </Grid>
         
         </Grid>  
        </Grid>
      </Container>
      </RootStyle>
    </Page>
  );
}
