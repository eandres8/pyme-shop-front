import {
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Props {
  item: CartItem;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
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
          alt={item.name}
          style={{ width: 70, borderRadius: 8 }}
        />

        <Typography fontWeight="bold">
          {item.name}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <IconButton onClick={() => onDecrease(item.id)}>
          <RemoveIcon />
        </IconButton>

        <Typography>{item.quantity}</Typography>

        <IconButton onClick={() => onIncrease(item.id)}>
          <AddIcon />
        </IconButton>
      </Box>

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