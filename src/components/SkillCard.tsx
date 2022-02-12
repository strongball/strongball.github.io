import { Box, Card, CardContent, CardProps, Chip, Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
    logo: React.ReactNode;
    title: string;
    desc: string;
    techs: string[];
}
const SkillCard: React.FC<Props> = (props) => {
    const { logo, title, desc, techs } = props;
    return (
        <Box sx={{ pa: 3, height: '100%', color: (theme) => theme.palette.primary.contrastText }}>
            <Grid container spacing={2}>
                <Grid item>
                    <div style={{ height: 128, width: 128, textAlign: 'center' }}>{logo}</div>
                </Grid>
                <Grid item flex={1}>
                    <Typography variant="h5" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        {desc}
                    </Typography>
                    {/* <Typography variant="body1">
                        {techs.map((tech) => (
                            <Chip key={tech} size="small" label={`#${tech}`} sx={{ mr: 1, mb: 1 }} />
                        ))}
                    </Typography> */}
                </Grid>
            </Grid>
        </Box>
    );
};
export default SkillCard;
