class IdeaList {
  constructor() {
    this._ideaListEl = document.getElementById("idea-list");
    this._ideas = [
      {
        id: 1,
        text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
        tag: "Technology",
        username: "Tony Stark",
        date: "01/01/2023",
      },
      {
        id: 2,
        text: "Milk cartons that turn a different color the older that your milk is getting",
        tag: "Inventions",
        username: "Steve Rogers",
        date: "01/02/2023",
      },
      {
        id: 3,
        text: "ATM location app which lets you know where the closest ATM is and if it is in service",
        tag: "Software",
        username: "Bruce Banner",
        date: "01/03/2023",
      },
    ];
    this._validTags = new Set();
    this._validTags.add("technology");
    this._validTags.add("software");
    this._validTags.add("business");
    this._validTags.add("education");
    this._validTags.add("health");
    this._validTags.add("inventions");
  }

  getTagClass(tag) {
    tag = tag.toLowerCase();
    let tagClass = "";
    if (this._validTags.has(tag)) {
      tagClass = `tag-${tag}`;
    } else {
      tagClass = "";
    }
    return tagClass;
  }

  render() {
    this._ideaListEl.innerHTML = this._ideas
      .map((idea) => {
        const tagClass = this.getTagClass(idea.tag);
        return `
        <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>
        `;
      })
      .join("");
  }
}

export default IdeaList;
