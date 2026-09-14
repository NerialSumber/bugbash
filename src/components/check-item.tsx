"use client";

import { useSyncExternalStore } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const STORAGE = "prontera-bugbash-checks";
const listeners = new Set<() => void>();

function readMap(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE) || "{}") as Record<
      string,
      boolean
    >;
  } catch {
    return {};
  }
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function getSnapshot(storageKey: string) {
  return Boolean(readMap()[storageKey]);
}

function emit() {
  listeners.forEach((listener) => listener());
}

export function CheckItem({ storageKey }: { storageKey: string }) {
  const checked = useSyncExternalStore(
    subscribe,
    () => getSnapshot(storageKey),
    () => false
  );

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={(value) => {
        const map = readMap();
        map[storageKey] = Boolean(value);
        localStorage.setItem(STORAGE, JSON.stringify(map));
        emit();
      }}
      aria-label="Marcar passo como feito"
      className="mt-1.5 no-print"
    />
  );
}
