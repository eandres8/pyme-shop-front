import { Box, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  id: string;
  quantity: number;
  maxValue: number;
  onDecrease: (id: string) => void;
  onIncrease: (id: string) => void;
};

export const IncrementButton: React.FC<Props> = ({
  quantity,
  id,
  maxValue,
  onIncrease,
  onDecrease,
}) => {
  const handleDecrease = () => {
    if (quantity === 1) {
      return;
    }

    onDecrease(id);
  };

  const handleIncrease = () => {
    if (quantity === maxValue) {
      return;
    }

    onIncrease(id);
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton onClick={handleDecrease}>
        <RemoveIcon />
      </IconButton>

      <Typography>{quantity}</Typography>

      <IconButton onClick={handleIncrease}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};
