export const EVENT_LISTENER_KEYDOWN = "keydown";
export const SCROLLABE_CONTAINER_ID = "scrollableContainer";
export const SUMMARY_BOX_ID = "summary_box";
export const SUMMARY_FIXED_ID = "summary-fixed";
export const ENABLE_AUTO_SCROLL_ID = "enable_auto_scroll"

const script = "SCRIPT_";
const mainContentHeader = "MAIN_CONTENT_HEADER_";

export const componentsIds = {
  mainContentHeader: {
    PAGE_MENU_BUTTON: mainContentHeader + "PAGE_MENU_BUTTON",
    CLOSE_BUTTON: mainContentHeader + "CLOSE_BUTTON",
  },
  script: {
    BACK_TO_HOME_BUTTON: script + "BACK_TO_HOME_BUTTON",
    CREATE_SCRIPT_BUTTON: script + "CREATE_SCRIPT_BUTTON",
  },
}

export enum ELEMENT {
  TEXT_AREA = "textarea",
}

export enum ATTRIBUTE {
  TAB_INDEX = "tabindex",
  READ_ONLY = "readonly",
}

export enum ROLE {
  BUTTON = "button",
  LINK = "link",
  CHECKBOX = "checkbox",
}

export enum KEY {
  SPACE = " ",
  ENTER = "Enter",
  TAB = "Tab",
  F6 = "f6",
  ESCAPE = "Escape",
  ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  ARROW_LEFT = "ArrowLeft",
  ARROW_RIGHT = "ArrowRight",
  HOME = "Home",
  END = "End",
}

export enum SCROLL_BEHAVIOR {
  SMOOTH = "smooth",
  INSTANT = "instant",
}
