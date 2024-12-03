class Project {
    constructor(name, contents, images, repo = "") {
        this.name = name;
        this.contents = contents;
        this.images = images;
        this.repo = repo;
    }
}

const projects = {
    "Scramble": new Project("Scramble", "<p>Test content</p>", ""),
    "Linkk's Minigames": new Project("Linkk's Minigames",
        `<div id="minigameVideoCarousel" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#minigameVideoCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#minigameVideoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#minigameVideoCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <video class="d-block w-100" autoplay loop muted>
                        <source src="videos/Linkk's Minigames/Climbing.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>

                    <div class="carousel-caption d-none d-md-block">
                        <h5>Climbing Minigame</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <video class="d-block w-100" autoplay loop muted>
                        <source src="videos/Linkk's Minigames/Slingshot.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>

                    <div class="carousel-caption d-none d-md-block">
                        <h5>Slingshot Minigame</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <video class="d-block w-100" autoplay loop muted>
                        <source src="videos/Linkk's Minigames/Whack A Pig.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>

                    <div class="carousel-caption d-none d-md-block">
                        <h5>Whack A Pig Minigame</h5>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#minigameVideoCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#minigameVideoCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`,
        "", ""),
    "Linkk's Nextbots": new Project("Linkk's Nextbots", "", "", "https://drive.google.com/drive/folders/1untHc0KsqGMmiCVdhaJxXhi8zm7iek9K?usp=drive_link")
}

function renderProject() {
    const searchParams = new URLSearchParams(window.location.search);
    const currentProject = projects[searchParams.get("project")];

    document.querySelector("#projectPartial").innerHTML = currentProject.contents + currentProject.images;
    document.querySelector("#projectName").innerHTML = currentProject.name;

    if (isValidURL(currentProject.repo))
        document.querySelector("#projectLink").innerHTML = `<a href="${currentProject.repo}" target="_blank">Repository</a>`;
}

function isValidURL(url) {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
}

renderProject();