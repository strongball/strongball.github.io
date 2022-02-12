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
                <HeadSection offset={0} />
                <SkillSection offset={1} />

                <JobSection offset={2} jobCards={[<ClinicoCard key={'clinico'} />, <GMCard key={'gm'} />]} />
            </div>
        </MainLayout>
    );
};
export default HomePage;
