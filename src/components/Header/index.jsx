import { AppBar, Toolbar, ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = function() {
    return (
        <AppBar position="static">
            <Toolbar>
                <ButtonGroup
                    size="large"
                    variant="text"
                    sx={{ flexGrow: 1, display: 'flex' }}
                    aria-label="Navigation manu"
                    component="nav"
                >
                    <Link to="/">
                        <Button sx={{ color: "#fff" }}>Shops</Button>
                    </Link>
                    <Link to="/shopping-cart">
                        <Button sx={{ color: "#fff" }}>Shopping cart</Button>
                    </Link>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    );
};

export default Header;