import type { ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToApp from "@mui/icons-material/ExitToApp";

import { useAuth, useCart } from "../../hooks";

type Props = {
  onSearch?: (search: string) => void;
}

export const Navbar: React.FC<Props> = ({ onSearch }) => {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth();
  const { items } = useCart();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSearch && onSearch(text);
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Pyme Shop
        </Typography>

        {
          onSearch && (
            <InputBase
              placeholder="Buscar producto..."
              onChange={handleSearch}
              sx={{
                background: "white",
                padding: "4px 10px",
                borderRadius: 1,
                width: "40%",
              }}
              type="search"
            />
          )
        }

        <Box display="flex" gap={2}>
          <IconButton color="inherit" onClick={() => navigate("/cart")}>
            <Badge badgeContent={items.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {
            isAuthenticated && (
              <IconButton color="inherit" onClick={logout}>
                <ExitToApp />
              </IconButton>
            )
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
}