"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { CommandIcon, MoonIcon, SunIcon } from "lucide-react";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
        Pressione{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘|CTRL</span>J
        </kbd>{" "}
        para abrir o menu de comandos
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite um comando ou procure..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Ações">
            <CommandItem
              className="text-lg py-3 px-4"
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2 h-4 w-4">
                <path fillRule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.74.14 1.085.278.758.305 1.437.798 1.98 1.43C19.02 9.418 19.5 10.53 19.5 11.75v.75c0 .653-.214 1.26-.596 1.762l-1.116 1.487c-.23.308-.518.56-.844.745a4.95 4.95 0 01-2.944 1.006 4.948 4.948 0 01-1.8-.323 3.48 3.48 0 00-.612-.21v1.883C11.75 19.216 10.966 20 10 20H8.75c-.966 0-1.75-.784-1.75-1.75v-6.5C7 10.784 6.216 10 5.25 10h-1.5c-.966 0-1.75-.784-1.75-1.75v-1.5C2 5.784 2.784 5 3.75 5h1.5V2.75zM6.5 2.5v2h7v-2H6.75C6.612 2.5 6.5 2.612 6.5 2.75zM3.5 6.5v1.5h1.5v-1.5H3.75a.25.25 0 00-.25.25zM18 11.75v-.75a3.484 3.484 0 00-1.06-2.463 2.478 2.478 0 00-1.383-.82 4.87 4.87 0 00-1.057-.117H8.75v6.5H10c.138 0 .25.112.25.25v1.75h.875a3.448 3.448 0 002.625-.965 3.438 3.438 0 001.05-2.352 3.97 3.97 0 00-.307-1.528 3.482 3.482 0 00-.9-.967l-1.116-1.488A2.49 2.49 0 0118 11.75z" clipRule="evenodd" />
              </svg>
              <span>Imprimir</span>
            </CommandItem>
            <CommandItem
              className="text-lg py-3 px-4"
              onSelect={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setOpen(false);
              }}
            >
              {theme === "dark" ? (
                <SunIcon className="mr-2 h-4 w-4" />
              ) : (
                <MoonIcon className="mr-2 h-4 w-4" />
              )}
              <span>Alterar tema</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                className="text-lg py-3 px-4"
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
