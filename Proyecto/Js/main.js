document.addEventListener('DOMContentLoaded',function(){

    const producto = [
        { id: 1, nombre: "Licuadora", img: "./Imagenes/Licuadora.jpeg" },
        { id: 2, nombre: "Batidor Electrico", img: "./Imagenes/BatidorElectrico.jpeg" },
        { id: 3, nombre: "Bowls", img: "./Imagenes/Bowls.jpeg" },
        { id: 4, nombre: "Manga Repostera", img: "./Imagenes/MangaRepostera.jpeg" },
        { id: 5, nombre: "Moldes para Galletas", img: "./Imagenes/MoldesGalletas.jpeg" },
        { id: 6, nombre: "Moldes para Patelitos", img: "./Imagenes/MoldesPastelitos.jpeg" }

    ];

    const contenedorPadre = document.querySelector(".contenedor_padre");

    producto.forEach(producto => {
        const cards = document.createElement("div");
        cards.classList.add("cards");

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;
        cards.appendChild(nombre);

        const imagen = document.createElement("img");
        imagen.src = producto.img;
        cards.appendChild(imagen);

        const btn_cards = document.createElement("button");
        btn_cards.textContent = "Añadir al Carrito";
        btn_cards.classList.add("cards_btn");
        cards.appendChild(btn_cards);

        btn_cards.addEventListener('click',function(){
            agregarAlCarrito(producto);
        })

        contenedorPadre.appendChild(cards);

    });

    const hamburgerButton = document.getElementById("hamburgerButton");
    const menu = document.getElementById("menu"); 
    const carritoLink = document.getElementById("carritoLink"); 
    const carritoMenu = document.getElementById("carritoMenu");
    const salirMenu = document.getElementById("salirButton");
    const carritoItems = document.getElementById("carritoItems");
    const vaciar = document.getElementById("btn_vaciar");

    //Menu Hamburguesa 

    function toggleMenu(){
        if(menu.style.display ==='block'){
            menu.style.display = 'none';
            hamburgerButton.innerHTML = '&#9776;'
        }else{
            menu.style.display ='block';
            hamburgerButton.innerHTML ='X'
        }
    }

    hamburgerButton.addEventListener('click',toggleMenu);

    //Ajustar el menu al cambiar el tamaño de la pantalla 
    
    window.addEventListener('resize',function(){
        if(window.innerWidth>600){
            menu.style.display='flex';
            hamburgerButton.innerHTML ='&#9776;'
        }else{
            menu.style.display='none'
        }
    })

    //Para verificar el tamaño de la pagina al cargar 

    if(window.innerWidth > 600){
        menu.style.display = 'flex';

    }else{
        menu.style.display='none';
    }


    //Desplegar el menu del carrito 

    carritoLink.addEventListener('click',function(){
        event.preventDefault();
        carritoMenu.style.display='block';
    })

    //Salir del menu del carrito 

    salirMenu.addEventListener('click',function(){
        carritoMenu.style.display='none';
    })

    //Vaciar el carrito 

        vaciar.addEventListener('click',function(){
            carritoItems.innerHTML=''
        })

    //Agregar los items al carrito de compras 

    function agregarAlCarrito(producto){
        const item = document.createElement("li");
        item.classList.add("li_carrito");
        item.textContent=producto.nombre;

        //Eliminar los items

        const eliminarBtn= document.createElement("button");
        eliminarBtn.textContent="eliminar";
        eliminarBtn.classList.add("btn_carrito");

        eliminarBtn.addEventListener('click',function(){
            carritoItems.removeChild(item);
        })

        item.appendChild(eliminarBtn)
        carritoItems.appendChild(item)

    }

}
)


