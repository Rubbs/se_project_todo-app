class Popup {
  constructor({ popupSelector }) {
    this.popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this.popupElement.querySelector(".popup__close");
    this._handleEscapeCloseBound = this._handleEscapeClose.bind(this);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  open() {
    this.popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeCloseBound);
  }
  close() {
    this.popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeCloseBound);
  }

  setEventListeners() {
    if (this._eventListenersSet) return;
    this.popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target === this.popupElement ||
        evt.target.closest(".popup__close")
      ) {
        this.close();
      }
    });
    this._eventListenersSet = true;
  }
}
export default Popup;
