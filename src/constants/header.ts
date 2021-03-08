export const HEADER_LIST: {
  icon: string;
  label: string;
  event: string;
  size: string;
  disabledKey: string;
}[] = [
  {
    icon: "save",
    label: "save",
    event: "save",
    size: "text-2xl",
    disabledKey: "",
  },
  {
    icon: "expand",
    label: "clear all",
    event: "clear",
    size: "text-2xl",
    disabledKey: "",
  },
  {
    icon: "undo",
    label: "undo",
    event: "undo",
    size: "text-xl",
    disabledKey: "isDisabeldUndo",
  },
  {
    icon: "redo",
    label: "redo",
    event: "redo",
    size: "text-xl",
    disabledKey: "isDisabeldRedo",
  },
];
