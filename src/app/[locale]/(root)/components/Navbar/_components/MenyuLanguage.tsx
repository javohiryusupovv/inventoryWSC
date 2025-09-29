"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../ui/popover";
import { Globe } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const LANGUAGES = [
  { code: "uz", label: "O'zbekcha" },
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

export default function MenyuLanguage() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Agar path bosh bo‘lsa -> default uz
  const currentLang = pathname.split("/")[1] || "uz";

  const handleSelect = (code: string) => {
    setOpen(false);

    const segments = pathname.split("/");
    // agar route "/" bo‘lsa => segments = ["", ""]
    if (!segments[1]) {
      segments[1] = code;
    } else {
      segments[1] = code;
    }

    const newPath = segments.join("/") || `/${code}`;
    router.push(newPath);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center px-3 py-1 border rounded-md bg-white border-orange-400 hover:bg-gray-100 transition">
          <Globe className="w-4 h-4 mr-2 text-orange-400" />
          <span className="uppercase">{currentLang}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-2 -translate-x-5">
        <div className="flex flex-col space-y-1">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className={`flex justify-between items-center rounded-md px-2 py-1.5 text-sm transition
                ${currentLang === l.code ? "bg-gray-200" : "bg-white hover:bg-gray-100"}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}



