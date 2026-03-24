import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';

import { useCart } from "@/views/core/hooks";

export const CartSummary: React.FC = () => {
  const { total, submitOrder, isLoading } = useCart();

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
            <Box sx={{ m: 1, position: 'relative' }}>
              <Button
                fullWidth
                variant="contained"
                disabled={isLoading}
                sx={{ mt: 2, borderRadius: "999px", }}
                onClick={() => submitOrder()}
              >
                Finalizar pago
              </Button>
              {
                isLoading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-4px',
                      marginLeft: '-4px',
                    }}
                  />
                )
              }
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
