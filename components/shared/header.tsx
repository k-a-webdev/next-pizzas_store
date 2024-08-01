import React from "react";
import Image from "next/image";

import { cn } from "/lib/utils";

import { Container } from "./index";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface headerProps {
  className?: string;
}

export const Header: React.FC<headerProps> = ({ className }) => {
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Left part */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Pizzas store on Next JS</h1>
            <p className="text-sm text-gray-400 leading-3">
              The most delicious pizza in the Universe
            </p>
          </div>
        </div>

        {/* Center part */}

        {/* Right part */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-3">
            <User size={16} />
            Sign in
          </Button>

          <div>
            <Button className="group relative">
              <b>10 $</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
