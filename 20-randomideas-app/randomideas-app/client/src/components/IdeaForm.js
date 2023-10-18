class IdeaForm {
  constructor() {
    this._formModal = document.getElementById("form-modal");
  }

  addEventListeners() {
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("SUBMIT");
  }

  render() {
    this._formModal.innerHTML = `
        <form id="idea-form">
          <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Tag</label>
            <input type="text" name="tag" id="tag" />
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
        </form>
        `;
    this._form = document.getElementById("idea-form");
    this.addEventListeners();
  }
}

export default IdeaForm;
