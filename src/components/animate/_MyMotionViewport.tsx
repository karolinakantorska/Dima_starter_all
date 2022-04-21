import { m, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
//
import { varContainer } from '.';

// ----------------------------------------------------------------------

type IProps = BoxProps & MotionProps;

interface Props extends IProps {
  children: ReactNode;
  disableAnimatedMobile?: boolean;
}

export default function _MyMotionViewport({
  children,
  disableAnimatedMobile = false,
  ...other
}: Props) {
  /*
  const isDesktop = useResponsive('up', 'sm');

  if (!isDesktop && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }
  */
  //console.log('children: ', children);
  /*
  console.log('initial: ', initial);
  console.log('exit: ', exit);
  console.log('animate: ', animate);*/
  return (
    <Box
      component={m.div}
      initial="initial"
      exit="exit"
      animate="animate"
      //whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
