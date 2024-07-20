//External
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// Internal
import {
  APP_NAME,
  LOGOUT,
  NAV_MENU_LOGGED_IN,
  NAV_MENU_LOGGED_OUT,
  SIGNED_IN_TEXT
} from "utils/constants";
import { useAuth } from "context/AuthContext";
import ThemePicker from "shared_components/Theme/ThemePicker";

const Nav = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand
            className="mr-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h2 className="sm:block font-bold text-inherit">{APP_NAME}</h2>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          {!user ? (
            NAV_MENU_LOGGED_OUT.map((menu: { label: string; link: string }) => (
              <h3
                className="sm:block font-bold text-inherit mr-2 cursor-pointer"
                onClick={() => navigate(menu.link)}
                key={menu.label}
              >
                {menu.label}
              </h3>
            ))
          ) : (
            <>
              {NAV_MENU_LOGGED_IN.map(
                (menu: { label: string; link: string }) => (
                  <h3
                    className="sm:block font-bold text-inherit mr-2 cursor-pointer"
                    onClick={() => navigate(menu.link)}
                    key={menu.label}
                  >
                    {menu.label}
                  </h3>
                )
              )}
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Admin"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">{SIGNED_IN_TEXT}</p>
                    <p className="font-semibold">{user?.email}</p>
                  </DropdownItem>
                  <DropdownItem key="theme">
                    <ThemePicker />
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger" onClick={logout}>
                    {LOGOUT}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          )}
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Nav;
