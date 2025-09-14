import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input
        borderRadius={20}
        variant={"filled"}
        placeholder="Search games..."
      ></Input>
    </InputGroup>
  );
}

export default SearchInput;
