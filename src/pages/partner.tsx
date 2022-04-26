// layouts
import AnimatedEndLayout from '../layouts/animated/AnimatedEndLayout';
// components
import Page from '../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
// _mock_
import { _carouselsMembers } from '../_mock/_others';
import { ReferenzenListCom } from 'src/components/_Projekte/ReferenzenListCom';
import { PartnerCom } from 'src/components/_Company/PartnerCom';

export default function Partner() {
  return (
    <AnimatedEndLayout >
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          <PartnerCom />
        </RootStyle>
      </Page>
    </AnimatedEndLayout>
  );
}

