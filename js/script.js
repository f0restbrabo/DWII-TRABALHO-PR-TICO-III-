document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var postText = document.getElementById("postText").value;
    if (postText.trim() === "") {
        alert("Por favor, escreva algo para postar.");
        return;
    }

    var postDiv = document.createElement("div");
    postDiv.className = "card mb-3";
    postDiv.innerHTML = `
        <div class="card-body">
            <p class="card-text">${postText}</p>
            <button class="btn btn-primary like-btn">Curtir</button>
            <button class="btn btn-danger delete-btn">Excluir</button>
        </div>
    `;

    document.getElementById("posts").appendChild(postDiv);
    document.getElementById("postText").value = "";

    postDiv.querySelector(".delete-btn").addEventListener("click", function() {
        postDiv.remove();
    });

    postDiv.querySelector(".like-btn").addEventListener("click", function() {
        this.classList.toggle("btn-success");
    });
});