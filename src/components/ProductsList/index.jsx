import {Box, Typography, Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Button} from "@mui/material";
import {visuallyHidden} from '@mui/utils';
import {connect} from "react-redux";
import {addToCart, successAddToCart} from "../../store/reducers/orderSlice";

const ProductsList = function(props) {
    const {productsList, addToCart, successAddToCart, activeShop} = props;

    return (
        <Box component="section" sx={{ width: "100%" }}>
            <Typography component="h2" sx={visuallyHidden}>Products List</Typography>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {Object.values(productsList[activeShop]).map(product => {
                    return (
                        <Grid item xs={4} key={product.productId}>
                            <Card>
                                <CardHeader 
                                    title={product.cardHeader}
                                    subheader={`Price: ${product.price} $`}
                                />
                                <CardMedia 
                                    component="img"
                                    height="194"
                                    image={product.imgUrl}
                                    alt={product.cardHeader}
                                />
                                <CardContent variant="body2" color="text.secondary">
                                    <Typography>{product.cardDescription}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        onClick={() => {
                                            addToCart(product);
                                            successAddToCart(true);
                                        }}
                                    >
                                        Add to Card
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default connect(store => ({ productsList: store.shops.shops, activeShop: store.shops.activeShop }), {addToCart, successAddToCart})(ProductsList);