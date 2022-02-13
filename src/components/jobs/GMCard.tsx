import { Box, Card, CardContent, Chip, Grid, Hidden, Typography } from '@mui/material';
import React from 'react';
import { JobCard } from './utils';

import logo from '../../asserts/gm.png';

interface Props {}
const GMCard: React.FC<Props> = (props) => {
    const techs: string[] = [
        'Vue',
        'Nuxt',
        'Javascript',
        'Typescript',
        'GraphQL',
        'SEO',
        'i18n',
        '金流 (ECPay / Paypal / Stripe)',
        'Google Map',
        'Authentication (Facebook / Google Login)',
    ];
    return (
        <JobCard logo={logo} company="翔濬科技股份有限公司" position="前端工程師">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <Typography variant="h6" gutterBottom>
                        開發活動報名、場地租借平台
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        服務活動舉辦人，能夠在平台上推廣活動並且能夠線上報名參加。也能在上面找到適合的場地舉辦活動。一站滿足活動舉辦人的需求。
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        負責網站前端，從0開始開發所有功能。
                    </Typography>
                    <Box mt={3}>
                        {techs.map((tech) => (
                            <Chip key={tech} label={`# ${tech}`} sx={{ mr: 1, mb: 1 }} size="small" />
                        ))}
                    </Box>
                </Grid>
                <Hidden mdDown>
                    <Grid item xs={0} sm={4}>
                        <div style={{ height: 300, width: '100%', background: 'gray' }} />
                    </Grid>
                </Hidden>
            </Grid>
        </JobCard>
    );
};
export default GMCard;
