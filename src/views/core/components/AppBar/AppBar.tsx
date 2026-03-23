import type { ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { AppBar, Toolbar, Typography, InputBase, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type Props = {
  onSearch: (search: string) => void;
}

export const Navbar: React.FC<Props> = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Pyme Shop
        </Typography>

        <InputBase
          placeholder="Buscar producto..."
          onChange={handleSearch}
          sx={{
            background: "white",
            padding: "4px 10px",
            borderRadius: 1,
            width: "40%",
          }}
        />

        <IconButton color="inherit" onClick={() => navigate("/cart")}>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}