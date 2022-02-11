import React from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

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
import GMCard from '../components/jobs/GMCard';
import ClinicoCard from '../components/jobs/ClinicoCard';

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

                    <JobSection offset={2} jobCards={[<ClinicoCard key={'clinico'} />, <GMCard key={'gm'} />]} />
                    {/* in component sticky no working correct */}
                    <ParallaxLayer
                        className="outer"
                        style={{ height: 'fit-content' }}
                        sticky={{ start: 2, end: 5 }}
                        speed={0}
                    >
                        <Container style={{ background: '#87BCDE' }}>
                            <Box>
                                <Typography component="span" variant="h2" sx={{ mr: 2 }}>
                                    EXPERIENCE
                                </Typography>
                                <Typography component="span" variant="h4" color={'text.secondary'}>
                                    工作經歷
                                </Typography>
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
