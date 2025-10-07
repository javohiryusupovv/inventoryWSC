"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("cookies")

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const declineAll = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-7 w-[400px] max-sm:w-[350px] bg-white shadow-lg border rounded-lg p-4 flex flex-col items-center justify-between gap-3 z-50">
      <p className="text-sm text-gray-700 max-sm:text-[12px] max-sm:leading-[110%]">
        {t("cookieTitle")}
      </p>
      <div className="flex gap-2">
        <button
          onClick={declineAll}
          className="px-5 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm"
        >
          {t("closeBtn")}
        </button>
        <button
          onClick={acceptAll}
          className="px-5 py-2 bg-orange-400 text-white rounded hover:bg-orange-400/80 transition-all duration-200 text-sm"
        >
          {t("succesBtn")}
        </button>
      </div>
    </div>
  );
}
