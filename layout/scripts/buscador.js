$(document).ready(function(){
    
    
    const data = [
        {
            texto: "Tratamiento de aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-aguas-residuales"
        },
        {
            texto: "Plantas de tratamiento de aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-aguas-residuales"
        },
        {
            texto: "Plantas de tratamiento de aguas Residuales Domesticas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Plantas de tratamiento de aguas Residuales Industriales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tratamiento-de-aguas-residuales-industriales"
        },
        {
            texto: "planta de tratamiento de agua Biobox",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-de-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Sistema Daf",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistema-de-flotacion-por-aire-disuelto-daf"
        },
        {
            texto: "Cribas y Rejas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Decantadores",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantadores-de-aguas-residuales"
        },
        {
            texto: "Decantadores de agua",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantadores-de-aguas-residuales"
        },
        {
            texto: "Decantadores de aguas residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantadores-de-aguas-residuales"
        },
        {
            texto: "Clarificador de agua",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantadores-de-aguas-residuales"
        },
        {
            texto: "Clarificadores de aguas residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantadores-de-aguas-residuales"
        },
        {
            texto: "Clarificador de agua residual",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantadores-de-aguas-residuales"
        },
        {
            texto: "Plantas de tratamiento de aguas residuales domesticas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Plantas de tratamiento de aguas residuales comerciales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Plantas para tratamiento de aguas residuales comerciales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Planta de tratamiento de agua residual comercial",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Planta para tratamiento de agua residual comercial",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Tratamiento de lodos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tratamiento-de-lodos"
        },
        {
            texto: "Tratado de Lodos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tratamiento-de-lodos"
        },
        {
            texto: "Lavado de llantas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistemas-para-lavado-de-ruedas-y-superficie-de-vehiculos"
        },
        {
            texto: "Sistema de Lavado de llantas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistemas-para-lavado-de-ruedas-y-superficie-de-vehiculos"
        },
        {
            texto: "Sistema Para Lavado de llantas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistemas-para-lavado-de-ruedas-y-superficie-de-vehiculos"
        },
        {
            texto: "Sistema Para Lavado de Ruedas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistemas-para-lavado-de-ruedas-y-superficie-de-vehiculos"
        },
        {
            texto: "Sistema de Lavado de Ruedas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistemas-para-lavado-de-ruedas-y-superficie-de-vehiculos"
        },
        {
            texto: "Filtros",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtros de Agua",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtros de Arena",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtros de Silice",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtros de Antracita",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtros Multimedia",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtros Industriales",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Reja circular",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reja-de-gruesos-semiautomatica"
        },
        {
            texto: "Estaciones de bombeo",
            pagina: "https://www.nyfdecolombia.com/tanques/estaciones-de-bombeo"
        },
        {
            texto: "Tratamiento de aguas residuales industriales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tratamiento-de-aguas-residuales-industriales"
        },
        {
            texto: "Tornillo Para Prensado de Lodos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-para-prensado-de-lodos"
        },
        {
            texto: "Tornillo Para Lodos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-para-prensado-de-lodos"
        },
        {
            texto: "Tornillo de Lodos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-para-prensado-de-lodos"
        },
        {
            texto: "Oxidación Avanzada",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/oxidacion-quimica-y-avanzada-para-aguas-residuales-industriales"
        },
        {
            texto: "Desarenador Ciclónico",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desarenador-ciclonico-para-aguas-residuales"
        },
        {
            texto: "Decantador de Placa Inclinada",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-floculador-de-placa-inclinada"
        },
        {
            texto: "Planta de Tratamiento Compacta SBR",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistema-de-tratamiento-de-aguas-residuales-sbr"
        },
        {
            texto: "Planta de Tratamiento Compacta Mbbr",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reactor-biologico-mbbr"
        },
        {
            texto: "Acuabox - Planta Compacta de Tratamiento Fisico Quimica",
            pagina: "https://www.nyfdecolombia.com/plantas/unidad-para-tratamiento-de-aguas-residuales-complementaria"
        },
        {
            texto: "Poa",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/oxidacion-quimica-y-avanzada-para-aguas-residuales-industriales"
        },
        {
            texto: "Pretratamiento de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Tamiz Estatico",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-estatico"
        },
        {
            texto: "Tamices Estaticos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-estatico"
        },
        {
            texto: "Criba Estatica",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-estatico"
        },
        {
            texto: "Cribas Estaticas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-estatico"
        },
        {
            texto: "Tamiz Estatico con Tornillo Prensa",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-autolimpiante-por-vibracion"
        },
        {
            texto: "Criba Estatica con Tornillo Prensa",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-autolimpiante-por-vibracion"
        },
        {
            texto: "Tamices Estaticos con Tornillo Prensa",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-autolimpiante-por-vibracion"
        },
        {
            texto: "Clearbox",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-para-aguas-residuales-contenerizado"
        },
        {
            texto: "Decantador contenerizado",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-para-aguas-residuales-contenerizado"
        },
        {
            texto: "Clarificador de contaminantes especificos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-para-aguas-residuales-contenerizado"
        },
        {
            texto: "Planta de contaminantes especificos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-para-aguas-residuales-contenerizado"
        },
        {
            texto: "Planta de Remocion de Contaminantes Aguas Residuales de Mineria y Petroleo",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-para-aguas-residuales-contenerizado"
        },
        {
            texto: "Separadores de Hidrocarburos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/separadores-de-hidrocarburos"
        },
        {
            texto: "Separador de Hidrocarburos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/separadores-de-hidrocarburos"
        },
        {
            texto: "Hidrocarburos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/separadores-de-hidrocarburos"
        },
        {
            texto: "Decantador Clarificador",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-para-aguas-residuales-contenerizado"
        },
        {
            texto: "Sistema de Flotacion por Aire Disuelto Daf",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistema-de-flotacion-por-aire-disuelto-daf"
        },
        {
            texto: "Daf",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistema-de-flotacion-por-aire-disuelto-daf"
        },
        {
            texto: "Sistemas Daf",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistema-de-flotacion-por-aire-disuelto-daf"
        },
        {
            texto: "Sistemas de Flotación",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistema-de-flotacion-por-aire-disuelto-daf"
        },
        {
            texto: "Sistema de Flotacíon Daf por Aire Inducido",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistema-de-flotacion-por-aire-disuelto-daf"
        },
        {
            texto: "Sistema de Flotacíon Daf por Aire Inducido",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistema-de-flotacion-por-aire-disuelto-daf"
        },
        {
            texto: "Decantador de Cono Profundo",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-cono-profundo"
        },
        {
            texto: "Clarificador de Cono Profundo",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-cono-profundo"
        },
        {
            texto: "Decantador Lamelar",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-floculador-de-placa-inclinada"
        },
        {
            texto: "Sedimentador de Placa Inclinada",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-floculador-de-placa-inclinada"
        },
        {
            texto: "Mezclador Estatico",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/mezclador-estatico"
        },
        {
            texto: "Mezcladores Estaticos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/mezclador-estatico"
        },
        {
            texto: "Dosificacion Quimica",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/estacion-de-dosificacion-quimica"
        },
        {
            texto: "Estacion de Dosificacion Quimica",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/estacion-de-dosificacion-quimica"
        },
        {
            texto: "Sistema de Dosificacion y Mezcla",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/estacion-de-dosificacion-quimica"
        },
        {
            texto: "Dosificacion de Quimicos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/estacion-de-dosificacion-quimica"
        },
        {
            texto: "Dilusion y Mezcla de Quimicos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/estacion-de-dosificacion-quimica"
        },
        {
            texto: "Tamiz Rotativo",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-rotativo"
        },
        {
            texto: "Tamiz Rotativo Autolimpiante",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-rotativo"
        },
        {
            texto: "Criba Rotativa",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-rotativo"
        },
        {
            texto: "Criba Rotativa Autolimpiante",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-rotativo"
        },
        {
            texto: "Tamiz Tornillo",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-tornillo"
        },
        {
            texto: "Tornillo Tamiz",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-tornillo"
        },
        {
            texto: "Reja Elevadora",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-reja-elevadora-de-aguas-residuales"
        },
        {
            texto: "Tamiz Reja Elevadora",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-reja-elevadora-de-aguas-residuales"
        },
        {
            texto: "Reja Circular",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reja-de-gruesos-semiautomatica"
        },
        {
            texto: "Reja Automatica Circular",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reja-de-gruesos-semiautomatica"
        },
        {
            texto: "Reja Circular de Canal",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reja-de-gruesos-semiautomatica"
        },
        {
            texto: "Cesta de Cribado",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/cesta-de-recogida-de-gruesos"
        },
        {
            texto: "Cesta de Solidos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/cesta-de-recogida-de-gruesos"
        },
        {
            texto: "Cesta de Gruesos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/cesta-de-recogida-de-gruesos"
        },
        {
            texto: "Cesta Recogida de Gruesos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/cesta-de-recogida-de-gruesos"
        },
        {
            texto: "Cesta de Pretratamiento",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/cesta-de-recogida-de-gruesos"
        },
        {
            texto: "Reja Manual",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reja-manual"
        },
        {
            texto: "Reja Manual de Gruesos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reja-manual"
        },
        {
            texto: "Reja de Pretratamiento de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reja-manual"
        },
        {
            texto: "Canal Compacto de Cribado",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/canal-compacto-de-cribado"
        },
        {
            texto: "Equipo Compacto de Cribado",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/canal-compacto-de-cribado"
        },
        {
            texto: "Canal de Pretratamiento de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/canal-compacto-de-cribado"
        },
        {
            texto: "Tornillo Transportador",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-transportador-helicoidal"
        },
        {
            texto: "Tornillo Transportador Helicoidal",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-transportador-helicoidal"
        },
        {
            texto: "Tornillo Transportador de Solidos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-transportador-helicoidal"
        },
        {
            texto: "Estaciones de Bombeo",
            pagina: "https://www.nyfdecolombia.com/tanques/estaciones-de-bombeo"
        },
        {
            texto: "Estacion de Bombeo",
            pagina: "https://www.nyfdecolombia.com/tanques/estaciones-de-bombeo"
        },
        {
            texto: "Estacion de Bombeo en Fibra de Vidrio",
            pagina: "https://www.nyfdecolombia.com/tanques/estaciones-de-bombeo"
        },
        {
            texto: "Pozo de Bombeo",
            pagina: "https://www.nyfdecolombia.com/tanques/estaciones-de-bombeo"
        },
        {
            texto: "Pozos de Bombeo de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/tanques/estaciones-de-bombeo"
        },
        {
            texto: "Sistemas de Bombeo",
            pagina: "https://www.nyfdecolombia.com/tanques/estaciones-de-bombeo"
        },
        {
            texto: "Equipos de Tratamiento de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Equipos de Pretratamiento de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Sistemas de Tratamiento de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Equipos Para Tratamiento de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Equipos Para Pretratamiento de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Sistemas Para Tratamiento de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Planta Compacta de Tratamiento Terciario",
            pagina: "https://www.nyfdecolombia.com/plantas/unidad-para-tratamiento-de-aguas-residuales-complementaria"
        },
        {
            texto: "Planta de Perfeccionamiento Final",
            pagina: "https://www.nyfdecolombia.com/plantas/unidad-para-tratamiento-de-aguas-residuales-complementaria"
        },
        {
            texto: "Planta de Tratamiento Terciario",
            pagina: "https://www.nyfdecolombia.com/plantas/unidad-para-tratamiento-de-aguas-residuales-complementaria"
        },
        {
            texto: "Ptar Acuabox",
            pagina: "https://www.nyfdecolombia.com/plantas/unidad-para-tratamiento-de-aguas-residuales-complementaria"
        },
        {
            texto: "Equipos de Cribado",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Equipos de Tamizado",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Sistemas de Cribado",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Tamiz tornillo de estacion de bombeo",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-tornillo-de-estacion-de-bombeo"
        },
        {
            texto: "Tamiz tornillo para estaciones de bombeo",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-tornillo-de-estacion-de-bombeo"
        },
        {
            texto: "Tornillo de Escurrido",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-de-escurrido"
        },
        {
            texto: "Tornillos de Escurrido",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-de-escurrido"
        },
        {
            texto: "Tornillo de Aliviadero",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-de-aliviadero"
        },
        {
            texto: "Tornillos de Aliviadero",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-de-aliviadero"
        },
        {
            texto: "Tornillo de Arquimedes",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-de-arquimedes"
        },
        {
            texto: "Tornillo de Arquimedes Arrastre de Solidos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tornillo-de-arquimedes"
        },
        {
            texto: "Filtros de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtros de Agua Potable",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtros de Cascara de Nuez",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Sistemas de Filtracion",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtros de Antracita",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtro de Banda de Presion",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/filtro-de-banda-de-presion"
        },
        {
            texto: "Filtro de Banda a Presion",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/filtro-de-banda-de-presion"
        },
        {
            texto: "Separador de Solidos y Liquidos - Filtro a Presion",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/filtro-de-banda-de-presion"
        },
        {
            texto: "Filtro de Banda de Vacio",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/filtro-de-banda-de-vacio"
        },
        {
            texto: "Filtro de Banda a Vacio",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/filtro-de-banda-de-vacio"
        },
        {
            texto: "Separador de Solidos y Liquidos - Filtro a Vacio",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/filtro-de-banda-de-vacio"
        },
        {
            texto: "Clarificador de Placa Inclinada",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantador-floculador-de-placa-inclinada"
        },
        {
            texto: "Sistema de Secado de Lodos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/secados-de-lodos"
        },
        {
            texto: "Sacos de Lodos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/secados-de-lodos"
        },
        {
            texto: "Escurrido de Lodos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/secados-de-lodos"
        },
        {
            texto: "Desarenador Ciclonico",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desarenador-ciclonico-para-aguas-residuales"
        },
        {
            texto: "Separador Ciclonico",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desarenador-ciclonico-para-aguas-residuales"
        },
        {
            texto: "Separador Desarenador Ciclonico",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desarenador-ciclonico-para-aguas-residuales"
        },
        {
            texto: "Desarenador Ciclónico de Fondo Plano para Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desarenador-ciclonico-para-aguas-residuales"
        },
        {
            texto: "Hidrociclon",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desarenador-ciclonico-para-aguas-residuales"
        },
        {
            texto: "Sistemas de Flotacion Daf",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistema-de-flotacion-por-aire-disuelto-daf"
        },
        {
            texto: "Oxidacion Quimica y Avanzada",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/oxidacion-quimica-y-avanzada-para-aguas-residuales-industriales"
        },
        {
            texto: "Foto Fenton",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/oxidacion-quimica-y-avanzada-para-aguas-residuales-industriales"
        },
        {
            texto: "Fotocatalisis Heterogenea",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/oxidacion-quimica-y-avanzada-para-aguas-residuales-industriales"
        },
        {
            texto: "Ecoball",
            pagina: "https://www.nyfdecolombia.com/plantas/tanques-septicos"
        },
        {
            texto: "Planta de Tratamiento de Aguas Residuales en Fibra de Vidrio - Ecoball",
            pagina: "https://www.nyfdecolombia.com/plantas/tanques-septicos"
        },
        {
            texto: "Planta de Tratamiento de Aguas Residuales Multifamiliares en Fibra de Vidrio - Ecoball",
            pagina: "https://www.nyfdecolombia.com/plantas/tanques-septicos"
        },
        {
            texto: "Ptar en Fibra de Vidrio - Ecoball",
            pagina: "https://www.nyfdecolombia.com/plantas/tanques-septicos"
        },
        {
            texto: "Plantas Compactas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Sistemas de Tratamientos Biologicos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistemas-de-tratamientos-biologicos"
        },
        {
            texto: "Reactores Biologicos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistemas-de-tratamientos-biologicos"
        },
        {
            texto: "Plantas de Tratamiento Biologicas Para Tratamiento de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/sistemas-de-tratamientos-biologicos"
        },
        {
            texto: "Percolador Por Goteo",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/filtro-biologico-anaerobico-percolador-de-lodos-activados-sbr"
        },
        {
            texto: "Filtro Biologico Percolador",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/filtro-biologico-anaerobico-percolador-de-lodos-activados-sbr"
        },
        {
            texto: "Planta de Tratamiento Compacta IFAS",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reactor-biologico-ifas"
        },
        {
            texto: "Reactor Biologico Ifas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reactor-biologico-ifas"
        },
        {
            texto: "Planta de Tratamiento Compacta de Aguas Residuales MBBR",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reactor-biologico-mbbr"
        },
        {
            texto: "Planta de Tratamiento Compacta de Aguas Residuales MBBR",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/reactor-biologico-mbbr"
        },
        {
            texto: "Reactor Biologico Mbbr",
            pagina: "https://nyfdecolombia.com/aguas-residuales/reactor-biologico-mbbr"
        },
        {
            texto: "planta de Tratamiento de Aguas Residuales Sbr",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-de-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Reactor Biologico Sbr",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-de-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Tratamiento de aguas potable",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-agua-potable"
        },
        {
            texto: "Plantas de Tratamiento de Agua Potable",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-agua-potable"
        },
        {
            texto: "Plantas Para Tratamiento de Agua Potable",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-agua-potable"
        },
        {
            texto: "Acuaplus",
            pagina: "https://www.nyfdecolombia.com/agua-potable/plantas-portatiles"
        },
        {
            texto: "Plantas Portatiles de Agua Potable - Acuaplus",
            pagina: "https://www.nyfdecolombia.com/agua-potable/plantas-portatiles"
        },
        {
            texto: "Plantas Para Tratamiento de Agua Potable Portatiles - Acuaplus",
            pagina: "https://www.nyfdecolombia.com/agua-potable/plantas-portatiles"
        },
        {
            texto: "Plantas de Tratamiento de Agua Potable Compactas - Acuaplus",
            pagina: "https://www.nyfdecolombia.com/agua-potable/plantas-portatiles"
        },
        {
            texto: "Plantas Potabilizadoras de Agua",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-agua-potable"
        },
        {
            texto: "Potabilizadoras de Agua",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-agua-potable"
        },
        {
            texto: "Potabilizadoras de Agua Potable",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-agua-potable"
        },
        {
            texto: "Plantas de Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-de-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Plantas Para Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-de-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Plantas de Agua Potable",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-agua-potable"
        },
        {
            texto: "Plantas Para Agua Potable",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-agua-potable"
        },
        {
            texto: "Planta de Agua Residual",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-de-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Planta Para Agua Residual",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-de-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Planta de Agua Potable",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-agua-potable"
        },
        {
            texto: "Planta Para Agua Potable",
            pagina: "https://www.nyfdecolombia.com/plantas/tratamiento-de-agua-potable"
        },
        {
            texto: "Filtros Rapidos",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Filtros Rápidos",
            pagina: "https://www.nyfdecolombia.com/agua-potable/filtros-multimedia-para-agua-potable"
        },
        {
            texto: "Tratamiento Primario",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Plantas de Tratamiento Primario",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Tratamiento Secundario",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Plantas de Tratamiento Secundario",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Tratamiento Terciario",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantadores-de-aguas-residuales"
        },
        {
            texto: "Plantas de Tratamiento Terciario",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/decantadores-de-aguas-residuales"
        },
        {
            texto: "Plantas Industriales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tratamiento-de-aguas-residuales-industriales"
        },
        {
            texto: "Plantas Para Tratamiento de Aguas Residuales Industriales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tratamiento-de-aguas-residuales-industriales"
        },
        {
            texto: "Plantas Domesticas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tratamiento-de-aguas-residuales-industriales"
        },
        {
            texto: "Plantas para Tratamiento de Aguas Residuales Domesticas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tratamiento-de-aguas-residuales-industriales"
        },
        {
            texto: "Planta Portatil Acuaplus",
            pagina: "https://www.nyfdecolombia.com/agua-potable/plantas-portatiles"
        },
        {
            texto: "Planta Portatil Biobox",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-de-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Distribuidores en Colombia",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Distribuidores en Chile",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Distribuidores en Panamá",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },{
            texto: "Distribuidores en México",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Distribuidores en Guatemala",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Distribuidores en Honduras",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Distribuidores en Perú",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Distribuidores en Ecuador",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Distribuidores en Estados Unidos",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Distribuidores en Republica Dominicana",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Distribuidores en Bolivia",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Distribuidores en El Salvador",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en Colombia",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en Chile",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en Panamá",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },{
            texto: "Representantes en México",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en Guatemala",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en Honduras",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en Perú",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en Ecuador",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en Estados Unidos",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en Republica Dominicana",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en Bolivia",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Representantes en El Salvador",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en Colombia",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en Chile",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en Panamá",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },{
            texto: "Agentes Comerciales en México",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en Guatemala",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en Honduras",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en Perú",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en Ecuador",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en Estados Unidos",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en Republica Dominicana",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en Bolivia",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Agentes Comerciales en El Salvador",
            pagina: "https://www.nyfdecolombia.com/distribuidores-comerciales"
        },
        {
            texto: "Galeria Fotogratica",
            pagina: "https://www.nyfdecolombia.com/experiencia"
        },
        {
            texto: "Experiencias",
            pagina: "https://www.nyfdecolombia.com/experiencia"
        },
        {
            texto: "Proyectos",
            pagina: "https://www.nyfdecolombia.com/experiencia"
        },
        {
            texto: "Videos",
            pagina: "https://www.youtube.com/@SynerTechSAS/videos"
        },
        {
            texto: "Osmosis Inversa",
            pagina: "https://www.nyfdecolombia.com/agua-potable/equipos-industriales-de-osmosis-inversa"
        },
        {
            texto: "Catalogo General",
            pagina: "https://www.nyfdecolombia.com/pdf/CATALOGO GENERAL EQUIPOS.pdf"
        },
        {
            texto: "Catalogo BIOBOX",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO BIOBOX.pdf"
        },
        {
            texto: "Catalogo CLEARBOX",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO CLEARBOX .pdf"
        },
        {
            texto: "Catalogo DAF",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO SISTEMA DAF.pdf"
        },
        {
            texto: "Catalogo Decantador de placa inclinada",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO DECANTADOR PLACA INCLINADA.pdf"
        },
        {
            texto: "Catalogo lavado de llantas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO LAVADO DE LLANTAS.pdf"
        },
        {
            texto: "Catalogo de lavado de llantas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO LAVADO DE LLANTAS.pdf"
        },
        {
            texto: "Catalogo oxidacion avanzada",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO OXIDACIÓN AVANZADA.pdf"
        },
        {
            texto: "Catalogo de oxidacion avanzada",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO OXIDACIÓN AVANZADA.pdf"
        },
        {
            texto: "Catalogo Daf",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO SISTEMA DAF.pdf"
        },
        {
            texto: "Catalogo de Daf",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO SISTEMA DAF.pdf"
        },
        {
            texto: "Catalogo de Filtros",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO DE FILTROS.pdf"
        },
        {
            texto: "Catalogo Filtros",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO DE FILTROS.pdf"
        },
        {
            texto: "Presentación General",
            pagina: "https://www.nyfdecolombia.com/pdf/CATALOGO GENERAL EQUIPOS.pdf"
        },
        {
            texto: "Presentación Synertech - Catalogo General de Productos",
            pagina: "https://www.nyfdecolombia.com/pdf/CATALOGO GENERAL EQUIPOS.pdf"
        },
        {
            texto: "Agua Residual Domestica",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Agua Residual Industrial",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        {
            texto: "Plantas Portatiles Domesticas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-para-tratamiento-de-aguas-residuales-domesticas-comerciales"
        },
        /* ultravioleta */
        {
            texto: "Equipos de Desinfección Ultravioleta",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#equipos"
        },
        {
            texto: "Equipos para Desinfección Ultravioleta",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#equipos"
        },
        {
            texto: "Calculadora Ultravioleta CFM",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#projects"
        },
        {
            texto: "Calculadora Ultravioleta",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#projects"
        },
        {
            texto: "Desinfección Ultravioleta Para Transporte de Alimentos",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/transportes-de-alimentos"
        },
        {
            texto: "Desinfección Ultravioleta Para Industria de Alimentos",
            pagina: "https://www.nyfdecolombia.com/uv/industria-de-alimentos"
        },
        {
            texto: "Desinfección Ultravioleta Para Hospitales",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-aire"
        },
        {
            texto: "Desinfección Ultravioleta Para Centros Comerciales",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-aire"
        },
        {
            texto: "Lamparas de Desinfección Ultravioleta para Agua",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Lamparas de Desinfección UVC para Agua",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Lamparas de Desinfección UVM para Agua",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Lamparas de Desinfección UVCA para Agua",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Lamparas de Desinfección UV para Agua",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Lamparas de Desinfección Ultravioleta para Agua Potable",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Lamparas de Desinfección UVC para Agua Potable",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Lamparas de Desinfección UVM para Agua Potable",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Lamparas de Desinfección UVCA para Agua Potable",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Lamparas de Desinfección UV para Agua Potable",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Bombillas Ultravioleta",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        
        {
            texto: "Sistemas para Desinfección Ultravioleta Titan Room Space",
            pagina: "https://www.nyfdecolombia.com/uv/titan-room-space"
        },
        {
            texto: "Sistemas de Desinfección Ultravioleta Titan Room Space",
            pagina: "https://www.nyfdecolombia.com/uv/titan-room-space"
        },
        {
            texto: "Desinfección Ultravioleta Titan Room Space",
            pagina: "https://www.nyfdecolombia.com/uv/titan-room-space"
        },
        {
            texto: "Lamparas de Desinfección Ultravioleta Radiador Uv de Evaporador",
            pagina: "https://www.nyfdecolombia.com/uv/rejilla-de-desinfeccion-ultravioleta-para-aire-acondicionado"
        },
        {
            texto: "Desinfección Ultravioleta Radiador Uv de Evaporador",
            pagina: "https://www.nyfdecolombia.com/uv/rejilla-de-desinfeccion-ultravioleta-para-aire-acondicionado"
        },
        {
            texto: "Lamparas Para Desinfección Ultravioleta Radiador Uv de Evaporador",
            pagina: "https://www.nyfdecolombia.com/uv/rejilla-de-desinfeccion-ultravioleta-para-aire-acondicionado"
        },
        {
            texto: "Modulo de Desinfección UV",
            pagina: "https://www.nyfdecolombia.com/uv/modulo-de-desinfeccion"
        },
        {
            texto: "Modulo de Desinfección Ultravioleta",
            pagina: "https://www.nyfdecolombia.com/uv/modulo-de-desinfeccion"
        },
        {
            texto: "Ducto de Aire Ultravioleta",
            pagina: "https://www.nyfdecolombia.com/uv/modulo-de-desinfeccion"
        },
        {
            texto: "Ducto de Aire UV",
            pagina: "https://www.nyfdecolombia.com/uv/modulo-de-desinfeccion"
        },
        {
            texto: "Sistema para Desinfección Ultravioleta Uv Eagle",
            pagina: "https://www.nyfdecolombia.com/uv/desinfeccion-ultravioleta-de-vehiculos"
        },
        {
            texto: "Lamparas de Radiación Directa",
            pagina: "https://www.nyfdecolombia.com/uv/desinfeccion-ultravioleta-de-vehiculos"
        },
        {
            texto: "Titan Uv Portable",
            pagina: "https://www.nyfdecolombia.com/uv/titan-portable"
        },
        {
            texto: "Lamparas de Desinfección Ultravioleta para Superficies",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-superficie"
        },
        {
            texto: "Desinfección Ultravioleta de Superficies",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-superficie"
        },
        {
            texto: "Lampara de Desinfección Portable",
            pagina: "https://www.nyfdecolombia.com/uv/titan-portable"
        },
        {
            texto: "Tunel de Desinfección Ultravioleta",
            pagina: "https://www.nyfdecolombia.com/uv/irradian-tunel-de-desinfeccion"
        },
        {
            texto: "Tunel de Desinfección UV",
            pagina: "https://www.nyfdecolombia.com/uv/irradian-tunel-de-desinfeccion"
        },
        {
            texto: "Filtros UV",
            pagina: "https://www.nyfdecolombia.com/uv/uv-water"
        },
        {
            texto: "Filtros Ultravioleta",
            pagina: "https://www.nyfdecolombia.com/uv/uv-water"
        },
        {
            texto: "Filtros Ultravioleta Para Agua Potable",
            pagina: "https://www.nyfdecolombia.com/uv/uv-water"
        },
        {
            texto: "Filtros Ultravioleta Para Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/uv/uv-water"
        },
        {
            texto: "Filtros UV Para Agua Potable",
            pagina: "https://www.nyfdecolombia.com/uv/uv-water"
        },
        {
            texto: "Filtros UV Para Aguas Residuales",
            pagina: "https://www.nyfdecolombia.com/uv/uv-water"
        },
        {
            texto: "Sistema Ultravioleta De Purificación de Agua",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Sistema Ultravioleta Para Purificación de Agua",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-agua"
        },
        {
            texto: "Sistemas UltraVioleta Para Industrias",
            pagina: "https://www.nyfdecolombia.com/uv/industria-de-alimentos"
        },
        {
            texto: "Sistemas UltraVioleta Para Vehícuos",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/transportes-de-alimentos"
        },
        {
            texto: "Lamparas Ultravioleta para Desinfección de Aire Uv MiniSplit",
            pagina: "https://www.nyfdecolombia.com/uv/uv-minisplit"
        },
        {
            texto: "Sistemas de Desinfección Ultravioleta (Titan UvAir-Plus)",
            pagina: "https://nyfdecolombia.com/uv/titan-uv-air-plus"
        },
        {
            texto: "Sistemas de Desinfección Ultravioleta",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#equipos"
        },
        {
            texto: "Lamparas Ultravioleta de 254 nm",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "Lamparas Ultravioleta de 180 nm",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "Desinfección por Rayos UV",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#signup"
        },
        {
            texto: "Desinfección por Rayos Ultravioleta",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#signup"
        },
        {
            texto: "Sistemas Ultravioleta para Desinfección Medica",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#projects"
        },
        {
            texto: "Equipos Ultravioleta para Desinfección Agricola",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "Ultravioleta para Desinfección de Alimentos y Vegetales",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "Filtro Ultravioleta para Purificación de Agua",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "UV",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "UV-C",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "UV-A",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "UV-B",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "Desinfección Ultravioleta de Aire",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-aire"
        },
        {
            texto: "Sistema Ultravioleta de Aire",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/desinfeccion-de-aire"
        },
        {
            texto: "Sistema Ultravioleta Para Vehículos",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/transportes-de-alimentos"
        },
        {
            texto: "Sistema Ultravioleta De Vehículos",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/transportes-de-alimentos"
        },
        {
            texto: "Desinfección Ultravioleta Para Vehículos",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/transportes-de-alimentos"
        },
        {
            texto: "Desinfección UV Para Vehículos",
            pagina: "https://www.nyfdecolombia.com/uv/area-industrial/en/paginas/transportes-de-alimentos"
        },
        {
            texto: "Eliminación de Olores",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "Sistema Para Eliminación de Olores",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta"
        },
        {
            texto: "Desinfección ultravioleta para transportes aereos",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#about"
        },
        {
            texto: "Desinfección ultravioleta para la industria de bebidas",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#about"
        },
        {
            texto: "Desinfección ultravioleta para la industria de alimetos",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#about"
        },
        {
            texto: "desinfección ultravioleta para industria química",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#about"
        },
        {
            texto: "desinfección ultravioleta para laboratorios",
            pagina: "https://www.nyfdecolombia.com/uv/ultravioleta#about"
        },
        {
            texto: "Malla coanda",
            pagina: "https://www.nyfdecolombia.com/agua-potable/cribado-primario-compacto-coanda-rejillas"
        },
        {
            texto: "Sistema de captacion con malla coanda",
            pagina: "https://www.nyfdecolombia.com/agua-potable/cribado-primario-compacto-coanda-rejillas"
        },
        {
            texto: "Malla coanda de canal",
            pagina: "https://www.nyfdecolombia.com/agua-potable/cribado-primario-compacto-coanda-rejillas"
        },
        {
            texto: "Captacion por malla coanda",
            pagina: "https://www.nyfdecolombia.com/agua-potable/cribado-primario-compacto-coanda-rejillas"
        },
        {
            texto: "Catalogo Decantador de Cono Profundo",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO DECANTADOR DE CONO PROFUNDO .pdf"
        },
        {
            texto: "Catalogo Cono Profundo",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO DECANTADOR DE CONO PROFUNDO .pdf"
        },
        {
            texto: "Catalogo ecoball",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO ECOBALL.pdf"
        },
        {
            texto: "Catalogo de ecoball",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO ECOBALL.pdf"
        },
        {
            texto: "Catalogo acuaplus",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO ACUAPLUS.pdf"
        },
        {
            texto: "Catalogo de acuaplus",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO ACUAPLUS.pdf"
        },
        {
            texto: "Catalogo de acuabox",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO  ACUABOX .pdf"
        },
        {
            texto: "Catalogo acuabox",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/pdf/CATALOGO  ACUABOX .pdf"
        },
        {
            texto: "Caf",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/flotacion-por-aire-de-cavitación-caf"
        },
        {
            texto: "Sistema de flotacion por aire cavitado",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/flotacion-por-aire-de-cavitación-caf"
        },
        {
            texto: "Sistema de captacion",
            pagina: "https://www.nyfdecolombia.com/agua-potable/bocatoma-flotante-para-agua-potable"
        },
        {
            texto: "Bocatoma flotante",
            pagina: "https://www.nyfdecolombia.com/agua-potable/bocatoma-flotante-para-agua-potable"
        },
        {
            texto: "Balsa flotante",
            pagina: "https://www.nyfdecolombia.com/agua-potable/bocatoma-flotante-para-agua-potable"
        },
        {
            texto: "Balsa de captación",
            pagina: "https://www.nyfdecolombia.com/agua-potable/bocatoma-flotante-para-agua-potable"
        },
        {
            texto: "Sistema de captacion de agua",
            pagina: "https://www.nyfdecolombia.com/agua-potable/bocatoma-flotante-para-agua-potable"
        },
        {
            texto: "Barredor de grasas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desnatador-decantador-aguas-residuales"
        },
        {
            texto: "Separador barredor de grasas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desnatador-decantador-aguas-residuales"
        },
        {
            texto: "Barredor de lodos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/separador-barredor-de-grasas"
        },
        {
            texto: "Rascador de lodos",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/separador-barredor-de-grasas"
        },
        {
            texto: "Rascador de grasas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/separador-barredor-de-grasas"
        },
        {
            texto: "Desnatador separador de grasas",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desnatador-decantador-aguas-residuales"
        },
        {
            texto: "Separador de grasas y aceites",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desnatador-decantador-aguas-residuales"
        },
        {
            texto: "Desgrasador de aguas residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desnatador-decantador-aguas-residuales"
        },
        {
            texto: "Desnatadores Skimmer",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desnatador-decantador-aguas-residuales"
        },
        {
            texto: "Skimmer",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desnatador-decantador-aguas-residuales"
        },
        {
            texto: "Barredor de grasas Skimmer",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/desnatador-decantador-aguas-residuales"
        },
        {
            texto: "Estacion de filtracion",
            pagina: "https://www.nyfdecolombia.com/agua-potable/estacion-de-filtracion"
        },
        {
            texto: "Estacion de filtrado",
            pagina: "https://www.nyfdecolombia.com/agua-potable/estacion-de-filtracion"
        },
        {
            texto: "Biocube",
            pagina: "https://www.nyfdecolombia.com/plantas/plantas-para-tratamiento-de-aguas-residuales-unifamiliares"
        },
        {
            texto: "Tratamiento de agua residual residencial",
            pagina: "https://www.nyfdecolombia.com/plantas/plantas-para-tratamiento-de-aguas-residuales-unifamiliares"
        },
        {
            texto: "Tanques de combustibles",
            pagina: "https://www.nyfdecolombia.com/tanques/tanques-de-combustibles"
        },
        {
            texto: "Tanques de agua",
            pagina: "https://www.nyfdecolombia.com/tanques/tanques-de-agua.html"
        },
        {
            texto: "Accesorios de tanques de combustibles",
            pagina: "https://www.nyfdecolombia.com/tanques/tanques-de-combustibles"
        },
        {
            texto: "Tanques para combustibles",
            pagina: "https://www.nyfdecolombia.com/tanques/tanques-de-combustibles"
        },
        {
            texto: "Tanques doble pared",
            pagina: "https://www.nyfdecolombia.com/tanques/tanques-de-almacenamiento-de-combustibles-doble-pared"
        },
        {
            texto: "Tanques de almacenamiento doble pared",
            pagina: "https://www.nyfdecolombia.com/tanques/tanques-de-almacenamiento-de-combustibles-doble-pared"
        },
        {
            texto: "Tamiz tornillo vertical",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-tornillo-de-estacion-de-bombeo"
        },
        {
            texto: "Tamiz vertical de aguas residuales",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-tornillo-de-estacion-de-bombeo"
        },
        {
            texto: "Tamiz tornillo de pretratamiento",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/tamiz-tornillo-de-estacion-de-bombeo"
        },
        {
            texto: "Bioball",
            pagina: "https://www.nyfdecolombia.com/plantas/tanques-septicos"
        },
        {
            texto: "Bioblock",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/bloques-modulares-avanzados-para-tratamiento-de-aguas-residuales"
        },
        {
            texto: "Aireadores",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-aireacion-y-mezcla"
        },
        {
            texto: "Mezcladores",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/equipos-para-aireacion-y-mezcla"
        },
        {
            texto: "Biomax",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-modulares-compactas-tipo-paquete-aguas-residuales"
        },
        {
            texto: "Planta de tratamiento de aguas residuales Biomax",
            pagina: "https://www.nyfdecolombia.com/aguas-residuales/plantas-modulares-compactas-tipo-paquete-aguas-residuales"
        },
        {
            texto: "",
            pagina: ""
        },
    ];


    /* click en boton que abre modal */
    $(".btnModalBuscar").click(function(){
        $("#buscar").val("");
        $("#box-search").html('');
        

        /* cuando el modal se termine de abrir ejecutar: */
        $('#searchModal').on('shown.bs.modal', function (e) {
            $("#buscar").focus();
        });
    });

    


    $("#buscar").keyup(function(e){
        let buscar = $(this).val();
        buscar = buscar.toUpperCase();
        if(e.which != 38 && e.which != 40 && e.which != 13){
            if (buscar.length > 1) {
            
                if (buscar.trim().length > 0) {
                    $("#btnBuscar").html('<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>');
                    /* let respuesta = data.filter(palabras => palabras.texto.includes(buscar)) */
                    if(data.filter(palabras => palabras.texto.toUpperCase().indexOf(buscar) > -1)){
                        let respuesta = data.filter(palabras => palabras.texto.toUpperCase().indexOf(buscar) > -1);
                        
                        if (respuesta.length > 0) {
                            $("#box-search").html('');
                            $("#box-search").append('<a class="active list-group-item list-group-item-action" href="'+respuesta[0].pagina+'" style="color:#666" !important;><i class="fas fa-search" aria-hidden="true"></i> '+respuesta[0].texto+'<i class="bi bi-hand-index-fill text-danger"></i></a>');
                            for (let i = 1; i < respuesta.length; i++) {
                                $("#box-search").append('<a class="list-group-item list-group-item-action" href="'+respuesta[i].pagina+'" style="color:#666" !important;><i class="fas fa-search" aria-hidden="true"></i> '+respuesta[i].texto+'<i class="bi bi-hand-index-fill text-danger"></i></a>');
                            }
                            $("#btnBuscar").html('<i class="bi bi-search"></i>');
                        }else{
                            $("#box-search").html('<li> No hay resultados </li>');
                            $("#btnBuscar").html('<i class="bi bi-search"></i>');      
                        }   
                    }
                }else{
                    console.log("no");
                    $("#box-search").html('');
                    $("#btnBuscar").html('<i class="bi bi-search"></i>');
                }
            }
            else{
                $("#box-search").html('');
                $("#btnBuscar").html('<i class="bi bi-search"></i>');
            }
        }
    });



    /* funciones con las teclas en el buscador */
    // Obtener la lista, para recorrer cada elemento
    let listGroup = document.querySelector('#box-search');



    // Asignar evento al campo de texto
    document.querySelector('#buscar').addEventListener('keydown', e => {
        
        if(e.keyCode == 13 || e.keyCode == 38 || e.keyCode == 40) {
            if(!listGroup) {
                return; // No existe la lista
            }
            // Obtener todos los elementos
            let items = listGroup.querySelectorAll('a');
            // Saber si alguno está activo
            let actual = Array.from(items).findIndex(item => item.classList.contains('active'));


            // Analizar tecla pulsada
            if(e.keyCode == 13) {
                // Tecla Enter, evitar que se procese el formulario
                e.preventDefault();
                // ¿Hay un elemento activo?
                if(items[actual]) {
                    // Hacer clic
                    items[actual].click();
                }
            } if(e.keyCode == 38 || e.keyCode == 40) {
                // Flecha arriba (restar) o abajo (sumar)
                if(items[actual]) {
                    // Solo si hay un elemento activo, eliminar clase
                    items[actual].classList.remove('active');
                }
                // Calcular posición del siguiente
                actual += (e.keyCode == 38) ? -1 : 1;
                // Asegurar que está dentro de los límites
                if(actual < 0) {
                    actual = 0;
                } else if(actual >= items.length) {
                    /* volver al inicio */
                    actual = 0
                }   
                
                // Asignar clase activa
                items[actual].classList.add('active');
                items[actual].focus();
                $("#buscar").focus()
                
            }
        }
    });
    // En la función donde generas la lista debes activar evento clic para cada elemento
    // Para este ejemplo se hace manual
    listGroup.querySelectorAll('a').forEach(li => {
        li.addEventListener('click', e => {
            // Asignar valor al campo
            document.querySelector('#buscar').value = e.currentTarget.textContent;
            // Aquí deberías cerrar la lista y/o eliminar el contenido
        });
    });


    /* limpiar busqueda con X */
    document.getElementById("buscar").addEventListener("search", (event) => {
        $("#box-search").html('');
    });
      
    /* buscador de offcanvas */
/*     $("#buscar_offcanvas").keyup(function(e){
        let buscar = $(this).val();
        buscar = buscar.toUpperCase();
        if(e.which != 38 && e.which != 40 && e.which != 13){
            if (buscar.length > 1) {
            
                if (buscar.trim().length > 0) {
                    let a = $("#menu_offcanvas ul").find("a");
                    console.log(a[0].innerText)
                    for (let i = 0; i < a.length; i++) {
                        console.log(a[i].innerText);
                        if(a.filter(palabras => palabras.innerText.toUpperCase().indexOf(buscar) > -1)){
                            let respuesta = a.filter(palabras => palabras.innerText.toUpperCase().indexOf(buscar) > -1);
                            console.log(respuesta);
                            
                        }  
                    }
                    
                }else{
                    console.log("no");
                    $("#box-search").html('');
                    $("#btnBuscar").html('<i class="bi bi-search"></i>');
                }
            }
            else{
                $("#box-search").html('');
                $("#btnBuscar").html('<i class="bi bi-search"></i>');
            }
        }
    }); */

    $('#buscar_offcanvas').keyup(function(){
        var productosM = $('.productOffCanvas');
        var buscando = $(this).val();
        var item='';
        if (buscando.length > 1) {
            for( var i = 0; i < productosM.length; i++ ){
                item = $(productosM[i]).html().toUpperCase();
                for(var x = 0; x < item.length; x++ ){
                    if( buscando.length == 0 || item.indexOf( buscando.toUpperCase() ) > -1 ){
                        $(productosM[i]).parents('.item').show();
                        $(productosM[i]).parents('.menuO').show();
                    }else{
                        $(productosM[i]).parents('.item').hide();
                    }
                }
            }
            /* seleccionar todos los ul con esa clase*/
            let uls = $(".menuO");
            for (let i = 0; i < uls.length; i++) {
                /* busca todos los li visible del ul actual */
                var ul = $(uls[i]).find('li:visible');
                /* si no hay li visible oculta el ul */
                if (ul.length==0) {
                    $(uls[i]).hide();
                }
            }
        }else{
            for( var i = 0; i < productosM.length; i++ ){
                $(productosM[i]).parents('.item').show();
                $(productosM[i]).parents('.menuO').show();
            }
        }
     });
});