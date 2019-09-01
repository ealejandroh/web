const FILTRO_CLIENTES =    {"es": "Filtro: ", 
                            "en": "Filter: ", 
                            "fr": "Filtrer: "};
const FILTRO_TECNOLOGIA =  {"es": "Tecnología: ", 
                            "en": "Technology: ", 
                            "fr": "La technologie: "};

const CLI_PERSONAL = {"es": "Personal", 
                        "en": "Personal", 
                        "fr": "Personnel"};

function getData(){

    let TEC_JAVA = "Java";
    let TEC_ANGULAR = "Angular";
    let TEC_MICROSERVICIOS = {"es": "Microservicios", "en": "Microservices", "fr": "Microservices"};
    let TEC_SPRING = "Spring";
    let TEC_PRIMEFACES = "PrimeFaces";
    let TEC_RICHFACES = "RichFaces";
    let TEC_STRUTS = "Struts";
    let TEC_JSP = "Jsp";
    let TEC_MONGODB = "MongoDB";
    let TEC_PRESTASHOP = "Prestashop";
    let TEC_ARQUITECTURA = {"es": "Arquitectura", "en": "Architecture", "fr": "Architecture"};
    let TEC_PORTLET = "Portlet";
    let TEC_MULE = "Mule";
    let TEC_SOPORTE = {"es": "Soporte", "en": "Support", "fr": "Soutien"};
    let TEC_PORTAL = "Portal";
    let TEC_CONSULTORIA = {"es": "Consultoría", "en": "Consultancy", "fr": "Consultation"};
    let TEC_WORKFLOW = "IBM WorkFlow";
    let TEC_WORDPRESS = "Wordpress";
    let TEC_VAADIN = "Vaadin";
    let TEC_WCM = "WebContent Management";
    let TEC_ANDROID = "Android";


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
    let CLI_CLAZLOOP = "Clazloop";
    let CLI_CORREDOR_SEGURA = "Corredor Segura abogados";
    let CLI_OLD_MUTUAL = "Old Mutual";
    let CLI_SKANDIA = "Skandia";
    let CLI_BLANCO_CASTRO = "Blanco de Castro";
    let CLI_SEGUROS_AFA = "Seguros ALFA";
    let CLI_REDEBAN = "Redeban";
    let CLI_SOFTONE = "SoftOne";
    
    let portafolios = [
        {
            "titulo": "Consultoría WebSphere Portal",
            "fecha": {"es": "Julio, 2019", "en": "July, 2019", "fr": "Juillet, 2019"},
            "descripcion": "Estuve apoyando al equipo técnico de Skandia en la solución de problemas internos sobre el portal empresarial en WebSphere Portal y la definición de nuevas soluciones internas.",
            "cliente": CLI_SKANDIA,
            "tecnologia": [TEC_CONSULTORIA, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Event sports",
            "fecha": {"es": "Junio, 2019", "en": "June, 2019", "fr": "Juin, 2019"},
            "descripcion": "Participé en la definición de la idea de SportEvents, desarrollo del producto, puesta en producción y maduración de la marca; SportEvents funciona para soportar la gestión de inscripciones a eventos deportivos.",
            "cliente": CLI_PERSONAL,
            "tecnologia": [TEC_MICROSERVICIOS, TEC_ANGULAR, TEC_MONGODB],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Cambio de Marca",
            "fecha": {"es": "Mayo, 2019", "en": "May, 2019", "fr": "Mai, 2019"},
            "descripcion": "Participé en el desarrollo del cambio de marca de Old Mutual hacia Skandia de las aplicaciones: simulador tributario, simulador mi retiro, simulador sucesoral, simulador pensional y tema de asesoría.",
            "cliente": CLI_SKANDIA,
            "tecnologia": [TEC_PORTAL, TEC_WCM],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Tema personalización",
            "fecha": {"es": "Abril, 2019", "en": "April, 2019", "fr": "Avril, 2019"},
            "descripcion": "Realicé en el diseño técnico del desarrollo del tema de personalización para el fondo de pensiones Skandia sobre IBM WebSphere Portal, para que soporte un crecimiento de información y funcionalidades de manera dinámica por medio de configuraciones por parte del usuario.",
            "cliente": CLI_SKANDIA,
            "tecnologia": [TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Informes derivados",
            "fecha": {"es": "Marzo, 2019", "en": "March, 2019", "fr": "Mars, 2019"},
            "descripcion": "Realicé el diseño y desarrollo de las modificaciones de la aplicación de informes derivados para Colfondos de acuerdo con lo solicitado por la superintendencia financiera en la circular externa 036, en donde se adicionan nuevos informes y modificaciones en estructuras de los informes existentes.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_SPRING],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Simulador sucesoral",
            "fecha": {"es": "Noviembre, 2018", "en": "November, 2018", "fr": "Novembre, 2018"},
            "descripcion": "Realicé la definición técnica y participé en el desarrollo del simulador sucesoral de Old Mutual el cual permite la simulación de posibles escenarios del futuro de los bienes de una persona después de su fallecimiento, ya sea por herencia o por términos legales colombianos.",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_ANGULAR, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Simulador mi retiro",
            "fecha": {"es": "Noviembre, 2018", "en": "November, 2018", "fr": "Novembre, 2018"},
            "descripcion": "Realicé el desarrollo del simulador mi retiro, el cual permite la simulación del valor de la pensión de los afiliados a Old Mutual y una proyección de ahorro de acuerdo con un valor deseado de pensión en una edad deseada de pensión.",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_ANGULAR, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Simulador tributario",
            "fecha": {"es": "Septiembre, 2018", "en": "September, 2018", "fr": "Septembre, 2018"},
            "descripcion": "Realicé la definición de la arquitectura y participé en el desarrollo del simulador tributario de Old Mutual, el cual fue desarrollado sobre Angular 6 como un script portlet para IBM WebSphere Portal. Esta funcionalidad permite la creación de diferentes simuladores para la compañía de acuerdo con una configuración inicial.",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_ANGULAR, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoría comunicación portlets",
            "fecha": {"es": "Julio, 2018", "en": "July, 2018", "fr": "Juillet, 2018"},
            "descripcion": "Realicé la consultoría para la comunicación de portlets de diferentes tecnologías en IBM WebSphere Portal, la cual incluía una prueba de concepto y definición de estándares de desarrollo para la comunicación y envió de datos entre portlets en páginas diferentes o en la misma página.",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_ARQUITECTURA, TEC_ANGULAR, TEC_VAADIN, TEC_PRIMEFACES, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Beneficiarios microseguros",
            "fecha": {"es": "Junio, 2018", "en": "June, 2018", "fr": "Juin, 2018"},
            "descripcion": "Realicé la definición técnica del portlet de Asignación de beneficiarios para las pólizas de microseguros, el cual fue desarrollado con primefaces para el portal Daviplata en IBM WebSphere Portal.",
            "cliente": CLI_DAVIVIENDA,
            "tecnologia": [TEC_PRIMEFACES, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Journey de inversiones",
            "fecha": {"es": "Junio, 2018", "en": "June, 2018", "fr": "Juin, 2018"},
            "descripcion": "Realicé la definición técnica del portlet de Journey de inversiones para Old Mutual, el cual fue desarrollado con el framework Vaadin para IBM WebSphere Portal. Este servía para que los usuario se cambiaran de portafolio de inversión con una llave de seguridad que se envía al celular como mensaje de texto.",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_VAADIN, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Menú contextual",
            "fecha": {"es": "Junio, 2018", "en": "June, 2018", "fr": "Juin, 2018"},
            "descripcion": "Realicé la definición técnica y el desarrollo del script portlet menú contextual en Angular 5, el cual construye un menú dinámico dependiendo el rol del usuario autenticado y la funcionalidad activa en la que el usuario está ubicado.",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_ANGULAR, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Certificado pólizas de microseguros",
            "fecha": {"es": "Febrero, 2018", "en": "February, 2018", "fr": "Février, 2018"},
            "descripcion": "Realicé el desarrollo del portlet de consulta de certificados de pólizas de microseguros de Daviplata para Davivienda, el cual se fue desarrollado en primefaces para un portal en IBM WebSphere Portal.",
            "cliente": CLI_DAVIVIENDA,
            "tecnologia": [TEC_PRIMEFACES, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Portal Asesoría",
            "fecha": {"es": "Enero, 2018", "en": "January, 2018", "fr": "Janvier, 2018"},
            "descripcion": "Participe en la definición técnica y desarrollo del portal de asesoría de Old Mutual el cual, incluida el desarrollo de un tema para la navegación, portlets de contenido en WebContent Management, script portlets en Angular y portlets de seguridad en primefaces.",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_PORTAL, TEC_WCM, TEC_PORTLET, TEC_ANGULAR],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Modal Navegadores",
            "fecha": {"es": "Diciembre, 2017", "en": "December, 2017", "fr": "Décembre, 2017"},
            "descripcion": "Realicé el desarrollo de un portlet en Vaadin para IBM WebSphere Portal para Old Mutual, que identifica el navegador del usuario y permite la navegación de funcionalidades dependiendo el soporte del navegador para dichas funcionalidades.",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_VAADIN,  TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Informes Dinámicos Pipeline",
            "fecha": {"es": "Agosto, 2017", "en": "August, 2017", "fr": "Août, 2017"},
            "descripcion": "Realicé el diseño de la arquitectura del proyecto, y participé en el desarrollo del sistema de Informes de Pipeline para Old Mutual en Vaadin, el cual es un sistema que permite la configuración de informes dinámicos de ventas de la compañía.",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_VAADIN,  TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Botón de Pagos Redeban",
            "fecha": {"es": "Marzo, 2017", "en": "March, 2017", "fr": "Mars, 2017"},
            "descripcion": "Realicé el diseño de la arquitectura del proyecto del botón de pagos de Redeban, y lideré el equipo de desarrollo. El objetivo era construir plataforma sobre WebSphere Portal, donde los comercios diseñan su propio botón de pagos asociado a un de un producto, lo pueden incluir en sus páginas y generar estadísticas de sus ventas.",
            "cliente": CLI_REDEBAN,
            "tecnologia": [TEC_VAADIN,  TEC_PORTLET, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Llamado a Capital",
            "fecha": {"es": "Mayo, 2017", "en": "May, 2017", "fr": "Mai, 2017"},
            "descripcion": "Realicé el diseño técnico y lideré el equipo de desarrollo del proyecto Llamado Capital de Old Mutual, el cual ayuda con la administración y gestión del proceso para el recaudo de capital de los fondos de inversión. ",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_VAADIN,  TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Arquitectura Portal",
            "fecha": {"es": "Junio, 2017", "en": "June, 2017", "fr": "Juin, 2017"},
            "descripcion": "Realicé la definición de la arquitectura de un nuevo portal empresarial de Seguros Alfa y lideré al equipo de desarrollo en la migración de este a una plataforma más moderna y que permita su crecimiento tecnológico de acuerdo a sus necesidades de negocio.",
            "cliente": CLI_SEGUROS_AFA,
            "tecnologia": [TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Asesoría Blanco de Castro",
            "fecha": {"es": "Febrero, 2017", "en": "February, 2017", "fr": "Février, 2017"},
            "descripcion": "Fui asesor técnico y consultor de su área de tecnología para el crecimiento tecnológico de la compañía Blanco de Castro, en donde modernicé su infraestructura tecnológica de acuerdo a sus necesidades de negocio y actualicé su imagen web enfocado en el incremento de las ventas.",
            "cliente": CLI_BLANCO_CASTRO,
            "tecnologia": [TEC_WORDPRESS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Simulador Pensional",
            "fecha": {"es": "Abril, 2017", "en": "April, 2017", "fr": "Avril, 2017"},
            "descripcion": "Realicé el diseño técnico y lideré el equipo de desarrollo del simulador de pensiones de Old Mutual, el cual era un requisito de ley y se debía ajustan al tiempo y requisitos puestos por la super financiera.",
            "cliente": CLI_OLD_MUTUAL,
            "tecnologia": [TEC_VAADIN, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Estratech",
            "fecha": {"es": "Noviembre, 2016", "en": "November, 2016", "fr": "Novembre, 2016"},
            "descripcion": "Participe en la definición del producto Estratech el cual busca desarrollar estrategias de ventas para micro y pequeñas empresas apoyados de herramientas tecnológicas, de la mano de una consultoría personalizada para cada cliente putual.",
            "cliente": CLI_SOFTONE,
            "tecnologia": [TEC_ARQUITECTURA, TEC_WORDPRESS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Asesoría Corredor Segura",
            "fecha": {"es": "Septiembre, 2016", "en": "September, 2016", "fr": "Septembre, 2016"},
            "descripcion": "Fui asesor técnico en la compañía Corredor Segura Abogados, en donde modernicé su sitio web y planteé un plan de crecimiento tecnológico para la compañía de acuerdo a las necesidades de la compañía y requerimientos de sus clientes. ",
            "cliente": CLI_CORREDOR_SEGURA,
            "tecnologia": [TEC_WORDPRESS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo":  {"es": "TuImpuesto", 
                        "en": "TuImpuesto", 
                        "fr": "TuImpuesto"},
            "fecha": {"es": "Junio, 2014", "en": "June, 2014", "fr": "Juin, 2014"},
            "descripcion": {"es": "Realicé la puesta en producción de TuImpuesto.com, desde el nacimiento de la idea, plan de negocio, buscar inversión, desarrollo y maduración de la idea. Esta es una herramienta web para simplificar la forma de preparar impuestos, desde la persona natural que no conoce sobre temas contables ni financieros, hasta los contadores ofreciendo herramientas para mejorar su productividad.", 
                            "en": "Realicé la puesta en producción de TuImpuesto.com, desde el nacimiento de la idea, plan de negocio, buscar inversión, desarrollo y maduración de la idea. Esta es una herramienta web para simplificar la forma de preparar impuestos, desde la persona natural que no conoce sobre temas contables ni financieros, hasta los contadores ofreciendo herramientas para mejorar su productividad.", 
                            "fr": "Realicé la puesta en producción de TuImpuesto.com, desde el nacimiento de la idea, plan de negocio, buscar inversión, desarrollo y maduración de la idea. Esta es una herramienta web para simplificar la forma de preparar impuestos, desde la persona natural que no conoce sobre temas contables ni financieros, hasta los contadores ofreciendo herramientas para mejorar su productividad."},
            "cliente": CLI_PERSONAL,
            "tecnologia": [TEC_ANGULAR, TEC_MONGODB, TEC_MICROSERVICIOS],
            "pagina": "http://softone.com.co/",
            "imagen": ""
        },
        {
            "titulo": "Plataforma e-learning",
            "fecha": {"es": "Marzo, 2015", "en": "March, 2015", "fr": "Mars, 2015"},
            "descripcion": "Lideré el área de tecnología de la empresa Clazloop S.A.S. la cual es una solución de e-learning, que contempla una plataforma web y una plataforma móvil para su funcionamiento.",
            "cliente": CLI_CLAZLOOP,
            "tecnologia": [TEC_PRIMEFACES, TEC_MICROSERVICIOS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Tienta virtual Servitel",
            "fecha": {"es": "Junio, 2014", "en": "June, 2014", "fr": "Juin, 2014"},
            "descripcion": "Diseñé y gestioné el proyecto para la creación de una nueva tienda virtual para Servitel S.A., por medio de la herramienta Prestashop, utilizando PayU Latam como medio para realizar los pagos e integración con teléfonos Avaya para realizar compras telefónicamente.",
            "cliente": CLI_SERVITEL,
            "tecnologia": [TEC_PRESTASHOP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria problemas de latencia",
            "fecha": {"es": "Septiembre, 2014", "en": "September, 2014", "fr": "Septembre, 2014"},
            "descripcion": "Presté servicios de consultoría y solucioné problemas de latencia y performance de la aplicación Porfin utilizada en Colpatria, después de su migración de Oracle Form a plataforma Java sobre WebSphere Applicacion Server.",
            "cliente": CLI_COLPATRIA,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Micrositios",
            "fecha": {"es": "Julio, 2014", "en": "July, 2014", "fr": "Juillet, 2014"},
            "descripcion": "Diseñé y gestioné el proyecto micrositios para Davivienda, el cual consistió en desarrollar una funcionalidad sobre a IBM WebSphere Portal que soporte de manera dinámica la creación y configuración de sitios para que los aliados de Davivienda puedan ofrecer tus tarjetas de crédito sin la necesidad del desarrollo de todo un sitio para este objetivo.",
            "cliente": CLI_DAVIVIENDA,
            "tecnologia": [TEC_JAVA, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Saldos Consolidados",
            "fecha": {"es": "Julio, 2014", "en": "July, 2014", "fr": "Juillet, 2014"},
            "descripcion": "Diseñé, gestioné y participé en la ejecución del proyecto saldos consolidados para Colfondos S.A. el cual consistía en la elaboración de una solución para mostrar el consolidado de los saldos de portafolios y aportes para los usuarios empleadores del portal de Colfondos sobre la herramienta Liferay Portal utilizando el bus de servicios MULE.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_PORTLET, TEC_MULE],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria problemas latencia",
            "fecha": {"es": "Junio, 2014", "en": "June, 2014", "fr": "Juin, 2014"},
            "descripcion": "Presté servicios de consultoría y solucioné problemas de latencia y performance de la aplicación Porfin de AlfaGL utilizada en Colfondos, después de su migración de Oracle Form a plataforma Java sobre WebSphere Applicacion Server.",
            "cliente": CLI_ALFAGL,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria WebSphere Portal",
            "fecha": {"es": "Diciembre, 2013", "en": "December, 2013", "fr": "Décembre, 2013"},
            "descripcion": "Participé en el diseño, presté servicios de consultoría y de soporte de la infraestructura de Experian Computec, plataforma de alta disponibilidad sobre  IBM WebSphere Portal Server para soportar la solución web de Datacredito para personas y empresas.",
            "cliente": CLI_COMPUTEC,
            "tecnologia": [TEC_PORTAL, TEC_SOPORTE, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Autenticación Afiliados Portal",
            "fecha": {"es": "Febrero, 2013", "en": "February, 2013", "fr": "Février, 2013"},
            "descripcion": "Definí el diseño y arquitectura para el desarrollo del proyecto de autenticación de los usuarios afiliados del Portal de Colfondos S.A., cambiando el repositorio LDAP configurado en el Portal WebSphere Portal por un repositorio externo utilizando el bus de servicios de MULE ESB.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_PORTAL, TEC_JAVA, TEC_ARQUITECTURA, TEC_MULE],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Ley Antitramite",
            "fecha": {"es": "Diciembre, 2012", "en": "December, 2012", "fr": "Décembre, 2012"},
            "descripcion": "Realicé el diseño y gestioné de la solución para cumplir con la reglamentación definida en la “Ley Antitramite“, para una aplicación llamada Pasivos Pensionales de Colfondos S.A. actualizando el sistema con los datos suministrados por la registraduría sobre el fallecimiento y validación de supervivencia de cualquier persona natural.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_PORTAL, TEC_JAVA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Migración visado firmas",
            "fecha": {"es": "Octubre, 2012", "en": "October, 2012", "fr": "Octobre, 2012"},
            "descripcion": "Realicé el diseño e implementación de la solución para la migración de todas las imágenes de documentos de identificación de un sistema llamado Visado de firmas de Colfondos S.A. a otro sistema propio del cliente.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Disponible",
            "fecha": {"es": "Agosto, 2012", "en": "August, 2012", "fr": "Août, 2012"},
            "descripcion": "Dirigí y participé en la implementación de Disponible, desde el nacimiento de la idea, hasta la puesta en producción. Disponible es una aplicación para Android que ayuda a buscar estilistas en tiempo real y reservar sus servicios sin la necesidad de hacer filas o esperar a ser atentado.",
            "cliente": CLI_PERSONAL,
            "tecnologia": [TEC_ARQUITECTURA, TEC_ANDROID],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Portal Davivalores",
            "fecha": {"es": "Junio, 2012", "en": "June, 2012", "fr": "Juin, 2012"},
            "descripcion": "Participé en el liderazgo, desarrollo y lanzamiento de la primera fase del portal Davivalores de Davivienda a producción, la cual constaba de la instalación del portal IBM WebSphere Portal, configuración, elaboración de temas y Portlets de contenido en IBM Web Content Management.",
            "cliente": CLI_DAVIVIENDA,
            "tecnologia": [TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria en Gestión",
            "fecha": {"es": "Febrero, 2012", "en": "February, 2012", "fr": "Février, 2012"},
            "descripcion": "Realicé la gestión desde un punto de vista técnico sobre el proyecto de migración del Portal Empleadores de IBM WebSphere Portal a Liferay Portal elaborado por un proveedor tercero en Colfondos S.A.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_PORTAL, TEC_CONSULTORIA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Migración Servidor Aplicaciones",
            "fecha": {"es": "Agosto, 2011", "en": "August, 2011", "fr": "Août, 2011"},
            "descripcion": "Lideré el proyecto para la actualización del WebSphere Application Server de la versión 5.1 a la versión 7.0 junto con las aplicaciones instaladas en estos servidores (Conciliación de Títulos, Gestión Bancos, Infomercial, Motor de Servicios, Pasivos Pensionales, Planilla y SeguridadPlus) en los ambientes Desarrollo, UAT, Producción y COB de Colfondos S.A.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Independizar Servidor Aplicaciones",
            "fecha": {"es": "Febrero, 2011", "en": "February, 2011", "fr": "Février, 2011"},
            "descripcion": "Lideré técnicamente el proyecto para independizar los servidores de Aplicaciones de la lógica de negocio que controla el intercambio de información con los portlets desplegados en el portal de COLFONDOS (IBM WebSphere Portal 6.0), en un Servidor de Aplicaciones (IBM WebSphere Application Server 7) diferente a la lógica de presentación de Colfondos S.A. Permitiendo un escalamiento vertical del framework de desarrollo.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Servicios web canales satélite",
            "fecha": {"es": "Enero, 2011", "en": "January, 2011", "fr": "Janvier, 2011"},
            "descripcion": "Lideré el proyecto de diseño para la implementación de servicios para los canales de IVR y KIOSCOS de Colfondos S.A.. Que proveen información necesaria para los afiliados y asesores. Además de incluir funcionalidad común como envió de correo, autenticación, actualización de datos, entre otros.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "SGID, Sistema Gestión de Identidades",
            "fecha": {"es": "Agosto, 2010", "en": "August, 2010", "fr": "Août, 2010"},
            "descripcion": "Lideré técnicamente el proyecto “SGID, Sistema Gestión de Identidades” de Computec S.A. el cual consiste en el análisis, diseño y construcción de una solución para el aprovisionamiento de usuarios, en donde se deben integrar de 5 repositorios internos del cliente. Utilizando IBM WebPhere Portal, Glasfish, Spring, Java Server faces, dando cumplimiento a reglamentaciones gubernamentales y ofreciendo un servicio ágil, seguro y eficaz.",
            "cliente": CLI_COMPUTEC,
            "tecnologia": [TEC_JAVA, TEC_PORTLET, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Fork Friends",
            "fecha": {"es": "Febrero, 2010", "en": "February, 2010", "fr": "Février, 2010"},
            "descripcion": "Dirigí y participé en la e implementación de la Plataforma Cloud de Fork Friends. Teniendo como misión, desarrollar toda la infraestructura de reservas, contenido, y cliente web (de cara a los restaurantes). Adicionalmente, estuve encargado del diseño y construcción del motor de pertinencia. Con este proyecto de emprendimiento participamos en Wayra Colombia en busca de inversión junto con más de 900 proyectos participantes, en donde estuvimos ubicados en los primeros 20 proyectos.",
            "cliente": CLI_PERSONAL,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA, TEC_PRIMEFACES],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Soporte a Producción",
            "fecha": {"es": "Octubre, 2009", "en": "October, 2009", "fr": "Octobre, 2009"},
            "descripcion": "Lideré el proceso de soporte a producción sobre la plataforma Web de la compañía Citi Colfondos, para nueve aplicaciones: Portal, Planilla, Pasivos, Gestión bancos, Conciliación títulos, Motor de servicios, Intranet, SGC e Infomercial. Usando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_SOPORTE, TEC_CONSULTORIA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "MCP, Prodeseg",
            "fecha": {"es": "Agosto, 2009", "en": "August, 2009", "fr": "Août, 2009"},
            "descripcion": "Participé en el diseño de la arquitectura del proyecto llamado MCP para la empresa Prodeseg y también participé en su desarrollo, el proyecto consistía en realizar una aplicación para centralizar la información y administrar los elementos de seguridad industrial.",
            "cliente": CLI_PRODESEG,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Desarrollo pagarés",
            "fecha": {"es": "Agosto, 2008", "en": "August, 2008", "fr": "Août, 2008"},
            "descripcion": "Participé en la elaboración de la arquitectura, diseño y desarrollo del proyecto Pagarés y títulos valor para Deceval, el cual tenía como propósito la digitalización y administración de los pagarés que custodia Deceval.",
            "cliente": CLI_DECEVAL,
            "tecnologia": [TEC_JAVA, TEC_RICHFACES],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "GAP's - Nuevas funcionaliddes",
            "fecha": {"es": "Abril, 2008", "en": "April, 2008", "fr": "Avril, 2008"},
            "descripcion": "Participación en el Proyecto GAP’s. Realizando el diseño y liderando el desarrollo de las nuevas funcionalidades de CitiColfondos que no estaban sobre la plataforma IBM WebSphere Portal. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_PORTLET, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Funcionalidades Gestión Bancos",
            "fecha": {"es": "Julio, 2007", "en": "July, 2007", "fr": "Juillet, 2007"},
            "descripcion": "Realicé el diseño y lideré el desarrollo de la implementación de nuevos requerimientos para la aplicación Gestión Bancos de CitiColdondos. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Catalogo de productos Baxter",
            "fecha": {"es": "Noviembre, 2006", "en": "November, 2006", "fr": "Novembre, 2006"},
            "descripcion": "Realicé el desarrollo de nuevos requerimientos para el aplicativo Catálogo de productos de Laboratorios Baxter. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server y base de datos base de datos IBM DB2.",
            "cliente": CLI_BAXTER,
            "tecnologia": [TEC_JAVA, TEC_STRUTS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Reingeniería Portal Colfondos",
            "fecha": {"es": "Julio, 2006", "en": "July, 2006", "fr": "Juillet, 2006"},
            "descripcion": "Participé en el diseño, desarrollo e implementación del proyecto Reingeniería Portal Colfondos el cual consistía en la migración de ocho aplicaciones Web hacia IBM WebSphere Portal. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Inventarios JAO",
            "fecha": {"es": "Febrero, 2006", "en": "February, 2006", "fr": "Février, 2006"},
            "descripcion": "Realicé el diseño de la aplicación de inventarios para el Centro Médico JAO, y participé en su desarrollo e implementación. Utilizando como herramienta de desarrollo NetBeans, servidor APACHE, TOMCAT y base de datos MYSQL.",
            "cliente": CLI_JAO,
            "tecnologia": [TEC_JAVA, TEC_STRUTS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Desarrollo módulo cartera",
            "fecha": {"es": "Noviembre, 2005", "en": "November, 2005", "fr": "Novembre, 2005"},
            "descripcion": "Participé en el desarrollo  del módulo de productos de la aplicación de cartera para el Banco de la República. Usé JDeveloper como herramienta de desarrollo, WebLogic como servidor de aplicaciones y base de datos Oracle.",
            "cliente": CLI_BANCO_REPUBLICA,
            "tecnologia": [TEC_JAVA, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Customer Multifactor Authentication",
            "fecha": {"es": "Junio, 2005", "en": "June, 2005", "fr": "Juin, 2005"},
            "descripcion": "Participé en el Proyecto Customer Multifactor Authentication. Realizé el diseño, desarrollo e implementación del sistema de autenticación a las zonas transaccionales del Portal de CitiColfondos para los usuarios afiliados y empleadores. Usé IBM Rational Application Developer como herramienta de desarrollo, servidor WebSphere Application Server y base de datos Microsoft SQL-Server.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_RICHFACES],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Inventarios negativos y agotados",
            "fecha": {"es": "Mayo, 2005", "en": "May, 2005", "fr": "Mai, 2005"},
            "descripcion": "Participé en el desarrollo de aplicaciones Web, desarrollo  JSP’s y personalización de WorkFlow, para el manejo de los procesos de inventarios negativos y agotados de Carulla. Usé IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench - WebSphere MQ y base de datos IBM DB2.",
            "cliente": CLI_CARULLA,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Procesos Baxter",
            "fecha": {"es": "Mayo, 2005", "en": "May, 2005", "fr": "Mai, 2005"},
            "descripcion": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de Laboratorios Baxter. Usé IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench - WebSphere MQ y base de datos IBM DB2.",
            "cliente": CLI_BAXTER,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización Procesos",
            "fecha": {"es": "Abril, 2005", "en": "April, 2005", "fr": "Avril, 2005"},
            "descripcion": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de Gas Natural. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y base de datos IBM DB2.",
            "cliente": CLI_GASNATURAL,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización Procesos Bussie",
            "fecha": {"es": "Marzo, 2005", "en": "March, 2005", "fr": "Mars, 2005"},
            "descripcion": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de Laboratorios Bussie. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y base de datos IBM DB2.",
            "cliente": CLI_BUSSIE,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Paga cuentas Visa",
            "fecha": {"es": "Marzo, 2005", "en": "March, 2005", "fr": "Mars, 2005"},
            "descripcion": "Participé en el desarrollo del Portal de Visa para el proyecto Pagacuentas Visa, desarrollando aplicaciones Portlet’s, para pagar cuentas por Internet. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, los servidores de aplicaciones WebSphere Application Server y WebSphere Portal Server y base de datos IBM DB2.",
            "cliente": CLI_VISA,
            "tecnologia": [TEC_JAVA, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización workflow",
            "fecha": {"es": "Octubre, 2004", "en": "October, 2004", "fr": "Octobre, 2004"},
            "descripcion": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos del Banco de Crédito. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y la base de datos IBM DB2.",
            "cliente": CLI_BANCO_CREDITO,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización workflow",
            "fecha": {"es": "Septiembre, 2004", "en": "September, 2004", "fr": "Septembre, 2004"},
            "descripcion": "Participé  en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de la Fiscalía. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y  base de datos IBM DB2.",
            "cliente": CLI_FISCALIA,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Aplicación Seguridad",
            "fecha": {"es": "Septiembre, 2004", "en": "September, 2004", "fr": "Septembre, 2004"},
            "descripcion": "Participé en el desarrollo de la aplicación de Seguridad de Colfondos y del desarrollo de aplicaciones internas como lo son Futuronet, para el manejo de pensiones y cesantías. Usé IBM WebSphere Studio Application Developer como herramienta de desarrollo, el servidor WebSphere Application Server y la base de datos IBM DB2.",
            "cliente": CLI_COLFONDOS,
            "tecnologia": [TEC_JAVA, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización Portal",
            "fecha": {"es": "Marzo, 2004", "en": "March, 2004", "fr": "Mars, 2004"},
            "descripcion": "Participé en el desarrollo de la personalización del  Portal para el DANE. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, los servidores de aplicaciones WebSphere Application Server y WebSphere Portal Server y base de datos IBM DB2. De manera simultánea me desempeñé como formador de administración de Portal.",
            "cliente": CLI_DANE,
            "tecnologia": [TEC_JAVA, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Administración Red",
            "fecha": {"es": "Diciembre, 2003", "en": "December, 2003", "fr": "Décembre, 2003"},
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
    
    /*
    let language = getLanguage();
    let clientesAux = [];

    let container = document.getElementById("clientes-container");
    container.innerHTML = '';

    for(let portafolio of portafolios){
        
        let clienteLg = portafolio.cliente[language] == null ? portafolio.cliente : portafolio.cliente[language];

        if(clientesAux.indexOf(clienteLg) == -1){
            clientesAux.push(clienteLg);

            let num = portafolios.filter(p => {
                const clienteInternoLg = p.cliente[language] == null ? p.cliente : p.cliente[language];
                if(clienteInternoLg === clienteLg){
                    return true;
                }else{
                    return false;
                }
            }).length;  

            if(num > 0){
                let li = document.createElement("li");
                li.innerHTML = `<a href='' onclick='return filtroXCliente("${clienteLg}")'>${clienteLg}</a> <span class='badge'>${num}</span>`;
                container.appendChild(li);
            }
            
        }
        
    }
    */

}

function getPersonales(portafolios){

    try{
        
        let language = getLanguage();
        let clientesAux = [];

        let container = document.getElementById("personales-container");
        container.innerHTML = '';

        for(let portafolio of portafolios){
            
            let clienteLg = portafolio.cliente[language] == null ? portafolio.cliente : portafolio.cliente[language];

            if(clientesAux.indexOf(clienteLg) == -1){
                clientesAux.push(clienteLg);

                let num = portafolios.filter(p => {
                    const clienteInternoLg = p.cliente[language] == null ? p.cliente : p.cliente[language];
                    if(clienteInternoLg === clienteLg){
                        return true;
                    }else{
                        return false;
                    }
                }).length;  

                if(clienteLg == 'Personal' || clienteLg == 'Personnel'){
                    let li = document.createElement("li");
                    li.innerHTML = `<a href='' onclick='return filtroXCliente("${clienteLg}")'>${clienteLg}</a> <span class='badge'>${num}</span>`;
                    container.appendChild(li);
                }
                
            }
            
        }
        
    }catch(error){
        console.log('Error en getPersonales: '+error);        
    }

}

function getTecnologias(portafolios){

    try{

        let language = getLanguage();
        let tecnologiasAux = [];
        
        let container = document.getElementById("tecnologia-container");
        container.innerHTML = '';

        for(let portafolio of portafolios){

            for(let tecnologia of portafolio.tecnologia){

                let tecnologiaLg = tecnologia[language] == null ? tecnologia : tecnologia[language];
                if(tecnologiasAux.indexOf(tecnologiaLg) == -1){
                    tecnologiasAux.push(tecnologiaLg);
        
                    let num = 0;
                    for(let portafolioCount of portafolios){
                        num = num + portafolioCount.tecnologia.filter(t => {
                            const tecnologiaInternoLg = t[language] == null ? t : t[language];
                            if(tecnologiaInternoLg === tecnologiaLg){
                                return true;
                            }else{
                                return false;
                            }
                        }).length;
                    }
                    
                    if(num > 0){
                        let li = document.createElement("li");
                    li.innerHTML = `<a href='' onclick='return filtroXTecnologia("${tecnologiaLg}")'>${tecnologiaLg}</a> <span class='badge'>${num}</span>`;
                    container.appendChild(li);
                    }
                    
                }

            }

        }
        
    }catch(error){
        console.log('Error en getTecnologias: '+error);
    }

}

function getFiltrosInicio(portafolios){

    try{

        let language = getLanguage();
        let tecnologiasAux = [];
        
        let container = document.getElementById("filtrosInicio-container");
        container.innerHTML = '';

        let filtrosHtml = `<h3 class="filtros-activos filtrosInicio">`;

        filtrosHtml = filtrosHtml + `<a href="#" onclick='return filtroXCliente("${CLI_PERSONAL[language]}")'>${CLI_PERSONAL[language]} (3)</a> - `;

        
        for(let portafolio of portafolios){

            for(let tecnologia of portafolio.tecnologia){

                let tecnologiaLg = tecnologia[language] == null ? tecnologia : tecnologia[language];
                if(tecnologiasAux.indexOf(tecnologiaLg) == -1){
                    tecnologiasAux.push(tecnologiaLg);
        
                    let num = 0;
                    for(let portafolioCount of portafolios){
                        num = num + portafolioCount.tecnologia.filter(t => {
                            const tecnologiaInternoLg = t[language] == null ? t : t[language];
                            if(tecnologiaInternoLg === tecnologiaLg){
                                return true;
                            }else{
                                return false;
                            }
                        }).length;
                    }
                    

                    if(num > 0){
                        filtrosHtml = filtrosHtml + `<a href="#" onclick="return filtroXTecnologia('${tecnologiaLg}');">${tecnologiaLg} (${num})</a> - `;
                    }
                    
                }

            }

        }

        filtrosHtml = filtrosHtml.substring(0, filtrosHtml.length - 3);
        filtrosHtml = filtrosHtml + `</h3><br/>`;

        container.innerHTML = filtrosHtml;
        
    }catch(error){
        console.log('No hay contenedor inicial');
    }
    
}

function getTrabajos(portafolios, filtro){

    try{

        let language = getLanguage();
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

            const tituloLg = portafolio.titulo[language] == null ? portafolio.titulo : portafolio.titulo[language];
            const imagenLg = portafolio.imagen[language] == null ? portafolio.imagen : portafolio.imagen[language];
            const clienteLg = portafolio.cliente[language] == null ? portafolio.cliente : portafolio.cliente[language];
            const descripcionLg = portafolio.descripcion[language] == null ? portafolio.descripcion : portafolio.descripcion[language];
            const fecha = portafolio.fecha[language] == null ? portafolio.fecha : portafolio.fecha[language];

            let titulo = `<h4 class='titulo-portafolio'>${tituloLg}</h4>`;
            if(portafolio.pagina != ''){
                titulo = `<h4><a href="${portafolio.pagina}" target="_blank">${tituloLg}</a></h4>`
            }

            let imagen = '<div class="no-img-portafolio"></div>';
            if(portafolio.imagen != ''){
                imagen = `<div class="img-wrapper img-portafolio">
                            <img src="${imagenLg}" class="img-responsive" alt="${clienteLg}" />
                        </div>`
            }

            let tecText = ``;
            for(let tec of portafolio.tecnologia){
                let tecLg = tec[language] == null ? tec : tec[language];
                tecText = tecText + ` <span><a href='' onclick='return filtroXTecnologia("${tecLg}")'>${tecLg}</a> |</span>`;
            }
            
            if(indexRow%2 == 0){
                div = div + `<div class="row">`;
            }

            div = div + `<div class="col-sm-6 col-xs-12">
                            <figure class="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                                <figcaption>
                                    ${titulo}
                                    <div class="blog-meta meta-portafolio">
                                        <span>${fecha}</span>
                                        <span><a href='' onclick='return filtroXCliente("${clienteLg}")'>${clienteLg}</a></span>
                                    </div>
                                </figcaption>
                                ${imagen}
                                <figcaption>
                                    <p>${descripcionLg}</p>
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
        
    }catch(error){
        console.log('Error en getTrabajos: '+error);
    }

}

function filtroXCliente(cliente){

    try{

        let language = getLanguage();
        let portafolios = getData();
        let portafoliosFiltrado = portafolios.filter(p => {
            const clienteLg = p.cliente[language] == null ? p.cliente : p.cliente[language];
            if(clienteLg === cliente){
                return true;
            }else{
                return false;
            }
        });

        const CLIENTE_LG = FILTRO_CLIENTES[language] == null ? FILTRO_CLIENTES : FILTRO_CLIENTES[language];

        let filtro = CLIENTE_LG + cliente;

        getTrabajos(portafoliosFiltrado, filtro);

        /*
        getClientes(portafoliosFiltrado);
        getTecnologias(portafoliosFiltrado);
        getPersonales(portafoliosFiltrado);
        */
        
        getClientes(portafolios);
        getTecnologias(portafolios);
        getPersonales(portafolios);
        getFiltrosInicio(portafolios);

    }catch(error){
        console.log('Error en filtroXCliente: '+error);
    }

    return false;
}

function filtroXTecnologia(tecnologia){

    try{

        let portafolios = getData();

        if(tecnologia == ''){
            getTrabajos(portafolios, null);
            getClientes(portafolios);
            getTecnologias(portafolios);
            getPersonales(portafolios);
            getFiltrosInicio(portafolios);
        }else{
            let language = getLanguage();
            const TECNOLOGIA_LG = FILTRO_TECNOLOGIA[language] == null ? FILTRO_TECNOLOGIA : FILTRO_TECNOLOGIA[language];

            let filtro = TECNOLOGIA_LG + tecnologia;
            let portafoliosFiltrado = portafolios.filter(p => {
                
                let tecnologiaFiltrado = p.tecnologia.filter(t => {
                    const tLg = t[language] == null ? t : t[language];
                    if(tLg === tecnologia){
                        return true;
                    }else{
                        return false;
                    }
                });
                
                if(tecnologiaFiltrado.length > 0){
                    tecnologiaFiltrado = tecnologiaFiltrado[0];
                }else{
                    return false;
                }
                
                let tecAuxLg = tecnologiaFiltrado[language] == null ? tecnologiaFiltrado : tecnologiaFiltrado[language];

                if(tecAuxLg.indexOf(tecnologia) != -1){
                    return true;
                }else{
                    return false;
                }
            });

            getTrabajos(portafoliosFiltrado, filtro);

            /*
            getClientes(portafoliosFiltrado);
            getTecnologias(portafoliosFiltrado);
            getPersonales(portafoliosFiltrado);
            */
            
            getClientes(portafolios);
            getTecnologias(portafolios);
            getPersonales(portafolios);
            getFiltrosInicio(portafolios);

        }
        
    }catch(error){
        console.log('Error en filtroXTecnologia: '+error);
    }

    return false;
}

function getLanguage(){

    let language = 'es';
    try{
        let path = window.location.pathname;
        
        if(path.indexOf('/en/') != -1){
            language = 'en';
        }else if(path.indexOf('/fr/') != -1){
            language = 'fr';
        }
    }catch(error){
        console.log('Error en getLanguage: '+error);
    }
    
    return language;
}

window.onload = function() {
    try{
        let portafolios = getData();
        getClientes(portafolios);
        getTecnologias(portafolios);
        getTrabajos(portafolios);
        getPersonales(portafolios);
        getFiltrosInicio(portafolios);
    }catch(error){
        console.log('Error en onLoad: '+error);
    }
};