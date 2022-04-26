import { useState, ReactNode, useEffect } from 'react';
import { m } from 'framer-motion';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Link, Container, Typography, Stack } from '@mui/material';
// components
import Logo from '../../components/Logo';
import AnimationOnStartCom from '../../components/_Animation/AnimationOnStartCom';
//
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import { AnimatePresence } from 'framer-motion';
import { varFade, varScale, MotionViewport } from '../../components/animate';
import { _MyMotionViewport } from '../../components/animate';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  //const [show, setShow] = useState(true);
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isOneProject = pathname.includes('/referenz/');

  return (
    <>
      <Container >
        <Stack sx={{ minHeight: 1 }}>
          <MainHeader />
          {children}
          <Box sx={{ flexGrow: 1 }} />
        </Stack>
      </Container>
    </>
  );
}
/*
      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Logo sx={{ mb: 1, mx: 'auto' }} />
            <Typography variant="caption" component="p">
              © All rights reserved
              <br /> made by &nbsp;
              <Link href="https://minimals.cc/">minimals.cc</Link>
            </Typography>
          </Container>
        </Box>
      )}
      */
/*

        <Container component={MotionViewport}>
          <Stack component={m.div} variants={varScale().inX} sx={{ minHeight: 1 }}>
            <MainHeader />
            {children}
            <Box sx={{ flexGrow: 1 }} />
          </Stack>
        </Container>

*/
