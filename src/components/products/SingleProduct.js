// import { Favorite } from "@mui/icons-material";
import { ProductImage, Product, ProductActionsWrapper, ProductFavButton, ProductActionButton, ProductAddToCart } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Stack, Tooltip, Typography } from "@mui/material";
export default function SingleProduct({ product, matches }) {

    return (
        <>
         <Product>
            <ProductImage src={product.image} />
            <ProductMeta product={product} matches={matches} />
            <ProductActionsWrapper>
                <Stack direction="row">
                <ProductFavButton isFav={1}>
                    <FavoriteIcon/>
                </ProductFavButton>
                <ProductActionButton>
                    <ShareIcon color="primary"/>
                </ProductActionButton>
                <ProductActionButton>
                    <FitScreenIcon color="primary"/>
                </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductAddToCart variant="contained">
            Add To CArt
        </ProductAddToCart>
        
        </>
       
    )
}