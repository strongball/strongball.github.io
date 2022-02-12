import React from 'react';

import { Box, Container, Divider, Grid, Grow, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import SkillCard from './SkillCard';
import SectionTitle from './SectionTitle';
import { Computer, Insights, Web } from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';

interface Props {
    offset: number;
}
const SkillSection: React.FC<Props> = (props) => {
    const { offset } = props;
    const theme = useTheme();
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.8,
        triggerOnce: true,
    });

    return (
        <Box ref={ref} sx={{ mb: 4 }}>
            <svg
                style={{ width: '100%' }}
                viewBox="0 0 800 100"
                preserveAspectRatio="none"
                fill={theme.palette.primary.light}
            >
                <path
                    opacity={0.5}
                    d="M0.00,30.00 C100.00,100.00 349.20,-50.00 800.00,50.00 L800.00,101.00 L0.00,101.00 Z"
                />
                <path
                    opacity={1}
                    d="M0.00,50.00 C100.00,130.00 349.20,-30.00 800.00,50.00 L800.00,101.00 L0.00,101.00 Z"
                />
            </svg>
            <Box sx={{ mt: -2, display: 'flex', alignItems: 'center', background: theme.palette.primary.light }}>
                <Container>
                    <SectionTitle title="SKILL" subTitle="技能" mode="dark" />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Grow in={inView}>
                                <div>
                                    <SkillCard
                                        logo={<Computer style={{ fontSize: 96 }} />}
                                        title="程式開發"
                                        desc="擅長多種程式語言，能根據各種情境使用最適合的開發方式。"
                                        techs={['JavaScript', 'TypeScript', 'C', 'Java', 'Python', 'C#', 'SQL']}
                                    />
                                </div>
                            </Grow>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grow in={inView}>
                                <div>
                                    <SkillCard
                                        logo={<Web style={{ fontSize: 96 }} />}
                                        title="網頁設計"
                                        desc="前端網頁開發為主，同時也能開發後端程式。"
                                        techs={['vue', 'Nuxtjs', 'React', 'Nextjs', 'Restful', 'Graphql']}
                                    />
                                </div>
                            </Grow>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grow in={inView}>
                                <div>
                                    <SkillCard
                                        logo={<Insights style={{ fontSize: 96 }} />}
                                        title="資料分析"
                                        desc="研究多種資料分析模型、方法，可用影像辨識、文字分析還有數據上的統計、預測。"
                                        techs={['Pytorch', 'Tensorflow', '自然語言', '影像辨識']}
                                    />
                                </div>
                            </Grow>
                        </Grid>
                    </Grid>
                    {/* <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <SkillCard
                                title="程式語言"
                                techs={['JavaScript', 'TypeScript', 'C', 'Java', 'Python', 'C#', 'SQL']
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
                    </Grid> */}
                </Container>
            </Box>
            <svg
                style={{ width: '100%' }}
                viewBox="0 0 800 100"
                preserveAspectRatio="none"
                fill={theme.palette.primary.light}
            >
                <path opacity={0.5} d="M0.00,30.00 C150.00,80.00 349.20,20.00 800.00,80.00 L800.00,0.00 L0.00,0.00 Z" />
                <path opacity={1} d="M0.00,50.00 C350.00,100.00 349.20,-30.00 800.00,50.00 L800.00,0.00 L0.00,0.00 Z" />
            </svg>
        </Box>
    );
};
export default SkillSection;
