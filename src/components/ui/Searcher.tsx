import { useId } from "react";

import { SearchIcon } from "@icons/Search.tsx";
import { SortIcon } from "@icons/Sort.tsx";

export function Searcher() {
  const filterId: string = useId();

  return (
    <div className="flex gap-2 justify-between  relative  border-b border-neutral pb-2">
      <SearchIcon className="absolute left-0" color="gray" />
      <input
        type="text"
        placeholder="Llavero..."
        className="pl-8 focus-within:outline-none relative z-10"
      />
      <div className="flex gap-1 items-center hover:-translate-y-0.5 transition ">
        <label htmlFor={filterId}>
          <SortIcon size={20} />
        </label>
        <select
          className="hover:cursor-pointer"
          name="filter"
          id={filterId}
          defaultValue={"sort"}
        >
          <option disabled value={"sort"}>
            SORT
          </option>
        </select>
      </div>
    </div>
  );
}
