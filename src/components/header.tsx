"use client";

import { cn } from "@/lib/utils";
import styles from "@/components/layout.module.css";
import { Store } from "lucide-react";

const Header = () => {
  return (
    <header
      className={cn(
        styles["border-grid"],
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className={styles["container-wrapper"]}>
        <div
          className={cn(
            styles["container"],
            "flex h-10 md:h-14 items-center justify-between"
          )}
        >
          <Store />
        </div>
      </div>
    </header>
  );
};

export { Header };
