import { useState, ReactNode, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box } from '@mui/material';
// components
import Slide from '@mui/material/Slide';

// ----------------------------------------------------------------------

export default function AnimationOnStartCom({ show }: { show: boolean }) {
  const timeout = 400;
  const easing = { enter: 'linear', exit: 'linear' };
  const easing2 = { enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'cubic-bezier(0, 1.5, .8, 1)' };

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
    </>
  );
}
