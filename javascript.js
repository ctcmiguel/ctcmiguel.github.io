console.log('hola');
productos = [
    {
        product: 'Gatorade',
        quantity: 3
    },
    {
        product: 'Piso de cantera',
        quantity: 8
    },
    {
        product: 'Ethernet cable',
        quantity: 23
    },
]

let mostrarProductos = (productosRecibidos) => {
    document.getElementsByTagName("tbody")[0].innerHTML = '';
    productosRecibidos.forEach((element, index) =>{
        texth1.innerHTML = `
        <td scope="row">${index+1}</td>
        <td>${element.product}</td>
        <td>${element.quantity}</td>
        <td>
            <button type="button" class="btn btn-success" onclick="editarRegistro(${index})">
            Editar
            </button>
            <button type="button" class="btn btn-danger" onclick="eliminarRegistro(${index})">
            Eliminar
            </button>
        </td>`;
        document.getElementsByTagName("tbody")[0].appendChild(texth1);
        
    });
}

let eliminarRegistro = (parIndex) =>{
    productos = productos.filter((producto, index)=> index !== parIndex);
    mostrarProductos(productos);
}
let editarRegistro = (parIndex) =>{
    document.getElementById('position').value = parIndex;
    document.getElementById('product').value = productos[parIndex].product;
    document.getElementById('quantity').value = productos[parIndex].quantity;
}
let actualizarRegistro = ()=>{
    let position = document.getElementById('position').value;
    let product = document.getElementById('product').value;
    let quantity = document.getElementById('quantity').value;

    if (position == '' || isNaN(position)){
        alert('Debe seleccionar un registro');
        return false;
    }
    product[position] = {
        product: product,
        quantity: quantity
    }
    document.getElementById('position').value = '';
    document.getElementById('product').value = '';
    document.getElementById('quantity').value = '';
    mostrarProductos(product);
} 
let agregarRegistro = () => {
    console.log(`agregar`);
    const nuevoProducto = {
        producto: document.getElementById('product').value,
        quantity: document.getElementById('quantity').value,
    }
    document.getElementById('product').value = '';
    document.getElementById('quantity').value = '';
    productos.push(nuevoProducto);
    mostrarProductos(productos);
    }
mostrarProductos(productos);
    
