import React from 'react';

import { Box, Container, Divider, Grid, Typography } from '@mui/material';

import SkillCard from './SkillCard';
import { ParallaxLayer } from '@react-spring/parallax';
interface Props {
    offset: number;
}
const SkillSection: React.FC<Props> = (props) => {
    const { offset } = props;
    return (
        <>
            <ParallaxLayer speed={-0.2} offset={offset}>
                <svg viewBox="0 0 800 100" preserveAspectRatio="none" fill="#87BCDE">
                    <path
                        opacity={0.5}
                        d="M0.00,30.00 C100.00,100.00 349.20,-50.00 800.00,50.00 L800.00,100.00 L0.00,100.00 Z"
                    />
                    <path
                        opacity={1}
                        d="M0.00,50.00 C100.00,130.00 349.20,-30.00 800.00,50.00 L800.00,100.00 L0.00,100.00 Z"
                    />
                </svg>
                <div style={{ width: '100%', height: '100%', marginTop: -10, background: '#87BCDE' }} />
            </ParallaxLayer>
            <ParallaxLayer
                offset={offset}
                speed={0.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Container>
                    <Box>
                        <Typography variant="h2">SKILL</Typography>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <SkillCard
                                title="程式語言"
                                techs={['JavaScript', 'TypeScript', 'C', 'Java', 'Python', 'C#', 'SQL']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <SkillCard
                                title="網頁技能"
                                techs={['vue', 'Nuxtjs', 'React', 'Nextjs', 'Restful', 'Graphql']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <SkillCard title="機器學習" techs={['Pytorch', 'Tensorflow', '自然語言', '影像辨識']} />
                        </Grid>
                    </Grid>
                </Container>
            </ParallaxLayer>
        </>
    );
};
export default SkillSection;
