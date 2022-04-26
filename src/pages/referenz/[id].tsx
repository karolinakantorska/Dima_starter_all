import { ReactElement } from 'react';
import { useRouter } from 'next/router';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { OneProjectCom } from 'src/components/_Projekte/OneProjectCom';
import AnimatedStartLayout from 'src/layouts/animated/AnimatedStartLayout';
import { _mockProjekts } from 'src/_mock/referenzen/referenzen';
import { RootStyle } from 'src/components/_Main/RootStyle';


export default function Referenz() {
  const router = useRouter();
  const { id } = router.query;
  //console.log('id:', id);
  const project = _mockProjekts.filter((project) => project.id === id);
  console.log('project', project);
  return (

    <AnimatedStartLayout>
      <Page title="Projekte | Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          <OneProjectCom project={project[0]} />
        </RootStyle>

      </Page>
    </AnimatedStartLayout>

  );
}
