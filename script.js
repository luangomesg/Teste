let btnIr = document.querySelector(".ir-aprender");
let list1 = document.querySelector(".lista1");
let list2 = document.querySelector(".lista2");

btnIr.addEventListener("click", () => {
    
    if (list2.style.visibility == "visible") {
        list1.style.visibility = "visible";
        list2.style.visibility = "hidden";
        btnIr.innerHTML = "LIÇÕES PARA APRENDER";
    }else {
        list2.style.visibility = "visible";
        list1.style.visibility = "hidden";
        btnIr.innerHTML = "LIÇÕES QUE JÁ APRENDI";
    }
})
