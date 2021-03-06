export class Card {
  constructor(data, cardTemplateSelector, handleImageClick) {
    this._elementTemplate =
      document.querySelector(cardTemplateSelector).content;
    this._data = data;
    this._handeImageClick = handleImageClick;
  }

  _addEventListeners = () => {
    this._elementImage.addEventListener("click", () =>
      this._handeImageClick(this._data)
    );
    this._deleteButton.addEventListener("click", () =>
      this._elementContent.remove()
    );
    this._likeButton.addEventListener("click", () =>
      this._likeButton.classList.toggle("element__button_liked")
    );
  };

  createElement() {
    this._elementContent = this._elementTemplate
      .querySelector(".element")
      .cloneNode(true);
    const elementName = this._elementContent.querySelector(".element__name");
    elementName.textContent = this._data.name;
    this._likeButton = this._elementContent.querySelector(
      ".element__like-button"
    );
    this._elementImage = this._elementContent.querySelector(".element__image");
    this._deleteButton = this._elementContent.querySelector(
      ".element__delete-button"
    );
    this._elementImage.src = this._data.link;
    this._elementImage.alt = `Picture of ${this._data.name}`;
    this._addEventListeners();
    return this._elementContent;
  }
}
