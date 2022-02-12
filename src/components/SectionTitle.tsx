import React from 'react';
import { Divider, Typography, Hidden, Box } from '@mui/material';

interface Props {
    title: string;
    subTitle: string;
    mode?: 'light' | 'dark';
}
const SectionTitle: React.FC<Props> = ({ mode = 'light', ...props }) => {
    const { title, subTitle } = props;
    const color = mode === 'light' ? 'primary' : 'primary.contrastText';
    return (
        <Box
            sx={{
                mb: 3,
                borderBottomWidth: 2,
                borderBottomStyle: 'solid',
                borderBottomColor: (theme) =>
                    mode === 'light' ? theme.palette.divider : theme.palette.primary.contrastText,
            }}
        >
            <div>
                <Typography component="span" variant="h3" sx={{ mr: 2, fontWeight: 'bold' }} color={color}>
                    {title}
                </Typography>
                <Hidden smUp>
                    <br />
                </Hidden>
                <Typography component="span" variant="h6" color={color}>
                    {subTitle}
                </Typography>
            </div>
        </Box>
    );
};
export default SectionTitle;
