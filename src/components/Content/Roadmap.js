import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { IconContext } from "react-icons";
import { BiDonateHeart } from "react-icons/bi";
import { GiDiamondHard, GiPresent } from "react-icons/gi";
import { FaEthereum } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import Typography from '@mui/material/Typography';

const Roadmap = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className="background2" id="roadmap">
            <div className="roadmap-info roadmap container" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <h1 className="header" >ROADMAP</h1>
                <div style={{ marginTop: 45 }}>
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="h6"
                                fontFamily="Orbitron-Light"
                            >
                                25 %
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary" variant="outlined">
                                    <IconContext.Provider value={{ size: "2.2em" }}>
                                        <div>
                                            <GiPresent />
                                        </div>
                                    </IconContext.Provider>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography variant="h7" color="#B955C3" component="span" fontFamily="Orbitron-Light">
                                    Giveaway
                                </Typography>
                                <Typography fontFamily="Orbitron-Light">Giveaway of 10 GEMESIS NFTs
                                    to the first 25% of the minters</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="h6"
                                fontFamily="Orbitron-Light"
                            >
                                50 %
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary" variant="outlined">
                                    <IconContext.Provider value={{ size: "2.2em" }}>
                                        <div>
                                            <BiDonateHeart />
                                        </div>
                                    </IconContext.Provider>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography variant="h7" color="#B955C3" component="span" fontFamily="Orbitron-Light">
                                    Donation
                                </Typography>
                                <Typography fontFamily="Orbitron-Light">5 ETH Donation for amputee victims of blood diamonds
                                </Typography>
                                <Typography fontFamily="Orbitron-Light">
                                    1 ETH to a lucky community member
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="h6"
                                fontFamily="Orbitron-Light"
                            >
                                75 %
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary" variant="outlined">
                                    <IconContext.Provider value={{ size: "2.2em" }}>
                                        <div>
                                            <GiDiamondHard />
                                        </div>
                                    </IconContext.Provider>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography variant="h7" color="#B955C3" component="span" fontFamily="Orbitron-Light">
                                    Eternal Stones
                                </Typography>
                                <Typography fontFamily="Orbitron-Light">Drop of the 5 Eternal stones which come with very unique Utility</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="h6"
                                fontFamily="Orbitron-Light"
                            >
                                100 %
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary" variant="outlined">
                                    <IconContext.Provider value={{ size: "2.2em" }}>
                                        <div>
                                            <FaEthereum />
                                        </div>
                                    </IconContext.Provider>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography variant="h7" color="#B955C3" component="span" fontFamily="Orbitron-Light">
                                    Re-Distribute
                                </Typography>
                                <Typography fontFamily="Orbitron-Light">
                                    Deploying the smart contract which distributes the secondary market sales to all GEMESIS holders
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="h6"
                                color="#B955C3"
                                fontFamily="Orbitron-Light"
                            >
                                FUTURE
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary" variant="outlined">
                                    <IconContext.Provider value={{ size: "2.2em" }}>
                                        <div>
                                            <IoRocket />
                                        </div>
                                    </IconContext.Provider>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography variant="h7" color="#B955C3" component="span" fontFamily="Orbitron-Light">
                                    Team Tattoos
                                </Typography>
                                <Typography fontFamily="Orbitron-Light" style={{ marginBottom: 25 }}>The GEMESIS team is getting a tattoo with the GEMESIS logo
                                    to show the dedication to the project. </Typography>
                                <Typography variant="h7" color="#B955C3" component="span" fontFamily="Orbitron-Light">
                                    GEMESIS Factory
                                </Typography>
                                <Typography fontFamily="Orbitron-Light">Starting to implement GEMESIS Factory</Typography>
                                <Typography fontFamily="Orbitron-Light">
                                    ... stay tuned</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;