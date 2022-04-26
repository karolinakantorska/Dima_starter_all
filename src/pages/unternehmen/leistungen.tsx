// components
import Page from '../../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
import Layout from 'src/layouts';
import { ServiceCom } from 'src/components/_Company/ServiceCom';


export default function Leistungen() {
  return (
    <Layout>
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          <ServiceCom />
        </RootStyle>
      </Page>
    </Layout>
  );
} 
