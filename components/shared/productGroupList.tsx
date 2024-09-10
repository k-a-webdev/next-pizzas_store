"use client";

import React from "react";
import { useIntersection } from "react-use";

import { cn } from "/lib/utils";
import { ProductCard, Title } from "./index";
import { useCategoryStore } from "/store/category";

interface productGroupListProps {
  title: string;
  categoryId: number;
  items: any[];
  className?: string;
  listClassName?: string;
}

export const ProductGroupList: React.FC<productGroupListProps> = ({
  title,
  categoryId,
  items,
  className,
  listClassName,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, { threshold: 0.4 });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting]);

  return (
    <div className={cn("", className)} id={title} ref={intersectionRef}>
      <Title size="lg" className="font-extrabold mb-5">
        {title}
      </Title>

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item) => {
          return (
            <ProductCard
              key={categoryId}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.items[0].price}
            />
          );
        })}
      </div>
    </div>
  );
};
