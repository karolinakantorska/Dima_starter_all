import { ReactElement } from 'react';
import { useRouter } from 'next/router';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { OneProjectCom } from 'src/components/_Projekte/OneProjectCom';

Referenz.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="animated">{page}</Layout>;
};

export default function Referenz() {
  const router = useRouter();
  const { id } = router.query;
  console.log('id:', id);
  return (
    <Layout>
      <Page title="Projekte | Dima & Partner | Glarus Zurich Arosa">
        <OneProjectCom id={id} />
      </Page>
    </Layout>
  );
}
