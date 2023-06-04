import {Box, Typography, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {changeActiveShop} from "../../store/reducers/shopsSlice";
import {connect} from "react-redux";

const ShopsList = function(props) {
    const {shopsList, changeActiveShop} = props;

    return (
        <Box component="section" sx={{alignSelf: "flex-start", p: "8px 4px", mr: 3, border: "1px solid #000", borderRadius: 2}}>
            <Typography component="h2" variant="h5" mb={2} textAlign="center" m={0}>Shops</Typography>
            <List sx={{width: 160, p: 0}}>
                {Object.keys(shopsList).map((shop, id) => {
                    return (
                        <ListItem key={id} disablePadding>
                            <ListItemButton onClick={() => changeActiveShop(shop)}>
                                <ListItemText primary={shop} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default connect(store => ({shopsList: store.shops.shops}), {changeActiveShop})(ShopsList);