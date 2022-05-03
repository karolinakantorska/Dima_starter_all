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
  const [visible, setVisible] = useState(true);
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isOneProject = pathname.includes('/referenz/');
  useEffect(() => {
    setTimeout(() => setVisible(false), 500)
  }, []);


  const variant = {
    initial: { opacity: 1, },
    animate: { opacity: 0, },
    transition: { duration: 0.5 },
  };

  return (
    <>
      {visible && <Box
        component={m.div}
        {...variant}
        sx={{ backgroundColor: 'dima', width: '100vw', height: '100vh', position: "fixed", zIndex: 1200 }}>
      </Box>}
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
