// import { Favorite } from "@mui/icons-material";
import { ProductImage, Product, ProductActionsWrapper, ProductFavButton, ProductActionButton, ProductAddToCart } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
export default function SingleProductDesktop({ product, matches }) {
    const [showOptions,setShowOptions] = useState(false)

    const handleMouseEnter = () =>  {
        setShowOptions(true)
    }
    const handleMouseLeave = () =>  {
        setShowOptions(false)
    }
 
    return (
        <>
         <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image} />
            <ProductFavButton isFav={1}>
                    <FavoriteIcon/>
                </ProductFavButton>
                { showOptions && <ProductAddToCart variant="contained" show={showOptions}>
                    Add to cart
                    </ProductAddToCart>}
            <ProductActionsWrapper show={showOptions}>
                <Stack direction="column">
                <ProductActionButton>
                    <ShareIcon color="primary"/>
                </ProductActionButton>
                <ProductActionButton>
                    <FitScreenIcon color="primary"/>
                </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductMeta product={product} matches={matches} />

       
        
        </>
       
    )
}