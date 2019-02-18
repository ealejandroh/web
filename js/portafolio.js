function getData(){

    let TEC_JAVA = "Java";
    let TEC_ANGULAR = "Angular";
    let TEC_MICROSERVICIOS = "Microservicios";
    let TEC_SPRING = "Spring";
    let TEC_PRIMEFACES = "PrimeFaces";
    let TEC_RICHFACES = "RichFaces";
    let TEC_MONGODB = "MongoDB";
    let TEC_PRESTASHOP = "Prestashop";
    let TEC_ARQUITECTURA = "Arquitectura";
    let TEC_PORTLET = "Portlet";
    let TEC_MULE = "Mule";


    let CLI_PERSONAL = "Personal";
    let CLI_COLFONDOS = "Colfondos";
    let CLI_SERVITEL = "Servitel";
    let CLI_COLPATRIA = "Colpatria";
    let CLI_DAVIVIENDA = "Davivienda";
    let CLI_ALFAGL = "AlfaGL";
    
    let portafolios = [
        {
            "titulo": "TuImpuesto",
            "fecha": "Junio, 2014",
            "descripcion": "Realicé la puesta en producción de TuImpuesto.com, desde el nacimiento de la idea, plan de negocio, buscar inversión, desarrollo y maduración de la idea. Esta es una herramienta web para simplificar la forma de preparar impuestos, desde la persona natural que no conoce sobre temas contables ni financieros, hasta los contadores ofreciendo herramientas para mejorar su productividad.",
            "cliente": CLI_PERSONAL,
            "tecnologia": [TEC_JAVA, TEC_ANGULAR],
            "pagina": "http://softone.com.co/",
            "imagen": ""
        },
        {
            "titulo": "Tienta virtual Servitel",
            "fecha": "Junio, 2014",
            "descripcion": "Diseñé y gestioné el proyecto para la creación de una nueva tienda virtual para Servitel S.A., por medio de la herramienta Prestashop, utilizando PayU Latam como medio para realizar los pagos e integración con teléfonos Avaya para realizar compras telefónicamente.",
            "cliente": CLI_SERVITEL,
            "tecnologia": [TEC_PRESTASHOP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria problemas de latencia",
            "fecha": "Septiembre, 2014",
            "descripcion": "Presté servicios de consultoría y solucioné problemas de latencia y performance de la aplicación Porfin utilizada en Colpatria, después de su migración de Oracle Form a plataforma Java sobre WebSphere Applicacion Server.",
            "cliente": CLI_COLPATRIA,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Micrositios",
            "fecha": "Julio, 2014",
            "descripcion": "Diseñé y gestioné el proyecto micrositios para Davivienda, el cual consistió en desarrollar una funcionalidad sobre a IBM WebSphere Portal que soporte de manera dinámica la creación y configuración de sitios para que los aliados de Davivienda puedan ofrecer tus tarjetas de crédito sin la necesidad del desarrollo de todo un sitio para este objetivo.",
            "cliente": CLI_DAVIVIENDA,
            "tecnologia": [TEC_JAVA, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Saldos Consolidados",
            "fecha": "Julio, 2014",
            "descripcion": "Diseñé, gestioné y participé en la ejecución del proyecto saldos consolidados para Colfondos S.A. el cual consistía en la elaboración de una solución para mostrar el consolidado de los saldos de portafolios y aportes para los usuarios empleadores del portal de Colfondos sobre la herramienta Liferay Portal utilizando el bus de servicios MULE.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_PORTLET, TEC_MULE],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria problemas latencia",
            "fecha": "Junio, 2014",
            "descripcion": "Presté servicios de consultoría y solucioné problemas de latencia y performance de la aplicación Porfin de AlfaGL utilizada en Colfondos, después de su migración de Oracle Form a plataforma Java sobre WebSphere Applicacion Server.",
            "cliente": CLI_ALFAGL,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        }
    ];

    return portafolios;

}

function getClientes(portafolios){

    let clientesAux = [];

    let container = document.getElementById("clientes-container");
    container.innerHTML = '';

    for(let portafolio of portafolios){
        
        if(clientesAux.indexOf(portafolio.cliente) == -1){
            clientesAux.push(portafolio.cliente);

            let num = portafolios.filter(p => p.cliente === portafolio.cliente).length;        
            let li = document.createElement("li");
            li.innerHTML = `<a href='' onclick='return filtroXCliente("${portafolio.cliente}")'>${portafolio.cliente}</a> <span class='badge'>${num}</span>`;
            container.appendChild(li);

        }
        
    }

}

function getTecnologias(portafolios){

    let tecnologiasAux = [];
    
    let container = document.getElementById("tecnologia-container");
    container.innerHTML = '';

    for(let portafolio of portafolios){

        for(let tecnologia of portafolio.tecnologia){

            if(tecnologiasAux.indexOf(tecnologia) == -1){
                tecnologiasAux.push(tecnologia);
    
                let num = 0;
                for(let portafolioCount of portafolios){
                    num = num + portafolioCount.tecnologia.filter(t => t === tecnologia).length;
                }
                
                let li = document.createElement("li");
                li.innerHTML = `<a href='' onclick='return filtroXTecnologia("${tecnologia}")'>${tecnologia}</a> <span class='badge'>${num}</span>`;
                container.appendChild(li);
    
            }

        }

    }

}

function getTrabajos(portafolios, filtro){

    let filtros = '';    
    if(filtro){
        filtros = `<div class="col-sm-8 col-xs-8">
                        <h3 class="filtros-activos">
                            <span class="filtro">${filtro}<span class="badge" onclick='return filtroXTecnologia("")'>x</span> </span>
                        </h3>
                        <br/>
                    </div>`;
    }
    

    let div = '';
    let indexRow = 0;
    for(let portafolio of portafolios){

        let titulo = `<h4 class='titulo-portafolio'>${portafolio.titulo}</h4>`;
        if(portafolio.pagina != ''){
            titulo = `<h4><a href="${portafolio.pagina}" target="_blank">${portafolio.titulo}</a></h4>`
        }

        let imagen = '<div class="no-img-portafolio"></div>';
        if(portafolio.imagen != ''){
            imagen = `<div class="img-wrapper img-portafolio">
                        <img src="${portafolio.imagen}" class="img-responsive" alt="${portafolio.cliente}" />
                    </div>`
        }

        let tecText = ``;
        for(let tec of portafolio.tecnologia){
            tecText = tecText + ` <span><a href='' onclick='return filtroXTecnologia("${tec}")'>${tec}</a> |</span>`;
        }
        
        if(indexRow%2 == 0){
            div = div + `<div class="row">`;
        }

        div = div + `<div class="col-sm-6 col-xs-12">
                        <figure class="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                            <figcaption>
                                ${titulo}
                                <div class="blog-meta meta-portafolio">
                                    <span>${portafolio.fecha}</span>
                                    <span><a href='' onclick='return filtroXCliente("${portafolio.cliente}")'>${portafolio.cliente}</a></span>
                                </div>
                            </figcaption>
                            ${imagen}
                            <figcaption>
                                <p>${portafolio.descripcion}</p>
                                <div class="blog-meta meta-portafolio tecs-portafolio">
                                    ${tecText}
                                </div>
                            </figcaption>
                        </figure>
                    </div>`;

        if(indexRow%2 != 0){
            div = div + `</div>`;
        }

        indexRow++;
    }

    if((indexRow-1)%2 == 0){
        div = div + `</div>`;
    }

    let container = document.getElementById("trabajos-container");
    container.innerHTML = filtros + div;

}

function filtroXCliente(cliente){

    let portafolios = getData();
    let portafoliosFiltrado = portafolios.filter(p => p.cliente === cliente);

    let filtro = 'Cliente: '+cliente;

    getClientes(portafoliosFiltrado);
    getTecnologias(portafoliosFiltrado);
    getTrabajos(portafoliosFiltrado, filtro);

    return false;
}

function filtroXTecnologia(tecnologia){
    
    let portafolios = getData();

    if(tecnologia == ''){
        getTrabajos(portafolios, null);
        getClientes(portafolios);
        getTecnologias(portafolios);
    }else{
        let filtro = 'Tecnologia: '+tecnologia;
        let portafoliosFiltrado = portafolios.filter(p => p.tecnologia.indexOf(tecnologia) != -1 );
        getTrabajos(portafoliosFiltrado, filtro);
        getClientes(portafoliosFiltrado);
        getTecnologias(portafoliosFiltrado);
    }

    return false;
}

window.onload = function() {
    let portafolios = getData();
    getClientes(portafolios);
    getTecnologias(portafolios);
    getTrabajos(portafolios);
};