import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  Badge,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosLogOut, IoMdNotificationsOutline } from "react-icons/io";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { AiOutlineSetting } from "react-icons/ai";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#30408D",
      width: "auto",
      height: 50,
    },

    appbar: {
      color: "primary",
    },
    toolbar: theme.mixins.toolbar,
    pages: {
      width: 130,
      fontSize: 17,
      color: "#F4F4F4",
    },
    toolbar: {
      minHeight: 20,
      justifyContent: "space-between",
    },
    root: {
      display: "block",
    },
    icon: {
      fontSize: 40,
      marginLeft: "auto",
    },
    pagesDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    dropDown: {
      fontSize: 25,
      paddingLeft: 5,
    },
    titleDiv: {},
  };
});

export default function Layout() {
  const classes = useStyles();

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className="logoContainer">
            <img src="nuLogo.png" alt="logo" className="logoNU" />
            <div
              className="titleDiv"
              style={{ flexDirection: "column", alignItems: "center" }}
            >
              <h3 className="logoTitle">NU INNOVATION TECH HUB</h3>
              <p className="logoTitle_">
                Center for Innovation & Entrepreneurship
              </p>
            </div>
          </div>
          <div className={classes.pagesDiv}>
            
            <hr style={{ height: 30 }} />
            <Typography
              variant="strong"
              component="p"
              style={{ margin: 15, fontSize: 20 }}
            >
              admin@gmail.com
            </Typography>

            <div style={{ cursor: "pointer" }}>
              <IoIosLogOut
                style={{ fontSize: 30, cursor: "pointer" }}
                onClick={handleClick}
              />
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <AiOutlineSetting />
                  <strong style={{ marginTop: 2, marginLeft: 13 }}>
                    {" "}
                    Settings{" "}
                  </strong>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} disableRipple>
                  <IoIosLogOut style={{ fontWeight: "bold" }} />
                  <strong style={{ marginTop: 2, marginLeft: 13 }}>
                    Logout
                  </strong>
                </MenuItem>
              </StyledMenu>
            </div>
          </div>
          {/* <ShoppingCart/> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}