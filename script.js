const itemRow = document.querySelector(".item-row");
itemRow.classList.add("justify-content-around");

const data = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data) => data.json())
  .then((data) => {
    data.map((item) => {
      const card = document.createElement("div");
      card.classList.add("card", "col-md-3", "m-4");

      const cardBody = document.createElement("div");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title", "m-3", "d-flex");
      cardTitle.innerText = item.title;

      const cardSubTitle = document.createElement("h6");
      cardSubTitle.classList.add(
        "card-subtitle",
        "m-3",
        "text-muted",
        "text-center"
      );
      cardSubTitle.innerText = item.id;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text", "m-3", "text-center");
      cardText.innerText = item.completed;

      cardBody.append(cardTitle, cardSubTitle, cardText);
      card.appendChild(cardBody);
      itemRow.appendChild(card);
    });
  });

const search = document.querySelector(".form-control");
search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let searchText = search.value;
    console.log(searchText);
    const data = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) =>
        data.filter((item) => {
          return item.title.startsWith(searchText);
        })
      );
    console.log(item);
  }
});
