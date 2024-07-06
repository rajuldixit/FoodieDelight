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
import ThemePicker from "../Theme/ThemePicker";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand
          className="mr-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h2 className="sm:block font-bold text-inherit">Foodie Delight</h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <h3
          className="sm:block font-bold text-inherit mr-2 cursor-pointer"
          onClick={() => navigate("/restaurants")}
        >
          Restaurants
        </h3>
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
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">admin@foodiedelight.com</p>
            </DropdownItem>
            <DropdownItem key="theme">
              <ThemePicker />
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
