// components
import Page from '../../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
import Layout from 'src/layouts';
import { JobsCom } from 'src/components/_Company/JobsCom';


export default function Jobs() {
  return (
    <Layout>
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          <JobsCom />
        </RootStyle>
      </Page>
    </Layout>
  );
} 
