import { Container, Typography } from "@mui/material";
import { visuallyHidden } from '@mui/utils';
import { Routes, Route } from "react-router-dom";
import Shops from "../Shops";
import Cart from "../Cart";

const Main = function() {
    return (
        <Container component="main" sx={{ width: "100%", pt: 2 }}>
            <Typography component="h1" sx={visuallyHidden}>Main</Typography>
            <Routes>
                <Route index element={<Shops />} />
                <Route path="/shopping-cart" element={<Cart />} />
            </Routes>
        </Container>
    );
};

export default Main;