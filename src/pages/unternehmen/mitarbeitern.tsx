// components
import Page from '../../components/Page';

import { Grid, Typography, Container } from '@mui/material';
//import { PeopleCom } from '../../components/_Company/peopleCom';
import { RootStyle } from '../../components/_Main/RootStyle';
import Layout from '../../layouts';



export default function Mitarbeitern() {
  return (
    <Layout>
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          <Container>
            <Grid container direction="row" justifyContent="center" spacing={4}>
              <Grid item>
                <Typography variant="h6" component="h1" paragraph color="dima">
                  Mitarbeitern
                </Typography>
                <Typography gutterBottom>
                  Text
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </RootStyle>
      </Page>
    </Layout>
  );
} 
