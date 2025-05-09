import { ATTRIBUTE, KEY } from "./acessibility";

class FocusManager {
  private headerElements: HTMLElement[] = [];
  private sideBarElements: HTMLElement[] = [];
  private mainContentElements: HTMLElement[] = [];
  private footerElements: HTMLElement[] = [];
  private arrowNavigationElements: HTMLElement[] = [];
  public currentIndex: number = -1;

  private dialogList: HTMLElement[] = [];
  public dialogIndex: number = -1;

  public focusableElements: HTMLElement[] = [];
  private isDialogList: boolean = false;

  private arrowNavigableList: HTMLElement[] = [];
  private arrowListIndex: number = -1;
  private arrowFlag: boolean = false;

  public setHeaderElements(elements: HTMLElement[]) {
    console.log("set Header Elements");
    this.headerElements = elements;

    this.focusableElements = [
      ...this.headerElements,
      ...this.sideBarElements,
      ...this.mainContentElements,
      ...this.footerElements,
    ];
  }

  public setSideBarElements(elements: HTMLElement[], initialFocus?: number) {
    console.log("set Sidebar Elements");

    if (this.currentIndex > this.headerElements.length) {
      const diff = elements.length - this.sideBarElements.length;
      this.currentIndex += diff;
      if (
        this.sideBarElements.length > 0 &&
        this.sideBarElements.length > elements.length &&
        !initialFocus
      ) {
        this.currentIndex += 1;
      }
    }

    if (initialFocus !== undefined && initialFocus >= 0) {
      this.currentIndex = this.headerElements.length + initialFocus;
    }

    this.sideBarElements = elements;

    this.focusableElements = [
      ...this.headerElements,
      ...this.sideBarElements,
      ...this.mainContentElements,
      ...this.footerElements,
    ];

    const element = this.focusableElements[this.currentIndex];
    if (element) {
      element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
      element.focus();
    }
  }

  public setMainContentElements(
    newElements: HTMLElement[],
    initialFocusIndex?: number,
    skipCurrentIndexUpdate?: boolean,
  ) {
    console.log("set mainContent Elements");
    const currentElement = this.focusableElements[this.currentIndex];
    const elementIndexOnNewElements = newElements.findIndex(
      (el) => el === currentElement,
    );
    const isCurrentIndexOnMain =
      this.currentIndex >=
      this.headerElements.length + this.sideBarElements.length;

    if (isCurrentIndexOnMain && !skipCurrentIndexUpdate) {
      if (elementIndexOnNewElements !== -1) {
        this.currentIndex =
          this.headerElements.length +
          this.sideBarElements.length +
          elementIndexOnNewElements;
      }
    }

    this.mainContentElements = newElements;
    this.focusableElements = [
      ...this.headerElements,
      ...this.sideBarElements,
      ...this.mainContentElements,
      ...this.footerElements,
    ];

    if (initialFocusIndex) {
      this.currentIndex =
        this.headerElements.length +
        this.sideBarElements.length +
        initialFocusIndex;
    }

    const element = this.focusableElements[this.currentIndex];
    if (element) {
      element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
      element.focus();
    }
  }

  public setFocusFromElement(htmlElement: HTMLElement | null | undefined) {
    const focusIndex = this.focusableElements.findIndex(
      (element) => element === htmlElement,
    );

    if (focusIndex !== -1) {
      this.currentIndex = focusIndex;
      htmlElement?.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
      htmlElement?.focus();
    }
  }

  public setFooterElements(elements: HTMLElement[]) {
    console.log("set Footer Elements");
    this.footerElements = elements;

    this.focusableElements = [
      ...this.headerElements,
      ...this.sideBarElements,
      ...this.mainContentElements,
      ...this.footerElements,
    ];
  }

  public setArrowNavigationElements(elements: HTMLElement[]) {
    console.log("set Arrow Navigation Elements");
    this.arrowNavigationElements = elements;
  }

  public setDialogList(elements: HTMLElement[], initialFocusIndex: number) {
    console.log("set Dialog List");
    this.dialogList = elements;
    this.isDialogList = true;
    this.dialogIndex = initialFocusIndex;

    if (this.dialogList.length > initialFocusIndex) {
      const element = this.dialogList[initialFocusIndex];
      element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
      element.focus();
    }
  }

