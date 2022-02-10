import { Box, Card, CardContent, CardProps, Chip, Typography } from '@mui/material';
import React from 'react';

interface Props extends CardProps {
    title: string;
    techs: string[];
}
const SkillCard: React.FC<Props> = (props) => {
    const { title, techs, ...cardProps } = props;
    return (
        <Card variant="outlined" sx={{ height: '100%', background: 'rgba(255,255,255,.55)' }}>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
            </CardContent>
            <CardContent>
                {techs.map((tech) => (
                    <Chip key={tech} label={tech} sx={{ mr: 1, mb: 1 }} />
                ))}
            </CardContent>
        </Card>
    );
};
export default SkillCard;
