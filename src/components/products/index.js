import { Box, Button, Container, Grid } from "@mui/material";
import { products } from "../../data";
// import SingleProduct from "./SingleProduct";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// import SingleProductDesktop from "./SingleProductDesktop";

export default function Products(){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const renderProducts = products.map(product => (
        <Grid item key={product.id} display="flex" flexDirection={"column"} 
        alignItems="center">

        </Grid>
    ))
    return(
        <Container>
            <Grid
                container
                justifyContent={"center"}
                sx={{margin: '20px 4px 10px 4px'}}
            >
                {renderProducts}
            </Grid>
        </Container>
    )
}