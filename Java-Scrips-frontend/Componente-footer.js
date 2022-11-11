


//!Creacion de la cabecera o navbar......
class Footer extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
     this.innerHTML=`
      
         <div class="linia-f"></div>
          <section class="limite Footer">
           <div class="columna columna-1-footer">
            <img src="Recursos/Imagenes/logo-removebg-preview.png" alt="">
            <h2>EAS</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta alias eum quas quo debitis odio explicabo eaque vel sunt soluta.</p>
         </div>
         <div class="columna columna-2-footer">
            <h3>Compañia</h3>
            <div class="linia"></div>
            <a href="#">Opciones</a>
            <a href="#">Opciones</a>
            <a href="#">Opciones</a>
            <a href="#">Opciones</a>
            <a href="#">Opciones</a>
            <a href="#">Opciones</a>
         </div>
         <div class="columna columna-2-footer">
            <h3>Legal</h3>
            <div class="linia"></div>
            <a href="#">Opciones</a>
            <a href="#">Opciones</a>
            <a href="#">Opciones</a>
            <h3>Ayuda</h3>
            <div class="linia"></div>
            <a href="#">Opciones</a>
            <a href="#">Opciones</a>
            <a href="#">Opciones</a>
         </div>
         <div class="columna columna-3-footer">
            <h3>Siguenos</h3>
            <div class="linia"></div>
            <div class="cont-media"><i class="fa-brands fa-facebook-f"></i></div>
            <div class="cont-media"><i class="fa-brands fa-twitter"></i></div>
            <div class="cont-media"><i class="fa-brands fa-youtube"></i></div>
            <div class="cont-media"><i class="fa-brands fa-instagram"></i></div>
            <div class="cont-media"><i class="fa-brands fa-twitch"></i></div>
         </div>
         </section>
            <div class="pie">
            <p>	Ⓒ EAS Easier Acounting Service</p>
        </div>
        `;
    }
}
window.customElements.define('parte-footer',Footer);