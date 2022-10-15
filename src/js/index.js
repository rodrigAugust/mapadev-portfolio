const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        if (tab.classList.contains("select")) {
            return;
        }

        selectTab(tab);
        selectInfo(tab);
    });
});

function selectTab(tab){
    const tabSelect = document.querySelector(".tab.select");
    tabSelect.classList.remove("select");
    tab.classList.add("select");
}

function selectInfo(tab){
    const infoSelect = document.querySelector(".info.select");
    infoSelect.classList.remove("select");

    const idDoElementosDeInformacoes = `info-${tab.id}`
    const infoASerMostrada = document.getElementById(idDoElementosDeInformacoes);
    infoASerMostrada.classList.add("select");
}