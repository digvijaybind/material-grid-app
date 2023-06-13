import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, {useState} from "react";
import PetsIcon from "@material-ui/icons/Pets";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")({
  backgroundColor: "white",
  padding: "0px 10px ",
  borderRadius: "10px",
  width: "40%",
});
const Icons = styled(Box)((theme) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));
const UserBox = styled(Box)((theme) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="stick">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>
          Navbar
        </Typography>
        <PetsIcon sx={{display: {xs: "block", sm: "none", md: "none"}}} />
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{width: 30, height: 30}}
              src="https://www.shutterstock.com/image-photo/happy-diverse-professional-business-team-stand-1437231731"
            />
            <Typography>Digvijay</Typography>
          </UserBox>
          <StyledToolbar>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={open}
              onClose={(e) => setOpen(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </StyledToolbar>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
export default Navbar;
