import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input
} from "@nextui-org/react";
import { SearchIcon } from "../../../assets/icons/SearchIcon";
import { Search_keys } from "utils/constants";
import { useState } from "react";

const defaultValue = { key: "search", label: "Search" };
const dropdownMenu = Search_keys;
const Search = () => {
  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const setSelectedKeys = (e) => {
    setSelectedItem(
      (prev) => dropdownMenu.filter((item) => item.key === e["currentKey"])[0]
    );
  };

  return (
    <div
      style={{
        border: "1px solid grey",
        padding: "4px 8px",
        boxSizing: "border-box",
        borderRadius: "24px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <SearchIcon size={18} />
      <Dropdown>
        <DropdownTrigger style={{ height: "30px", marginLeft: "4px" }}>
          <Button variant="bordered" className="capitalize">
            {selectedItem?.["label"]}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={"selectedKeys"}
          onSelectionChange={setSelectedKeys}
        >
          {dropdownMenu.map((item) => (
            <DropdownItem key={item.key}>{item.label}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      {(selectedItem === dropdownMenu[1] ||
        selectedItem === dropdownMenu[3]) && (
        <div
          style={{ height: "28px", marginLeft: "4px", borderRadius: "24px" }}
        >
          <Input
            placeholder="Type to search..."
            style={{ maxHeight: "24px !important" }}
            classNames={{
              inputWrapper: "h-7 min-h-3"
            }}
            type="write here"
          />
        </div>
      )}
      {(selectedItem === dropdownMenu[0] ||
        selectedItem === dropdownMenu[4]) && (
        <Dropdown>
          <DropdownTrigger style={{ height: "30px", marginLeft: "4px" }}>
            <Button>Ratings</Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>*</DropdownItem>
            <DropdownItem>**</DropdownItem>
            <DropdownItem>***</DropdownItem>
            <DropdownItem>****</DropdownItem>
            <DropdownItem>*****</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
      {selectedItem === dropdownMenu[2] && (
        <Dropdown>
          <DropdownTrigger style={{ height: "30px", marginLeft: "4px" }}>
            <Button>category</Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>Veg</DropdownItem>
            <DropdownItem>Non veg</DropdownItem>
            <DropdownItem>Vegan</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  );
};

export default Search;
