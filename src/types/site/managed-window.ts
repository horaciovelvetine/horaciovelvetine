import type { Dispatch, SetStateAction } from "react";
import type { Position } from "./position";

export interface ManagedWindow {
  id: string,
  title: string,
  position: Position
  setPosition: Dispatch<SetStateAction<Position>>
  zIndex: string
  setZIndex: Dispatch<SetStateAction<string>>;
}
