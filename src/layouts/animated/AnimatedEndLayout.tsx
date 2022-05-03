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

export default function AnimatedEndLayout({ children }: Props) {
  const [screenWidth, setScreenWidth] = useState(600);
  const { pathname } = useRouter();
  const isOneProject = pathname.includes('/referenz/');
  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, []);

  const variantLeft = {
    initial: { opacity: 0, x: -screenWidth },
    exit: { opacity: 1, x: -screenWidth * 0.25 },
    transition: { duration: 1 },
  };
  const variantRight = {
    initial: { opacity: 0, x: screenWidth },
    exit: { opacity: 1, x: screenWidth * 0.75 },
    transition: { duration: 1 },
  };
  function CoverBox({ variant }: { variant: any }) {
    return (
      <Box
        position="fixed"
        component={m.div}
        sx={{
          zIndex: 1200,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'grey.700',
        }}
        {...variant}
      />
    )
  }
  return (
    <>
      {isOneProject && (
        <>
          <CoverBox variant={variantLeft} />
          <CoverBox variant={variantRight} />
        </>
      )}
      <Container  >
        <Stack sx={{ minHeight: 1 }}>
          <MainHeader />
          {children}
          <Box sx={{ flexGrow: 1 }} />
        </Stack>
      </Container>
    </>
  );
}