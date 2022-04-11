import { m } from 'framer-motion';
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, StackProps } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';
import LandingVideo from './LandingVideo';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props: StackProps) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: 'auto',
    //paddingTop: '40px',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),

    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'left',
    },
  })
);

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="overlay" src="/assets/overlay.svg" variants={varFade().inOpacity} />
        <LandingVideo />
        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Start a <br />
                new project <br /> with
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;Dima & Partner
                </Typography>
              </Typography>
            </m.div>
            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }} component="p" >
                The starting point for your next project.
              </Typography>
              <Typography sx={{ color: 'common.white' }} component="p" >
                Build  faster and better.
              </Typography>
            </m.div>
            <Stack spacing={0} direction="row" justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <NextLink href={PATH_DASHBOARD.root} passHref>
                <Button
                  size="large"
                  color="inherit"
                  variant="contained"
                >
                  Unsere Ziele
                </Button>
              </NextLink>
              <NextLink href={PATH_DASHBOARD.root} passHref>
                <Button
                  size="large"
                  color="success"
                  variant="contained"
                >
                  Projekte
                </Button>
              </NextLink>

            </Stack>
            

            

            
          
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
