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
                <h1 style={{ marginLeft: 60 }}>Roadmap</h1>
                <div style={{ marginTop: 45 }}>
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="h6"
                            >
                                25 %
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{bgcolor: 'secondary.main' }} />
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
                                <Typography variant="h6" component="span">
                                    Giveaway
                                </Typography>
                                <Typography>Giveaway of 10 GΞMΞSIS NFTs
                                    to the first 25% of the minters</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="h6"
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
                                <Typography variant="h6" component="span">
                                    Donation
                                </Typography>
                                <Typography>5 ETH Donation for amputee victims of blood diamonds
                                </Typography>
                                <Typography>
                                    1 ETH to a lucky community member
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="h6"
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
                                <Typography variant="h6" component="span">
                                    Eternal Stones
                                </Typography>
                                <Typography>Drop of the 5 Eternal stones which come with very unique Utility</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="h6"
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
                                <Typography variant="h6" component="span">
                                    Passive Income
                                </Typography>
                                <Typography>Deploying the smart contract which distributes the secondary market sales to all GΞMΞSIS holders</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="h6"
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
                                <Typography variant="h6" component="span">
                                    GΞMΞSIS Factory
                                </Typography>
                                <Typography style={{marginBottom: 25}}>Starting to implement GΞMΞSIS Factory
                                    ... stay tuned</Typography>
                                <Typography variant="h6" component="span">
                                    Team Tattoos
                                </Typography>
                                <Typography>The GΞMΞSIS team is getting a tattoo with the GΞMΞSIS logo
                                    to show the dedication to the project. </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;