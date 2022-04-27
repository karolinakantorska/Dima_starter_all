import { useState, ReactNode, useEffect } from 'react';
import { m } from 'framer-motion';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Link, Container, Typography, Stack } from '@mui/material';
// components

//
import MainHeader from '../main/MainHeader';
import { _MyMotionViewport } from '../../components/animate';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function AnimatedStartLayout({ children }: Props) {
  const [screenWidth, setScreenWidth] = useState(600);
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isOneProject = pathname.includes('/referenz/');
  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, []);

  const variantLeft = {
    initial: { opacity: 1, x: 0 },
    animate: { opacity: 1, x: -screenWidth },
    transition: { duration: 1 },
  };
  const variantRight = {
    initial: {
      opacity: 1, x: screenWidth * 0.5
    },
    animate: { opacity: 1, x: screenWidth },
    transition: { duration: 1 },
  };
  function CoverBox({ variant }: { variant: any }) {
    return (
      <Box
        position="fixed"
        component={m.div}
        sx={{
          zIndex: 1200,
          width: '50vw',
          height: '100vh',
          backgroundColor: 'grey.700',
        }}
        {...variant}
      />
    )
  }
  return (
    <>
      <CoverBox variant={variantLeft} />
      <CoverBox variant={variantRight} />
      <Container>
        <Stack
          sx={{ minHeight: 1 }}>
          <MainHeader />
          {children}
          <Box sx={{ flexGrow: 1 }} />
        </Stack>
      </Container>
    </>
  );
}

/*
<Box
        position="fixed"
        sx={{
          zIndex: 1200,
          width: '50vw',
          height: '100vh',
          backgroundColor: 'grey.0',
        }}
        component={m.div}
        initial={variants.initial}
        animate={variantLeft.animate}
        transition={variants.transition}
      />
      <Box
        position="fixed"
        sx={{
          zIndex: 1200,
          ml: '50vw',
          width: '50vw',
          height: '100vh',
          backgroundColor: 'grey.0',
        }}
        component={m.div}
        initial={variants.initial}
        animate={variantRight.animate}
        transition={variants.transition}
      />
  */