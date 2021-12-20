const itemRow = document.querySelector(".item-row");
itemRow.classList.add("justify-content-around");

const data = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data) => data.json())
  .then((data) => {
    data.map((item) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-md-4", "text-center");
      const card = document.createElement("div");
      card.classList.add("card", "m-4");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title", "m-3");
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
      cardText.classList.add("card-text", "m-3");
      cardText.innerText = item.completed;

      cardBody.append(cardTitle, cardSubTitle, cardText);
      card.appendChild(cardBody);
      colDiv.appendChild(card);
      itemRow.appendChild(colDiv);
    });
  });
