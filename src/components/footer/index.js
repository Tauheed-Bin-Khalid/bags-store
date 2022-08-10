import styled from "@emotion/styled";
import {
    Grid,
    List,
    ListItemText,
    Typography,
    Button,
    Stack,
    Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {

    return (

        <Box
            sx={{
                background: Colors.shaft,
                color: Colors.white,
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px' },

            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About us</FooterTitle>
                    <Typography variant="caption2">
                        Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
                        incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud.
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,
                            color: Colors.dove_gray,
                        }}
                    >
                        <FacebookIcon sx={{ mr: 1 }} />
                        <TwitterIcon sx={{ mr: 1 }} />
                        <InstagramIcon />
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">About us </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">Order Tracking </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">Privacy &amp; Policy </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">Terms &amp; Conditions </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">my account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">Login </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">My cart</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">My account</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">my wishlist </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                <FooterTitle variant="body1">news letter</FooterTitle>

                    <Stack>
                        <SubscribeTf
                            color='primary'
                            label='Email Address'
                            variant="standard"
                       />
                       <Button 
                            startIcon={<SendIcon sx={{color: Colors.white}}/>}
                            sx={{ mt: 4, mb: 4}}
                            variant="contained"
                            >
                              Subscribe      
                       </Button>

                    </Stack>

                </Grid>
            </Grid>
        </Box>
    )
}