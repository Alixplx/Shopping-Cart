import { Button, Container, Nav, Navbar as NavBar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useShoppingCart} from "../Context/ShoppingCartContext";

const Navbar = () => {
  
    const {openCart, cartQuantity} = useShoppingCart()

    return (
        
        <NavBar sticky="top" className="bg-white shadow-sm mb-4">

            <Container>

                <Nav className="me-auto">

                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>

                <Button variant="outline-primary" className="rounded-circle" onClick={openCart}
                        style={{width: "3rem", height: "3rem", position: "relative"}}>
                    
                    <ShoppingCartIcon />
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                         style={{color: "white", position: "absolute", bottom: 0, right: 0  
                         ,height: "1.5rem" ,width: "1.5rem", transform: "translate(25%, 25%)"}}>
                        
                        {cartQuantity}
                    </div>
                </Button>

            </Container>

        </NavBar>
    )
}

export default Navbar