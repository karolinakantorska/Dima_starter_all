import { m } from 'framer-motion';
import { useState, ReactNode, useEffect } from 'react';

// next
import { useRouter } from 'next/router';
// @mui
import { Box, Link, Container, Typography, Stack } from '@mui/material';
// components
import Logo from '../../components/Logo';
//
import {
  varHover,
  varTranHover,
  MotionViewport,
  varScale,
  varSlide,
  varFade,
} from '../../components/animate/';
//
import MainHeader from '../main/MainHeader';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function AnimationOnLandingLayout({ children }: Props) {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const [halfScreenWidth, setHalfScreenWidth] = useState(600);
  useEffect(() => {
    setHalfScreenWidth(window.screen.width);
  }, []);

  return (
    <Box
      component={MotionViewport}
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        position="fixed"
        sx={{
          zIndex: 1200,
          width: '50vw',
          height: '100vh',
          backgroundColor: 'grey.0',
        }}
        component={m.div}
        variants={varFade({ distance: halfScreenWidth }).outLeft}
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
        variants={varFade({ distance: halfScreenWidth }).outRight}
      />
      <Stack sx={{ minHeight: 1 }}>
        <MainHeader />
        {children}
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
    </Box>
  );
}
