import { ReactElement } from 'react';
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
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

ReferenzenCom.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="animatedOnLeave">{page}</Layout>;
};

export default function ReferenzenCom() {
  return (
    <Page title="Dima & Partner | Glarus Zurich Arosa">
      <RootStyle>
        <ReferenzenListCom />
      </RootStyle>
    </Page>
  );
}
