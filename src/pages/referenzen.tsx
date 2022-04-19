import { ReactElement } from 'react';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// _mock_
import { _carouselsMembers } from '../_mock/_others';
import { ReferenzenListCom } from 'src/components/_Projekte/ReferenzenListCom';

ReferenzenCom.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default function ReferenzenCom() {
  return (
    <Page title="Dima & Partner | Glarus Zurich Arosa">
      <ReferenzenListCom />
    </Page>
  );
}