  public setArrowList(elements: HTMLElement[]) {
    console.log("set arrow list");
    this.arrowNavigableList = elements;
    this.arrowFlag = true;
  }
  public clear() {
    this.headerElements = [];
    this.sideBarElements = [];
    this.mainContentElements = [];
    this.footerElements = [];
    this.focusableElements = [];
    this.currentIndex = 0;
  }
  
  

  public resetArrowList() {
    this.arrowNavigableList = [];
    this.arrowFlag = false;
  }

  public resetDialogList() {
    console.log("dialog reset");
    this.dialogList = [];
    this.isDialogList = false;

    if (
      this.currentIndex >= 0 &&
      this.focusableElements.length > this.currentIndex
    ) {
      const element = this.focusableElements[this.currentIndex];
      element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
      element.focus();
    }
  }

  public verifyKeyDown(event: React.KeyboardEvent) {
    if (event.key === KEY.SPACE || event.key === KEY.ENTER) {
      event.preventDefault();
      return true;
    }
    return false;
  }

  public handleKeyDown(event: KeyboardEvent) {
    if (this.isDialogList) {
      if (event.key === KEY.TAB) {
        event.preventDefault();
        const isShiftPressed = event.shiftKey;

        if (document.activeElement === document.body) {
          this.dialogIndex = -1;
        }

        let nextIndex = isShiftPressed
          ? this.dialogIndex - 1
          : this.dialogIndex + 1;

        if (nextIndex >= this.dialogList.length) {
          nextIndex = 0;
        }

        if (nextIndex < 0) {
          nextIndex = this.dialogList.length - 1;
        }

        if (this.dialogList[nextIndex]) {
          const element = this.dialogList[nextIndex];
          element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
          element.focus();
          this.dialogIndex = nextIndex;
        }
      }
    } else {
      if (event.key === KEY.F6) {
        console.log("pressing f6");
        event.preventDefault();
        const isShiftPressed = event.shiftKey;

        if (document.activeElement === document.body) {
          this.currentIndex = -1;
        }

        const percent = (this.currentIndex + 1) / this.focusableElements.length;

        let nextIndex = 0;

        if (this.currentIndex < 0) {
          nextIndex = 0;
        } else if (
          percent <=
          this.headerElements.length / this.focusableElements.length
        ) {
          console.log("header -> sidebar");
          nextIndex = isShiftPressed
            ? this.headerElements.length +
              this.sideBarElements.length +
              this.mainContentElements.length
            : this.headerElements.length;
        } else if (
          percent <=
          (this.headerElements.length + this.sideBarElements.length) /
            this.focusableElements.length
        ) {
          console.log("sidebar -> main");
          nextIndex = isShiftPressed
            ? 0
            : this.headerElements.length + this.sideBarElements.length;
        } else if (
          percent <=
          (this.headerElements.length +
            this.sideBarElements.length +
            this.mainContentElements.length) /
            this.focusableElements.length
        ) {
          console.log("main -> footer");
          nextIndex = isShiftPressed
            ? this.headerElements.length
            : this.headerElements.length +
              this.sideBarElements.length +
              this.mainContentElements.length;
        } else if (
          percent <=
          (this.headerElements.length +
            this.sideBarElements.length +
            this.mainContentElements.length +
            this.footerElements.length) /
            this.focusableElements.length
        ) {
          console.log("footer -> header");
          nextIndex = isShiftPressed
            ? this.headerElements.length + this.sideBarElements.length
            : 0;
        }

        console.log(nextIndex);

        if (this.focusableElements[nextIndex]) {
          const element = this.focusableElements[nextIndex];
          element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
          element.focus();
          this.currentIndex = nextIndex;
        }
      }

      if (event.key === KEY.TAB) {
        event.preventDefault();
        const isShiftPressed = event.shiftKey;

        if (document.activeElement === document.body) {
          this.currentIndex = -1;
        }

        let nextIndex = isShiftPressed
          ? this.currentIndex - 1
          : this.currentIndex + 1;

        if (nextIndex >= this.focusableElements.length) {
          nextIndex = 0;
        }

        if (nextIndex < 0) {
          nextIndex = this.focusableElements.length - 1;
        }

        if (this.focusableElements[nextIndex]) {
          this.currentIndex = nextIndex;
          const element = this.focusableElements[nextIndex];
          element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
          element.focus();
        }
      }

      if (this.arrowNavigableList.length > 0) {
        this.NavigateInArrowNavigableList(event);
      }
      if (this.arrowNavigationElements.length > 0) {
        this.NavigateInArrowNavigationElements(event);
      }
    }
  }

