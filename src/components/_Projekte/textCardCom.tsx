// @mui
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { ProjectType } from '../../utils/TS/interface';
import useResponsive from '../../hooks/useResponsive';
import { firstLettersBig } from '../../utils/Text/textUtils';
export function TextCardCom({ project }: { project: ProjectType }) {
  const { title, location } = project;
  const isDesktop = useResponsive('up', 'lm');

  return (
    <Card sx={isDesktop ? { p: 4 } : { p: 1.2 }}>
      <Typography variant="h6" component="h2" sx={{ mt: 2, mb: 0.5 }}>
        {firstLettersBig(title)}
      </Typography>
      <Typography variant="overline" component="h6" sx={{ mb: 2, color: 'text.secondary' }}>
        {location}
      </Typography>

    </Card>
  );
}
