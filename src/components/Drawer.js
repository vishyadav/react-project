import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/Drawer.css'

const Drawer = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

  return (
    <React.Fragment>
    <div id='category_menu' className='row'>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{flexShrink: 0 }}>
          <ul>
            <li>
                <a className='d-flex' href='javascript:void(0)'>
                    <section className='align-self-center pe-3'><img src='https://cdn.dmart.in/images/categories/aesc-grocerycore.svg' style={{width:'35px',height:'35px',borderRadius:'50%',border:'1px solid #ccc'}}/></section>
                    <section>
                        <span>Grocery</span><br/>
                        <small>Dals, Pulsees, Dry Fruits.. +6</small>
                    </section>
                </a>
            </li>
            </ul>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
                <li>
                    <a href='javascript:void(0)'><span>Dals</span></a>
                </li>
                <ul>
                    <li>
                        <a href='javascript:void(0)'><span>Chana Dal</span></a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'><span>Moong Dal</span></a>
                    </li>
                </ul>
                <li>
                    <a href='javascript:void(0)'>Pulses</a>
                </li>
                <ul>
                    <li>
                        <a href='javascript:void(0)'><span>Rajma</span></a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'><span>Chana</span></a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'><span>Urad</span></a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'><span>Moong</span></a>
                    </li>
                </ul>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, 
          </Typography>
        </AccordionDetails>
      </Accordion> 


        <ul>
            <li>
                <a className='d-flex' href='javascript:void(0)'>
                    <section className='align-self-center pe-3'><img src='https://cdn.dmart.in/images/categories/aesc-grocerycore.svg' style={{width:'35px',height:'35px',borderRadius:'50%',border:'1px solid #ccc'}}/></section>
                    <section>
                        <span>Grocery</span><br/>
                        <small>Dals, Pulsees, Dry Fruits.. +6</small>
                    </section>
                </a>
            </li>
            <ul>
                <li>
                    <a href='javascript:void(0)'><span>Dals</span></a>
                </li>
                <ul>
                    <li>
                        <a href='javascript:void(0)'><span>Chana Dal</span></a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'><span>Moong Dal</span></a>
                    </li>
                </ul>
                <li>
                    <a href='javascript:void(0)'>Pulses</a>
                </li>
                <ul>
                    <li>
                        <a href='javascript:void(0)'><span>Rajma</span></a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'><span>Chana</span></a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'><span>Urad</span></a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'><span>Moong</span></a>
                    </li>
                </ul>
            </ul>
        </ul>
    </div>
  </React.Fragment>
  )
}

export default Drawer