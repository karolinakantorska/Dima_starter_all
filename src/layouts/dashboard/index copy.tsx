import { m } from 'framer-motion';
import { useState, ReactNode, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
import useResponsive from '../../hooks/useResponsive';
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// config
import { HEADER, NAVBAR } from '../../config';
//
import {
  varHover,
  varTranHover,
  MotionViewport,
  varScale,
  varSlide,
  varFade,
} from '../../components/animate/';
import DashboardHeader from './header';
import NavbarVertical from './navbar/NavbarVertical';
import NavbarHorizontal from './navbar/NavbarHorizontal';
import MainHeader from '../main/MainHeader';

// ----------------------------------------------------------------------

type MainStyleProps = {
  collapseClick: boolean;
};

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})<MainStyleProps>(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const [halfScreenWidth, setHalfScreenWidth] = useState(600);
  const { collapseClick, isCollapse } = useCollapseDrawer();
  const { themeLayout } = useSettings();
  const isDesktop = useResponsive('up', 'lg');
  const [open, setOpen] = useState(false);
  const verticalLayout = themeLayout === 'vertical';

  useEffect(() => {
    setHalfScreenWidth(window.screen.width);
  }, []);

  if (verticalLayout) {
    return (
      <>
        <p>verticalLayout</p>
        {/* <DashboardHeader onOpenSidebar={() => setOpen(true)} verticalLayout={verticalLayout} />
        <MainHeader />
        {isDesktop ? (
          <NavbarHorizontal />
        ) : (
          <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        )}

        <Box
          component="main"
          sx={{
            px: { lg: 2 },
            pt: {
              xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
              lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 80}px`,
            },
            pb: {
              xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
              lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 24}px`,
            },
          }}
        >
          {children}
        </Box>*/}
      </>
    );
  }

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
      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        <MainHeader />
        {children}
        {/*<MainStyle collapseClick={collapseClick}>{children}</MainStyle>*/}
      </Box>
    </Box>
  );
}
