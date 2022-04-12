import  Card  from "@mui/material/Card";
import  Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from '../../components/Image';

type MemberCardProps = {
    member: {
      id: string;
      name: string;
      role: string | undefined;
      avatar: string;
    };
  };

export function ProjektCardSmallCom({ member }: MemberCardProps) {
    const { name, role, avatar } = member;
    return (
      <Card key={name} sx={{  width:380, height:430}}>
          <Image alt={avatar} src={avatar} ratio="16/9"  />
          <Box sx={{ p:4 }} >
          <Typography variant="overline" sx={{ mt: 2, mb: 0.5 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          {role}
        </Typography>
          </Box>        
         </Card>
    );
}