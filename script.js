// Dark Mode

var button = document.getElementById("themeButton");

if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark-mode");
    button.innerText = "Light";
}

button.onclick = function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        button.innerText = "Light";
    } else {
        localStorage.setItem("theme", "light");
        button.innerText = "Dark";
    }
};


// Reviews

var form = document.getElementById("reviewForm");
var list = document.getElementById("reviewList");

if (form) {

    var reviews =
        JSON.parse(localStorage.getItem("reviews")) || [];

    function showReviews() {

        list.innerHTML = "";

        reviews.forEach(function(review) {

            list.innerHTML +=
                "<div class='user-review'>" +
                "<h3>" + review.album + "</h3>" +
                "<p><b>" + review.artist + "</b></p>" +
                "<p>Rating: " + review.rating + "/5</p>" +
                "<p>" + review.text + "</p>" +
                "</div>";
        });
    }

    form.onsubmit = function(event) {

        event.preventDefault();

        reviews.push({
            album: document.getElementById("album").value,
            artist: document.getElementById("artist").value,
            rating: document.getElementById("rating").value,
            text: document.getElementById("reviewText").value
        });

        localStorage.setItem(
            "reviews",
            JSON.stringify(reviews)
        );

        form.reset();
        showReviews();
    };

    showReviews();
}