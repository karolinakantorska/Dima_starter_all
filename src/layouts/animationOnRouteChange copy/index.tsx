import { useState, ReactNode, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Stack } from '@mui/material';
// components
import Slide from '@mui/material/Slide';
import MainHeader from '../main/MainHeader';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function AnimationOnRouteChange({ children }: Props) {
  const [show, setShow] = useState(false);
  const { pathname } = useRouter();
  const router = useRouter();
  const timeout = 400;
  const easing = { enter: 'linear', exit: 'linear' };
  const easing2 = { enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'cubic-bezier(0, 1.5, .8, 1)' };

  function routeChangeFunction() {
    setShow((show) => !show);
  }
  useEffect(() => {
    router.events.on('routeChangeStart', routeChangeFunction);
    return () => {
      router.events.off('routeChangeStart', routeChangeFunction);
    };
  }, []);

  return (
    <>
      <Slide direction="right" in={show} appear={false} timeout={timeout} easing={easing}>
        <Box
          position="fixed"
          sx={{
            zIndex: 1200,
            width: '50vw',
            height: '100vh',
            backgroundColor: 'grey.0',
          }}
        />
      </Slide>

      <Slide direction="left" in={show} appear={false} timeout={timeout} easing={easing}>
        <Box
          position="fixed"
          sx={{
            zIndex: 1200,
            ml: '50vw',
            width: '50vw',
            height: '100vh',
            backgroundColor: 'grey.0',
          }}
        />
      </Slide>

      <Stack sx={{ minHeight: 1 }}>
        <MainHeader />
        {children}
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
    </>
  );
}
