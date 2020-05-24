const plant = require("./plant");
function _template(plant) {
  return `<div class="card smoothScroll">
    <div
      class="card__header d-flex justify-content-center align-items-center"
    >
     <img class="card__img" src="https://icons-quand-jardiner.netlify.app/${plant.title}.png" alt="" />
    </div>
    <div class="card__title">${plant.title}</div>
    <div
      class="card__about d-flex justify-content-around align-items-start f-column"
    >
      <div class="d-flex f-row">
        <p>${plant.operation_culturale}</p>
        <p>:</p>
        &nbsp;
        <p>${plant.semis}</p>
      </div>
      <div class="d-flex f-row">
        <p>Récolte :</p>
        &nbsp;
        <p>${plant.recolte}</p>
      </div>
      <div class="d-flex f-row">
        <p>Exposition :</p>
        &nbsp;
        <p>${plant.exposition}</p>
      </div>
    </div>
  </div>`;
}

function display_plant(elem) {
  content__card.innerHTML = plant.reduce(
    (output, plant) => output + _template(plant),
    ""
  );
}

display_plant(plant);
