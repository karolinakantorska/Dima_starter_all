import { useState, ReactNode, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components

// _mock_
import { ProjektCardCom } from './ProjektCardCom';
import { _mockProjekts } from '../../_mock/referenzen/referenzen';
import { phaseArray, regionenArray, FilterParams } from '../../utils/TS/interface';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import { useForm } from 'src/utils/myUtils/useForm';
import { filter } from 'src/utils/myUtils/filterFunction';


export function ReferenzenListCom() {
  const [sorted, setSorted] = useState(false);
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';

  const phase = phaseArray.slice(0, -1);
  const regions = regionenArray.slice(0, -1);

  const initialParams: FilterParams = {
    phase: "Alle",
    services: "Alle",
  }
  const { inputs, handleInputChange, } = useForm(initialParams);
  console.log('inputs: ', inputs)
  const filteredProjects = filter(_mockProjekts, inputs);
  //const filteredProjects = _mockProjekts;
  useEffect(() => {
    if (inputs !== initialParams) {
      setSorted(true);
    }

  }, [inputs])
  const MyRadio = ({ text }: { text: string }) => (
    <FormControlLabel
      key={text}
      value={text}
      control={<Radio
        icon={<CropSquareRoundedIcon sx={{ height: 12 }} />}
        checkedIcon={<SquareRoundedIcon sx={{ height: 12 }} />}
      />}
      label={<Typography variant="overline" component="span" color="text.secondary" >{text}</Typography>}
    />)

  return (
    <Container>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={false}
            onChange={handleInputChange}
            name="phase"
          >
            {phase.map((ph) => <MyRadio text={ph} />)}
            {sorted && <MyRadio text='Alle' />}
          </RadioGroup>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center">
          {regions.map((region) =>
            <Typography key={region} variant="overline" component="p" paragraph color="text.secondary">
              {region}
            </Typography>
          )}
        </Stack>

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
      </Grid>
    </Container >
  );
}
