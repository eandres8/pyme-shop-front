import { Card, CardContent, CardActions, Skeleton } from "@mui/material";

export const ProductSkeleton: React.FC = () => {
  return (
    <Card sx={{ width: 260, borderRadius: 3, p: 1 }}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={140}
        sx={{ borderRadius: 2 }}
      />

      <CardContent>
        <Skeleton variant="text" width="40%" height={30} />

        <Skeleton variant="text" width="80%" height={25} />

        <Skeleton variant="text" width="60%" height={20} />
      </CardContent>

      <CardActions>
        <Skeleton variant="rounded" width="100%" height={40} />
      </CardActions>
    </Card>
  );
};