import { Input } from "@nextui-org/react";
import { SearchIcon } from "../../../assets/icons/SearchIcon";

const Search = () => {
  return (
    <div>
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 "
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchIcon size={18} />}
        type="search"
      />
    </div>
  );
};

export default Search;
