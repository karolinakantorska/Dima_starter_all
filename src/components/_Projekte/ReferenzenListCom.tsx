import { useState, ReactNode, useEffect } from 'react';
import { phaseArray, regionenArray, FilterParams } from '../../utils/TS/interface';
// @mui
import { Box, Container, Grid, Typography } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import { ProjektCardCom } from './ProjektCardCom';
// Icons
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// _mock_
import { _mockProjekts } from '../../_mock/referenzen/referenzen';
// utils
import { useForm } from 'src/utils/myUtils/useForm';
import { filter } from 'src/utils/myUtils/filterFunction';
import MaxWidthDialog from '../../sections/overview/mui/dialog/MaxWidthDialog';


export function ReferenzenListCom() {
  const initialInputs = { param: "Alle" }
  const [sorted, setSorted] = useState(false);
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';

  const phase = phaseArray.slice(0, -1);
  const regions = regionenArray.slice(0, -1);

  const { inputs, handleInputChange, resetInputs } = useForm({ param: "Alle" });

  const filteredProjects = filter(_mockProjekts, inputs);
  //const filteredProjects = _mockProjekts;
  // console.log('inputs', inputs)
  // console.log('filteredProjects', filteredProjects)
  useEffect(() => {
    if (inputs.param !== initialInputs.param) {
      setSorted(true);
    }
  }, [inputs])
  const MyRadio = ({ text }: { text: string }) => (
    <FormControlLabel

      value={text}
      control={<Radio
        icon={
          <CropSquareRoundedIcon
            sx={{
              height: 12
            }}
          />
        }
        checkedIcon={
          <SquareRoundedIcon
            sx={{
              height: 12
            }}
          />
        }
      />}
      label={
        <Typography
          variant="overline"
          component="span"
          color={
            text === inputs.param
              ? 'dima'
              : 'text.secondary'
          }
          sx={{
            ml: -1.1,
          }}
        >
          {text}
        </Typography>
      }
    />)
  const MyRadioReset = () => (
    <FormControlLabel
      sx={{}}
      value={'Alle'}
      control={<Radio
        icon={
          <CloseRoundedIcon />
        }
        checkedIcon={
          <CloseRoundedIcon />
        }
      />}
      label=''
    />)
  return (
    <Container >
      <Grid container direction="column" justifyContent="center" spacing={2} sx={{
        mt: 0
      }}>
        <Grid container direction="row" justifyContent="center" spacing={2} sx={{
          mt: 0
        }}>
          <Grid item>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={false}
              onChange={handleInputChange}
              name="param"
              sx={{ maxWidth: 450 }}
            >
              <Grid container direction="row" justifyContent="space-between">
                {phase.map((ph) => <MyRadio text={ph} key={ph} />)}
                {sorted && <MyRadioReset />}
              </Grid>
              <Grid container direction="row" justifyContent="space-between">
                {regions.map((region) => <MyRadio text={region} key={region} />)}
              </Grid>
            </RadioGroup>
          </Grid>
          <Grid item>

          </Grid>
        </Grid>

        <Grid item>
          <Box
            display="grid"
            gridTemplateColumns={gtc}
            //gridAutoFlow="dense"
            columnGap="12px"
            rowGap="20px"
          >
            {filteredProjects.map((project, i) => {
              const divideIn2 = i % 2 == 0 ? true : false;
              const divideIn4 = (i + 1) % 4 == 0 ? true : false;
              const divideIn8 = (i + 1) % 8 == 0 ? true : false;
              return (
                <ProjektCardCom
                  key={project.id}
                  project={project}
                  gridRow={divideIn2 ? '1' : '2'}
                  big={divideIn4 ? true : false}
                  //big={true}
                  rewerseBig={divideIn8 ? true : false}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid >
    </Container >

  );
}
