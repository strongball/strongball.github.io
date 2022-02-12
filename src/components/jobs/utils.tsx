import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardContent } from '@mui/material';

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
    company: string;
    position: string;
}
export const JobCard: React.FC<Props> = (props) => {
    const { company, position } = props;
    return (
        <Card variant="outlined" sx={{ background: 'rgba(255,255,255,0.3)' }}>
            <CardContent>
                <Box sx={{ mb: 2 }}>
                    <CompanyTitle>{company}</CompanyTitle>
                    <PositionTitle>{position}</PositionTitle>
                </Box>
                {props.children}
            </CardContent>
        </Card>
    );
};
