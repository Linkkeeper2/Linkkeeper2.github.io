const navPartial = `
<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://github.com/Linkkeeper2">
        <img src="https://avatars.githubusercontent.com/u/148551689?v=4" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
        Linkk's GitHub Page
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="projects.html">Projects</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

const projectNavPartial = `
<ul class="nav flex-column">
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Python Projects</a>
  </li>
  <hr>

  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">SNES Bingomania Frenzy</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">BossFights</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Physics</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Snake</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Regression</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Smash</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Pong</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Jet Fighter</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">BossFights</a>
  </li>


  <hr>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Java Projects</a>
  </li>
  <hr>

  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Linkk's Utility Library</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Tetris</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" aria-label="page" href="project.html?project=Scramble">Scramble</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Platforming Game</a>
  </li>      


  <hr>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Web-Based Projects</a>
  </li>
  <hr>

  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Bay Path Website</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Harmony Club of Worcester</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Generic Stimulus Controller</a>
  </li>


  <hr>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Unity Projects</a>
  </li>
  <hr>

  <li class="nav-item">
      <a class="nav-link" aria-label="page" href="project.html?project=Linkk's Minigames">Linkk's Minigames</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Linkk's Fighting</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" aria-label="page" href="project.html?project=Linkk's Nextbots">Linkk's Nextbots</a>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Nerd</a>
  </li>
</ul>
`;

function renderNav() {
  document.querySelector("#navPartial").innerHTML = navPartial;
}

function renderProjectNav() {
  const projectNavElement = document.querySelector("#projectNavPartial");

  if (projectNavElement) {
    projectNavElement.innerHTML = projectNavPartial;
  }
}

renderNav();
renderProjectNav();
