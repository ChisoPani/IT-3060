const base_url = "https://api.jikan.moe/v3";


function searchAnime(event) {

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    fetch(`${base_url}/search/anime?q=${query}&page=1`)
        .then(res => res.json())
        .then(updateDom)
        .catch(err => console.warn(err.message));
}

function updateDom(data) {

    const searchResults = document.getElementById('search-results');

    const animeByCategories = data.results
        .reduce((acc, anime) => {

            const { type } = anime;
            if (acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});

    searchResults.innerHTML = Object.keys(animeByCategories).map(key => {

        const animesHTML = animeByCategories[key]
            .sort((a, b) => a.episodes - b.episodes)
            .map(anime => {
                return `
                <div class="card" style="width: 18rem;">
                <div class="card-imagea">
                <img class="card-img-top" src="${anime.image_url}" alt="Card image cap">
                <div class="card-info">
                <p class="card-text">Type: ${anime.type}</p>
                <p class="card-text">Episodes: ${anime.episodes}</p>
                <p class="card-text">Score: ${anime.score}</p>
                </div>
                <div class="card-body">
                
                
               
                <button type="button" id="modalLaunch" class="btn btn-primary"onclick="document.getElementById('id01').style.display='block'">More Info</button>
                </div>
                </div>

                <div id="id01" class="w3-modal">
                <div class="w3-modal-content">
                  <div class="w3-container">
                    <div class="card-body"
                    <h5 class="card-title">${anime.title}</h5>
                    <p class="card-text">${anime.synopsis}</p>
                    <a href="${anime.url}" class="btn btn-primary">More!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              
                `
            }).join("");


        return ` 
                <section>
                    <h3>${key.toUpperCase()}</h3>
                    <div class="card-row">${animesHTML}</div>

                </section>
            `
    }).join("");
}

function pageLoaded() {
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
    document.getElementById('id01').style.display='none';

}



window.addEventListener("load", pageLoaded);