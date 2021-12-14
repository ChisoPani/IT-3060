//*******************************Comments to professor*******************************

//Rubric asks for data to dumped into tabale or datatable, but I wanted user to see the a decent sized cover pic for the anime they searched so I used bootstrap and their card template.
//Rubric also asks for js validation, but the the search function doesn't have a min length or a datatype cause anime titles can be long/short and contain numbers so an error handling feature where if the API responds with an error an alert pops.
//Also
//Runs the search
$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    let search = $("#search").val();
    getAnimes(search);
    userSearch(search);
    validateForm();
    e.preventDefault();
  });
});

function validateForm() {
  let x = $("#search").value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

$(window).on("load", function () {
  loadSearch();
  getAnime();
});

//stores user search
function userSearch(userSearch) {
  sessionStorage.setItem("search", userSearch);
  console.log(userSearch);
  return false;
}

//displays user search
function getAnimes(search) {
  axios
    .get("https://api.jikan.moe/v3/search/anime?q=" + search)
    .then((response) => {
      console.log(response);
      let animes = response.data.results;
      let output = "";
      $.each(animes, (index, anime) => {
        output += `
      <div class="card-body d-flex flex-column">
        <ul class="list-unstyled mt-3 mb-4">
          <img src="${anime.image_url}" class="card-img-top">
        </ul>
        <div class="card-header">
      <h4 class="my-0 font-weight-normal">${anime.title}</h4>
   
      </div>
      <hr>
      <p>Type: ${anime.type}</p>
      <a href="#" onclick="animeSelected('${anime.mal_id}')" class="align-self-center btn btn-lg btn-block btn-primary" style="margin-top: auto;">More Info</a>
      </div>
        `;
      });
      $("#anime").html(output);
      sessionStorage.clear;
    })
    .catch((err) => {
      //data validation
      alert("Anime not found. Please try again or check your spelling");
      console.log(err);
    });
}

//stores which anime user clicked
function animeSelected(id) {
  sessionStorage.setItem("animeID", id);
  window.location = "anime.html";
  return false;
}

//displays more info on the anime user clicked
function getAnime() {
  let animeID = sessionStorage.getItem("animeID");
  let search = $("#search").val();

  axios
    .get("https://api.jikan.moe/v3/anime/" + animeID)
    .then((response) => {
      let anime = response.data;

      let output = `
          <div class="row">
            <div class="col">
              <img src="${anime.image_url}" class="img-thumbnail">
            </div>
            <div class="col">
              <h2>${anime.title}</h2>
              <ul class="list-group">
                <li class="list-group-item"><strong>Episodes:</strong> ${anime.episodes}</li>
                <li class="list-group-item"><strong>Premiered:</strong> ${anime.premiered}</li>
                <li class="list-group-item"><strong>Rating:</strong> ${anime.rating}</li>
                <li class="list-group-item"><strong>Rank:</strong> ${anime.rank}</li>
                <li class="list-group-item"><strong>Score:</strong> ${anime.score}</li>
                <li class="list-group-item"><strong>Status:</strong> ${anime.status}</li>
                <li class="list-group-item"><strong>English Title:</strong> ${anime.title_english}</li>
                
              </ul>
            </div>
          </div>
          <div class="row">
          <div class="col" id="snop">
        
              <h3>Plot</h3>
             <p> ${anime.synopsis}</p>
          
              <hr>
              <div class="col text-center">
              <a href="${anime.url}" target="_blank" class="btn btn-primary ">View MAL link</a>
              <a href="index.html" onclick="loadSearch(${search})" class="btn btn-danger">Go Back To Search</a>
              </div>
              </div>
          </div>
        `;
      $("#showAnime").html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

//returns user to the previous page with the search loaded
function loadSearch() {
  let storeUserSearch = sessionStorage.getItem("search");
  console.log(storeUserSearch);
  axios
    .get("https://api.jikan.moe/v3/search/anime?q=" + storeUserSearch)
    .then((response) => {
      console.log(response);
      let animes = response.data.results;
      let output = "";
      $.each(animes, (index, anime) => {
        output += `
    <div class="card-body d-flex flex-column">
      <ul class="list-unstyled mt-3 mb-4">
        <img src="${anime.image_url}" class="card-img-top">
      </ul>
      <div class="card-header">
    <h4 class="my-0 font-weight-normal">${anime.title}</h4>
    </div>
    <a href="#" onclick="animeSelected('${anime.mal_id}')" class="align-self-center btn btn-lg btn-block btn-primary" style="margin-top: auto;">Get started</a>
    </div>
      `;
      });
      $("#anime").html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
