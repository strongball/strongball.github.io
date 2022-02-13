import React from 'react';

import { Box, Chip, Grid, Grow, Hidden, Typography } from '@mui/material';

import { JobCard } from './utils';
import logo from '../../asserts/clinico.png';
interface Props {}
const ClinicoCard: React.FC<Props> = (props) => {
    const techs: string[] = [
        'React',
        'Nextjs',
        'Javascript',
        'Typescript',
        'GraphQL',
        'Restful',
        'Electron',
        'Docker',
        'Jest',
        'Typeorm',
        'Sequelize',
        'SQL',
    ];
    return (
        <JobCard logo={logo} company="科林儀器股份有限公司" position="網頁前端工程師">
            <Grid container spacing={{ xs: 1, md: 3 }}>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" gutterBottom>
                        公司內部系統
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        將舊有的ERP系統移植到新系統，擺脫就舊系統的限制。優化並簡化操作流程，讓使用系統的人不再需要大量的教學才能操作。
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        會員網站
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        讓會員查詢儀器使用資料、購買紀錄。 前端的主要開發者，支援部分的後段功能開發。
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        健保卡讀取工具
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        協助診所報到流程。以Electron開發，串接讀卡機讀取健保卡資料，與現有系統連動，並列印出標籤紙協助後續檢查流程。
                    </Typography>
                    <Box mt={3}>
                        {techs.map((tech) => (
                            <Chip key={tech} label={`# ${tech}`} sx={{ mr: 1, mb: 1 }} size="small" />
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </JobCard>
    );
};
export default ClinicoCard;
