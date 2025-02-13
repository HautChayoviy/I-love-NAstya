document.addEventListener("DOMContentLoaded", function () {
    const valentine = document.getElementById("valentine");
    const body = document.body;

    let isOpen = false;

    valentine.addEventListener("click", function () {
        isOpen = !isOpen;
        if (isOpen) {
            valentine.classList.add("opened");
            body.classList.add("pink-bg");
        } else {
            valentine.classList.remove("opened");
            body.classList.remove("pink-bg");
        }
    });
});