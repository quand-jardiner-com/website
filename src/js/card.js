const plant = require("./plant");
function _template(plant) {
  return `<div class="card smoothScroll">
    <div
      class="card__header d-flex justify-content-center align-items-center"
    >
     <img class="card__img" src="https://icons-quand-jardiner.netlify.app/${plant.url}.png" alt="" />
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

function display_plant(plant) {
  content__card.innerHTML = plant.reduce(
    (output, plant) => output + _template(plant),
    ""
  );
}

function get_month_plant(plant) {
  if (plant === "Janvier") {
    return 0;
  }
  if (plant === "Février") {
    return 1;
  }
  if (plant === "Mars") {
    return 2;
  }
  if (plant === "Avril") {
    return 3;
  }
  if (plant === "Mai") {
    return 4;
  }
  if (plant === "Juin") {
    return 5;
  }
  if (plant === "Juillet") {
    return 6;
  }
  if (plant === "Août") {
    return 7;
  }
  if (plant === "Septembre") {
    return 8;
  }
  if (plant === "Octobre") {
    return 9;
  }
  if (plant === "Novembre") {
    return 10;
  }
  if (plant === "Décembre") {
    return 11;
  }
}

function display_plant_today(date) {
  var month_split = [];
  for (var i = 0; i < plant.length; i++) {
    month_split[i] = plant[i].semis.split(" - ");
    var month_start_plant = get_month_plant(month_split[i][0]);
    var month_end_plant = get_month_plant(month_split[i][1]);
    if (month_start_plant <= date && month_end_plant >= date) {
      content__card.innerHTML += _template(plant[i]);
    }
  }
  // Janvier = 0
  // Decembre = 11
}
// display_plant(plant);
display_plant_today(new Date().getMonth());
