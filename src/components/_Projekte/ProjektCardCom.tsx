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

  const router = useRouter();
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
  return (
    <>
      {big ? (
        <ProjektCardBigCom project={project} rewerseBig={rewerseBig} />
      ) : (
        <Link href={`/referenz/${id}`}>
          <Box
            sx={{
              display: 'grid',
              gridAutoRows: { gridAutoRows },
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
                gridRow: { gridRow },
              }}
            >
              <Image src={photo.url} alt={photo.alt} ratio="6/4" />
            </Card>
            <TextCardCom project={project} />
          </Box>
        </Link>
      )}
    </>
  );
}
/*
<Image src={avatar} alt={name} ratio="16/9" />
*/
