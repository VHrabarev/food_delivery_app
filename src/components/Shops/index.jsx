import {Box, Collapse, Alert, AlertTitle, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ShopsList from "../ShopsList";
import ProductsList from "../ProductsList";
import {successAddToCart} from "../../store/reducers/orderSlice";
import {getShops} from "../../store/reducers/shopsSlice";
import {connect} from "react-redux";

const Shops = function(props) {
    const {successAddToCart, openAlert, getShops} = props;

    getShops();

    const alertAction = <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                successAddToCart(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>

    return (
        <Box sx={{ display: "flex", flexWrap: "nowrap", minHeight: window.innerHeight - 99 }}>
            <ShopsList />
            <ProductsList />
            <Collapse
                in={openAlert}
                sx={{position: "absolute", bottom: 0, left: 0, width: "100%"}}
            >
                <Alert
                    severity="success"
                    action={alertAction}
                >
                    <AlertTitle>Success</AlertTitle>
                    Your product has been successfully added to the cart
                </Alert>
            </Collapse>
        </Box>
    );
};

export default connect(store => ({openAlert: store.order.successAddToCart}), {successAddToCart, getShops})(Shops);