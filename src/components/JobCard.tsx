import { Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {}
const JobCard: React.FC<Props> = (props) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <Typography variant="h5">公司名稱</Typography>
                <div style={{ height: 300, width: '100%', background: 'gray' }} />
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography variant="body1">
                    開發公司內部系統。整理公司內各種營運數據。針對公司運作的流程開發軟體，讓員工能以更快的速度完成日常作業。
                    使用技能: React、Typescript、Graphql、Electron
                </Typography>
            </Grid>
        </Grid>
    );
};
export default JobCard;
