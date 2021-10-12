(function() {

    let onglet = document.querySelectorAll(".header .bouton");
    for (elt of onglet) {
        elt.addEventListener("click", manageMenu);
    }

    resetSection();

    function manageMenu(event) {
        console.log(event);
        resetMenu();
        if (event.target.id != "logo") {
            document.querySelector("#" + event.target.id).classList.add("click");
        } else {
            document.querySelector("#logo").textContent = "";
            document.querySelector("#" + event.target.id).classList.add("logo");
        }
        manageSection(event.target.id);

    }

    function resetMenu() {
        for (elt of onglet) {
            elt.classList.remove("click");
        }
    }

    function manageSection(id) {
        let correspondance = {};
        correspondance.bouton01 = "div01";
        correspondance.bouton02 = "div02";
        correspondance.bouton03 = "div03";
        correspondance.bouton04 = "div04";
        correspondance.bouton05 = "div05";
        correspondance.logo = ".content";
        resetSection();
        if (correspondance[id] != ".content") {
            document.querySelector("#" + correspondance[id]).style.display = "block";
        } else {
            document.querySelector("#div01").style.display = "block";
            document.querySelector("#div02").style.display = "block";
            document.querySelector("#div03").style.display = "block";
            document.querySelector("#div04").style.display = "block";
            document.querySelector("#div05").style.display = "block";
        }

    }

    function resetSection() {
        document.querySelector("#div01").style.display = "none";
        document.querySelector("#div02").style.display = "none";
        document.querySelector("#div03").style.display = "none";
        document.querySelector("#div04").style.display = "none";
        document.querySelector("#div05").style.display = "none";
    }

})();