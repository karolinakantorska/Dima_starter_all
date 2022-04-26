import { ReactElement } from 'react';
import { styled } from '@mui/material/styles';
// layouts
import AnimatedEndLayout from '../layouts/animated/AnimatedEndLayout';
// components
import Page from '../components/Page';
// _mock_
import { _carouselsMembers } from '../_mock/_others';
import { ReferenzenListCom } from 'src/components/_Projekte/ReferenzenListCom';


const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function ReferenzenCom() {
  return (
    <AnimatedEndLayout >
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          <ReferenzenListCom />
        </RootStyle>
      </Page>
    </AnimatedEndLayout>
  );
}
