import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/storeItems.json";
import formatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const CartItem = ({id, quantity}) => {
    
    const { removeItemCart } = useShoppingCart()
    const item = storeItems.find((item) => item.id === id)

    if (item == null) return null

    return (
    
        <Stack direction="horizontal" className="d-flex align-items-center" gap={2}>

            <img src={item.imgUrl} style={{width: "125px", height: "75px", objectFit: "cover"}} />

            <div className="me-auto">

                <div>

                    {item.name} {" "}
                    {quantity > 1 && <span className="text-muted" style={{fontSize: "0.65rem"}}>x{quantity}</span>}
                    
                    <div className="text-muted" style={{fontSize: "0.75rem"}}>

                        {formatCurrency(item.price)}
                    </div>
                </div>

            </div>

            <div>
                    
                {formatCurrency(item.price * quantity)}
            </div>

            <Button variant="outline-danger" size="sm" onClick={() => removeItemCart(id)}>&times;</Button>
        </Stack>
    )
}

export default CartItem