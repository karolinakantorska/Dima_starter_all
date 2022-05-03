import { m } from 'framer-motion';
import { useRouter } from 'next/router';

//import Image from 'next/image';
// @mui
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { varHover, varTranHover } from '../animate';
import Image from '../../components/Image';
// hooks
import useResponsive from '../../hooks/useResponsive';
import Link from 'next/link';
import { ProjectType } from 'src/utils/TS/interface';
import { TextCardCom } from './textCardCom';
// utils
import { firstLettersBig } from '../../utils/Text/textUtils';
/*
function randomWithProbability() {
  const notRandomNumbers = [0, 0, 0, 0, 0, 0, 10, 1, 1, 1];
  const idx = Math.floor(Math.random() * notRandomNumbers.length);
  return notRandomNumbers[idx];
}
*/
export function ProjektCardCom({
  project,
  gridRow,
  big,
  rewerseBig,
}: {
  project: ProjectType;
  gridRow: '1' | '2';
  big: boolean;
  rewerseBig: boolean;
}) {
  const { id, photo } = project;
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  //const random = randomWithProbability();
  const gridAutoRows = isSmall ? '' : '1fr';
  /*
  let big = false;
  if (isDesktop) {
    if (random) {
      big = true;
    }
  }
  */

  const gridColumn = () => (rewerseBig ? '3/span 3' : '1/span 3');
  const mr = () => (rewerseBig ? '0px' : '-12px');
  const ml = () => (rewerseBig ? '-12px' : '0px');
  const boxSmallProps = {
    display: 'grid',
    gridAutoRows: { gridAutoRows },
    overflow: 'hidden',
  }
  const boxBigProps = {
    gridColumn: 'span 3',
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: ' 1fr 12px 1fr 12px 1fr',
    columnGap: '0px',
    gridAutoRows: 'repeat(2, 1fr)',
    overflow: 'hidden',
  }
  const cardSmallProps = {
    gridRow: { gridRow },
  }
  const cardBigProps = {
    gridColumn: gridColumn,
    gridRow: 'span 2',
    //ml: ml,
    //mr: mr,
  }
  return (!isDesktop ?
    (<Link href={`/referenz/${id}`}>
      <Box
        sx={{ ...boxSmallProps }}
        component={m.div}
        whileHover="hover"
      >
        <Card
          component={m.div}
          variants={varHover(1.05)}
          transition={varTranHover()}
          sx={{ ...cardSmallProps }}
        >
          <Image src={photo.url} alt={photo.alt} ratio="16/9" />
        </Card>
        <TextCardCom project={project} />
      </Box>
    </Link>
    )
    :
    (<Link href={`/referenz/${id}`}>
      <Box
        sx={big ? {
          ...boxBigProps
        } : { ...boxSmallProps }}
        component={m.div}
        whileHover="hover"
      >
        <Card
          component={m.div}
          variants={varHover(1.05)}
          transition={varTranHover()}
          sx={big ? {
            ...cardBigProps
          } : { ...cardSmallProps }}
        >
          <Image src={photo.url} alt={photo.alt} ratio="16/9" />
        </Card>
        <TextCardCom project={project} ml={ml} mr={mr} big={big} rewerseBig={rewerseBig} />

      </Box>
    </Link>
    )
  );
}
/*
<Image src={avatar} alt={name} ratio="16/9" />
*/
