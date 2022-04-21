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

type MemberCardProps = {
  id: string;
  name: string;
  role: string | undefined;
  avatar: string;
};
function randomWithProbability() {
  const notRandomNumbers = [0, 0, 0, 0, 0, 0, 10, 1, 1, 1];
  const idx = Math.floor(Math.random() * notRandomNumbers.length);
  return notRandomNumbers[idx];
}

export function ProjektCardCom({
  member,
  i,
  gridRow,
}: {
  member: MemberCardProps;
  i: number;
  gridRow: '1' | '2';
}) {
  const { name, role, avatar, id } = member;

  const router = useRouter();
  const isDesktop = useResponsive('up', 'lg');
  const isSmall = useResponsive('down', 'sm');
  const random = randomWithProbability();
  const gridAutoRows = isSmall ? '' : '1fr';
  let big = false;
  if (isDesktop) {
    if (random) {
      big = true;
    }
  }
  const handleClick = () => {
    router.push(`/referenz/${id}`);
  };

  return (
    <>
      {big ? (
        <ProjektCardBigCom member={member} />
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
              <Image src={avatar} alt={name} ratio="16/9" />
            </Card>
            <Card sx={{ p: 4 }}>
              <Typography variant="overline" sx={{ mt: 2, mb: 0.5 }}>
                {name}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                {role}
              </Typography>
            </Card>
          </Box>
        </Link>
      )}
    </>
  );
}
/*
<Image src={avatar} alt={name} ratio="16/9" />
*/
