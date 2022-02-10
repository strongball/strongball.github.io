import React from 'react';

import {
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    Typography,
} from '@mui/material';

import MainLayout from '../layouts/MainLayout';
import HeadSection from '../components/HeadSection';
import SkillSection from '../components/SkillSection';
import JobSection from '../components/JobSection';

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import JobCard from '../components/JobCard';

interface Props {}
const HomePage: React.FC<Props> = (props) => {
    return (
        <MainLayout>
            {/* <HeadSection /> */}
            <div style={{ width: '100%', height: '100vh' }}>
                <Parallax pages={4}>
                    <HeadSection offset={0} />

                    {/* second page background */}
                    <SkillSection offset={1} />

                    <JobSection offset={2} jobCards={[<JobCard key={1} />, <JobCard key={2} />]} />
                    {/* in component sticky no working correct */}
                    <ParallaxLayer className="outer" sticky={{ start: 2, end: 5 }} speed={0}>
                        <Container style={{ background: '#87BCDE' }}>
                            <Box>
                                <Typography variant="h2">Job</Typography>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                        </Container>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </MainLayout>
    );
};
export default HomePage;
