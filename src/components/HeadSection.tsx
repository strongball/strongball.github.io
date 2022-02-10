import React from 'react';
import { AppBar, Box, Button, Card, Container, Grid, IconButton, Link, Typography } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/system';
import { ParallaxLayer } from '@react-spring/parallax';

const HeadAvatar = styled('div')((props: { image: string }) => ({
    width: 200,
    height: 200,
    margin: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: 16,
    backgroundImage: `url('${props.image}')`,
}));
interface Props {
    offset: number;
}
const HeadSection: React.FC<Props> = (props) => {
    const { offset } = props;
    return (
        <ParallaxLayer
            offset={offset}
            speed={0.5}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Container>
                <Grid
                    container
                    justifyContent="center"
                    alignItems={'center'}
                    flexWrap={'wrap'}
                    spacing={{ xs: 2, lg: 2 }}
                >
                    <Grid item xs={12} lg={4}>
                        <HeadAvatar image="https://mui.com/static/images/avatar/1.jpg" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box>
                            <Typography variant="h2" sx={{ fontWeight: '600' }}>
                                製作中....
                            </Typography>
                            <Typography variant="h2" sx={{ fontWeight: '600' }}>
                                王豪逸
                            </Typography>
                            <Typography variant="h5">Hao-Yi, Wang</Typography>
                        </Box>
                        <Box sx={{ pt: 2 }}>
                            <Typography variant="body1">
                                長期研究投資市場動態，透過心理學背景解釋當前心理面，搭配統計背景觀察技術籌碼。
                            </Typography>
                        </Box>
                        <Box sx={{ pt: 3 }}>
                            <Button color="inherit" startIcon={<Email />} sx={{ textTransform: 'none' }}>
                                ms0407954@gmail.com
                            </Button>
                            <Box>
                                <IconButton target={'_blank'} href="https://github.com/strongball">
                                    <GitHub />
                                </IconButton>
                                <IconButton target={'_blank'} href="https://www.linkedin.com/in/strongball/">
                                    <LinkedIn />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ParallaxLayer>
    );
};
export default HeadSection;
