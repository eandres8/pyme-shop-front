import { Box, Typography } from "@mui/material";

import type { TCartItem } from "@/app/types";
import { CartItemRow } from "../CartitemRow/CartItemRow";
import { useCartItem } from "@/views/core/hooks";

type Props = {
  items: TCartItem[];
};

export const CartList: React.FC<Props> = ({ items }) => {
  const { handleDecrease, handleIncrease, handleRemove } = useCartItem();

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
          onIncrease={handleIncrease(item.quantity)}
          onDecrease={handleDecrease(item.quantity)}
          onRemove={() => handleRemove(item.id)}
        />
      ))}
    </Box>
  );
}