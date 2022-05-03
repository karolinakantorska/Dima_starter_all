// @mui
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { ProjectType } from '../../utils/TS/interface';
import useResponsive from '../../hooks/useResponsive';
import { firstLettersBig } from '../../utils/Text/textUtils';
import { Box } from '@mui/system';

export function TextCardCom({ project, ml,
  mr, big, rewerseBig }: { project: ProjectType }) {
  const { title, location } = project;
  const isDesktop = useResponsive('up', 'lm');

  const cardProps = {
    p: isDesktop ? 4 : 1.2,
  }

  const cardPropsBig = {
    gridColumn: big ? rewerseBig ? '1 / span 1' : '5 / span 1' : 'span 1',
  }

  return (
    <>
      <Card sx={{ ...cardProps, ...cardPropsBig }}  >
        <Box sx={{ backgroundColor: 'red', }}>
          <Typography variant="h6" component="h2" sx={{
            mt: 2, mb: 0.5,
          }}>
            {firstLettersBig(title)}
          </Typography>
          <Typography variant="overline" component="h6" sx={{ mb: 2, color: 'text.secondary', }}>
            {location}
          </Typography>
        </Box>
        <Box>
        </Box>
      </Card>
      {
        big && <Card sx={{
          backgroundColor: 'background.default',
          gridColumn: 'span 2'
        }} />
      }
    </>

  );
}
