import styled from "@emotion/styled";
import { Divider, Drawer, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

 export default function AppDrawer(){

    const MiddleDivider = styled((props)=>(
        <Divider variant="middle" {...props}/>
        
    ))``;
    return(
        <Drawer open={false}>
            <ListItemButton>
                <ListItemText>Home</ListItemText>
            </ListItemButton>
            <MiddleDivider/>

            <ListItemButton>
                <ListItemText>Categories</ListItemText>
            </ListItemButton>
            <MiddleDivider/>

            <ListItemButton>
                <ListItemText>Products</ListItemText>
            </ListItemButton>
            <MiddleDivider/>
            

            <ListItemButton>
                <ListItemText>About US</ListItemText>
            </ListItemButton>
            <MiddleDivider/>
            

            <ListItemButton>
                <ListItemText>Contact US</ListItemText>
            </ListItemButton>
            <MiddleDivider/>
            

        </Drawer>
    )
 }