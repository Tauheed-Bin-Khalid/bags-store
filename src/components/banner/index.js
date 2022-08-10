import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";


export default function Banner() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png"></BannerImage>
            <BannerContent>
                <Typography variant='h6'>
                    Huge Collection
                </Typography>
                <BannerTitle>New Bags</BannerTitle>
                <BannerDescription>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
            </BannerDescription>
                <BannerShopButton variant="contained" color="primary">Shop now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )

}