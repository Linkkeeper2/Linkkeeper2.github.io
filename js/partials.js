const navPartial = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://github.com/Linkkeeper2">Linkk's GitHub Page</a>

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

function renderNav() {
    document.querySelector("#navPartial").innerHTML = navPartial;
}

renderNav();
