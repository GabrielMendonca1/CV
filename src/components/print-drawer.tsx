"use client";

import { Button } from "./ui/button";
import { PrinterIcon } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";

export const PrintDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="fixed bottom-4 right-4 size-16 rounded-full shadow-2xl print:hidden">
          <PrinterIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Meta de Movimento</DrawerTitle>
            <DrawerDescription>Defina sua meta diária de atividade.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0"></div>
          <DrawerFooter>
            <Button onClick={() => window.print()}>Imprimir</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
