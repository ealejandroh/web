const FILTRO_CLIENTES =    {"es": "Filtro: ", 
                            "en": "Filter: ", 
                            "fr": "Filtrer: "};
const FILTRO_TECNOLOGIA =  {"es": "Tecnología: ", 
                            "en": "Technology: ", 
                            "fr": "La technologie: "};
const FILTRO_EMPLEADOR =  {"es": "Compañía: ", 
                            "en": "Company: ", 
                            "fr": "Entreprise: "};

const LABEL_CAMPOS =  {
                        "Proyecto": { "es": "Proyecto: ", "en": "Project: ", "fr": "Projet: " },
                        "Empresa": {"es": "Compañía: ", "en": "Company: ", "fr": "Enterprise: "},
                        "Cliente": {"es": "Cliente: ", "en": "Client: ", "fr": "Client: "},
                        "Descripcion": {"es": "Descripción del proyecto: ", "en": "Project description: ", "fr": "Description du Project: "},
                        "Tecnologias": {"es": "Entorno tecnológico: ", "en": "Technological environment: ", "fr": "Environnement technologique: "},
                        "Fecha": {"es": "Fecha: ", "en": "Date: ", "fr": "Date: "},
                        "Duracion": {"es": "Duración: ", "en": "Duration: ", "fr": "Durée: "}};

let VERSION_COPY_DETAIL = false;

