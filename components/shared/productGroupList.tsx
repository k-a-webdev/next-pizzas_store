import React from "react";

import { cn } from "/lib/utils";
import { ProductCard, Title } from "./index";

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
  return (
    <div className={cn("", className)}>
      <Title size="lg" className="font-extrabold mb-5">
        {title}
      </Title>

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item, index) => {
          return (
            <ProductCard
              key={item.id}
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
