"use client";

import React from "react";

import { cn } from "/lib/utils";
import { useCategoryStore } from "/store/category";

interface categoriesProps {
  className?: string;
}

const categoryList = [
  { id: 1, name: "Піца" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейлі" },
  { id: 5, name: "Кава" },
  { id: 6, name: "Напої" },
  { id: 7, name: "Десерти" },
];

export const Categories: React.FC<categoriesProps> = ({ className }) => {
  const { activeId, setActiveId } = useCategoryStore((state) => state);
  console.log(activeId);

  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
      {categoryList.map(({ id, name }, index) => {
        return (
          <a
            className={cn(
              "flex items-center font-bold h-11 rounded-2xl px-5",
              activeId === id && "bg-white shadow-md shadow-gray-200 text-primary"
            )}
            onClick={() => setActiveId(id)}
            href={`/#${name}`}
            key={index}>
            <button>{name}</button>
          </a>
        );
      })}
    </div>
  );
};
