
// @mui
import { styled } from '@mui/material/styles';
import Page from 'src/components/Page';
import Layout from 'src/layouts';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

JobsCom.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default function JobsCom() {
  return (
    <Page title="About us">

      <RootStyle>
        <p>Jobs</p>
      </RootStyle>
    </Page>
  );
}
