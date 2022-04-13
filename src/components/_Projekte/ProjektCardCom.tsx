import { m } from 'framer-motion';
import Image from "next/image";
// @mui
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// components
import { varHover, varTranHover } from '../animate';
//import Image from '../../components/Image';
// hooks
import useResponsive from '../../hooks/useResponsive';

type MemberCardProps = {
  id: string;
  name: string;
  role: string | undefined;
  avatar: string;
};
function randomWithProbability() {
  let notRandomNumbers = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1];
  let idx = Math.floor(Math.random() * notRandomNumbers.length);
  return notRandomNumbers[idx];
}

export function ProjektCardCom({ member, i, direction, }: { member: MemberCardProps, i: number, direction: 'column-reverse' | "column" | "row" }) {
  const { name, role, avatar, id } = member;
  const isDesktop = useResponsive('up', 'lg');
  const random = randomWithProbability();
  let big = false;
  if (random && i > 3) {
    direction = "row";
    big = true;
  }
  return (
    <>
      <Grid
        container
        direction={direction}
        justifyContent="center"
        alignItems="flex-start"
        sx={isDesktop && big ? { width: 1180, height: 500 } : { width: 380, height: 430 }}
        component={m.div}
        whileHover="hover"
      >
        <Grid
          item
          sx={{
            overflow: 'hidden',
          }}
        >

          <Card
            component={m.div}
            variants={varHover(1.05)} transition={varTranHover()}
            sx={isDesktop && big ? { width: 800, height: 500, } : { width: 380, height: 214 }}
          >
            <Image src={avatar}
              alt={name}
              layout='fill' />
          </Card>

        </Grid>
        <Grid item>
          <Card
            sx={{ width: 380, height: 216, p: 4 }}
          >
            <Typography variant="overline" sx={{ mt: 2, mb: 0.5 }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
              {role}
            </Typography>
          </Card>
        </Grid>
      </Grid >
    </>

  );
}
/*
<Image src={avatar} alt={name} />

                */