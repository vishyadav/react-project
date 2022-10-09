import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Category = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <React.Fragment>
<div className='row'>
    <div className='col-md-6 mb-1 p-0'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography>
                <div className='d-flex justify-content-start'>
                    <section className='align-self-center pe-5'><img src="https://cdn.dmart.in/images/categories/aesc-grocerycore.svg"/></section>
                    <section className='align-self-center'>
                        <h5 className='fw-bold'>Grocery</h5>
                        <small>Dals, Pulses, DryFruits.. +6</small>
                    </section>
                </div>
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className='list-unstyled p-2'>
            <li className='my-2'><a href="/Products" className='text-dark fw-bold fs-6'>Dals <small className='text-secondary ms-2'>(26)</small></a></li>
            <li className='my-2'><a href="/Products" className='text-dark fw-bold fs-6'>Pulses <small className='text-secondary ms-2'>(16)</small></a></li>
            <li className='my-2'><a href="/Products" className='text-dark fw-bold fs-6'>Rice <small className='text-secondary ms-2'>(12)</small></a></li>
            <li className='my-2'><a href="/Products" className='text-dark fw-bold fs-6'>Dry Fruits <small className='text-secondary ms-2'>(15)</small></a></li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
</div>

<div className='row'>
    <div className='col-md-6 mb-1 p-0'>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography>
                <div className='d-flex justify-content-start'>
                    <section className='align-self-center pe-5'><img src="https://cdn.dmart.in/images/categories/aesc-dairyandbeveragescore.svg"/></section>
                    <section className='align-self-center'>
                        <h4>Dairy & Beverages</h4>
                        <small>Beverages, Dairy</small>
                    </section>
                </div>
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className='list-unstyled p-2'>
            <li className='my-2'><a href="/Products" className='text-dark fw-bold fs-6'>Beverages <small className='text-secondary ms-2'>(237)</small></a></li>
            <li className='my-2'><a href="/Products" className='text-dark fw-bold fs-6'>Dairy <small className='text-secondary ms-2'>(72)</small></a></li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
</div>
    </React.Fragment>
  )
}

export default Category

