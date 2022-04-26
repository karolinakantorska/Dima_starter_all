
import Link from 'next/link';
import { PATH_PAGE } from 'src/routes/paths';

// components
import Page from '../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
// _mock_
import { _carouselsMembers } from '../_mock/_others';
import Layout from 'src/layouts';


export default function Links() {
  const paths = Object.entries(PATH_PAGE);
  return (

    <Layout >
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          {paths.map((path) => (
            <Link key={`/${path[1]}`} href={`/${path[1]}`}>
              <div>
                <a>{`${path[0]}`}</a>
              </div>
            </Link>
          ))}
        </RootStyle>
      </Page>
    </Layout>
  );
}


