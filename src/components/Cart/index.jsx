import {Box, Typography, Button, TextField, List, ListItem, Card, CardHeader, CardMedia, CardActions, Collapse, Alert, AlertTitle, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {visuallyHidden} from '@mui/utils';
import {connect} from "react-redux";
import {useRef, useState} from "react";
import {successMakeToOrder, clearCart} from "../../store/reducers/orderSlice";

const Cart = function(props) {
    const {order, successMakeToOrder, clearCart, openAlert} = props;
    const [orderInfo, setOrderInfo] = useState({userInfo: order.userInfo, productsInfo: order.productsInfo});
    const name = useRef();
    const email = useRef();
    const phone = useRef();
    const address = useRef();

    const calculateTotalPrice = function(productsInfo) {
        let total = 0;
        for(const product of Object.values(productsInfo)) {
            total = total + (product.amount * product.price);
        };
        return total;
    };

    const alertAction = <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                successMakeToOrder(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>

    return (
        <Box component="section" sx={{display: "flex", flexWrap: "nowrap"}}>
            <Typography component="h2" sx={visuallyHidden}>Cart</Typography>
            {Object.keys(orderInfo.productsInfo).length ? 
            <Box
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    setOrderInfo({
                        ...orderInfo, 
                        userInfo: {
                            name: name.current.value,
                            email: email.current.value,
                            phone: phone.current.value,
                            address: address.current.value,
                        },
                    });
                    successMakeToOrder(true);
                    clearCart();
                }}
            >
                <Box sx={{display: "flex", flexwrap: "nowrap", mb: 2}}>
                    <Box sx={{mb: 2, mr: 2}}>
                        <TextField label="Name" variant="outlined" sx={{mb: 2}} inputRef={name} autoFocus /><br/>
                        <TextField label="Email" variant="outlined" sx={{mb: 2}} inputRef={email} /><br/>
                        <TextField label="Phone" variant="outlined" sx={{mb: 2}} inputRef={phone} /><br/>
                        <TextField label="Address" variant="outlined" inputRef={address} />
                    </Box>
                    <List sx={{width: "100%", p: 0}}>
                        {Object.values(orderInfo.productsInfo).map(product => {
                            return(
                                <ListItem key={product.productId} sx={{mb: 2}} disablePadding>
                                    <Card sx={{display: 'flex', flexWrap: "nowrap"}}>
                                        <CardMedia 
                                            component="img"
                                            sx={{width: 151}}
                                            image={product.imgUrl}
                                            alt={product.cardHeader}
                                        />
                                        <Box>
                                            <CardHeader 
                                                title={product.cardHeader}
                                                subheader={`Price: ${product.price} $`}
                                            />
                                            <CardActions>
                                                <TextField
                                                    type="number"
                                                    value={product.amount}
                                                    onChange={(e) => {
                                                        setOrderInfo({
                                                            ...orderInfo,
                                                            productsInfo: {
                                                                ...orderInfo.productsInfo,
                                                                [product.productId]: {
                                                                    ...orderInfo.productsInfo[product.productId],
                                                                    amount: e.currentTarget.value,
                                                                },
                                                            },
                                                        })
                                                    }}
                                                    inputProps={{min: 0, max: 10}}
                                                />
                                            </CardActions>
                                        </Box>
                                    </Card>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Typography sx={{ml: "auto", mr: 2}}>Total price: {calculateTotalPrice(orderInfo.productsInfo)} $</Typography>
                    <Button type="submit" variant="contained">Submit</Button>
                </Box>
            </Box> :
            <Typography variant="h2" sx={{margin: "0 auto"}}>The product cart is empty (</Typography>}
            <Collapse
                in={openAlert}
                sx={{position: "absolute", bottom: 0, left: 0, width: "100%"}}
            >
                <Alert
                    severity="success"
                    action={alertAction}
                >
                    <AlertTitle>Success</AlertTitle>
                    Your order has been successfully received
                </Alert>
            </Collapse>
        </Box>
    );
};

export default connect(store => ({order: store.order, openAlert: store.order.successMakeToOrder}), {successMakeToOrder, clearCart})(Cart);