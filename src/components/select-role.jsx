"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

const teammates = [
  { id: 1, role: "Customer Success & Support" },
  { id: 2, role: "Engineering & Technology" },
  { id: 3, role: "Finance & Accounting" },
  { id: 4, role: "Leadership & Executive" },
  { id: 5, role: "Legal" },
  { id: 6, role: "Marketing" },
  { id: 7, role: "Management Coach" },
  { id: 8, role: "Operations & Strategy" },
  { id: 9, role: "People & Talent (HR)" },
  { id: 10, role: "Product Management & Design" },
  { id: 11, role: "Quality Assurance (QA)" },
  { id: 12, role: "Sales & Business Development" },
  { id: 13, role: "Sales Engineering" },
  { id: 14, role: "Security & Compliance" },
  { id: 15, role: "UI/UX" },
];

export default function SelectAITeammate({ selected, setSelected }) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-lg font-semibold text-[#ededed]">
        Step 1: Select Your AI Teammate's Role
      </Label>
      <div className="relative mt-2">
        <ListboxButton className="focus:outline-[#3527fd]sm:text-sm/6 grid w-full cursor-default grid-cols-1 rounded-md bg-gray-50 py-2 pr-2 pl-3 text-left text-gray-900 outline -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2">
          <span
            className={`col-start-1 row-start-1 truncate pr-6 ${selected ? "text-gray-900" : "text-base text-gray-500"}`}
          >
            {/* Conditionally display placeholder or selected role */}
            {selected ? selected.role : "Select AI Teammate"}
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-50 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in data-[closed]:data-[leave]:opacity-0 sm:text-sm"
        >
          {teammates.map((teammate) => (
            <ListboxOption
              key={teammate.id}
              value={teammate}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-[focus]:bg-[#3527fd] data-[focus]:text-white data-[focus]:outline-none"
            >
              <span className="block truncate text-base group-data-[selected]:font-semibold">
                {teammate.role}
              </span>

              {/* Only show check icon if this option is currently selected */}
              {selected && selected.id === teammate.id && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#3527fd] group-data-[focus]:text-white">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
