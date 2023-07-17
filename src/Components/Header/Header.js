import React from "react";
import Marketing from "./Marketing/Marketing";
import { NavLink } from "react-router-dom";
import imgMarket from "../../Images/icons8-m-67.png";
import imgFavourites from "../../Images/favourites";
import imgBasket from "../../Images/bag.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Header = (display) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <NavLink to={"/"}>
            <img style={{ width: "40px" }} src={imgMarket} />
          </NavLink>
        </div>
        <div>
          <NavLink to={"/basket"}>
            <img
              style={{
                backgroundColor: "rgb(0,141,210)",
                width: "40px",
                borderRadius: "50%",
              }}
              src={imgBasket}
            />
          </NavLink>
          <NavLink to={"/favourites"}>
            <img
              style={{
                backgroundColor: "rgb(0,141,210)",
                width: "40px",
                borderRadius: "50%",
              }}
              src={imgFavourites}
            />
          </NavLink>
        </div>
        <div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  style={{
                    backgroundColor: "rgb(0,141,210)",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  Category
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    <NavLink to={"/smartphones"}>Smartphones</NavLink>
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <NavLink to={"/laptops"}>Laptops</NavLink>
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <NavLink to={"/fragrances"}>Fragrances</NavLink>
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <NavLink to={"/skincare"}>Skincare</NavLink>
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <NavLink to={"/groceries"}>Groceries</NavLink>
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <NavLink to={"/home-decoration"}>Home-decoration</NavLink>
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
      </div>
      <Marketing />
    </div>
  );
};

export default Header;
