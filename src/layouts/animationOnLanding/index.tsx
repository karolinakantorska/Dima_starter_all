import { useState, ReactNode, useEffect } from 'react';
// next
import { useRouter } from 'next/router';

import { AnimatePresence } from 'framer-motion';
// @mui
import { Box, Stack } from '@mui/material';
// components
import Slide from '@mui/material/Slide';
import MainHeader from '../main/MainHeader';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function AnimationOnLandingLayout({ children }: Props) {
  const [show, setShow] = useState(true);
  const { pathname } = useRouter();
  const router = useRouter();
  const timeout = 400;
  const easing = { enter: 'linear', exit: 'linear' };
  const easing2 = { enter: 'cubic-bezier(0, 1.5, .8, 1)', exit: 'cubic-bezier(0, 1.5, .8, 1)' };

  useEffect(() => {
    setShow((show) => !show);
  }, []);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Stack sx={{ minHeight: 1 }}>
          <MainHeader />
          {children}
          <Box sx={{ flexGrow: 1 }} />
        </Stack>
      </AnimatePresence>
    </>
  );
}
