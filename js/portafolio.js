function getData(){

    let TEC_JAVA = "Java";
    let TEC_ANGULAR = "Angular";
    let TEC_MICROSERVICIOS = "Microservicios";
    let TEC_SPRING = "Spring";
    let TEC_PRIMEFACES = "PrimeFaces";
    let TEC_RICHFACES = "RichFaces";
    let TEC_STRUTS = "Struts";
    let TEC_JSP = "Jsp";
    let TEC_MONGODB = "MongoDB";
    let TEC_PRESTASHOP = "Prestashop";
    let TEC_ARQUITECTURA = "Arquitectura";
    let TEC_PORTLET = "Portlet";
    let TEC_MULE = "Mule";
    let TEC_SOPORTE = "Soporte";
    let TEC_PORTAL = "Portal";
    let TEC_CONSULTORIA = "Consultoría";
    let TEC_WORKFLOW = "IBM WorkFlow";


    let CLI_PERSONAL = "Personal";
    let CLI_COLFONDOS = "Colfondos";
    let CLI_SERVITEL = "Servitel";
    let CLI_COLPATRIA = "Colpatria";
    let CLI_DAVIVIENDA = "Davivienda";
    let CLI_ALFAGL = "AlfaGL";
    let CLI_COMPUTEC = "Experian Computec";
    let CLI_PRODESEG = "Prodeseg";
    let CLI_DECEVAL = "Deceval";
    let CLI_BAXTER = "Laboratorios Baxter";
    let CLI_BUSSIE = "Laboratorios Bussie";
    let CLI_CARULLA = "Carulla";
    let CLI_GASNATURAL = "Gas Natural";
    let CLI_VISA = "Visa";
    let CLI_BANCO_CREDITO = "Banco de crédito";
    let CLI_FISCALIA = "Fiscalia";
    let CLI_DANE = "Dane";
    let CLI_LIBERTY = "Seguros Liberty";
    let CLI_JAO = "Centro médico JAO";
    let CLI_BANCO_REPUBLICA = "Banco de la República";

    
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
        },
        {
            "titulo": "Consultoria WebSphere Portal",
            "fecha": "Diciembre, 2013",
            "descripcion": "Participé en el diseño, presté servicios de consultoría y de soporte de la infraestructura de Experian Computec, plataforma de alta disponibilidad sobre  IBM WebSphere Portal Server para soportar la solución web de Datacredito para personas y empresas.",
            "cliente": CLI_COMPUTEC,
            "tecnologia": [TEC_PORTAL, TEC_SOPORTE, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Autenticación Afiliados Portal",
            "fecha": "Febrero, 2013",
            "descripcion": "Definí el diseño y arquitectura para el desarrollo del proyecto de autenticación de los usuarios afiliados del Portal de Colfondos S.A., cambiando el repositorio LDAP configurado en el Portal WebSphere Portal por un repositorio externo utilizando el bus de servicios de MULE ESB.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_PORTAL, TEC_JAVA, TEC_ARQUITECTURA, TEC_MULE],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Ley Antitramite",
            "fecha": "Diciembre, 2012",
            "descripcion": "Realicé el diseño y gestioné de la solución para cumplir con la reglamentación definida en la “Ley Antitramite“, para una aplicación llamada Pasivos Pensionales de Colfondos S.A. actualizando el sistema con los datos suministrados por la registraduría sobre el fallecimiento y validación de supervivencia de cualquier persona natural.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_PORTAL, TEC_JAVA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Migración visado firmas",
            "fecha": "Octubre, 2012",
            "descripcion": "Realicé el diseño e implementación de la solución para la migración de todas las imágenes de documentos de identificación de un sistema llamado Visado de firmas de Colfondos S.A. a otro sistema propio del cliente.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Portal Davivalores",
            "fecha": "Junio, 2012",
            "descripcion": "Participé en el liderazgo, desarrollo y lanzamiento de la primera fase del portal Davivalores de Davivienda a producción, la cual constaba de la instalación del portal IBM WebSphere Portal, configuración, elaboración de temas y Portlets de contenido en IBM Web Content Management.",
            "cliente": CLI_DAVIVIENDA,
            "tecnologia": [TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria en Gestión",
            "fecha": "Febrero, 2012",
            "descripcion": "Realicé la gestión desde un punto de vista técnico sobre el proyecto de migración del Portal Empleadores de IBM WebSphere Portal a Liferay Portal elaborado por un proveedor tercero en Colfondos S.A.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_PORTAL, TEC_CONSULTORIA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Migración Servidor Aplicaciones",
            "fecha": "Agosto, 2011",
            "descripcion": "Lideré el proyecto para la actualización del WebSphere Application Server de la versión 5.1 a la versión 7.0 junto con las aplicaciones instaladas en estos servidores (Conciliación de Títulos, Gestión Bancos, Infomercial, Motor de Servicios, Pasivos Pensionales, Planilla y SeguridadPlus) en los ambientes Desarrollo, UAT, Producción y COB de Colfondos S.A.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Independizar Servidor Aplicaciones",
            "fecha": "Febrero, 2011",
            "descripcion": "Lideré técnicamente el proyecto para independizar los servidores de Aplicaciones de la lógica de negocio que controla el intercambio de información con los portlets desplegados en el portal de COLFONDOS (IBM WebSphere Portal 6.0), en un Servidor de Aplicaciones (IBM WebSphere Application Server 7) diferente a la lógica de presentación de Colfondos S.A. Permitiendo un escalamiento vertical del framework de desarrollo.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Servicios web canales satélite",
            "fecha": "Enero, 2011",
            "descripcion": "Lideré el proyecto de diseño para la implementación de servicios para los canales de IVR y KIOSCOS de Colfondos S.A.. Que proveen información necesaria para los afiliados y asesores. Además de incluir funcionalidad común como envió de correo, autenticación, actualización de datos, entre otros.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "SGID, Sistema Gestión de Identidades",
            "fecha": "Agosto, 2010",
            "descripcion": "Lideré técnicamente el proyecto “SGID, Sistema Gestión de Identidades” de Computec S.A. el cual consiste en el análisis, diseño y construcción de una solución para el aprovisionamiento de usuarios, en donde se deben integrar de 5 repositorios internos del cliente. Utilizando IBM WebPhere Portal, Glasfish, Spring, Java Server faces, dando cumplimiento a reglamentaciones gubernamentales y ofreciendo un servicio ágil, seguro y eficaz.",
            "cliente": CLI_COMPUTEC,
            "tecnologia": [TEC_JAVA, TEC_PORTLET, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Fork Friends",
            "fecha": "Febrero, 2010",
            "descripcion": "Dirigí y participé en la e implementación de la Plataforma Cloud de Fork Friends. Teniendo como misión, desarrollar toda la infraestructura de reservas, contenido, y cliente web (de cara a los restaurantes). Adicionalmente, estuve encargado del diseño y construcción del motor de pertinencia. Con este proyecto de emprendimiento participamos en Wayra Colombia en busca de inversión junto con más de 900 proyectos participantes, en donde estuvimos ubicados en los primeros 20 proyectos.",
            "cliente": CLI_PERSONAL,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA, TEC_PRIMEFACES],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Soporte a Producción",
            "fecha": "Octubre, 2009",
            "descripcion": "Lideré el proceso de soporte a producción sobre la plataforma Web de la compañía Citi Colfondos, para nueve aplicaciones: Portal, Planilla, Pasivos, Gestión bancos, Conciliación títulos, Motor de servicios, Intranet, SGC e Infomercial. Usando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_SOPORTE, TEC_CONSULTORIA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "MCP, Prodeseg",
            "fecha": "Agosto, 2009",
            "descripcion": "Participé en el diseño de la arquitectura del proyecto llamado MCP para la empresa Prodeseg y también participé en su desarrollo, el proyecto consistía en realizar una aplicación para centralizar la información y administrar los elementos de seguridad industrial.",
            "cliente": CLI_PRODESEG,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Desarrollo pagarés",
            "fecha": "Agosto, 2008",
            "descripcion": "Participé en la elaboración de la arquitectura, diseño y desarrollo del proyecto Pagarés y títulos valor para Deceval, el cual tenía como propósito la digitalización y administración de los pagarés que custodia Deceval.",
            "cliente": CLI_DECEVAL,
            "tecnologia": [TEC_JAVA, TEC_RICHFACES],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "GAP's - Nuevas funcionaliddes",
            "fecha": "Abril, 2008",
            "descripcion": "Participación en el Proyecto GAP’s. Realizando el diseño y liderando el desarrollo de las nuevas funcionalidades de CitiColfondos que no estaban sobre la plataforma IBM WebSphere Portal. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_PORTLET, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Funcionalidades Gestión Bancos",
            "fecha": "Julio, 2007",
            "descripcion": "Realicé el diseño y lideré el desarrollo de la implementación de nuevos requerimientos para la aplicación Gestión Bancos de CitiColdondos. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Catalogo de productos Baxter",
            "fecha": "Noviembre, 2006",
            "descripcion": "Realicé el desarrollo de nuevos requerimientos para el aplicativo Catálogo de productos de Laboratorios Baxter. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server y base de datos base de datos IBM DB2.",
            "cliente": CLI_BAXTER,
            "tecnologia": [TEC_JAVA, TEC_STRUTS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Reingeniería Portal Colfondos",
            "fecha": "Julio, 2006",
            "descripcion": "Participé en el diseño, desarrollo e implementación del proyecto Reingeniería Portal Colfondos el cual consistía en la migración de ocho aplicaciones Web hacia IBM WebSphere Portal. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Inventarios JAO",
            "fecha": "Febrero, 2006",
            "descripcion": "Realicé el diseño de la aplicación de inventarios para el Centro Médico JAO, y participé en su desarrollo e implementación. Utilizando como herramienta de desarrollo NetBeans, servidor APACHE, TOMCAT y base de datos MYSQL.",
            "cliente": CLI_JAO,
            "tecnologia": [TEC_JAVA, TEC_STRUTS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Desarrollo módulo cartera",
            "fecha": "Noviembre, 2005",
            "descripcion": "Participé en el desarrollo  del módulo de productos de la aplicación de cartera para el Banco de la República. Usé JDeveloper como herramienta de desarrollo, WebLogic como servidor de aplicaciones y base de datos Oracle.",
            "cliente": CLI_BANCO_REPUBLICA,
            "tecnologia": [TEC_JAVA, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Customer Multifactor Authentication",
            "fecha": "Junio, 2005",
            "descripcion": "Participé en el Proyecto Customer Multifactor Authentication. Realizé el diseño, desarrollo e implementación del sistema de autenticación a las zonas transaccionales del Portal de CitiColfondos para los usuarios afiliados y empleadores. Usé IBM Rational Application Developer como herramienta de desarrollo, servidor WebSphere Application Server y base de datos Microsoft SQL-Server.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_RICHFACES],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Inventarios negativos y agotados",
            "fecha": "Mayo, 2005",
            "descripcion": "Participé en el desarrollo de aplicaciones Web, desarrollo  JSP’s y personalización de WorkFlow, para el manejo de los procesos de inventarios negativos y agotados de Carulla. Usé IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench - WebSphere MQ y base de datos IBM DB2.",
            "cliente": CLI_CARULLA,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Procesos Baxter",
            "fecha": "Mayo, 2005",
            "descripcion": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de Laboratorios Baxter. Usé IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench - WebSphere MQ y base de datos IBM DB2.",
            "cliente": CLI_BAXTER,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización Procesos",
            "fecha": "Abril, 2005",
            "descripcion": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de Gas Natural. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y base de datos IBM DB2.",
            "cliente": CLI_GASNATURAL,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización Procesos Bussie",
            "fecha": "Marzo, 2005",
            "descripcion": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de Laboratorios Bussie. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y base de datos IBM DB2.",
            "cliente": CLI_BUSSIE,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Paga cuentas Visa",
            "fecha": "Marzo, 2005",
            "descripcion": "Participé en el desarrollo del Portal de Visa para el proyecto Pagacuentas Visa, desarrollando aplicaciones Portlet’s, para pagar cuentas por Internet. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, los servidores de aplicaciones WebSphere Application Server y WebSphere Portal Server y base de datos IBM DB2.",
            "cliente": CLI_VISA,
            "tecnologia": [TEC_JAVA, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización workflow",
            "fecha": "Octubre, 2004",
            "descripcion": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos del Banco de Crédito. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y la base de datos IBM DB2.",
            "cliente": CLI_BANCO_CREDITO,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización workflow",
            "fecha": "Septiembre, 2004",
            "descripcion": "Participé  en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de la Fiscalía. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y  base de datos IBM DB2.",
            "cliente": CLI_FISCALIA,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Aplicación Seguridad",
            "fecha": "Septiembre, 2004",
            "descripcion": "Participé en el desarrollo de la aplicación de Seguridad de Colfondos y del desarrollo de aplicaciones internas como lo son Futuronet, para el manejo de pensiones y cesantías. Usé IBM WebSphere Studio Application Developer como herramienta de desarrollo, el servidor WebSphere Application Server y la base de datos IBM DB2.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización Portal",
            "fecha": "Marzo, 2004",
            "descripcion": "Participé en el desarrollo de la personalización del  Portal para el DANE. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, los servidores de aplicaciones WebSphere Application Server y WebSphere Portal Server y base de datos IBM DB2. De manera simultánea me desempeñé como formador de administración de Portal.",
            "cliente": CLI_DANE,
            "tecnologia": [TEC_JAVA, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Administración Red",
            "fecha": "Diciembre, 2003",
            "descripcion": "Trabajé en la administración de la red y administración el software Aranda para mantenimiento del antivirus McAfee para los usuarios internos de Seguros Liberty en Colombia.",
            "cliente": CLI_LIBERTY,
            "tecnologia": [TEC_SOPORTE],
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