  public switchArrowFlagValue() {
    this.arrowFlag = !this.arrowFlag;
  }

  public setArrowFlagFalse() {
    this.arrowFlag = false;
  }

  public restoreFocus() {
    if (this.currentIndex >= 0) {
      let focusableElements: HTMLElement[] = [
        ...this.headerElements,
        ...this.sideBarElements,
        ...this.mainContentElements,
        ...this.footerElements,
      ];
      focusableElements[this.currentIndex].setAttribute(
        ATTRIBUTE.TAB_INDEX,
        "0",
      );
      focusableElements[this.currentIndex].focus();
    }
  }

  public isElementBeingfocus(
    element: HTMLElement,
    doesNotResetIndex?: boolean,
  ) {
    if (this.focusableElements[this.currentIndex] === element) {
      return true;
    } else {
      if (!doesNotResetIndex && this.currentIndex >= 0) {
        this.currentIndex = -1;
      }
    }
    return false;
  }

  public isElementBeingFocusArrowList(
    element: HTMLElement,
    doNotChangeFocus?: boolean,
  ) {
    if (this.arrowNavigableList[this.arrowListIndex] === element) {
      return true;
    } else if (!doNotChangeFocus) {
      if (this.currentIndex >= 0) {
        this.currentIndex = -1;
      }
    }
    return false;
  }

  public setFocusFromHTMLElement(htmlElement: HTMLElement) {
    const index = this.focusableElements.findIndex(
      (element) => element === htmlElement,
    );
    if (index >= 0) {
      const element = this.focusableElements[index];
      element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
      element.focus();
      this.currentIndex = index;
    }
  }

  public NavigateInArrowNavigationElements(event: KeyboardEvent) {
    if (event.key === KEY.ARROW_UP || event.key === KEY.ARROW_DOWN) {
      const currentElement = this.focusableElements[this.currentIndex];
      if (
        currentElement &&
        this.arrowNavigationElements.find((element) => {
          return element === currentElement;
        })
      ) {
        console.log("Arrow Navigation");
        let nextIndex = this.currentIndex;

        if (event.key === KEY.ARROW_UP) {
          nextIndex = this.currentIndex - 1;
        }
        if (event.key === KEY.ARROW_DOWN) {
          nextIndex = this.currentIndex + 1;
        }

        const nextElement = this.focusableElements[nextIndex];

        if (
          nextElement &&
          this.arrowNavigationElements.find((element) => {
            return element === nextElement;
          })
        ) {
          const element = this.focusableElements[nextIndex];
          element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
          element.focus();
          this.currentIndex = nextIndex;
        }
      }
    }
  }

