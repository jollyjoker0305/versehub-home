"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Get language from localStorage or default to 'vi'
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem("language") || "vi" : "vi";
    router.push(`/${savedLanguage}`);
  }, [router]);

  return null;
} 