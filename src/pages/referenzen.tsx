// layouts
import AnimatedEndLayout from '../layouts/animated/AnimatedEndLayout';
// components
import Page from '../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
// _mock_
import { _carouselsMembers } from '../_mock/_others';
import { ReferenzenListCom } from 'src/components/_Projekte/ReferenzenListCom';

export default function Referenzen() {
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
