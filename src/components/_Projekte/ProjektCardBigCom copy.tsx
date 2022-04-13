import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
//import Image from '../../components/Image';
// hooks
import useResponsive from '../../hooks/useResponsive';

type MemberCardProps = {

  id: string;
  name: string;
  role: string | undefined;
  avatar: string;

};

export function ProjektCardBigCom({ member, big, direction }: { member: MemberCardProps, big: boolean, direction: 'column-reverse' | "column" | "row" }) {
  const { name, role, avatar, id } = member;
  const isDesktop = useResponsive('up', 'lg');
  if (big) {
    direction = "row";
  }
  return (
    <>
      <Grid
        container
        direction={direction}
        justifyContent="center"
        alignItems="flex-start"
        sx={isDesktop && big ? { width: 1180, height: 500 } : { width: 380, height: 430 }}
      >
        <Grid item>
          <Card
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