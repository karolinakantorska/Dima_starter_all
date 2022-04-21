import { useState, ReactNode, useEffect } from 'react';
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

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const [show, setShow] = useState(true);
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isOneProject = pathname.includes('/referenz/');

  useEffect(() => {
    if (isOneProject) {
      setShow((show) => !show);
    }
  }, []);
  return (
    <>
      {isOneProject && <AnimationOnStartCom show={show}></AnimationOnStartCom>}
      <Stack sx={{ minHeight: 1 }}>
        <MainHeader />
        {children}
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
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
