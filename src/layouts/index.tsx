import { ReactNode } from 'react';
// guards
import AuthGuard from '../guards/AuthGuard';
// components
import MainLayout from './main';
import DashboardLayout from './dashboard';
import LogoOnlyLayout from './LogoOnlyLayout';
import AnimationOnLandingLayout from './animationOnLanding';
import AnimationOnRouteChange from './animationOnRouteChange copy';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: 'main' | 'dashboard' | 'logoOnly' | 'animated' | 'animatedOnLeave';
};
export default function Layout({ variant = 'dashboard', children }: Props) {
  /*
  if (variant === 'logoOnly') {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }
  // Here I am by landing
  if (variant === 'main') {
    return <MainLayout> {children}</MainLayout>;
  }
  if (variant === 'animated') {
    return <AnimationOnLandingLayout>{children}</AnimationOnLandingLayout>;
  }
  if (variant === 'animatedOnLeave') {
    return <AnimationOnRouteChange>{children}</AnimationOnRouteChange>;
  }
*/
  return <MainLayout> {children} </MainLayout>;
}
/*
<AuthGuard>
      <DashboardLayout> {children} </DashboardLayout>
    </AuthGuard>
    */
