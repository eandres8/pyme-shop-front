import { Box, Typography } from "@mui/material";

import type { CartItem } from "./ProductCartItem";
import { CartItemRow } from "../CartitemRow/CartItemRow";

interface Props {
  items: CartItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

export const CartList: React.FC<Props> = ({
  items,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        fontWeight="bold"
        mb={2}
      >
        <Typography width="40%">Detalles del Producto</Typography>
        <Typography>Cantidad</Typography>
        <Typography width="120px" textAlign="right">
          Total
        </Typography>
      </Box>

      {items.map((item) => (
        <CartItemRow
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}
    </Box>
  );
}