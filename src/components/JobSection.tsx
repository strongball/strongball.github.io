import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Container, Grid, Grow } from '@mui/material';
import SectionTitle from './SectionTitle';
import ClinicoCard from './jobs/ClinicoCard';
import GMCard from './jobs/GMCard';

interface Props {}
const JobSection: React.FC<Props> = (props) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3,
        triggerOnce: true,
    });
    return (
        <Container ref={ref}>
            <SectionTitle title="EXPERIENCE" subTitle="工作經歷" />
            <Grid container spacing={{ xs: 2, sm: 4 }}>
                <Grid item xs={12}>
                    <Grow in={inView} timeout={1000}>
                        <div>
                            <ClinicoCard />
                        </div>
                    </Grow>
                </Grid>
                <Grid item xs={12}>
                    <Grow in={inView} timeout={2000}>
                        <div>
                            <GMCard />
                        </div>
                    </Grow>
                </Grid>
            </Grid>
        </Container>
    );
};
export default JobSection;
