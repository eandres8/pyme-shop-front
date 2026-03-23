import { Box, Grid, Pagination, Typography } from "@mui/material";

import { ProductCard, ProductSkeleton } from "../../components";
import { useProductList } from "./ProductList.hook";

const skeletonList = [...Array.from({ length: 8 })];

export const ProductList = () => {
  const { products, totalPages, page, handleChangePage, isLoading } = useProductList();

  const hasItems = !isLoading && products.length;

  return (
    <Box px={{ xs: 2, md: 4 }} py={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight={600}>
          Mejores vendidos
        </Typography>
      </Box>

      <Grid container spacing={3} width="100%" className="card-list-container">
        {
          isLoading ? (
            skeletonList.map((_, idx) => <ProductSkeleton key={idx} />)
          ) : (
            products.map((product) => (
              <Grid className="product-card-container" key={product.id} size={{ xs:12, sm:6, md:4, lg:3 }} minWidth={280}>
                <ProductCard product={product} />
              </Grid>
            ))
          )
        }
      </Grid>

      {
        !hasItems && (
          <Grid>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
              p={10}
            >
              <Typography variant="h6" fontWeight={600} sx={{ opacity: 0.5 }}>
                No se encontraron productos
              </Typography>
            </Box>
          </Grid>
        )
      }

      <Box p={4} display="flex" justifyContent="center">
        { hasItems ? <Pagination count={totalPages} page={page} onChange={handleChangePage} /> : null}
      </Box>
    </Box>
  );
};
