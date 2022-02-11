import { Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {}
const JobCard: React.FC<Props> = (props) => {
    return (
        <Grid container spacing={8}>
            <Grid item xs={12} sm={4}>
                <Typography variant="h4" gutterBottom>
                    翔濬科技股份有限公司
                </Typography>
                <div style={{ height: 300, width: '100%', background: 'gray' }} />
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography variant="body1" gutterBottom>
                    開發活動報名、場地租借平台
                    <br />
                    服務活動舉辦人，能夠在平台上推廣活動並且能夠線上報名參加。也能在上面找到適合的場地舉辦活動。一站滿足活動舉辦人的需求。
                </Typography>
                <Typography variant="body1" gutterBottom>
                    負責網站前端，從0開始開發所有功能。
                    <ol>
                        <li>Vue.js / Nuxt.js</li>
                        <li>Javascript / Typescript</li>
                        <li>SEO</li>
                        <li>GraphQL</li>
                        <li>金流 (ECPay / Paypal / Stripe)</li>
                        <li>Google Map</li>
                        <li>Authentication (Facebook / Google Login)</li>
                        <li>i18n</li>
                    </ol>
                </Typography>
            </Grid>
        </Grid>
    );
};
export default JobCard;
