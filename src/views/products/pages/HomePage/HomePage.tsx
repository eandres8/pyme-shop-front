import { Box } from "@mui/material";

import { Navbar } from "@/views/core/components";
import { ProductList } from "../../components";
import { useHomePage } from "./homePage";

export const HomePage: React.FC = () => {
  const { handleSearch } = useHomePage();

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Box display="flex" justifyContent="center" pt={8}>
        <Box maxWidth={1280} id="prueba"> 
          <ProductList />
        </Box>
      </Box>
    </>
  );
};
