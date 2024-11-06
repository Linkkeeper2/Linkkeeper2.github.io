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