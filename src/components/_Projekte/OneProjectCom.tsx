import { m } from 'framer-motion';
import { useState, ReactNode, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
// hooks
import useSettings from '../../hooks/useSettings';

import useResponsive from '../../hooks/useResponsive';
// components
import { ProjektCardCom } from './ProjektCardCom';
import {
  varHover,
  varTranHover,
  MotionViewport,
  varScale,
  varSlide,
  varFade,
} from '../../components/animate/';
// _mock_
import { _carouselsMembers, _carouselsExample } from '../../_mock/_others';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));
export function OneProjectCom() {
  const { themeStretch } = useSettings();
  const isDesktop = useResponsive('up', 'lg');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  const [halfScreenWidth, setHalfScreenWidth] = useState(600);
  useEffect(() => {
    setHalfScreenWidth(window.screen.width * 0.5);
  }, []);
  return (
    <RootStyle>
      <Container
        maxWidth={themeStretch ? false : 'xl'}
        component={MotionViewport}
        //sx={{ backgroundColor: 'red' }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          spacing={2}
          //component={m.div}
          //variants={varScale().inX}
        >
          <Grid item>
            <Typography variant="h6" component="h2" paragraph color="text.secondary">
              Project Name
            </Typography>
            <Typography variant="body1" component="p" paragraph color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus sapien in nisl
              pellentesque, vitae consectetur dolor lobortis. Nam lacus risus, accumsan eu gravida
              a, lacinia blandit nulla. Etiam leo diam, congue id dignissim sed, maximus id lorem.
              Suspendisse potenti. Phasellus imperdiet volutpat arcu, quis tincidunt metus egestas
              quis. Aenean et tortor mauris. Praesent at nisl dolor. Pellentesque ut nulla quis leo
              egestas sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Nulla urna lectus, laoreet nec dolor ac, viverra rhoncus lacus. Maecenas vehicula
              maximus sapien, in faucibus lectus sagittis a. Fusce tristique magna ut urna varius,
              vel scelerisque magna luctus. Nunc vestibulum odio maximus, pulvinar erat non, euismod
              ipsum. Suspendisse tincidunt varius mi tincidunt euismod. Sed tincidunt aliquam
              porttitor.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
/*
        <Box
          component={m.div}
          variants={varScale().inX}
          sx={{ width: 500, height: 500, backgroundColor: 'red' }}
        />
*/
