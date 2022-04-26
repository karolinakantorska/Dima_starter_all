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
import { ProjektCardBigCom } from './ProjektCardBigCom';
import Link from 'next/link';
import { dima, ProjectType } from 'src/utils/TS/interface';
import { TextCardCom } from './textCardCom';

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
  const isDesktop = useResponsive('up', 'lg');
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
  console.log('big: ', big)
  const gridColumn = () => (rewerseBig ? '2/span 2' : '1/span 2');
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
    gridTemplateColumns: ' 1fr 1fr 1fr',
    columnGap: '12px',
    gridAutoRows: 'repeat(2, 1fr)',
    overflow: 'hidden',
  }
  const cardSmallProps = {
    gridRow: { gridRow },
  }
  const cardBigProps = {
    gridColumn: gridColumn,
    gridRow: 'span 2',
    ml: ml,
    mr: mr,
  }
  return (

    <Link href={`/referenz/${id}`}>
      <>
        {!isDesktop && <Box
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

        </Box>}
        {isDesktop && <Box
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
          <TextCardCom project={project} />
          {big && <Card sx={{ p: 4, backgroundColor: 'background.default' }} />}
        </Box>}
      </>
    </Link>
  );
}
/*
<Image src={avatar} alt={name} ratio="16/9" />
*/
