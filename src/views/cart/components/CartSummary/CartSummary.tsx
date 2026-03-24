import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import { useCart } from "@/views/core/hooks";

export const CartSummary: React.FC = () => {
  const { total } = useCart();

  return (
    <Box>
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" p={2} gap={2}>
            <Typography variant="h5">Resumen</Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography>Subtotal</Typography>
              <Typography>${total()}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>Fee</Typography>
              <Typography>$0</Typography>
            </Box>
            <Box borderBottom="1px solid #ddd" />
            <Box display="flex" justifyContent="space-between">
              <Typography fontSize={18} sx={{ fontWeight: 600 }}>Total</Typography>
              <Typography fontSize={18}>${total()}</Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, borderRadius: "999px", }}
              onClick={() => console.log("click")}
            >
              Finalizar pago
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
