import SearchIcon  from "@mui/icons-material/Search";
import { ListItemButton, ListItemText ,ListItemIcon} from "@mui/material";
import { AppbarHeader,AppbarContainer, MyList} from "../../styles/appbar";
import Actions from "./actions";

export default function AppbarDesktop({matches}) {


    return(
        <>
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type="row">
              <ListItemText primary="Home"/>             
              <ListItemText primary="Categories"/>             
              <ListItemText primary="Products"/>             
              <ListItemText primary="Contact Us"/>             

               <ListItemButton>
                <ListItemIcon>
                    <SearchIcon/>
                </ListItemIcon>
                </ListItemButton> 
               
            </MyList>   
            <Actions matches={matches}/> 

        </AppbarContainer>

        </>
    )

}