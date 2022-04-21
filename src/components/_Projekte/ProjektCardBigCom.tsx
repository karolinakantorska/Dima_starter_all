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
import useResponsive from '../../hooks/useResponsive';

type MemberCardProps = {
  id: string;
  name: string;
  role: string | undefined;
  avatar: string;
};

export function ProjektCardBigCom({
  member,
  handleClick,
}: {
  member: MemberCardProps;
  handleClick: any;
}) {
  const { name, role, avatar, id } = member;

  return (
    <>
      <Box
        onClick={handleClick}
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
            gridColumn: 'span 2',
            gridRow: 'span 2',
          }}
        >
          <Image src={avatar} alt={name} ratio="16/9" />
        </Card>
        <Card sx={{ p: 4, ml: '-12px' }}>
          <Typography variant="overline" sx={{ mt: 2, mb: 0.5 }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            {role}
          </Typography>
        </Card>
        <Card sx={{ p: 4, ml: '-12px', backgroundColor: 'background.default' }} />
      </Box>
    </>
  );
}