function getData(){

    const TEC_JAVA = "Java";
    const TEC_ANGULAR = "Angular";
    const TEC_MICROSERVICIOS = {"es": "Microservicios", "en": "Microservices", "fr": "Microservices"};
    const TEC_SPRING = "Spring / Spring Boot";
    const TEC_PRIMEFACES = "PrimeFaces";
    const TEC_RICHFACES = "RichFaces";
    const TEC_STRUTS = "Struts";
    const TEC_JSP = "Jsp";
    const TEC_MONGODB = "MongoDB";
    const TEC_PRESTASHOP = "Prestashop";
    const TEC_ARQUITECTURA = {"es": "Arquitectura", "en": "Architecture", "fr": "Architecture"};
    const TEC_PORTLET = "Portlet";
    const TEC_MULE = "Mule";
    const TEC_SOPORTE = {"es": "Soporte", "en": "Support", "fr": "Soutien"};
    const TEC_PORTAL = "Portal";
    const TEC_CONSULTORIA = {"es": "Consultoría", "en": "Consultancy", "fr": "Consultation"};
    const TEC_WORKFLOW = "IBM WorkFlow";
    const TEC_WORDPRESS = "Wordpress";
    const TEC_VAADIN = "Vaadin";
    const TEC_WCM = "WebContent Management";
    const TEC_ANDROID = "Android";
    const TEC_NODEJS = "NodeJs";
    const TEC_TYPESCRIPT = "Typescript";
    const TEC_GCP = "CGP";


    const CLI_COLFONDOS = "Colfondos";
    const CLI_ATH = "Ath";
    const CLI_KEO = "Keo World";
    const CLI_SERVITEL = "Servitel";
    const CLI_COLPATRIA = "Colpatria";
    const CLI_DAVIVIENDA = "Davivienda";
    const CLI_ALFAGL = "AlfaGL";
    const CLI_COMPUTEC = "Experian Computec";
    const CLI_PRODESEG = "Prodeseg";
    const CLI_DECEVAL = "Deceval";
    const CLI_BAXTER = "Laboratorios Baxter";
    const CLI_BUSSIE = "Laboratorios Bussie";
    const CLI_CARULLA = "Carulla";
    const CLI_GASNATURAL = "Gas Natural";
    const CLI_VISA = "Visa";
    const CLI_BANCO_CREDITO = "Banco de crédito";
    const CLI_FISCALIA = "Fiscalia";
    const CLI_DANE = "Dane";
    const CLI_LIBERTY = "Seguros Liberty";
    const CLI_JAO = "Centro médico JAO";
    const CLI_BANCO_REPUBLICA = "Banco de la República";
    const CLI_CLAZLOOP = "Clazloop";
    const CLI_CORREDOR_SEGURA = "Corredor Segura abogados";
    const CLI_OLD_MUTUAL = "Old Mutual";
    const CLI_SKANDIA = "Skandia";
    const CLI_BLANCO_CASTRO = "Blanco de Castro";
    const CLI_SEGUROS_AFA = "Seguros ALFA";
    const CLI_REDEBAN = "Redeban";
    const CLI_ECOPETROL = "Ecopetrol";
    const CLI_SOFTONE = "Interno";
    const CLI_PERSONAL = {"es": "Personal", 
                        "en": "Personal", 
                        "fr": "Personnel"};

    const EMP_ASSIST = "Assist";
    const EMP_SOFTONE = "SoftOne";
    const EMP_PERSONAL = {"es": "Personal", 
                        "en": "Personal", 
                        "fr": "Personnel"};
    
    let portafolios = [
        {
            "titulo": { "es": "Integración con SIAFP", 
                        "en": "Integration with SIAFP", 
                        "fr": "Intégration avec SIAFP" },
            "fecha": {"es": "Julio, 2023", "en": "July, 2023", "fr": "Juillet, 2023"},
            "duracionMeses": "1",
            "descripcion": {"es": "Implementación de conector para comunicación entre Colfondos y Asofondos para procesamiento de novedades de afiliación entre los diferentes fondos de pensiones y cesantías. La comunicación se realiza mediante servicios SOAP asegurados con ws security.", 
                            "en": "Implementation of a connector for communication between Colfondos and Asofondos for the processing of affiliation news between the different pension and severance funds. The communication is done through SOAP services secured with ws security.", 
                            "fr": "Mise en place d'un connecteur de communication entre Colfondos et Asofondos pour le traitement des actualités d'affiliation entre les différentes caisses de retraite et indemnités de départ. La communication se fait via des services SOAP sécurisés avec ws security." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_SPRING, TEC_MICROSERVICIOS, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Deber de asesoría", 
                        "en": "Duty of advice", 
                        "fr": "Devoir de conseil" },
            "fecha": {"es": "Mayo, 2023", "en": "May, 2023", "fr": "Mai, 2023"},
            "duracionMeses": "2",
            "descripcion": {"es": "Definición e implementación de arquitectura para el módulo de deber de asesoría para realizar el calculo de perfil de riesgo del cliente y mediante un análisis de conveniencia y validar si corresponde con sus inversiones en los diferentes fondos, para proponer una recomendación profesional.", 
                            "en": "Definition and implementation of architecture for the advisory duty module to calculate the client's risk profile and through a suitability analysis and validate if it corresponds to their investments in the different funds, to propose a professional recommendation.", 
                            "fr": "Définition et mise en place de l'architecture du module de mission de conseil pour calculer le profil de risque du client et par une analyse d'adéquation et valider s'il correspond à ses investissements dans les différents fonds, proposer une recommandation professionnelle." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_SPRING, TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Certificados de declaración de renta", 
                        "en": "Income statement certificates", 
                        "fr": "Certificats de compte de résultat" },
            "fecha": {"es": "Marzo, 2023", "en": "March, 2023", "fr": "Mars, 2023"},
            "duracionMeses": "2",
            "descripcion": {"es": "Definición e implementación de módulo de generación de certificados de renta en formato PDF permitiendo un diseño gráfico parametrizable, para los productos de pensiones voluntarias, pensiones obligatorias y cesantías.", 
                            "en": "Definition and implementation of a module for generating income certificates in PDF format, allowing a parameterizable graphic design, for voluntary pension, mandatory pension and severance products.", 
                            "fr": "Définition et mise en place d'un module de génération d'attestations de revenus au format PDF, permettant une conception graphique paramétrable, pour les produits de retraite volontaire, de retraite obligatoire et d'indemnité de départ." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_SPRING, TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Procesos omisos", 
                        "en": "Ignored processes", 
                        "fr": "Processus ignorés" },
            "fecha": {"es": "Febrero, 2023", "en": "February, 2023", "fr": "Février, 2023"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé la implementación de un nuevo método de autenticación al ecosistema de microservicios de Colfondos, por medio de un ApiKey para un grupo de servicios externos a la compañía.", 
                            "en": "I implemented a new authentication method to the Colfondos microservices ecosystem, through an ApiKey for a group of services external to the company.", 
                            "fr": "J'ai implémenté une nouvelle méthode d'authentification à l'écosystème de microservices Colfondos, via une ApiKey pour un groupe de services externes à l'entreprise." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_MICROSERVICIOS, TEC_SPRING],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Pagos de pensiones voluntarias", 
                        "en": "Voluntary pension payments", 
                        "fr": "Paiements de pension volontaires" },
            "fecha": {"es": "Enero, 2023", "en": "January, 2023", "fr": "Janvier, 2023"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé la definición técnica para módulo de notificaciones vía sms e email de forma asíncrona dentro del proceso de pagos de pensiones voluntarias para prevenir riesgo de fraude.", 
                            "en": "I made the technical definition for the notification module via sms and email asynchronously within the voluntary pension payment process to prevent fraud risk.", 
                            "fr": "J'ai réalisé la définition technique du module de notification par sms et email de manière asynchrone dans le cadre du processus de paiement volontaire de la pension pour prévenir les risques de fraude." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_MICROSERVICIOS, TEC_SPRING, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "BPM v3", 
                        "en": "BPM v3", 
                        "fr": "BPM v3" },
            "fecha": {"es": "Enero, 2022", "en": "January, 2022", "fr": "Janvier, 2022"},
            "duracionMeses": "12",
            "descripcion": {"es": "Lideré el área de back-end y diseñé la arquitectura para la generación de productos financieros de Keo Word reduciendo el tiempo de desarrollo en un 60%. La plataforma se encuentra sobre GCP con microservicios desarrollados en NodeJs.", 
                            "en": "I led the back-end area and designed the architecture for the generation of Keo Word financial products, reducing development time by 60%. The platform is on GCP with microservices developed in NodeJs.", 
                            "fr": "J'ai dirigé le domaine back-end et conçu l'architecture pour la génération des produits financiers Keo Word, réduisant le temps de développement de 60%. La plateforme est sur GCP avec des microservices développés en NodeJs." },
            "cliente": CLI_KEO,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_GCP, TEC_NODEJS, TEC_TYPESCRIPT, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Liderazgo Fabrica de desarrollo", 
                        "en": "Leadership Development Factory", 
                        "fr": "Direction de l'usine de développement" },
            "fecha": {"es": "Julio, 2021", "en": "July, 2021", "fr": "Juillet, 2021"},
            "duracionMeses": "6",
            "descripcion": {"es": "Liderazgo y gestión de las actividades de la fabrica de desarrollo de ATH donde se realizan desarrollos para los portales del grupo Aval (Banco de Bogotá, Banco de occidente, Banco popular y Banco Av Villas) y se da soporte al portal de producción de AvalPay Center sobre WebSphere Portal.", 
                            "en": "Leadership and management of the activities of the ATH development factory where developments are carried out for the Aval group portals (Banco de Bogotá, Banco de Occidente, Banco popular and Banco Av Villas) and support is given to the AvalPay Center production portal about WebSphere Portal.", 
                            "fr": "Direction et gestion des activités de l'usine de développement ATH où les développements sont réalisés pour les portails du groupe Aval (Banco de Bogotá, Banco de Occidente, Banco popular et Banco Av Villas) et le soutien est apporté au portail de production AvalPay Center sur WebSphere Portal ." },
            "cliente": CLI_ATH,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_PORTAL, TEC_ANGULAR],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Historia laboral consolidada", 
                        "en": "Consolidated employment history", 
                        "fr": "Historique d'emploi consolidé" },
            "fecha": {"es": "Enero, 2021", "en": "January, 2021", "fr": "Janvier, 2021"},
            "duracionMeses": "6",
            "descripcion": {"es": "Realicé el liderazgo técnico del desarrollo de la historia laboral consolidada de Colfondos la cual incluye la comunicación entre el portal Liferay, Mule ESB, microservicios y AS400 por medio de MQ.", 
                            "en": "I carried out the technical leadership of the development of the consolidated work history of Colfondos which includes the communication between the Liferay portal, Mule ESB, microservices and AS400 through MQ.", 
                            "fr": "J'ai assuré le leadership technique du développement de l'historique de travail consolidé de Colfondos qui comprend la communication entre le portail Liferay, Mule ESB, les microservices et AS400 via MQ." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_MICROSERVICIOS, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Cifrado de emails", 
                        "en": "Email encryption", 
                        "fr": "Cryptage des e-mails" },
            "fecha": {"es": "Noviembre, 2020", "en": "November, 2020", "fr": "Novembre, 2020"},
            "duracionMeses": "2",
            "descripcion": {"es": "Realice el diseño y la prueba de concepto para el proyecto de cifrado de emails para la consulta de correos en un buzón de Office 365 de Colfondos, comprimir sus archivos adjuntos y reenvío con una clave al filiado.", 
                            "en": "Perform the design and proof of concept for the email encryption project for consulting emails in an Office 365 Colfondos mailbox, compressing their attachments and forwarding them with a key to the affiliate.", 
                            "fr": "Effectuer la conception et la preuve de concept du projet de chiffrement des e-mails pour consulter les e-mails dans une boîte aux lettres Office 365 Colfondos, compresser leurs pièces jointes et les transmettre avec une clé à l'affilié." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_CONSULTORIA, TEC_JAVA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Validación browser no soportado", 
                        "en": "Browser validation not supported", 
                        "fr": "Validation du navigateur non prise en charge" },
            "fecha": {"es": "Agosto, 2020", "en": "August, 2020", "fr": "Août, 2020"},
            "duracionMeses": "3",
            "descripcion": {"es": "Desarrollo portlet sobre Liferay para realizar validación de browser no soportados dinámicamente de acuerdo con la funcionalidad de las páginas del portal de Colfondos.", 
                            "en": "Development of a portlet on Liferay to perform browser validation not dynamically supported according to the functionality of the Colfondos portal pages.", 
                            "fr": "Développement d'un portlet sur Liferay pour effectuer la validation du navigateur non pris en charge dynamiquement selon la fonctionnalité des pages du portail Colfondos." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Adición tipo documento cesantías", 
                        "en": "Severance document type addition", 
                        "fr": "Ajout du type de document d'indemnité de départ" },
            "fecha": {"es": "Julio, 2020", "en": "July, 2020", "fr": "Juillet, 2020"},
            "duracionMeses": "1",
            "descripcion": {"es": "Implementación de funcionalidad para adicionar tipo de documentos de los afiliados para el producto de cesantías en Colfondos e incluirlo en los servicios utilizados por el IVR por medio de microservicios.", 
                            "en": "Implementation of functionality to add type of documents of the affiliates for the severance product in Colfondos and include it in the services used by the IVR through microservices.", 
                            "fr": "Implémentation de fonctionnalités pour ajouter le type de documents des affiliés pour le produit d'indemnité de départ dans Colfondos et l'inclure dans les services utilisés par l'IVR via des microservices." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_MICROSERVICIOS, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Desarrollo Servicios IVR Colfondos", 
                        "en": "IVR Services Development Colfondos", 
                        "fr": "Développement des services IVR Colfondos" },
            "fecha": {"es": "Febrero, 2020", "en": "February, 2020", "fr": "Février, 2020"},
            "duracionMeses": "5",
            "descripcion": {"es": "Diseñé la arquitectura para implementación de microservicios en Colfondos utilizando spring boot, la cual se comenzó a utilizar con los servicios consumidos por el IVR para la generación de documentos de los afiliados en donde se realiza alrededor de 20.000 solicitudes mensuales.", 
                            "en": "I designed the architecture for the implementation of microservices in Colfondos using spring boot, which began to be used with the services consumed by the IVR for the generation of affiliate documents where around 20,000 monthly requests are made.", 
                            "fr": "J'ai conçu l'architecture pour la mise en œuvre de microservices dans Colfondos à l'aide de spring boot, qui a commencé à être utilisée avec les services consommés par l'IVR pour la génération de documents d'affiliation où environ 20 000 demandes mensuelles sont effectuées." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_MICROSERVICIOS, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Arquitectura Contenidos Ecopetrol", 
                        "en": "Architecture Contents Ecopetrol", 
                        "fr": "Architecture de contenu Ecopetrol" },
            "fecha": {"es": "Enero, 2020", "en": "January, 2020", "fr": "Janvier, 2020"},
            "duracionMeses": "1",
            "descripcion": {"es": "Diseñe la arquitectura de creación de contenidos del portal de Ecopetrol el cual se desarrollo sobre IBM WebSphere Portal, en donde migraron alrededor de 4000 páginas.", 
                            "en": "I designed the content creation architecture of the Ecopetrol portal, which was developed on IBM WebSphere Portal, where around 4000 pages migrated.", 
                            "fr": "J'ai conçu l'architecture de création de contenu du portail Ecopetrol, qui a été développé sur IBM WebSphere Portal, où environ 4 000 pages ont migré." },
            "cliente": CLI_ECOPETROL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_CONSULTORIA, TEC_PORTAL, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Integración Plataforma Box", 
                        "en": "Box Platform Integration", 
                        "fr": "Intégration de la plateforme Box" },
            "fecha": {"es": "Diciembre, 2019", "en": "December, 2019", "fr": "Décembre, 2019"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé la integración de la plataforma Box para la administración y gestión de documentos internos sobre el Portal de Skandia en WebSphere Portal, utilizando los permisos y roles internos de la compañía.", 
                            "en": "I made the integration of the Box platform for the administration and management of internal documents on the Skandia Portal in WebSphere Portal, using the company's internal roles and permissions.", 
                            "fr": "J'ai réalisé l'intégration de la plateforme Box pour l'administration et la gestion des documents internes sur le portail Skandia dans WebSphere Portal, en utilisant les rôles et permissions internes de l'entreprise." },
            "cliente": CLI_SKANDIA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_CONSULTORIA, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Consultoría WebSphere Portal", 
                        "en": "WebSphere Portal Consulting", 
                        "fr": "WebSphere Portal Consulting" },
            "fecha": {"es": "Julio, 2019", "en": "July, 2019", "fr": "Juillet, 2019"},
            "duracionMeses": "5",
            "descripcion": {"es": "Estuve apoyando al equipo técnico de Skandia en la solución de problemas internos sobre el portal empresarial en WebSphere Portal y la definición de nuevas soluciones internas.", 
                            "en": "I was supporting the technical team of Skandia in solving internal problems about the business portal in WebSphere Portal and defining new internal solutions.", 
                            "fr": "J'aidais l'équipe technique de Skandia à résoudre les problèmes internes liés au portail d'entreprise de WebSphere Portal et à définir de nouvelles solutions internes." },
            "cliente": CLI_SKANDIA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_CONSULTORIA, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Event sports",
            "fecha": {"es": "Junio, 2019", "en": "June, 2019", "fr": "Juin, 2019"},
            "duracionMeses": "1",
            "descripcion": {"es": "Participé en la definición de la idea de SportEvents, desarrollo del producto, puesta en producción y maduración de la marca; SportEvents funciona para soportar la gestión de inscripciones a eventos deportivos.", 
                            "en": "I participated in the definition of the idea of SportEvents, product development, putting into production and maturation of the brand; SportEvents works to support the management of registrations to sporting events.", 
                            "fr": "J'ai participé à la définition de l'idée de SportEvents, au développement de produits, à la mise en production et à la maturation de la marque; SportEvents a pour objectif de soutenir la gestion des inscriptions à des événements sportifs." },
            "cliente": CLI_SOFTONE,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_MICROSERVICIOS, TEC_ANGULAR, TEC_MONGODB, TEC_TYPESCRIPT],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Cambio de marca", 
                        "en": "Brand change", 
                        "fr": "Changement de marque" },
            "fecha": {"es": "Mayo, 2019", "en": "May, 2019", "fr": "Mai, 2019"},
            "duracionMeses": "1",
            "descripcion": {"es": "Participé en el desarrollo del cambio de marca de Old Mutual hacia Skandia de las aplicaciones: simulador tributario, simulador mi retiro, simulador sucesoral, simulador pensional y tema de asesoría.", 
                            "en": "I participated in the development of the change of Old Mutual's brand towards Skandia of the applications: tax simulator, my retirement simulator, succession simulator, pension simulator and advice topic.", 
                            "fr": "J'ai participé au développement du changement de marque de Old Mutual vers Skandia des applications: simulateur de taxes, mon simulateur de retraite, simulateur de succession, simulateur de retraite et conseils." },
            "cliente": CLI_SKANDIA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PORTAL, TEC_WCM],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Tema personalización",
            "fecha": {"es": "Abril, 2019", "en": "April, 2019", "fr": "Avril, 2019"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé en el diseño técnico del desarrollo del tema de personalización para el fondo de pensiones Skandia sobre IBM WebSphere Portal, para que soporte un crecimiento de información y funcionalidades de manera dinámica por medio de configuraciones por parte del usuario.", 
                            "en": "I carried out in the technical design of the development of the theme of customization for the Skandia pension fund on IBM WebSphere Portal, so that it supports a dynamic growth of information and functionalities through user configurations.", 
                            "fr": "J'ai effectué la conception technique du développement du thème de personnalisation du fonds de pension Skandia sur IBM WebSphere Portal, de manière à ce qu'il prenne en charge une croissance dynamique des informations et des fonctionnalités via les configurations utilisateur." },
            "cliente": CLI_SKANDIA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Informes derivados",
            "fecha": {"es": "Marzo, 2019", "en": "March, 2019", "fr": "Mars, 2019"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé el diseño y desarrollo de las modificaciones de la aplicación de informes derivados para Colfondos de acuerdo con lo solicitado por la superintendencia financiera en la circular externa 036, en donde se adicionan nuevos informes y modificaciones en estructuras de los informes existentes.", 
                            "en": "I made the design and development of the modifications of the application of derivative reports for Colfondos in accordance with the request of the financial superintendence in the external circular 036, where new reports and modifications in structures of the existing reports are added.", 
                            "fr": "J'ai conçu et mis au point les modifications de l'application des rapports dérivés pour Colfondos conformément à la demande de la surveillance financière figurant dans la circulaire externe 036, à laquelle de nouveaux rapports et des modifications de structure des rapports existants ont été ajoutés." },
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_SPRING],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Simulador sucesoral",
            "fecha": {"es": "Diciembre, 2018", "en": "December, 2018", "fr": "Décembre, 2018"},
            "duracionMeses": "3",
            "descripcion": {"es": "Realicé la definición técnica y participé en el desarrollo del simulador sucesoral de Old Mutual el cual permite la simulación de posibles escenarios del futuro de los bienes de una persona después de su fallecimiento, ya sea por herencia o por términos legales colombianos.", 
                            "en": "I made the technical definition and participated in the development of the successor simulator of Old Mutual which allows the simulation of possible scenarios of the future of a person's assets after his death, either by inheritance or by Colombian legal terms.", 
                            "fr": "J'ai fait la définition technique et participé au développement du simulateur successeur de Old Mutual qui permet de simuler des scénarios possibles de l'avenir des biens d'une personne après son décès, soit par héritage, soit par des termes juridiques colombiens." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_ANGULAR, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Simulador mi retiro",
            "fecha": {"es": "Noviembre, 2018", "en": "November, 2018", "fr": "Novembre, 2018"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé el desarrollo del simulador mi retiro, el cual permite la simulación del valor de la pensión de los afiliados a Old Mutual y una proyección de ahorro de acuerdo con un valor deseado de pensión en una edad deseada de pensión.", 
                            "en": "I carried out the development of my retirement simulator, which allows the simulation of the pension value of Old Mutual members and a projection of savings according to a desired pension value at a desired pension age.", 
                            "fr": "J'ai réalisé le développement de mon simulateur de retraite, qui permet de simuler la valeur de la pension des participants Old Mutual et de projeter l'épargne en fonction d'une valeur de pension souhaitée à un âge de retraite souhaité." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_ANGULAR, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Simulador tributario",
            "fecha": {"es": "Septiembre, 2018", "en": "September, 2018", "fr": "Septembre, 2018"},
            "duracionMeses": "2",
            "descripcion": {"es": "Realicé la definición de la arquitectura y participé en el desarrollo del simulador tributario de Old Mutual, el cual fue desarrollado sobre Angular 6 como un script portlet para IBM WebSphere Portal. Esta funcionalidad permite la creación de diferentes simuladores para la compañía de acuerdo con una configuración inicial.", 
                            "en": "I defined the architecture and participated in the development of the Old Mutual tax simulator, which was developed on Angular 6 as a portlet script for the IBM WebSphere Portal. This functionality allows the creation of different simulators for the company according to an initial configuration.", 
                            "fr": "J'ai défini l'architecture et participé au développement du simulateur de taxe Old Mutual, développé sur Angular 6 en tant que script de portlet pour IBM WebSphere Portal. Cette fonctionnalité permet la création de différents simulateurs pour l'entreprise en fonction d'une configuration initiale." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_ANGULAR, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Consultoría comunicación portlets", 
                        "en": "Portlet communication consulting", 
                        "fr": "Conseil en communication de portlet" },
            "fecha": {"es": "Julio, 2018", "en": "July, 2018", "fr": "Juillet, 2018"},
            "duracionMeses": "2",
            "descripcion": {"es": "Realicé la consultoría para la comunicación de portlets de diferentes tecnologías en IBM WebSphere Portal, la cual incluía una prueba de concepto y definición de estándares de desarrollo para la comunicación y envió de datos entre portlets en páginas diferentes o en la misma página.", 
                            "en": "I carried out the consultancy for the communication of portlets of different technologies in the IBM WebSphere Portal, which included a proof of concept and definition of development standards for the communication and sending of data between portlets on different pages or on the same page.", 
                            "fr": "J'ai effectué la consultation pour la communication de portlets de différentes technologies dans IBM WebSphere Portal, qui comprenait une preuve de concept et une définition de normes de développement pour la communication et l'envoi de données entre des portlets situés sur des pages différentes ou sur la même page." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_ARQUITECTURA, TEC_ANGULAR, TEC_VAADIN, TEC_PRIMEFACES, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Beneficiarios microseguros",
            "fecha": {"es": "Junio, 2018", "en": "June, 2018", "fr": "Juin, 2018"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé la definición técnica del portlet de Asignación de beneficiarios para las pólizas de microseguros, el cual fue desarrollado con primefaces para el portal Daviplata en IBM WebSphere Portal.", 
                            "en": "I made the technical definition of the Beneficiary Assignment portlet for microinsurance policies, which was first developed for the Daviplata portal in the IBM WebSphere Portal.", 
                            "fr": "J'ai défini de manière technique le portlet Affectation de bénéficiaire pour les polices de micro-assurance, qui avait été développé pour le portail Daviplata dans IBM WebSphere Portal." },
            "cliente": CLI_DAVIVIENDA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PRIMEFACES, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Journey de inversiones",
            "fecha": {"es": "Mayo, 2018", "en": "May, 2018", "fr": "Mai, 2018"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé la definición técnica del portlet de Journey de inversiones para Old Mutual, el cual fue desarrollado con el framework Vaadin para IBM WebSphere Portal. Este servía para que los usuario se cambiaran de portafolio de inversión con una llave de seguridad que se envía al celular como mensaje de texto.", 
                            "en": "I made the technical definition of the Investment Mutual Journey portlet for Old Mutual, which was developed with the Vaadin framework for IBM WebSphere Portal. This was used for users to change their investment portfolio with a security key that is sent to the cell phone as a text message.", 
                            "fr": "J'ai défini de manière technique le portlet Investment Mutual Journey pour Old Mutual, qui a été développé avec le framework Vaadin pour IBM WebSphere Portal. Cela a été utilisé pour permettre aux utilisateurs de modifier leur portefeuille d’investissement avec une clé de sécurité qui est envoyée au téléphone portable sous forme de message texte." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_VAADIN, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": { "es": "Menú contextual", 
                        "en": "Contextual menu", 
                        "fr": "Menu contextuel" },
            "fecha": {"es": "Abril, 2018", "en": "April, 2018", "fr": "Avril, 2018"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé la definición técnica y el desarrollo del script portlet menú contextual en Angular 5, el cual construye un menú dinámico dependiendo el rol del usuario autenticado y la funcionalidad activa en la que el usuario está ubicado.", 
                            "en": "I made the technical definition and development of the context menu portlet script in Angular 5, which builds a dynamic menu depending on the role of the authenticated user and the active functionality in which the user is located.", 
                            "fr": "J'ai effectué la définition technique et le développement du script de portlet de menu contextuel dans Angular 5, qui construit un menu dynamique en fonction du rôle de l'utilisateur authentifié et de la fonctionnalité active dans laquelle se trouve l'utilisateur." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_ANGULAR, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Certificado pólizas de microseguros",
            "fecha": {"es": "Febrero, 2018", "en": "February, 2018", "fr": "Février, 2018"},
            "duracionMeses": "2",
            "descripcion": {"es": "Realicé el desarrollo del portlet de consulta de certificados de pólizas de microseguros de Daviplata para Davivienda, el cual se fue desarrollado en primefaces para un portal en IBM WebSphere Portal.", 
                            "en": "I developed the Daviplata microinsurance policy certificate consultation portlet for Davivienda, which was first developed for a portal in IBM WebSphere Portal.", 
                            "fr": "J'ai développé le portlet de consultation des certificats de politique de micro-assurance Daviplata pour Davivienda, qui a été développé pour un portail dans IBM WebSphere Portal." },
            "cliente": CLI_DAVIVIENDA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PRIMEFACES, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Portal Asesoría",
            "fecha": {"es": "Enero, 2018", "en": "January, 2018", "fr": "Janvier, 2018"},
            "duracionMeses": "1",
            "descripcion": {"es": "Participe en la definición técnica y desarrollo del portal de asesoría de Old Mutual el cual, incluida el desarrollo de un tema para la navegación, portlets de contenido en WebContent Management, script portlets en Angular y portlets de seguridad en primefaces.", 
                            "en": "Participate in the technical definition and development of the Old Mutual advisory portal which, including the development of a theme for navigation, content portlets in WebContent Management, script portlets in Angular and security portlets in primefaces.", 
                            "fr": "Participez à la définition technique et au développement du portail de conseil Old Mutual qui, y compris le développement d'un thème pour la navigation, des portlets de contenu dans WebContent Management, des portlets de script dans Angular et des portlets de sécurité dans primefaces." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PORTAL, TEC_WCM, TEC_PORTLET, TEC_ANGULAR],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Modal Navegadores",
            "fecha": {"es": "Diciembre, 2017", "en": "December, 2017", "fr": "Décembre, 2017"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé el desarrollo de un portlet en Vaadin para IBM WebSphere Portal para Old Mutual, que identifica el navegador del usuario y permite la navegación de funcionalidades dependiendo el soporte del navegador para dichas funcionalidades.", 
                            "en": "I developed a portlet in Vaadin for IBM WebSphere Portal for Old Mutual, which identifies the user's browser and allows navigation of functionalities depending on the browser's support for these functionalities.", 
                            "fr": "J'ai développé un portlet dans Vaadin pour IBM WebSphere Portal for Old Mutual, qui identifie le navigateur de l'utilisateur et permet la navigation de fonctionnalités en fonction de la prise en charge par le navigateur de ces fonctionnalités." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_VAADIN,  TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Informes Dinámicos Pipeline",
            "fecha": {"es": "Agosto, 2017", "en": "August, 2017", "fr": "Août, 2017"},
            "duracionMeses": "4",
            "descripcion": {"es": "Realicé el diseño de la arquitectura del proyecto, y participé en el desarrollo del sistema de Informes de Pipeline para Old Mutual en Vaadin, el cual es un sistema que permite la configuración de informes dinámicos de ventas de la compañía.", 
                            "en": "I designed the project architecture, and participated in the development of the Pipeline Reports system for Old Mutual in Vaadin, which is a system that allows the configuration of dynamic sales reports of the company.", 
                            "fr": "J'ai conçu l'architecture du projet et participé au développement du système Pipeline Reports pour Old Mutual à Vaadin, un système qui permet de configurer des rapports de vente dynamiques de la société." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_VAADIN,  TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Arquitectura Portal",
            "fecha": {"es": "Junio, 2017", "en": "June, 2017", "fr": "Juin, 2017"},
            "duracionMeses": "2",
            "descripcion": {"es": "Realicé la definición de la arquitectura de un nuevo portal empresarial de Seguros Alfa y lideré al equipo de desarrollo en la migración de este a una plataforma más moderna y que permita su crecimiento tecnológico de acuerdo a sus necesidades de negocio.", 
                            "en": "I made the definition of the architecture of a new business portal of Seguros Alfa and led the development team in the migration of this to a more modern platform that allows their technological growth according to their business needs.", 
                            "fr": "J'ai défini l'architecture d'un nouveau portail d'entreprise de Seguros Alfa et dirigé l'équipe de développement dans la migration de celui-ci vers une plate-forme plus moderne qui permet leur croissance technologique en fonction des besoins de leur entreprise." },
            "cliente": CLI_SEGUROS_AFA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Llamado a Capital",
            "fecha": {"es": "Mayo, 2017", "en": "May, 2017", "fr": "Mai, 2017"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé el diseño técnico y lideré el equipo de desarrollo del proyecto Llamado Capital de Old Mutual, el cual ayuda con la administración y gestión del proceso para el recaudo de capital de los fondos de inversión.", 
                            "en": "I carried out the technical design and led the development team of the Capital Mutual Project of Old Mutual, which helps with the administration and management of the process for raising capital from investment funds.", 
                            "fr": "J'ai effectué la conception technique et dirigé l'équipe de développement du projet Capital Mutual de Old Mutual, qui aide à l'administration et à la gestion du processus de levée de fonds auprès de fonds d'investissement." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_VAADIN,  TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Simulador Pensional",
            "fecha": {"es": "Abril, 2017", "en": "April, 2017", "fr": "Avril, 2017"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé el diseño técnico y lideré el equipo de desarrollo del simulador de pensiones de Old Mutual, el cual era un requisito de ley y se debía ajustan al tiempo y requisitos puestos por la super financiera.", 
                            "en": "I made the technical design and led the development team of the Old Mutual pension simulator, which was a requirement of law and should be adjusted to the time and requirements set by the super financial.", 
                            "fr": "J'ai réalisé la conception technique et dirigé l'équipe de développement du simulateur de pension Old Mutual, une exigence légale et qui devrait être adaptée au temps et aux exigences fixés par le super financier." },
            "cliente": CLI_OLD_MUTUAL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_VAADIN, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Botón de Pagos Redeban",
            "fecha": {"es": "Marzo, 2017", "en": "March, 2017", "fr": "Mars, 2017"},
            "duracionMeses": "1",
            "descripcion": {"es": "Realicé el diseño de la arquitectura del proyecto del botón de pagos de Redeban, y lideré el equipo de desarrollo. El objetivo era construir plataforma sobre WebSphere Portal, donde los comercios diseñan su propio botón de pagos asociado a un de un producto, lo pueden incluir en sus páginas y generar estadísticas de sus ventas.", 
                            "en": "I designed the project architecture of the Redeban payment button project, and led the development team. The objective was to build a platform on WebSphere Portal, where merchants design their own payment button associated with one of a product, can include it in their pages and generate statistics on their sales.", 
                            "fr": "J'ai conçu l'architecture du projet de bouton de paiement Redeban et dirigé l'équipe de développement. L'objectif était de créer une plate-forme sur WebSphere Portal, où les marchands conçoivent leur propre bouton de paiement associé à l'un des produits, peuvent l'inclure dans leurs pages et générer des statistiques sur leurs ventes." },
            "cliente": CLI_REDEBAN,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_VAADIN,  TEC_PORTLET, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Asesoría Blanco de Castro",
            "fecha": {"es": "Febrero, 2017", "en": "February, 2017", "fr": "Février, 2017"},
            "duracionMeses": "1",
            "descripcion": {"es": "Fui asesor técnico y consultor de su área de tecnología para el crecimiento tecnológico de la compañía Blanco de Castro, en donde modernicé su infraestructura tecnológica de acuerdo a sus necesidades de negocio y actualicé su imagen web enfocado en el incremento de las ventas.", 
                            "en": "I was a technical advisor and consultant in its technology area for the technological growth of the Blanco de Castro company, where I modernized its technological infrastructure according to its business needs and updated its web image focused on increasing sales.", 
                            "fr": "J'ai été conseiller technique et consultant dans son domaine technologique pour la croissance technologique de la société Blanco de Castro, où j'ai modernisé son infrastructure technologique en fonction de ses besoins métier et mis à jour son image Web axée sur l'augmentation des ventes." },
            "cliente": CLI_BLANCO_CASTRO,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_WORDPRESS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Estratech",
            "fecha": {"es": "Noviembre, 2016", "en": "November, 2016", "fr": "Novembre, 2016"},
            "duracionMeses": "3",
            "descripcion": {"es": "Participe en la definición del producto Estratech el cual busca desarrollar estrategias de ventas para micro y pequeñas empresas apoyados de herramientas tecnológicas, de la mano de una consultoría personalizada para cada cliente putual.", 
                            "en": "Participate in the definition of the Estratech product which seeks to develop sales strategies for micro and small companies supported by technological tools, with the help of a personalized consultancy for each putual client.", 
                            "fr": "Participez à la définition du produit Estratech qui vise à développer des stratégies de vente pour les micro et petites entreprises s'appuyant sur des outils technologiques, à l'aide d'un conseil personnalisé pour chaque client potentiel." },
            "cliente": CLI_SOFTONE,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_ARQUITECTURA, TEC_WORDPRESS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Asesoría Corredor Segura",
            "fecha": {"es": "Septiembre, 2016", "en": "September, 2016", "fr": "Septembre, 2016"},
            "duracionMeses": "2",
            "descripcion": {"es": "Fui asesor técnico en la compañía Corredor Segura Abogados, en donde modernicé su sitio web y planteé un plan de crecimiento tecnológico para la compañía de acuerdo a las necesidades de la compañía y requerimientos de sus clientes.", 
                            "en": "I was a technical advisor at the Corredor Segura Abogados company, where I modernized its website and proposed a technological growth plan for the company according to the needs of the company and the requirements of its clients.", 
                            "fr": "J'étais conseiller technique chez Corredor Segura Abogados, où j'ai modernisé son site Web et proposé un plan de croissance technologique pour l'entreprise en fonction des besoins de l'entreprise et des besoins de ses clients." },
            "cliente": CLI_CORREDOR_SEGURA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_WORDPRESS],
            "pagina": "",
            "imagen": ""
        },
        
        {
            "titulo": "Plataforma e-learning",
            "fecha": {"es": "Marzo, 2015", "en": "March, 2015", "fr": "Mars, 2015"},
            "duracionMeses": "18",
            "descripcion": {"es": "Lideré el área de tecnología de la empresa Clazloop S.A.S. la cual es una solución de e-learning, que contempla una plataforma web y una plataforma móvil para su funcionamiento.", 
                            "en": "I led the technology area of Clazloop S.A.S. which is an e-learning solution, which includes a web platform and a mobile platform for its operation.", 
                            "fr": "J'ai dirigé le domaine technologique de Clazloop S.A.S. qui est une solution e-learning, qui comprend une plate-forme Web et une plate-forme mobile pour son fonctionnement."},
            "cliente": CLI_CLAZLOOP,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PRIMEFACES, TEC_MICROSERVICIOS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria problemas de latencia",
            "fecha": {"es": "Octubre, 2014", "en": "October, 2014", "fr": "Octobre, 2014"},
            "duracionMeses": "5",
            "descripcion": {"es": "Presté servicios de consultoría y solucioné problemas de latencia y performance de la aplicación Porfin utilizada en Colpatria, después de su migración de Oracle Form a plataforma Java sobre WebSphere Applicacion Server.", 
                            "en": "I provided consulting services and solved latency and performance problems of the Porfin application used in Colpatria, after its migration from Oracle Form to Java platform on WebSphere Application Server.", 
                            "fr": "J'ai fourni des services de conseil et résolu les problèmes de latence et de performances de l'application Porfin utilisée dans Colpatria, après sa migration d'Oracle Form vers la plate-forme Java sur WebSphere Application Server."},
            "cliente": CLI_COLPATRIA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Micrositios",
            "fecha": {"es": "Septiembre, 2014", "en": "September, 2014", "fr": "Septembre, 2014"},
            "duracionMeses": "1",
            "descripcion": {"es": "Diseñé y gestioné el proyecto micrositios para Davivienda, el cual consistió en desarrollar una funcionalidad sobre a IBM WebSphere Portal que soporte de manera dinámica la creación y configuración de sitios para que los aliados de Davivienda puedan ofrecer tus tarjetas de crédito sin la necesidad del desarrollo de todo un sitio para este objetivo.", 
                            "en": "I designed and managed the microsite project for Davivienda, which consisted of developing functionality on IBM WebSphere Portal that dynamically supports the creation and configuration of sites so that Davivienda's allies can offer your credit cards without the need to develop A whole site for this purpose.", 
                            "fr": "J'ai conçu et géré le projet de microsite pour Davivienda, qui consistait à développer sur IBM WebSphere Portal une fonctionnalité qui prend en charge de manière dynamique la création et la configuration de sites afin que les alliés de Davivienda puissent proposer vos cartes de crédit sans qu'il soit nécessaire de développer. Un site entier à cet effet."},
            "cliente": CLI_DAVIVIENDA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Saldos Consolidados",
            "fecha": {"es": "Agosto, 2014", "en": "August, 2014", "fr": "Août, 2014"},
            "duracionMeses": "1",
            "descripcion": {"es": "Diseñé, gestioné y participé en la ejecución del proyecto saldos consolidados para Colfondos S.A. el cual consistía en la elaboración de una solución para mostrar el consolidado de los saldos de portafolios y aportes para los usuarios empleadores del portal de Colfondos sobre la herramienta Liferay Portal utilizando el bus de servicios MULE.", 
                            "en": "I designed, managed and participated in the execution of the project consolidated balances for Colfondos S.A. which consisted in the elaboration of a solution to show the consolidation of portfolio balances and contributions for the Employer users of the Colfondos portal on the Liferay Portal tool using the MULE service bus.", 
                            "fr": "J'ai conçu, géré et participé à l'exécution des soldes consolidés du projet pour Colfondos S.A. qui consistait en l’élaboration d’une solution montrant la consolidation des soldes et contributions du portefeuille pour les utilisateurs employeurs du portail Colfondos sur l’outil de portail Liferay à l’aide du bus de service MULE."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_PORTLET, TEC_MULE],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo":  "TuImpuesto",
            "fecha": {"es": "Julio, 2014", "en": "July, 2014", "fr": "Juillet, 2014"},
            "duracionMeses": "44",
            "descripcion": {"es": "Realicé la puesta en producción de TuImpuesto.com, desde el nacimiento de la idea, plan de negocio, buscar inversión, desarrollo y maduración de la idea. Esta es una herramienta web para simplificar la forma de preparar impuestos, desde la persona natural que no conoce sobre temas contables ni financieros, hasta los contadores ofreciendo herramientas para mejorar su productividad.", 
                            "en": "I made the production of TuImpuesto.com, from the birth of the idea, business plan, search for investment, development and maturation of the idea. This is a web tool to simplify the way of preparing taxes, from the natural person who does not know about accounting or financial matters, to the accountants offering tools to improve their productivity.", 
                            "fr": "J'ai réalisé la production de TuImpuesto.com, dès la naissance de l'idée, du business plan, de la recherche d'investissement, du développement et de la maturation de l'idée. Il s’agit d’un outil Web destiné à simplifier la préparation des impôts, depuis la personne physique qui n’est pas informée en matière comptable ou financière jusqu’aux comptables offrant des outils pour améliorer leur productivité."},
            "cliente": CLI_PERSONAL,
            "empleador": EMP_PERSONAL,
            "tecnologia": [TEC_ANGULAR, TEC_MONGODB, TEC_MICROSERVICIOS],
            "pagina": "http://softone.com.co/",
            "imagen": ""
        },
        {
            "titulo": "Tienta virtual Servitel",
            "fecha": {"es": "Julio, 2014", "en": "July, 2014", "fr": "Juillet, 2014"},
            "duracionMeses": "1",
            "descripcion": {"es": "Diseñé y gestioné el proyecto para la creación de una nueva tienda virtual para Servitel S.A., por medio de la herramienta Prestashop, utilizando PayU Latam como medio para realizar los pagos e integración con teléfonos Avaya para realizar compras telefónicamente.", 
                            "en": "I designed and managed the project for the creation of a new virtual store for Servitel S.A., through the Prestashop tool, using PayU Latam as a means to make payments and integration with Avaya phones to make purchases over the phone.", 
                            "fr": "J'ai conçu et géré le projet de création d'un nouveau magasin virtuel pour Servitel S.A., à l'aide de l'outil Prestashop, utilisant PayU Latam comme moyen de paiement et d'intégration avec les téléphones Avaya pour effectuer des achats par téléphone."},
            "cliente": CLI_SERVITEL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PRESTASHOP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria problemas latencia",
            "fecha": {"es": "Junio, 2014", "en": "June, 2014", "fr": "Juin, 2014"},
            "duracionMeses": "1",
            "descripcion": {"es": "Presté servicios de consultoría y solucioné problemas de latencia y performance de la aplicación Porfin de AlfaGL utilizada en Colfondos, después de su migración de Oracle Form a plataforma Java sobre WebSphere Applicacion Server.", 
                            "en": "I provided consulting services and solved latency and performance problems of the AlfaGL Porfin application used in Colfondos, after its migration from Oracle Form to Java platform on WebSphere Application Server.", 
                            "fr": "J'ai fourni des services de conseil et résolu les problèmes de latence et de performances de l'application AlfaGL Porfin utilisée dans Colfondos, après sa migration d'Oracle Form vers la plate-forme Java sur WebSphere Application Server."},
            "cliente": CLI_ALFAGL,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria WebSphere Portal",
            "fecha": {"es": "Diciembre, 2013", "en": "December, 2013", "fr": "Décembre, 2013"},
            "duracionMeses": "6",
            "descripcion": {"es": "Participé en el diseño, presté servicios de consultoría y de soporte de la infraestructura de Experian Computec, plataforma de alta disponibilidad sobre  IBM WebSphere Portal Server para soportar la solución web de Datacredito para personas y empresas.", 
                            "en": "I participated in the design, I provided consulting and infrastructure support services for Experian Computec, a high availability platform on IBM WebSphere Portal Server to support the Datacredito web solution for individuals and companies.", 
                            "fr": "J'ai participé à la conception, fourni des services de conseil et de support d'infrastructure à Experian Computec, une plate-forme à haute disponibilité sur IBM WebSphere Portal Server destinée à prendre en charge la solution Web Datacredito pour les particuliers et les entreprises."},
            "cliente": CLI_COMPUTEC,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PORTAL, TEC_SOPORTE, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Autenticación Afiliados Portal",
            "fecha": {"es": "Febrero, 2013", "en": "February, 2013", "fr": "Février, 2013"},
            "duracionMeses": "10",
            "descripcion": {"es": "Definí el diseño y arquitectura para el desarrollo del proyecto de autenticación de los usuarios afiliados del Portal de Colfondos S.A., cambiando el repositorio LDAP configurado en el Portal WebSphere Portal por un repositorio externo utilizando el bus de servicios de MULE ESB.", 
                            "en": "I defined the design and architecture for the development of the authentication project of the affiliated users of the Portal de Colfondos S.A., changing the LDAP repository configured in the WebSphere Portal to an external repository using the MULE ESB service bus.", 
                            "fr": "J'ai défini la conception et l'architecture du développement du projet d'authentification des utilisateurs affiliés du Portal de Colfondos S.A., en remplaçant le référentiel LDAP configuré dans WebSphere Portal par un référentiel externe utilisant le bus de service MULE ESB."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PORTAL, TEC_JAVA, TEC_ARQUITECTURA, TEC_MULE],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Ley Antitramite",
            "fecha": {"es": "Diciembre, 2012", "en": "December, 2012", "fr": "Décembre, 2012"},
            "duracionMeses": "2",
            "descripcion": {"es": "Realicé el diseño y gestioné de la solución para cumplir con la reglamentación definida en la \"Ley Antitramite\", para una aplicación llamada Pasivos Pensionales de Colfondos S.A. actualizando el sistema con los datos suministrados por la registraduría sobre el fallecimiento y validación de supervivencia de cualquier persona natural.", 
                            "en": "I made the design and managed the solution to comply with the regulations defined in the \"Antitramite Law\", for an application called Pasivos Pensionales de Colfondos S.A. updating the system with the data provided by the registry about the death and survival validation of any natural person.", 
                            "fr": "J'ai conçu le projet et géré la solution conformément aux règles définies dans la \"loi antitramite\" pour une application appelée Pasivos Pensionales de Colfondos S.A. mettre à jour le système avec les données fournies par le registre sur la validation du décès et de la survie de toute personne physique."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PORTAL, TEC_JAVA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Migración visado firmas",
            "fecha": {"es": "Octubre, 2012", "en": "October, 2012", "fr": "Octobre, 2012"},
            "duracionMeses": "2",
            "descripcion": {"es": "Realicé el diseño e implementación de la solución para la migración de todas las imágenes de documentos de identificación de un sistema llamado Visado de firmas de Colfondos S.A. a otro sistema propio del cliente.", 
                            "en": "I made the design and implementation of the solution for the migration of all the images of identification documents of a system called Visa of signatures of Colfondos S.A. to another customer own system.", 
                            "fr": "J'ai fait la conception et la mise en œuvre de la solution pour la migration de toutes les images de documents d'identification d'un système appelé Visa des signatures de Colfondos S.A. à un autre système client."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Disponible",
            "fecha": {"es": "Agosto, 2012", "en": "August, 2012", "fr": "Août, 2012"},
            "duracionMeses": "2",
            "descripcion": {"es": "Dirigí y participé en la implementación de Disponible, desde el nacimiento de la idea, hasta la puesta en producción. Disponible es una aplicación para Android que ayuda a buscar estilistas en tiempo real y reservar sus servicios sin la necesidad de hacer filas o esperar a ser atentado.", 
                            "en": "I directed and participated in the implementation of Available, from the birth of the idea, to the start of production. Available is an Android application that helps you find stylists in real time and book your services without the need to line up or wait for an attack.", 
                            "fr": "J'ai dirigé et participé à la mise en œuvre de Available, de la naissance de l'idée au début de la production. Available est une application Android qui vous aide à trouver des stylistes en temps réel et à réserver vos services sans avoir à vous mettre en file d'attente ou à attendre une attaque."},
            "cliente": CLI_SOFTONE,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_ARQUITECTURA, TEC_ANDROID],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Portal Davivalores",
            "fecha": {"es": "Junio, 2012", "en": "June, 2012", "fr": "Juin, 2012"},
            "duracionMeses": "2",
            "descripcion": {"es": "Participé en el liderazgo, desarrollo y lanzamiento de la primera fase del portal Davivalores de Davivienda a producción, la cual constaba de la instalación del portal IBM WebSphere Portal, configuración, elaboración de temas y Portlets de contenido en IBM Web Content Management.", 
                            "en": "I participated in the leadership, development and launch of the first phase of the Davivalores Davivienda production portal, which consisted of the installation of the IBM WebSphere Portal, configuration, elaboration of themes and content Portlets in IBM Web Content Management.", 
                            "fr": "J'ai participé au leadership, au développement et au lancement de la première phase du portail de production Davivalores Davivienda, qui consistait en l'installation du portail IBM WebSphere, la configuration, l'élaboration de portlets de contenu et de thèmes dans IBM Web Content Management."},
            "cliente": CLI_DAVIVIENDA,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Consultoria en Gestión",
            "fecha": {"es": "Febrero, 2012", "en": "February, 2012", "fr": "Février, 2012"},
            "duracionMeses": "4",
            "descripcion": {"es": "Realicé la gestión desde un punto de vista técnico sobre el proyecto de migración del Portal Empleadores de IBM WebSphere Portal a Liferay Portal elaborado por un proveedor tercero en Colfondos S.A.", 
            "en": "I made the management from a technical point of view on the migration project of the IBM WebSphere Portal Employers Portal to Liferay Portal prepared by a third party provider in Colfondos S.A.", 
            "fr": "J'ai effectué la gestion d'un point de vue technique sur le projet de migration d'IBM WebSphere Portal Employers Portal vers Liferay Portal préparé par un fournisseur tiers à Colfondos S.A."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_PORTAL, TEC_CONSULTORIA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Migración Servidor Aplicaciones",
            "fecha": {"es": "Agosto, 2011", "en": "August, 2011", "fr": "Août, 2011"},
            "duracionMeses": "6",
            "descripcion": {"es": "Lideré el proyecto para la actualización del WebSphere Application Server de la versión 5.1 a la versión 7.0 junto con las aplicaciones instaladas en estos servidores (Conciliación de Títulos, Gestión Bancos, Infomercial, Motor de Servicios, Pasivos Pensionales, Planilla y SeguridadPlus) en los ambientes Desarrollo, UAT, Producción y COB de Colfondos S.A.", 
                            "en": "I led the project for the update of WebSphere Application Server from version 5.1 to version 7.0 together with the applications installed on these servers (Reconciliation of Securities, Bank Management, Infomercial, Service Engine, Pension Liabilities, Return and SecurityPlus) in the environments Desarrollo, UAT, Production and COB de Colfondos S.A.", 
                            "fr": "J'ai dirigé le projet de mise à jour de WebSphere Application Server de la version 5.1 à la version 7.0 avec les applications installées sur ces serveurs (rapprochement des valeurs mobilières, gestion de la banque, infomercial, moteur de service, passif de pension, retour et SecurityPlus) dans les environnements. Desarrollo, UAT, Production et COB de Colfondos S.A."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Independizar Servidor Aplicaciones",
            "fecha": {"es": "Febrero, 2011", "en": "February, 2011", "fr": "Février, 2011"},
            "duracionMeses": "6",
            "descripcion": {"es": "Lideré técnicamente el proyecto para independizar los servidores de Aplicaciones de la lógica de negocio que controla el intercambio de información con los portlets desplegados en el portal de COLFONDOS (IBM WebSphere Portal 6.0), en un Servidor de Aplicaciones (IBM WebSphere Application Server 7) diferente a la lógica de presentación de Colfondos S.A. Permitiendo un escalamiento vertical del framework de desarrollo.", 
                            "en": "I technically led the project to free the Applications servers from the business logic that controls the exchange of information with the portlets deployed in the COLFONDOS portal (IBM WebSphere Portal 6.0), on a different Application Server (IBM WebSphere Application Server 7) to the presentation logic of Colfondos SA Allowing a vertical scaling of the development framework.", 
                            "fr": "J'ai techniquement dirigé le projet visant à libérer les serveurs d'applications de la logique métier qui contrôle l'échange d'informations avec les portlets déployés dans le portail COLFONDOS (IBM WebSphere Portal 6.0), sur un autre serveur d'applications (IBM WebSphere Application Server 7). à la logique de présentation de Colfondos SA Permettre une mise à l'échelle verticale du cadre de développement."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Servicios web canales satélite",
            "fecha": {"es": "Enero, 2011", "en": "January, 2011", "fr": "Janvier, 2011"},
            "duracionMeses": "1",
            "descripcion": {"es": "Lideré el proyecto de diseño para la implementación de servicios para los canales de IVR y KIOSCOS de Colfondos S.A.. Que proveen información necesaria para los afiliados y asesores. Además de incluir funcionalidad común como envió de correo, autenticación, actualización de datos, entre otros.", 
                            "en": "I led the design project for the implementation of services for the IVR and KIOSCOS channels of Colfondos S.A .. That provide necessary information for affiliates and advisors. In addition to including common functionality such as sending mail, authentication, data update, among others.", 
                            "fr": "J'ai dirigé le projet de conception pour la mise en œuvre de services pour les canaux IVR et KIOSCOS de Colfondos S.A .., qui fournit les informations nécessaires aux affiliés et aux conseillers. En plus d'inclure des fonctionnalités communes telles que l'envoi de courrier, l'authentification, la mise à jour des données, entre autres."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "SGID, Sistema Gestión de Identidades",
            "fecha": {"es": "Agosto, 2010", "en": "August, 2010", "fr": "Août, 2010"},
            "duracionMeses": "5",
            "descripcion": {"es": "Lideré técnicamente el proyecto \"SGID, Sistema Gestión de Identidades\" de Computec S.A. el cual consiste en el análisis, diseño y construcción de una solución para el aprovisionamiento de usuarios, en donde se deben integrar de 5 repositorios internos del cliente. Utilizando IBM WebPhere Portal, Glasfish, Spring, Java Server faces, dando cumplimiento a reglamentaciones gubernamentales y ofreciendo un servicio ágil, seguro y eficaz.", 
                            "en": "I technically led the project \"SGID, Identity Management System\" of Computec S.A. which consists in the analysis, design and construction of a solution for the provisioning of users, where they must integrate 5 internal client repositories. Using IBM WebPhere Portal, Glasfish, Spring, Java Server faces, complying with government regulations and offering an agile, secure and efficient service.", 
                            "fr": "J'ai techniquement dirigé le projet \"SGID, Système de gestion de l'identité\" de Computec S.A. qui consiste en l'analyse, la conception et la construction d'une solution pour le provisioning des utilisateurs, où ils doivent intégrer 5 référentiels clients internes. En utilisant IBM WebPhere Portal, Glasfish, Spring, Java Server, respectez les réglementations gouvernementales et offrez un service agile, sécurisé et efficace."},
            "cliente": CLI_COMPUTEC,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_PORTLET, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Fork Friends",
            "fecha": {"es": "Febrero, 2010", "en": "February, 2010", "fr": "Février, 2010"},
            "duracionMeses": "6",
            "descripcion": {"es": "Dirigí y participé en la e implementación de la Plataforma Cloud de Fork Friends. Teniendo como misión, desarrollar toda la infraestructura de reservas, contenido, y cliente web (de cara a los restaurantes). Adicionalmente, estuve encargado del diseño y construcción del motor de pertinencia. Con este proyecto de emprendimiento participamos en Wayra Colombia en busca de inversión junto con más de 900 proyectos participantes, en donde estuvimos ubicados en los primeros 20 proyectos.", 
                            "en": "Directed and participated in the implementation of the Fork Friends Cloud Platform. Having as mission, to develop all the infrastructure of reservations, content, and web client (facing the restaurants). Additionally, I was in charge of the design and construction of the relevance engine. With this entrepreneurship project we participated in Wayra Colombia in search of investment along with more than 900 participating projects, where we were located in the first 20 projects.", 
                            "fr": "A dirigé et participé à la mise en œuvre de la plateforme Fork Friends Cloud. Ayant pour mission de développer toute l'infrastructure de réservation, de contenu et de client Web (en face des restaurants). De plus, j'étais en charge de la conception et de la construction du moteur de pertinence. Avec ce projet d’entrepreneuriat, nous avons participé à Wayra Colombia à la recherche d’investissements ainsi qu’à plus de 900 projets participants, où nous étions situés dans les 20 premiers projets."},
            "cliente": CLI_SOFTONE,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA, TEC_PRIMEFACES],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Soporte a Producción",
            "fecha": {"es": "Octubre, 2009", "en": "October, 2009", "fr": "Octobre, 2009"},
            "duracionMeses": "4",
            "descripcion": {"es": "Lideré el proceso de soporte a producción sobre la plataforma Web de la compañía Citi Colfondos, para nueve aplicaciones: Portal, Planilla, Pasivos, Gestión bancos, Conciliación títulos, Motor de servicios, Intranet, SGC e Infomercial. Usando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.", 
                            "en": "I led the production support process on the Citi Colfondos Web platform, for nine applications: Portal, Return, Liabilities, Bank management, Conciliation titles, Service Engine, Intranet, SGC and Infomercial. Using IBM Rational Application Developer as a development tool, WebSphere Application Server application servers - WebSphere Portal Server and Microsoft SQL-Server database.", 
                            "fr": "J'ai dirigé le processus d'assistance à la production sur la plate-forme Web Citi Colfondos, pour neuf applications: Portail, Retour, Responsabilités, Gestion de banque, Titres de conciliation, Service Engine, Intranet, SGC et Infomercial. Utilisation d'IBM Rational Application Developer en tant qu'outil de développement, serveurs d'applications WebSphere Application Server - base de données WebSphere Portal Server et Microsoft SQL-Server."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_SOPORTE, TEC_CONSULTORIA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "MCP, Prodeseg",
            "fecha": {"es": "Agosto, 2009", "en": "August, 2009", "fr": "Août, 2009"},
            "duracionMeses": "2",
            "descripcion": {"es": "Participé en el diseño de la arquitectura del proyecto llamado MCP para la empresa Prodeseg y también participé en su desarrollo, el proyecto consistía en realizar una aplicación para centralizar la información y administrar los elementos de seguridad industrial.", 
                            "en": "I participated in the design of the project architecture called MCP for the Prodeseg company and also participated in its development, the project consisted of making an application to centralize the information and manage the elements of industrial security.", 
                            "fr": "J'ai participé à la conception de l'architecture de projet appelée MCP pour la société Prodeseg et également à son développement. Le projet consistait à créer une application permettant de centraliser les informations et de gérer les éléments de la sécurité industrielle."},
            "cliente": CLI_PRODESEG,
            "empleador": EMP_SOFTONE,
            "tecnologia": [TEC_JAVA, TEC_ARQUITECTURA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Desarrollo pagarés",
            "fecha": {"es": "Agosto, 2008", "en": "August, 2008", "fr": "Août, 2008"},
            "duracionMeses": "12",
            "descripcion": {"es": "Participé en la elaboración de la arquitectura, diseño y desarrollo del proyecto Pagarés y títulos valor para Deceval, el cual tenía como propósito la digitalización y administración de los pagarés que custodia Deceval.", 
                            "en": "I participated in the elaboration of the architecture, design and development of the Promissory Notes project and securities for Deceval, which had as its purpose the digitalization and administration of the promissory notes that Deceval holds.", 
                            "fr": "J'ai participé à l'élaboration de l'architecture, de la conception et du développement du projet Promissory Notes et des garanties pour Deceval, qui avaient pour objectif la numérisation et l'administration des billets à ordre détenus par Deceval."},
            "cliente": CLI_DECEVAL,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_RICHFACES],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "GAP's - Nuevas funcionaliddes",
            "fecha": {"es": "Abril, 2008", "en": "April, 2008", "fr": "Avril, 2008"},
            "duracionMeses": "4",
            "descripcion": {"es": "Participación en el Proyecto GAP’s. Realizando el diseño y liderando el desarrollo de las nuevas funcionalidades de CitiColfondos que no estaban sobre la plataforma IBM WebSphere Portal. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.", 
                            "en": "Participation in the GAP’s Project. Designing and leading the development of the new features of CitiColfondos that were not on the IBM WebSphere Portal platform. Using IBM Rational Application Developer as a development tool, WebSphere Application Server application servers - WebSphere Portal Server and Microsoft SQL-Server database.", 
                            "fr": "Participation au projet GAP. Concevoir et diriger le développement des nouvelles fonctionnalités de CitiColfondos qui ne figuraient pas sur la plate-forme IBM WebSphere Portal. Utilisation d'IBM Rational Application Developer en tant qu'outil de développement, serveurs d'applications WebSphere Application Server - base de données WebSphere Portal Server et Microsoft SQL-Serve"},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_PORTLET, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Funcionalidades Gestión Bancos",
            "fecha": {"es": "Julio, 2007", "en": "July, 2007", "fr": "Juillet, 2007"},
            "duracionMeses": "9",
            "descripcion": {"es": "Realicé el diseño y lideré el desarrollo de la implementación de nuevos requerimientos para la aplicación Gestión Bancos de CitiColdondos. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.", 
                            "en": "I made the design and led the development of the implementation of new requirements for the CitiColdondos Bank Management application. Using IBM Rational Application Developer as a development tool, WebSphere Application Server application servers - WebSphere Portal Server and Microsoft SQL-Server database.", 
                            "fr": "J'ai réalisé la conception et dirigé l'élaboration de la mise en œuvre des nouvelles exigences pour l'application de gestion de la banque CitiColdondos. Utilisation d'IBM Rational Application Developer en tant qu'outil de développement, serveurs d'applications WebSphere Application Server - base de données WebSphere Portal Server et Microsoft SQL-Server"},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Catalogo de productos Baxter",
            "fecha": {"es": "Noviembre, 2006", "en": "November, 2006", "fr": "Novembre, 2006"},
            "duracionMeses": "7",
            "descripcion": {"es": "Realicé el desarrollo de nuevos requerimientos para el aplicativo Catálogo de productos de Laboratorios Baxter. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server y base de datos base de datos IBM DB2.", 
                            "en": "I made the development of new requirements for the Baxter Laboratories Product Catalog application. Using IBM Rational Application Developer as a development tool, WebSphere Application Server application servers and IBM DB2 database database.", 
                            "fr": "J'ai élaboré de nouvelles exigences pour l'application du catalogue de produits des laboratoires Baxter. Utilisation d’IBM Rational Application Developer en tant qu’outil de développement, de serveurs d’application WebSphere Application Server et de base de données IBM DB2."},
            "cliente": CLI_BAXTER,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_STRUTS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Reingeniería Portal Colfondos",
            "fecha": {"es": "Julio, 2006", "en": "July, 2006", "fr": "Juillet, 2006"},
            "duracionMeses": "4",
            "descripcion": {"es": "Participé en el diseño, desarrollo e implementación del proyecto Reingeniería Portal Colfondos el cual consistía en la migración de ocho aplicaciones Web hacia IBM WebSphere Portal. Utilizando IBM Rational Application Developer como herramienta de desarrollo, servidores de aplicaciones WebSphere Application Server - WebSphere Portal Server y base de datos Microsoft SQL-Server.", 
                            "en": "I participated in the design, development and implementation of the Reengineering Portal Colfondos project which consisted of the migration of eight Web applications to the IBM WebSphere Portal. Using IBM Rational Application Developer as a development tool, WebSphere Application Server application servers - WebSphere Portal Server and Microsoft SQL-Server database.", 
                            "fr": "J'ai participé à la conception, au développement et à la mise en œuvre du projet Colonfondos de Reengineering Portal, qui consistait en la migration de huit applications Web vers IBM WebSphere Portal. Utilisation d'IBM Rational Application Developer en tant qu'outil de développement, serveurs d'applications WebSphere Application Server - base de données WebSphere Portal Server et Microsoft SQL-Server."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_PORTAL, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Inventarios JAO",
            "fecha": {"es": "Febrero, 2006", "en": "February, 2006", "fr": "Février, 2006"},
            "duracionMeses": "5",
            "descripcion": {"es": "Realicé el diseño de la aplicación de inventarios para el Centro Médico JAO, y participé en su desarrollo e implementación. Utilizando como herramienta de desarrollo NetBeans, servidor APACHE, TOMCAT y base de datos MYSQL.", 
                            "en": "I made the design of the inventory application for the JAO Medical Center, and participated in its development and implementation. Using as NetBeans development tool, APACHE server, TOMCAT and MYSQL database.", 
                            "fr": "J'ai conçu l'application d'inventaire pour le centre médical JAO et participé à son développement et à sa mise en œuvre. Utilisation comme outil de développement NetBeans, serveur APACHE, base de données TOMCAT et MYSQL."},
            "cliente": CLI_JAO,
            "empleador": EMP_SOFTONE, //EMP_PERSONAL
            "tecnologia": [TEC_JAVA, TEC_STRUTS],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Desarrollo módulo cartera",
            "fecha": {"es": "Noviembre, 2005", "en": "November, 2005", "fr": "Novembre, 2005"},
            "duracionMeses": "3",
            "descripcion": {"es": "Participé en el desarrollo  del módulo de productos de la aplicación de cartera para el Banco de la República. Usé JDeveloper como herramienta de desarrollo, WebLogic como servidor de aplicaciones y base de datos Oracle.", 
                            "en": "I participated in the development of the product module of the portfolio application for the Banco de la República. I used JDeveloper as a development tool, WebLogic as an application server and Oracle database.", 
                            "fr": "J'ai participé au développement du module de produit de l'application de portefeuille pour la Banco de la República. J'ai utilisé JDeveloper comme outil de développement, WebLogic comme serveur d'applications et base de données Oracle."},
            "cliente": CLI_BANCO_REPUBLICA,
            "empleador": EMP_SOFTONE, // EMP_PERSONAL
            "tecnologia": [TEC_JAVA, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Customer Multifactor Authentication",
            "fecha": {"es": "Agosto, 2005", "en": "August, 2005", "fr": "Août, 2005"},
            "duracionMeses": "3",
            "descripcion": {"es": "Participé en el Proyecto Customer Multifactor Authentication. Realizé el diseño, desarrollo e implementación del sistema de autenticación a las zonas transaccionales del Portal de CitiColfondos para los usuarios afiliados y empleadores. Usé IBM Rational Application Developer como herramienta de desarrollo, servidor WebSphere Application Server y base de datos Microsoft SQL-Server.", 
                            "en": "I participated in the Customer Multifactor Authentication Project. I made the design, development and implementation of the authentication system to the transactional areas of the CitiColfondos Portal for affiliated users and employers. I used IBM Rational Application Developer as a development tool, WebSphere Application Server and Microsoft SQL-Server database.", 
                            "fr": "J'ai participé au projet d'authentification multifactorielle client. J'ai conçu, développé et mis en œuvre le système d'authentification dans les zones transactionnelles du portail CitiColfondos pour les utilisateurs et les employeurs affiliés. J'ai utilisé IBM Rational Application Developer comme outil de développement, WebSphere Application Server et la base de données Microsoft SQL-Server."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_RICHFACES],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Inventarios negativos y agotados",
            "fecha": {"es": "Junio, 2005", "en": "June, 2005", "fr": "Juin, 2005"},
            "duracionMeses": "2",
            "descripcion": {"es": "Participé en el desarrollo de aplicaciones Web, desarrollo  JSP’s y personalización de WorkFlow, para el manejo de los procesos de inventarios negativos y agotados de Carulla. Usé IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench - WebSphere MQ y base de datos IBM DB2.", 
                            "en": "I participated in the development of Web applications, JSP’s development and WorkFlow customization, for the management of negative and depleted inventory processes at Carulla. I used IBM WebSphere Studio Application Developer as a development tool, WebSphere Workflow applications, WebSphere WorkBench - WebSphere MQ and IBM DB2 database.", 
                            "fr": "J’ai participé au développement d’applications Web, au développement de JSP et à la personnalisation de WorkFlow pour la gestion des processus d’inventaire négatifs et épuisés chez Carulla. J'ai utilisé IBM WebSphere Studio Application Developer comme outil de développement, les applications WebSphere Workflow, WebSphere WorkBench - WebSphere MQ et la base de données IBM DB2."},
            "cliente": CLI_CARULLA,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Procesos Baxter",
            "fecha": {"es": "Mayo, 2005", "en": "May, 2005", "fr": "Mai, 2005"},
            "duracionMeses": "1",
            "descripcion": {"es": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de Laboratorios Baxter. Usé IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench - WebSphere MQ y base de datos IBM DB2.", 
                            "en": "I participated in the development of JSP’s and WorkFlow customization, for the management of Baxter Laboratories processes. I used IBM WebSphere Studio Application Developer as a development tool, WebSphere Workflow applications, WebSphere WorkBench - WebSphere MQ and IBM DB2 database.", 
                            "fr": "J’ai participé au développement de la personnalisation de JSP et de WorkFlow pour la gestion des processus de Baxter Laboratories. J'ai utilisé IBM WebSphere Studio Application Developer comme outil de développement, les applications WebSphere Workflow, WebSphere WorkBench - WebSphere MQ et la base de données IBM DB2."},
            "cliente": CLI_BAXTER,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización Procesos",
            "fecha": {"es": "Abril, 2005", "en": "April, 2005", "fr": "Avril, 2005"},
            "duracionMeses": "1",
            "descripcion": {"es": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de Gas Natural. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y base de datos IBM DB2.", 
                            "en": "I participated in the development of JSP’s and WorkFlow customization, for the management of Natural Gas processes. Using IBM WebSphere Studio Application Developer as a development tool, WebSphere Workflow, WebSphere WorkBench, WebSphere MQ and IBM DB2 database applications.", 
                            "fr": "J’ai participé au développement de la personnalisation de JSP et de WorkFlow pour la gestion des processus liés au gaz naturel. Utilisation d'IBM WebSphere Studio Application Developer comme outil de développement, applications de base de données WebSphere Workflow, WebSphere WorkBench, WebSphere MQ et IBM DB2."},
            "cliente": CLI_GASNATURAL,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización Procesos Bussie",
            "fecha": {"es": "Marzo, 2005", "en": "March, 2005", "fr": "Mars, 2005"},
            "duracionMeses": "1",
            "descripcion": {"es": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de Laboratorios Bussie. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y base de datos IBM DB2.", 
                            "en": "I participated in the development of JSP’s and customization of WorkFlow, for the management of Bussie Laboratories processes. Using IBM WebSphere Studio Application Developer as a development tool, WebSphere Workflow, WebSphere WorkBench, WebSphere MQ and IBM DB2 database applications.", 
                            "fr": "J'ai participé au développement de JSP et à la personnalisation de WorkFlow pour la gestion des processus de Bussie Laboratories. Utilisation d'IBM WebSphere Studio Application Developer comme outil de développement, applications de base de données WebSphere Workflow, WebSphere WorkBench, WebSphere MQ et IBM DB2."},
            "cliente": CLI_BUSSIE,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Paga cuentas Visa",
            "fecha": {"es": "Enero, 2005", "en": "January, 2005", "fr": "Janvier, 2005"},
            "duracionMeses": "2",
            "descripcion": {"es": "Participé en el desarrollo del Portal de Visa para el proyecto Pagacuentas Visa, desarrollando aplicaciones Portlet’s, para pagar cuentas por Internet. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, los servidores de aplicaciones WebSphere Application Server y WebSphere Portal Server y base de datos IBM DB2.", 
                            "en": "I participated in the development of the Visa Portal for the Pagacuentas Visa project, developing Portlet’s applications, to pay bills online. Using IBM WebSphere Studio Application Developer as a development tool, the WebSphere Application Server and WebSphere Portal Server application servers and IBM DB2 database.", 
                            "fr": "J’ai participé au développement du portail Visa pour le projet de visa Pagacuentas, en développant les applications de Portlet, pour payer les factures en ligne. Utilisation d'IBM WebSphere Studio Application Developer comme outil de développement, des serveurs d'applications WebSphere Application Server et WebSphere Portal Server et de la base de données IBM DB2."},
            "cliente": CLI_VISA,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_PORTLET],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización workflow",
            "fecha": {"es": "Octubre, 2004", "en": "October, 2004", "fr": "Octobre, 2004"},
            "duracionMeses": "3",
            "descripcion": {"es": "Participé en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos del Banco de Crédito. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y la base de datos IBM DB2.", 
                            "en": "I participated in the development of JSP’s and customization of WorkFlow, for the management of Banco de Crédito processes. Using IBM WebSphere Studio Application Developer as a development tool, the WebSphere Workflow, WebSphere WorkBench, WebSphere MQ and the IBM DB2 database applications.", 
                            "fr": "J’ai participé au développement de JSP et à la personnalisation de WorkFlow pour la gestion des processus Banco de Crédito. Utilisation d'IBM WebSphere Studio Application Developer comme outil de développement, les applications de base de données WebSphere Workflow, WebSphere WorkBench, WebSphere MQ et IBM DB2."},
            "cliente": CLI_BANCO_CREDITO,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización workflow",
            "fecha": {"es": "Septiembre, 2004", "en": "September, 2004", "fr": "Septembre, 2004"},
            "duracionMeses": "1",
            "descripcion": {"es": "Participé  en el desarrollo de JSP’s y personalización de WorkFlow, para el manejo de procesos de la Fiscalía. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, las aplicaciones WebSphere Workflow, WebSphere WorkBench, WebSphere MQ y  base de datos IBM DB2.", 
                            "en": "I participated in the development of JSP’s and customization of WorkFlow, for the process management of the Office. Using IBM WebSphere Studio Application Developer as a development tool, WebSphere Workflow, WebSphere WorkBench, WebSphere MQ and IBM DB2 database applications.", 
                            "fr": "J’ai participé au développement de JSP et à la personnalisation de WorkFlow pour la gestion des processus du Bureau. Utilisation d'IBM WebSphere Studio Application Developer comme outil de développement, applications de base de données WebSphere Workflow, WebSphere WorkBench, WebSphere MQ et IBM DB2."},
            "cliente": CLI_FISCALIA,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_WORKFLOW, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Aplicación Seguridad",
            "fecha": {"es": "Julio, 2004", "en": "July, 2004", "fr": "Juillet, 2004"},
            "duracionMeses": "2",
            "descripcion": {"es": "Participé en el desarrollo de la aplicación de Seguridad de Colfondos y del desarrollo de aplicaciones internas como lo son Futuronet, para el manejo de pensiones y cesantías. Usé IBM WebSphere Studio Application Developer como herramienta de desarrollo, el servidor WebSphere Application Server y la base de datos IBM DB2.", 
                            "en": "I participated in the development of the Colfondos Security application and the development of internal applications such as Futuronet, for the management of pensions and severance pay. I used IBM WebSphere Studio Application Developer as a development tool, the WebSphere Application Server and the IBM DB2 database.", 
                            "fr": "J'ai participé au développement de l'application Colfondos Security et au développement d'applications internes telles que Futuronet, pour la gestion des retraites et des indemnités de licenciement. J'ai utilisé IBM WebSphere Studio Application Developer comme outil de développement, WebSphere Application Server et la base de données IBM DB2."},
            "cliente": CLI_COLFONDOS,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_JSP],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Personalización Portal",
            "fecha": {"es": "Marzo, 2004", "en": "March, 2004", "fr": "Mars, 2004"},
            "duracionMeses": "4",
            "descripcion": {"es": "Participé en el desarrollo de la personalización del  Portal para el DANE. Utilizando IBM WebSphere Studio Application Developer como herramienta de desarrollo, los servidores de aplicaciones WebSphere Application Server y WebSphere Portal Server y base de datos IBM DB2. De manera simultánea me desempeñé como formador de administración de Portal.", 
                            "en": "I participated in the development of the personalization of the Portal for DANE. Using IBM WebSphere Studio Application Developer as a development tool, the WebSphere Application Server and WebSphere Portal Server application servers and IBM DB2 database. Simultaneously I worked as a Portal administration trainer.", 
                            "fr": "J'ai participé au développement de la personnalisation du portail pour DANE. Utilisation d'IBM WebSphere Studio Application Developer comme outil de développement, des serveurs d'applications WebSphere Application Server et WebSphere Portal Server et de la base de données IBM DB2. En même temps, j'ai travaillé comme formateur en administration de portail."},
            "cliente": CLI_DANE,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_JAVA, TEC_PORTAL],
            "pagina": "",
            "imagen": ""
        },
        {
            "titulo": "Administración Red",
            "fecha": {"es": "Diciembre, 2003", "en": "December, 2003", "fr": "Décembre, 2003"},
            "duracionMeses": "3",
            "descripcion": {"es": "Trabajé en la administración de la red y administración el software Aranda para mantenimiento del antivirus McAfee para los usuarios internos de Seguros Liberty en Colombia.", 
                            "en": "I worked in the network administration and administration of the Aranda software for McAfee antivirus maintenance for the internal users of Liberty Insurance in Colombia.", 
                            "fr": "J'ai travaillé à l'administration réseau et à l'administration du logiciel Aranda pour la maintenance antivirus de McAfee pour les utilisateurs internes de Liberty Insurance en Colombie."},
            "cliente": CLI_LIBERTY,
            "empleador": EMP_ASSIST,
            "tecnologia": [TEC_SOPORTE],
            "pagina": "",
            "imagen": ""
        }
    ];

    return portafolios;

}

function getClientes(portafolios){
    
    try{
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
    }catch(error){
        console.log('Error en getClientes: ', error);        
    }
    
}

function getPersonales(portafolios){

    try{
        
        let language = getLanguage();
        let empleadorAux = [];

        let container = document.getElementById("personales-container");
        container.innerHTML = '';

        for(let portafolio of portafolios){
            
            let empleadorLg = portafolio.empleador[language] == null ? portafolio.empleador : portafolio.empleador[language];
            
            if(empleadorAux.indexOf(empleadorLg) == -1){
                empleadorAux.push(empleadorLg);

                let num = portafolios.filter(p => {
                    const clienteInternoLg = p.empleador[language] == null ? p.empleador : p.empleador[language];
                    if(clienteInternoLg === empleadorLg){
                        return true;
                    }else{
                        return false;
                    }
                }).length; 

                if(num > 0){
                    let li = document.createElement("li");
                    li.innerHTML = `<a href='' onclick='return filtroXEmpleador("${empleadorLg}")'>${empleadorLg}</a> <span class='badge'>${num}</span>`;
                    container.appendChild(li);
                }
                                
            }
            
            
        }
        
    }catch(error){
        console.log('Error en getPersonales: ', error);        
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
        console.log('Error en getTecnologias: ', error);
    }

}

function getFiltrosInicio(portafolios){

    try{

        let language = getLanguage();
        let tecnologiasAux = [];
        
        let container = document.getElementById("filtrosInicio-container");
        container.innerHTML = '';

        let filtrosHtml = `<h3 class="filtros-activos filtrosInicio">`;

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
        console.log('Error en filtros iniciales: ', error);
    }
    
}

function getTrabajos(portafolios, filtro){

    try{

        let language = getLanguage();
        let filtros = '';    
        if(filtro){
            filtros = `<div class="col-sm-8 col-xs-8">
                            <h3 class="filtros-activos">
                                <span class="filtro">${filtro}<span class="quitar ion-ios-close-outline" onclick='return filtroXTecnologia("")'></span> </span> 
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
            const empleadorLg = portafolio.empleador[language] == null ? portafolio.empleador : portafolio.empleador[language];
            const descripcionLg = portafolio.descripcion[language] == null ? portafolio.descripcion : portafolio.descripcion[language];
            const fecha = portafolio.fecha[language] == null ? portafolio.fecha : portafolio.fecha[language];
            let duracion = portafolio.duracionMeses == null ? "" : portafolio.duracionMeses;

            if(!duracion){
                if(language == "en"){
                    duracion = "At the moment";
                }else if(language == "fr"){
                    duracion = "Actuellement";
                }else{
                    duracion = "Actualmente";
                }
            }else if(duracion == "1"){
                if(language == "en"){
                    duracion += " month";
                }else if(language == "fr"){
                    duracion += " mois";
                }else{
                    duracion += " mes";
                }
            }else{
                if(language == "en"){
                    duracion += " months";
                }else if(language == "fr"){
                    duracion += " mois";
                }else{
                    duracion += " meses";
                }
            }
           
            let clienteLabel = "Cliente: "
            if(language == "en"){
                clienteLabel = "Client: ";
            }else if(language == "fr"){
                clienteLabel = " Client: ";
            }

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
                if(VERSION_COPY_DETAIL){
                    tecText = tecText + ` ${tecLg}, `;
                }else{
                    tecText = tecText + ` <span><a href='' onclick='return filtroXTecnologia("${tecLg}")'>${tecLg}</a> |</span>`;
                }
            }

            if(VERSION_COPY_DETAIL){
                tecText = tecText.substring(0, tecText.length - 2);
            }
            
            if(indexRow%2 == 0){
                div = div + `<div class="row">`;
            }

            if(VERSION_COPY_DETAIL){
                div = div + `<div class="col-sm-6 col-xs-12">
                            <figure class="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                                <figcaption>
                                    <div><b>${LABEL_CAMPOS.Proyecto[language]}</b> ${tituloLg}</div>
                                    <div><b>${LABEL_CAMPOS.Empresa[language]}</b> ${empleadorLg}</div>
                                    <div><b>${LABEL_CAMPOS.Cliente[language]}</b> ${clienteLg}</div>
                                    <div><b>${LABEL_CAMPOS.Descripcion[language]}</b> ${descripcionLg}</div>
                                    <div><b>${LABEL_CAMPOS.Tecnologias[language]}</b> ${tecText}</div>
                                    <div><b>${LABEL_CAMPOS.Fecha[language]}</b> ${fecha}</div>
                                    <div><b>${LABEL_CAMPOS.Duracion[language]}</b> ${duracion}</div>
                                    <br/>
                                </figcaption>
                            </figure>
                        </div>`;
            }else{
                div = div + `<div class="col-sm-6 col-xs-12">
                        <figure class="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                            <figcaption>
                                ${titulo}
                                <div class="blog-meta meta-portafolio">
                                    <span>${clienteLabel}<a href='' onclick='return filtroXCliente("${clienteLg}")'>${clienteLg}</a></span>
                                </div>
                                <div class="blog-meta meta-portafolio">
                                    <span>${fecha} (${duracion})</span>
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
            }

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
        console.log('Error en getTrabajos: ', error);
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
        console.log('Error en filtroXCliente: ', error);
    }

    return false;
}

function filtroXEmpleador(empleador){

    try{

        let language = getLanguage();
        let portafolios = getData();
        let portafoliosFiltrado = portafolios.filter(p => {
            const empleadorLg = p.empleador[language] == null ? p.empleador : p.empleador[language];
            if(empleadorLg === empleador){
                return true;
            }else{
                return false;
            }
        });

        const EMPLEADOR_LG = FILTRO_EMPLEADOR[language] == null ? FILTRO_EMPLEADOR : FILTRO_EMPLEADOR[language];

        let filtro = EMPLEADOR_LG + empleador;

        getTrabajos(portafoliosFiltrado, filtro);

        getClientes(portafolios);
        getTecnologias(portafolios);
        getPersonales(portafolios);
        getFiltrosInicio(portafolios);

    }catch(error){
        console.log('Error en filtroXCliente: ', error);
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
        console.log('Error en filtroXTecnologia: ', error);
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
        console.log('Error en getLanguage: ', error);
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
        console.log('Version texto: VERSION_COPY_DETAIL=true;');
        console.log('Luego click en cualquier filtro.');
    }catch(error){
        console.log('Error en onLoad: ', error);
    }
};