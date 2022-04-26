import { m } from 'framer-motion';
//import Image from 'next/image';
// @mui
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { varHover, varTranHover } from '../animate';
import Image from '../Image';
// hooks
import Link from 'next/link';
import { TextCardCom } from './textCardCom';
import { ProjectType } from 'src/utils/TS/interface';

export function ProjektCardBigCom({
  project,
  rewerseBig,
}: {
  project: ProjectType;
  rewerseBig: boolean;
}) {
  const { id, photo } = project;
  const gridColumn = () => (rewerseBig ? '2/span 2' : '1/span 2');
  const mr = () => (rewerseBig ? '0px' : '-12px');
  const ml = () => (rewerseBig ? '-12px' : '0px');
  return (
    <Link href={`/referenz/${id}`}>
      <Box
        sx={{
          gridColumn: 'span 3',
          display: 'grid',
          gridAutoFlow: 'column',
          gridTemplateColumns: ' 1fr 1fr 1fr',
          columnGap: '12px',
          gridAutoRows: 'repeat(2, 1fr)',
          overflow: 'hidden',
        }}
        component={m.div}
        whileHover="hover"
      >
        <Card
          component={m.div}
          variants={varHover(1.05)}
          transition={varTranHover()}
          sx={{
            gridColumn: gridColumn,
            gridRow: 'span 2',
            ml: ml,
            mr: mr,
          }}
        >
          <Image src={photo.url} alt={photo.alt} ratio="16/9" />
        </Card>
        <TextCardCom project={project} />
        <Card sx={{ p: 4, backgroundColor: 'background.default' }} />
      </Box>
    </Link>
  );
}
