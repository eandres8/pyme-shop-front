import { Box, Card, CardContent, Typography } from "@mui/material";
// import CircularProgress from '@mui/material/CircularProgress';
// import { green } from '@mui/material/colors';

import { useCart } from "@/views/core/hooks";

export const CartOrder: React.FC = () => {
  const { order } = useCart();

  return (
    <Box>
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" p={2} gap={2}>
            <Typography variant="h5">Orden</Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography>Ref:</Typography>
              <Typography>{order?.id}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>total</Typography>
              <Typography>${order?.total}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>Estado</Typography>
              <Typography>{order?.status}</Typography>
            </Box>
            <Box borderBottom="1px solid #ddd" />
            <Typography variant="h5">Generar Pago</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
