import React from "react";

import { cn } from "/lib/utils";
import { Categories } from "./categories";
import { SortPopUp } from "./sortPopUp";
import { Container } from "./index";

interface topBarProps {
  className?: string;
}

export const TopBar: React.FC<topBarProps> = ({ className }) => {
  return (
    <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopUp />
      </Container>
    </div>
  );
};
