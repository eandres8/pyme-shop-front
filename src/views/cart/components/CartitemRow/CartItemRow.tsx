import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IncrementButton } from "@/views/core/components";
import type { TCartItem } from "@/app/types";

interface Props {
  item: TCartItem;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export const CartItemRow: React.FC<Props> = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const total = item.price * item.quantity;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #ddd"
      py={1}
    >
      <Box display="flex" alignItems="center" gap={2} width="40%">
        <img
          src="https://img.icons8.com/ios7/1200/image--v2.jpg"
          alt={item.title}
          style={{ width: 70, borderRadius: 8 }}
        />

        <Typography fontWeight="bold">
          {item.title}
        </Typography>
      </Box>

      <IncrementButton
        id={item.id}
        maxValue={item.stock}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        quantity={item.quantity}
      />

      <Box width="120px" textAlign="right">
        <Typography fontWeight="bold">
          ${total.toFixed(2)}
        </Typography>

        <Button
          size="small"
          color="error"
          startIcon={<DeleteOutlineIcon />}
          onClick={() => onRemove(item.id)}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
}