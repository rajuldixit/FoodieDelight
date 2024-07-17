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
// Internal
import ThemePicker from "../Theme/ThemePicker";
import {
  APP_NAME,
  LOGOUT,
  NAV_MENU,
  SIGNED_IN_TEXT
} from "../../utils/constants";

const Nav = () => {
  const navigate = useNavigate();
  const loggedInUserId = "admin@foodiedelight.com";
  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="end">
          <h3 className="cursor-pointer" onClick={() => navigate("/signin")}>
            Sign in
          </h3>
        </NavbarContent>
      </Navbar>
      {/* <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand
            className="mr-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h2 className="sm:block font-bold text-inherit">{APP_NAME}</h2>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          {NAV_MENU.map((menu: { label: string; link: string }) => (
            <h3
              className="sm:block font-bold text-inherit mr-2 cursor-pointer"
              onClick={() => navigate(menu.link)}
            >
              {menu.label}
            </h3>
          ))}

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
                <p className="font-semibold">{loggedInUserId}</p>
              </DropdownItem>
              <DropdownItem key="theme">
                <ThemePicker />
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                {LOGOUT}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar> */}
    </>
  );
};

export default Nav;
