import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface props {
  children: ReactNode;
}

function GameCardContainer({ children }: props) {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
