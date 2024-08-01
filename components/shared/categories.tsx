"use client";

import React from "react";

import { cn } from "/lib/utils";

interface categoriesProps {
  className?: string;
}

const categoryList = ["Піца", "Комбо", "Закуски", "Коктейлі", "Кава", "Напої", "Десерти"];
const activeCategory = 0;

export const Categories: React.FC<categoriesProps> = ({ className }) => {
  const [active, setActive] = React.useState(0);

  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
      {categoryList.map((el, index) => {
        return (
          <a
            className={cn(
              "flex items-center font-bold h-11 rounded-2xl px-5",
              active === index && "bg-white shadow-md shadow-gray-200 text-primary"
            )}
            onClick={() => setActive(index)}
            key={index}>
            <button>{el}</button>
          </a>
        );
      })}
    </div>
  );
};
