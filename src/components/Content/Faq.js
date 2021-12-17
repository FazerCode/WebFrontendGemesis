import { React, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className="faqs" id="faqs" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h1>FAQs</h1>
            <div style={{ flex: 1, position: 'relative', left: '15%', right: '15%', width: '70%'}}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{color: 'white', backgroundColor: '#7B2482' }}
                    >
                        <Typography>When is the Mint Date?</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.8)'}}>
                        <Typography>
                            On the 2nd of January 2022 - Yes we start the new Year with a BANG!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{color: 'white', backgroundColor: '#7B2482' }}
                    >
                        <Typography>What is the Mint price?</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.8)'}}>
                        <Typography>
                            0.08 ETH - subject to change
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{color: 'white', backgroundColor: '#7B2482' }}
                    >
                        <Typography>How to get Whitelisted?</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.8)'}}>
                        <Typography>
                            You can either get whitelisted by participating on the invite-contest or by being active on the discord server
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel4a-content"
                        id="panel24-header"
                        style={{color: 'white', backgroundColor: '#7B2482' }}
                    >
                        <Typography>Where can I buy a GΞMΞSIS?</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.8)'}}>
                        <Typography>
                            The mint page will be available on the homepage and announced on Discord shortly before the launch
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                        style={{color: 'white', backgroundColor: '#7B2482' }}
                    >
                        <Typography>How many GΞMΞSIS will be available for sale?</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.8)'}}>
                        <Typography>
                            9669 unique GΞMΞSIS NFTs
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                        style={{color: 'white', backgroundColor: '#7B2482' }}
                    >
                        <Typography>How many traits does GΞMΞSIS have?</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.8)'}}>
                        <Typography>
                            In total there are 8 traits
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel7a-content"
                        id="panel7a-header"
                        style={{color: 'white', backgroundColor: '#7B2482' }}
                    >
                        <Typography>Will there be any free mints?</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.8)'}}>
                        <Typography>
                            Yes, we plan limited free mints for selected NFT project holders.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};
export default Faq;
