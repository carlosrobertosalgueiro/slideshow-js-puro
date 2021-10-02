'user strict';

const images = [   
{ 'id': '1', 'url' : './img/igreja.jfif '  },
{ 'id': '2', 'url' : './img/legislativo.jfif '  },
{ 'id': '3', 'url' : './img/letreiro.jfif '  },
{ 'id': '4', 'url' : './img/praça.jfif '  },
{ 'id': '5', 'url' : './img/prefeitura.jfif '  },

]

const containerItems = document.querySelector('#container_itens');


const loadImages = (images, containerItems ) => {

    images.forEach( (image) => { 

        containerItems.innerHTML += 
        
        `<div class='item'> 
            <img src='${image.url}'
        </div> `
    })

}

loadImages(images, containerItems )

let items = document.querySelectorAll('.item');

const previous = () => {

    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0] );
    items = document.querySelectorAll('.item');
}
