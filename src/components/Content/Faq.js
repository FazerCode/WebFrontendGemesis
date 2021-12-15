import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className="faqs" id="faqs" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h1>FAQs</h1>
            <div style={{ flex: 1, position: 'relative', left: '15%', right: '15%', width: '70%'}}>
                <Accordion>
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
                <Accordion>
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
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
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
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
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
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
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
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
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
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
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
