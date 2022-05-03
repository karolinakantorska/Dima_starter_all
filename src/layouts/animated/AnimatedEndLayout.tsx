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
import { RootStyle } from 'src/components/_Main/RootStyle';

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

  const variantUp = {
    initial: { width: '0.11vw', height: 60, x: '8px', y: 0 },
    exit: { width: '0.11vw', height: '100vw', x: '8px', },//, height: '100vw'
    transition: { duration: 5, },
  };

  return (
    <>

      <Container  >
        <RootStyle>
          <Box
            position="fixed"
            display="grid"
            gridTemplateColumns='1fr 1fr 1fr'
            columnGap="12px"
            justifyItems='end'
            sx={{
              height: '100px',
              top: 0,
              zIndex: 1200
            }}
          >
            <Box
              component={m.div}
              {...variantUp}
              sx={{ backgroundColor: 'dima', }}>
            </Box>
          </Box>
        </RootStyle>

        <Stack sx={{ minHeight: 1 }}>
          <MainHeader />
          {children}
          <Box sx={{ flexGrow: 1 }} />
        </Stack>
      </Container>
    </>
  );
}