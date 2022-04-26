import { ReactElement } from 'react';
import { useRouter } from 'next/router';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { OneProjectCom } from 'src/components/_Projekte/OneProjectCom';
import AnimatedStartLayout from 'src/layouts/animated/AnimatedStartLayout';


export default function Referenz() {
  const router = useRouter();
  const { id } = router.query;
  console.log('id:', id);
  return (

    <AnimatedStartLayout>
      <Page title="Projekte | Dima & Partner | Glarus Zurich Arosa">
        <OneProjectCom />
      </Page>
    </AnimatedStartLayout>

  );
}
