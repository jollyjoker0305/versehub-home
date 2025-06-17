"use client";

import { useLanguage } from "./language-provider";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === "vi" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("vi")}
        className="min-w-[40px]"
      >
        VI
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="min-w-[40px]"
      >
        EN
      </Button>
    </div>
  );
} 