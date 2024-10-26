const filterBtns = document.querySelectorAll(".switchers__btns-js");
filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((item) => {
            item.classList.remove("activeBtn");
        });
        btn.classList.add("activeBtn");
    });
});
