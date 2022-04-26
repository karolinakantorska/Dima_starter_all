// components
import Page from '../../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
import Layout from 'src/layouts';
import { AboutCom } from 'src/components/_Company/AboutCom';


export default function UberUns() {
  return (
    <Layout>
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          <AboutCom />
        </RootStyle>
      </Page>
    </Layout>
  );
}


