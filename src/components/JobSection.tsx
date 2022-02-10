import React from 'react';

import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { ParallaxLayer } from '@react-spring/parallax';
import JobCard from './JobCard';

interface Props {
    offset: number;
    jobCards: React.ReactNode[];
}
const JobSection: React.FC<Props> = (props) => {
    const { offset, jobCards } = props;
    console.log({ start: offset, end: offset + jobCards.length });
    return (
        <>
            <ParallaxLayer offset={offset} factor={jobCards.length} speed={0} style={{ background: '#87BCDE' }} />
            {jobCards.map((card, index) => (
                <ParallaxLayer
                    key={index}
                    offset={offset + index}
                    speed={-0.2}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Container>
                        <JobCard />
                    </Container>
                </ParallaxLayer>
            ))}
        </>
    );
};
export default JobSection;
