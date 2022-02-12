import React from 'react';
import { Box, Button, Container, Grid, IconButton, Slide, Typography } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/system';
import { ParallaxLayer } from '@react-spring/parallax';
import MyPicture from '../asserts/me.png';

const HeadAvatar = styled('div')((props: { image: string }) => ({
    width: 250,
    height: 250,
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
        <div
            style={{
                position: 'relative',
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
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
                        <HeadAvatar image={MyPicture} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box>
                            <Slide direction="left" in>
                                <Typography variant="h2" sx={{ fontWeight: '600' }}>
                                    王豪逸
                                </Typography>
                            </Slide>
                            <Slide direction="left" in timeout={500}>
                                <Typography variant="h5">Hao-Yi, Wang</Typography>
                            </Slide>
                        </Box>
                        <Box sx={{ pt: 2 }}>
                            <Slide direction="up" in timeout={500}>
                                <Typography variant="body1">
                                    一名前端工程師，期望能打造出對使用者友善的操作環境。
                                    <br />
                                    碩士主要研究項目是機器學習，用於影像辨識、自然語言、金融分析。
                                </Typography>
                            </Slide>
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
        </div>
    );
};
export default HeadSection;
