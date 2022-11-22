class Ventas
{
    constructor(descripcion,cantidad,monto)
    {
      this.descripcion=descripcion;
      this.cantidad=cantidad;
      this.monto=monto;
    }
}


class UI
{
    agregarventas(Venta)
    {
      const lista_producto=document.getElementById('lista_producto');
      const elemento = document.createElement('div');
      elemento.innerHTML=`
      <div  class="card text-center mb-4 conventa"   data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000">
      <div class="card-body">
           <strong>Nombre Producto</strong>: ${Productos.name}
           <strong>Precio Producto</strong>: ${Productos.price}
           <strong>Año Producto</strong>: ${Productos.year}
           <a href="#" class="btn btn-danger" name='delete'>Eliminar <i class='bx bxs-trash'></i></a>
      </div>
 </div> `;
     lista_producto.appendChild(elemento);


    }
    resetform()
    {
        document.getElementById('product-form').reset();
    }

    /*
    !Esta mierda tiene error
    ?xdxdxdxdxdx
    *looooool
    */ 
    eliminarproductos(element)
    {
      if (element.name==='delete')
      {
        
        console.log(element.parentElement.parentElement.parentElement.remove());
        this.mostrarmensajes('Producto eliminado correctamente','danger',2500);
        
      }

    }
  
    mostrarmensajes(mensaje,cssClass,time)
    {
      const div= document.createElement('div');
      div.className='msj alert alert-'+cssClass ;
      div.appendChild(document.createTextNode(mensaje));
      let ji=div;
      div.innerHTML=`<div class=cont3> <p class="pa">${mensaje} </p> <i class='bx bx-check-circle'></i></div> `;

      const contenedor= document.querySelector('.container');
      const app=document.querySelector('#app');
      contenedor.insertBefore(div,app);
      setTimeout(function()
      {
        document.querySelector('.alert').remove();
      },time);
    }
}