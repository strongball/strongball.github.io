import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Box, Container, Divider, Grid, Grow, Typography } from '@mui/material';
import SectionTitle from './SectionTitle';

interface Props {
    offset: number;
    jobCards: React.ReactNode[];
}
const JobSection: React.FC<Props> = (props) => {
    const { offset, jobCards } = props;
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3,
        triggerOnce: true,
    });
    return (
        <Container ref={ref}>
            <SectionTitle title="EXPERIENCE" subTitle="工作經歷" />
            <Grid container spacing={{ xs: 2, sm: 4 }}>
                {jobCards.map((card, index) => (
                    <Grid key={index} item xs={12}>
                        <Grow key={index} in={inView} timeout={1000 * (index + 1)}>
                            <div>{card}</div>
                        </Grow>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default JobSection;
