import * as React from 'react';
import {
    Box,
    CardMedia,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    Link,
    ThemeProvider,
    Typography
} from "@mui/material";
import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { MdFmdGood } from "react-icons/md"

// import {ContainerDet} from "../Contents/ContainerBox";
// import ArticleDialog from "./ArticleDialog";
// import {ColorLine} from "../Contents/Ntag";

const theme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                        
                    }}
                    fontFamily={'Ubuntu'}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            gutterBottom
                            fontFamily={'Ubuntu'}
                        >
                            P4sTela Portfolio
                        </Typography>
                        <Typography variant="h5" align="center"  paragraph fontFamily={'Ubuntu'} fontStyle='italic'>
                            Hello!
                        </Typography>
                        <Grid container justifyContent="center">
                             <CardMedia
                                 component="img"
                                 image="https://github.com/P4sTela.png"
                                 sx={{
                                     width: '50%'
                                 }}
                             />
                        </Grid>
                        <br/>
                        <Grid container justifyContent="center">
                            <b>P4sTela (ぱすてら)</b>
                        </Grid>
                        <br/>
                        <Grid container justifyContent="center" alignItems={'center'}>
                            <FaGithub />
                            {"　"}
                            <Link color="inherit" href="https://github.com/P4sTela">
                                P4sTela
                            </Link>
                        </Grid>
                        <br/>
                        <Grid container justifyContent="center" alignItems={'center'}>
                            <FaTwitter />
                            {"　"}
                            <Link color="inherit" href="https://twitter.com/P4sTela">
                                P4sTela
                            </Link>
                        </Grid>
                        <br/>
                        <Grid container justifyContent="center" alignItems={'center'}>
                            <MdFmdGood />
                            {"　"}
                            Tokyo, Japan
                        </Grid>
                    </Container>
                </Box>
                {/* <ColorLine color={"gray"} margin={"5%"}/> */}
            </main>
        </ThemeProvider>
    );

}