"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "uz", label: "O‘zbekcha" },
];

export default function MenyuLanguage() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false); // Popover holatini boshqaramiz

  const handleSelect = (code: string) => {
    setLang(code);
    setOpen(false); // Tanlagandan keyin yopiladi
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center px-3 py-1 border rounded-md bg-white hover:bg-gray-100 transition">
          <Globe className="w-4 h-4 mr-2" />
          <span className="capitalize">{lang}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-2 -translate-x-5">
        <div className="flex flex-col space-y-1">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className={`flex justify-between items-center rounded-md px-2 py-1.5 text-sm transition
                ${lang === l.code ? "bg-gray-200" : "bg-white hover:bg-gray-100"}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
