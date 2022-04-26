// components
import Page from '../../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
import Layout from 'src/layouts';
import { PeopleCom } from '../../components/_Company/peopleCom';



export default function Mitarbeitern() {
  return (
    <Layout>
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          <PeopleCom />
        </RootStyle>
      </Page>
    </Layout>
  );
} 
