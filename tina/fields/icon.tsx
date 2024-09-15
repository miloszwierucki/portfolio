"use client";

import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Button, wrapFieldsWithMeta } from "tinacms";
import React, { useMemo, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { GoCircleSlash } from "react-icons/go";
import {
  Popover,
  PopoverButton,
  Transition,
  PopoverPanel,
} from "@headlessui/react";

import Icon from "../../components/icon";

const allIcons = Object.keys(dynamicIconImports);

export const IconPickerInput = wrapFieldsWithMeta(({ input }) => {
  const [filter, setFilter] = useState("");

  const filteredBlocks = useMemo(() => {
    return allIcons
      .filter((name) => name.toLowerCase().includes(filter.toLowerCase()))
      .slice(0, 24);
  }, [filter]);

  return (
    <div className="relative z-[1000]">
      <input type="text" id={input.name} className="hidden" {...input} />
      <Popover>
        {({ open }) => (
          <>
            <PopoverButton className="flex items-center gap-6">
              <Button
                className="flex h-12 items-center px-4"
                size="custom"
                rounded="full"
                variant={open ? "secondary" : "white"}
              >
                {allIcons.includes(input.value) ? (
                  input.value
                ) : (
                  <>
                    Select Icon
                    <BiChevronRight
                      className={`${open && "rotate-90"} ml-1 h-auto w-5 fill-current opacity-70`}
                    />
                  </>
                )}
              </Button>
              <Icon name={input.value} className="h-auto w-6" />
            </PopoverButton>
            <div className="absolute -bottom-2 left-0 z-[1000] w-full min-w-[192px] max-w-xl translate-y-full">
              <Transition
                enter="transition duration-150 ease-out"
                enterFrom="transform opacity-0 -translate-y-2"
                enterTo="transform opacity-100 translate-y-0"
                leave="transition duration-75 ease-in"
                leaveFrom="transform opacity-100 translate-y-0"
                leaveTo="transform opacity-0 -translate-y-2"
              >
                <PopoverPanel className="border-gray-150 relative z-50 overflow-hidden rounded-lg border bg-white shadow-lg">
                  {({ close }) => (
                    <div className="flex h-full max-h-[24rem] w-full flex-col">
                      <div className="z-10 border-b border-gray-100 bg-gray-50 p-2 shadow-sm">
                        <input
                          type="text"
                          className="block w-full rounded-sm border border-gray-100 bg-white px-2.5 py-1.5 text-sm placeholder-gray-200 shadow-inner"
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          onClick={(event: any) => {
                            event.stopPropagation();
                            event.preventDefault();
                          }}
                          value={filter}
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          onChange={(event: any) => {
                            setFilter(event.target.value);
                          }}
                          placeholder="Filter..."
                        />
                      </div>
                      {filteredBlocks.length === 0 && (
                        <span className="relative bg-gray-50 px-2 py-3 text-center text-xs italic text-gray-300">
                          No matches found
                        </span>
                      )}
                      {filteredBlocks.length > 0 && (
                        <div className="grid w-full auto-rows-auto grid-cols-5 overflow-y-auto p-2">
                          <button
                            className="relative flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-center text-xs outline-none transition-all duration-150 ease-out hover:bg-gray-50"
                            key={"clear-input"}
                            onClick={() => {
                              input.onChange("");
                              setFilter("");
                              close();
                            }}
                          >
                            <GoCircleSlash className="h-auto w-6 text-gray-200" />
                          </button>

                          {filteredBlocks.map((name) => {
                            return (
                              <button
                                className="relative flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-center text-xs outline-none transition-all duration-150 ease-out hover:bg-gray-50"
                                key={name}
                                onClick={() => {
                                  input.onChange(name);
                                  setFilter("");
                                  close();
                                }}
                              >
                                <Icon name={name as keyof typeof Icon} />
                              </button>
                            );
                          })}

                          <p className="col-span-5 mt-2 text-center text-xs opacity-25">
                            Search for more...
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </PopoverPanel>
              </Transition>
            </div>
          </>
        )}
      </Popover>
    </div>
  );
});

export const iconSchema = {
  type: "string",
  label: "Icon",
  name: "icon",
  required: true,
  ui: {
    component: IconPickerInput,
  },
};