  public NavigateInArrowNavigableList(event: KeyboardEvent) {
    if (event.key === KEY.ARROW_RIGHT) {
      if (this.arrowFlag) {
        this.currentIndex = -1;
        event.preventDefault();
        const isTheFocusOnArrowList = this.arrowNavigableList.find(
          (element) => element === document.activeElement,
        );

        if (!isTheFocusOnArrowList) {
          this.arrowListIndex = -1;
        }

        const element = this.arrowNavigableList[this.arrowListIndex];
        let elementRole = "";
        if (element) {
          elementRole = element.attributes["kinship"].value;
        }

        if (
          this.arrowListIndex === -1 ||
          elementRole === "0" ||
          elementRole === "1" ||
          elementRole === "2"
        ) {
          let nextIndex = this.arrowListIndex + 1;

          if (nextIndex === this.arrowNavigableList.length || nextIndex < 0) {
            nextIndex = this.arrowListIndex;
          }

          if (this.arrowNavigableList[nextIndex]) {
            const element = this.arrowNavigableList[nextIndex];
            element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
            element.focus();
            this.arrowListIndex = nextIndex;
          }
        }
      } else if (this.arrowNavigableList.length > 0) {
        this.arrowFlag = true;
      }
    }

    if (event.key === KEY.ARROW_DOWN) {
      event.preventDefault();
      if (
        (document.activeElement ===
          this.arrowNavigableList[this.arrowListIndex] &&
          this.arrowNavigableList[this.arrowListIndex].attributes["kinship"]
            .value === "3") ||
        this.arrowNavigableList[this.arrowListIndex].attributes["kinship"]
          .value === "4"
      ) {
        let nextIndex = this.arrowListIndex + 1;

        if (nextIndex === this.arrowNavigableList.length || nextIndex < 0) {
          nextIndex = this.arrowListIndex;
        }

        if (this.arrowNavigableList[nextIndex]) {
          const element = this.arrowNavigableList[nextIndex];
          element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
          element.focus();
          this.arrowListIndex = nextIndex;
        }
      }
    }

    if (event.key === KEY.ARROW_UP) {
      event.preventDefault();
      if (
        (document.activeElement ===
          this.arrowNavigableList[this.arrowListIndex] &&
          this.arrowNavigableList[this.arrowListIndex].attributes["kinship"]
            .value === "3") ||
        this.arrowNavigableList[this.arrowListIndex].attributes["kinship"]
          .value === "4"
      ) {
        let nextIndex = this.arrowListIndex - 1;

        if (nextIndex === this.arrowNavigableList.length || nextIndex < 0) {
          nextIndex = this.arrowListIndex;
        }

        if (this.arrowNavigableList[nextIndex]) {
          const element = this.arrowNavigableList[nextIndex];
          element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
          element.focus();
          this.arrowListIndex = nextIndex;
        }
      }
    }

    if (event.key === KEY.ARROW_LEFT) {
      event.preventDefault();
      if (
        document.activeElement ===
          this.arrowNavigableList[this.arrowListIndex] &&
        this.arrowFlag
      ) {
        let elementRole = Number(
          this.arrowNavigableList[this.arrowListIndex].attributes["kinship"]
            .value,
        );
        if (elementRole === 4) {
          elementRole -= 2;
        }
        let nextIndex = this.arrowListIndex;

        while (
          this.arrowNavigableList[nextIndex].attributes["kinship"].value !==
            String(elementRole - 1) &&
          nextIndex > 0
        ) {
          nextIndex -= 1;
        }

        if (nextIndex === this.arrowNavigableList.length || nextIndex < 0) {
          nextIndex = this.arrowListIndex;
        }

        if (this.arrowNavigableList[nextIndex]) {
          const element = this.arrowNavigableList[nextIndex];
          element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
          element.focus();
          this.arrowListIndex = nextIndex;
        }
      } else if (this.arrowNavigableList.length > 0) {
        this.arrowFlag = true;
      }
    }

    if (event.key === KEY.HOME) {
      event.preventDefault();
      let nextIndex = 0;
      if (this.arrowNavigableList[nextIndex]) {
        const element = this.arrowNavigableList[nextIndex];
        element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
        element.focus();
        this.arrowListIndex = nextIndex;
      }
    }

    if (event.key === KEY.END) {
      event.preventDefault();
      let nextIndex = this.arrowNavigableList.length - 1;
      let teste = false;
      let i = nextIndex;
      while (i > 0) {
        if (!teste && this.arrowNavigableList[i].attributes["collapsed"]) {
          if (
            this.arrowNavigableList[i].attributes["collapsed"].value === "false"
          ) {
            break;
          }
          teste = true;
        }
        if (
          this.arrowNavigableList[i].attributes["collapsed"] &&
          this.arrowNavigableList[i].attributes["collapsed"].value === "true"
        ) {
          if (
            Number(this.arrowNavigableList[i].attributes["kinship"].value) <
            Number(
              this.arrowNavigableList[nextIndex].attributes["kinship"].value,
            )
          )
            nextIndex = i;
        }
        i -= 1;
      }

      if (this.arrowNavigableList[nextIndex]) {
        const element = this.arrowNavigableList[nextIndex];
        element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
        element.focus();
        this.arrowListIndex = nextIndex;
      }
    }
  }

  public getHeaderElementsLength() {
    return this.headerElements.length;
  }

  public setFocusOnNextElement() {
    this.setFocusFromHTMLElement(this.focusableElements[this.currentIndex + 1]);
  }

  public setFocusOnPreviousElement() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      const element = this.focusableElements[this.currentIndex];
      element.setAttribute(ATTRIBUTE.TAB_INDEX, "0");
      element.focus();
    }
  }
  public setFocusOnFirstSideBarElement() {
    this.currentIndex = this.headerElements.length;
    this.setFocusFromElement(this.focusableElements[this.currentIndex]);
  }
}

let focusManager = new FocusManager();

export default focusManager;

