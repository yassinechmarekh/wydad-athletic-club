var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "dd36e17607b299321e2f4997540daff7");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://v3.football.api-sports.io/fixtures?team=968&last=3",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    if (result.response.length == 0) {
      generateMatchStatic();
    } else {
      generateMatchCards(result.response);
    }
  })
  .catch((error) => console.log("error", error));

function generateMatchCards(matches) {
  const container = document.getElementById("match-cards-container");

  matches.forEach((match) => {
    const homeTeam = match.teams.home;
    const awayTeam = match.teams.away;
    const league = match.league;
    const venue = match.fixture.venue;
    const date = new Date(match.fixture.date).toLocaleString("fr-FR", {
      dateStyle: "long",
      timeStyle: "short",
    });
    const score = match.goals;

    const cardHTML = `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card text-center match-card">
            <div class="card-header match-header">
              <div class="d-flex justify-content-center align-items-center gap-1">
                <img src="assets/images/last-matchs/botola.svg" alt="" />
                <p class="mb-0 text-uppercase text-black">
                  <span class="fw-bold">${league.name}</span>
                </p>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">${date}</h5>
              <div class="d-flex justify-content-center align-items-center gap-4">
                <div class="d-flex flex-column align-items-center gap-1 match-club">
                  <img src="${homeTeam.logo}" alt="${homeTeam.name}" />
                  <h4 class="mb-0 fs-6 fw-bold">${homeTeam.name}</h4>
                </div>
                <h1 class="mb-0 fs-2">${score.home} - ${score.away}</h1>
                <div class="d-flex flex-column align-items-center gap-1 match-club">
                  <img src="${awayTeam.logo}" alt="${awayTeam.name}" />
                  <h4 class="mb-0 fs-6 fw-bold">${awayTeam.name}</h4>
                </div>
              </div>
            </div>
            <div class="card-footer text-body-secondary match-footer">
              <h5 class="mb-0 fw-bold">Tour ${match.league.round}</h5>
              <p class="mb-0">${venue.name}</p>
            </div>
          </div>
        </div>
      `;

    container.innerHTML += cardHTML;
  });
}

function generateMatchStatic() {
  const container = document.getElementById("match-cards-container");

  const cardHTML = `
    <div class="col-md-6 col-lg-4 mb-4">
    <div class="card text-center match-card">
        <div class="card-header match-header">
        <div
            class="d-flex justify-content-center align-items-center gap-1"
        >
            <img src="assets/images/last-matchs/botola.svg" alt="" />
            <p class="mb-0 text-uppercase text-black">
            <span class="fw-bold">botola</span> pro
            </p>
        </div>
        </div>
        <div class="card-body">
        <h5 class="card-title">30 Août 2024 - 18:00</h5>
        <div
            class="d-flex justify-content-center align-items-center gap-4"
        >
            <div
            class="d-flex flex-column align-items-center gap-1 match-club"
            >
            <img src="assets/images/last-matchs/wac.svg" alt="" />
            <h4 class="mb-0 fs-6 fw-bold">WAC</h4>
            </div>
            <h1 class="mb-0 fs-2">4 - 1</h1>
            <div
            class="d-flex flex-column align-items-center gap-1 match-club"
            >
            <img src="assets/images/last-matchs/dhj.svg" alt="" />
            <h4 class="mb-0 fs-6 fw-bold">DHJ</h4>
            </div>
        </div>
        </div>
        <div class="card-footer text-body-secondary match-footer">
        <h5 class="mb-0 fw-bold">Tour 3</h5>
        <p class="mb-0">Stade Larbi Zaouli</p>
        </div>
    </div>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
    <div class="card text-center match-card">
        <div class="card-header match-header">
        <div
            class="d-flex justify-content-center align-items-center gap-1"
        >
            <img src="assets/images/last-matchs/botola.svg" alt="" />
            <p class="mb-0 text-uppercase text-black">
            <span class="fw-bold">botola</span> pro
            </p>
        </div>
        </div>
        <div class="card-body">
        <h5 class="card-title">30 Août 2024 - 18:00</h5>
        <div
            class="d-flex justify-content-center align-items-center gap-4"
        >
            <div
            class="d-flex flex-column align-items-center gap-1 match-club"
            >
            <img src="assets/images/last-matchs/wac.svg" alt="" />
            <h4 class="mb-0 fs-6 fw-bold">WAC</h4>
            </div>
            <h1 class="mb-0 fs-2">1 - 0</h1>
            <div
            class="d-flex flex-column align-items-center gap-1 match-club"
            >
            <img src="assets/images/last-matchs/mat.svg" alt="" />
            <h4 class="mb-0 fs-6 fw-bold">MAT</h4>
            </div>
        </div>
        </div>
        <div class="card-footer text-body-secondary match-footer">
        <h5 class="mb-0 fw-bold">Tour 2</h5>
        <p class="mb-0">Stade Larbi Zaouli</p>
        </div>
    </div>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
    <div class="card text-center match-card">
        <div class="card-header match-header">
        <div
            class="d-flex justify-content-center align-items-center gap-1"
        >
            <img src="assets/images/last-matchs/botola.svg" alt="" />
            <p class="mb-0 text-uppercase text-black">
            <span class="fw-bold">botola</span> pro
            </p>
        </div>
        </div>
        <div class="card-body">
        <h5 class="card-title">30 Août 2024 - 18:00</h5>
        <div
            class="d-flex justify-content-center align-items-center gap-4"
        >
            <div
            class="d-flex flex-column align-items-center gap-1 match-club"
            >
            <img src="assets/images/last-matchs/mas.svg" alt="" />
            <h4 class="mb-0 fs-6 fw-bold">MAS Fés</h4>
            </div>
            <h1 class="mb-0 fs-2">1 - 0</h1>
            <div
            class="d-flex flex-column align-items-center gap-1 match-club"
            >
            <img src="assets/images/last-matchs/wac.svg" alt="" />
            <h4 class="mb-0 fs-6 fw-bold">WAC</h4>
            </div>
        </div>
        </div>
        <div class="card-footer text-body-secondary match-footer">
        <h5 class="mb-0 fw-bold">Tour 1</h5>
        <p class="mb-0">Stade Hassan-II</p>
        </div>
    </div>
    </div>
    `;

  container.innerHTML += cardHTML;
}
