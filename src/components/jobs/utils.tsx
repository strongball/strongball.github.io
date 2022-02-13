import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, Grid } from '@mui/material';

export const CompanyTitle = styled('div')(({ theme }) => ({
    ...theme.typography.h5,
    [theme.breakpoints.only('xs')]: {
        ...theme.typography.h6,
    },
}));
export const PositionTitle = styled('div')(({ theme }) => ({
    ...theme.typography.subtitle1,
    color: theme.palette.text.secondary,
}));

interface Props {
    logo?: string;
    company: string;
    position: string;
}
export const JobCard: React.FC<Props> = (props) => {
    const { logo, company, position } = props;
    return (
        <Card variant="outlined" sx={{ background: 'rgba(255,255,255,0.3)' }}>
            <CardContent>
                <Grid container spacing={{ xs: 2 }} alignItems="center" sx={{ mb: 3 }}>
                    {logo && (
                        <Grid item xs={4} sm={2}>
                            <Box sx={{ width: 'fit-content', margin: 'auto' }}>
                                <img src={logo} height={30} />
                            </Box>
                        </Grid>
                    )}
                    <Grid item>
                        <CompanyTitle>{company}</CompanyTitle>
                        <PositionTitle>{position}</PositionTitle>
                    </Grid>
                </Grid>
                {props.children}
            </CardContent>
        </Card>
    );
};
