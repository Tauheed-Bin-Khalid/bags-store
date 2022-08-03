import { useTheme } from "@mui/material/styles"; 
import {Typography,useMediaQuery} from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";


export default function Banner() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return(
        <BannerContainer>
            <BannerImage src="https://m.facebook.com/mybagsitaly/"></BannerImage>
            <BannerContent>
                <Typography variant='h6'>
                    Huge Collection
                </Typography>
                <BannerTitle>New Bags</BannerTitle>
                <BannerDescription>This is a bag</BannerDescription>
            </BannerContent>
        </BannerContainer>
    )

}