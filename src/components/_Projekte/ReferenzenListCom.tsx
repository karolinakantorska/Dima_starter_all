import { useState, ReactNode, useEffect } from 'react';

// @mui
import { Box, Container, Grid, Typography } from '@mui/material';

// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import { ProjektCardCom } from './ProjektCardCom';

// _mock_
import { _mockProjekts } from '../../_mock/referenzen/referenzen';
// utils
import { useForm } from 'src/utils/myUtils/useForm';
import { filter } from 'src/utils/myUtils/filterFunction';
import { FilterReferenzenCom } from './FilterReferenzenCom';

export function ReferenzenListCom() {
  const initialInputs = { param: "Alle" }
  const [sorted, setSorted] = useState(false);
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';

  const { inputs, handleInputChange, } = useForm({ param: "Alle" });

  const filteredProjects = filter(_mockProjekts, inputs);
  //const filteredProjects = _mockProjekts;
  // console.log('inputs', inputs)
  // console.log('filteredProjects', filteredProjects)
  useEffect(() => {
    if (inputs.param !== initialInputs.param) {
      setSorted(true);
    }
  }, [inputs])

  return (
    <Container disableGutters={true}>
      <Grid container direction="column" justifyContent="center" spacing={2} sx={{
        mt: 0
      }}>
        <FilterReferenzenCom
          sorted={sorted}
          inputs={inputs}
          handleInputChange={handleInputChange}
        />
        <Grid item>
          <Box
            display="grid"
            gridTemplateColumns={gtc}
            //justifyItems='stretch'
            //gridAutoFlow="dense"
            columnGap="12px"
            rowGap="20px"
            className='karolina'
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
                  //big={false}
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
