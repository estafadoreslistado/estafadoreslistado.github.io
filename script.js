document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(estafador =>{
  
          estafador.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?estafador.classList.remove("filtro")
              :estafador.classList.add("filtro")
        })
  
    }
  
  
  })