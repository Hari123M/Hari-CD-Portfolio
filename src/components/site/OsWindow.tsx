import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function OsWindow({
  title,
  children,
  className,
  bodyClassName,
  right,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  right?: ReactNode;
}) {
  return (
    <div className={cn("os-window", className)}>
      <div className="os-title flex items-center justify-between gap-3">
        <span className="truncate">{title}</span>
        {right ?? (
          <span aria-hidden className="flex gap-1">
            <span className="block size-2.5 border border-background" />
            <span className="block size-2.5 bg-background" />
          </span>
        )}
      </div>
      <div className={cn("p-3", bodyClassName)}>{children}</div>
    </div>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-mono text-[11px] font-medium uppercase tracking-wide", className)}>
      {children}
    </p>
  );
}
