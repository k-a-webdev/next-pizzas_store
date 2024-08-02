import React from "react";

import { cn } from "/lib/utils";
import { Title, FilterCheckbox } from "./index";
import { Input } from "../ui";
import { RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkboxFiltersGroup";

interface filtersProps {
  className?: string;
}

export const Filters: React.FC<filtersProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title className="mb-5 font-bold">Filters</Title>

      {/* First checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox value="1" text="Можна збирати" />
        <FilterCheckbox value="2" text="New" />
      </div>

      {/* Price filter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3"> Price from and to</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup
        title="Інгрідієнти"
        className="mt-5"
        limit={5}
        defaultItems={[
          {
            text: "Сириний соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Часник",
            value: "3",
          },
          {
            text: "Солоні огірки",
            value: "4",
          },
          {
            text: "Червона цибуля",
            value: "4",
          },
          {
            text: "Томати",
            value: "4",
          },
        ]}
        items={[
          {
            text: "Сириний соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Часник",
            value: "3",
          },
          {
            text: "Солоні огірки",
            value: "4",
          },
          {
            text: "Червона цибуля",
            value: "4",
          },
          {
            text: "Томати",
            value: "4",
          },
        ]}
      />
    </div>
  );
};
