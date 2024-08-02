"use client";

import React, { useState } from "react";

import { cn } from "/lib/utils";
import { FilterCheckbox, FilterCheckboxProps } from "./filterCheckbox";
import { Input } from "../ui";

type Item = FilterCheckboxProps;

interface checkboxFiltersGroupProps {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<checkboxFiltersGroupProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Пошук....",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  const showingList = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(search.toLowerCase()))
    : defaultItems.slice(0, limit);

  const onChangeSearchInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={cn("", className)}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            onChange={onChangeSearchInput}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {showingList.map((item, index) => {
          return (
            <FilterCheckbox
              key={index}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
              checked={false}
              onCheckedChange={(ids) => console.log(ids)}
            />
          );
        })}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={() => setShowAll((prev) => !prev)} className="text-primary mt-3">
            {showAll ? "Hide" : "Show all filters...."}
          </button>
        </div>
      )}
    </div>
  );
};
