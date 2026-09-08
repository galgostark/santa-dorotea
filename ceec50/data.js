/**
 * BASE DE DATOS DE RECUERDOS - 50° ANIVERSARIO (BODAS DE ORO 1976 - 2026)
 * CENTRO DE EDUCACIÓN BÁSICA ESPECIAL CAJAMARCA
 */

const GALLERY_DATA = {
  // CONFIGURACIÓN DE LAS 8 CATEGORÍAS PRINCIPALES DEL CENTRO
  categories: [
    {
      id: "escuela-vieja",
      title: "Escuela Antigua",
      subtitle: "Los Primeros Años",
      description: "Los inicios del Centro de Educación Básica Especial Cajamarca. Las primeras aulas e instalaciones donde comenzó esta gran misión educativa antes de la edificación del nuevo local.",
      icon: "school"
    },
    {
      id: "construccion",
      title: "Construcción Local Actual",
      subtitle: "Obra Histórica",
      description: "El valioso registro audiovisual y fotográfico del esfuerzo comunitario, levantamiento de muros, faenas y cimientos del local actual.",
      icon: "tools"
    },
    {
      id: "instalaciones",
      title: "Instalaciones y Aulas",
      subtitle: "Espacios de Aprendizaje y Terapia",
      description: "Recorrido por las aulas, biblioteca, salones de psicomotricidad, patios techados y ambientes diseñados para el desarrollo integral de los alumnos.",
      icon: "home"
    },
    {
      id: "profesores",
      title: "Profesores y Personal",
      subtitle: "Vocación y Entrega Pedagógica",
      description: "Homenaje a los directores, educadores, terapeutas, auxiliares y personal administrativo que han dedicado su vida y corazón a la enseñanza inclusiva a lo largo de estos 50 años.",
      icon: "heart"
    },
    {
      id: "alumnos",
      title: "Alumnos y Vida Escolar",
      subtitle: "Nuestros Estudiantes",
      description: "La alegría, superación constante y fraternidad de los niños y jóvenes que llenan de vida cada rincón del centro escolar.",
      icon: "star"
    },
    {
      id: "teatro-danzas",
      title: "Actuaciones y Teatro",
      subtitle: "Arte, Danzas y Festivales",
      description: "Las presentaciones artísticas, obras teatrales, festivales de danza folclórica, bandas rítmicas y desfiles tradicionales protagonizados con gran talento por los alumnos.",
      icon: "theater"
    },
    {
      id: "aniversarios",
      title: "Celebraciones de Aniversario",
      subtitle: "Hitos y Bodas de Plata",
      description: "Los festejos institucionales, ceremonias protocolares y momentos memorables conmemorando la trayectoria de nuestra querida escuela.",
      icon: "award"
    },
    {
      id: "otros",
      title: "Otros Recuerdos",
      subtitle: "Colección Fotográfica Histórica",
      description: "Paseos, actividades al aire libre y recuerdos especiales conservados en el archivo histórico de los 50 años del Centro de Educación Básica Especial Cajamarca.",
      icon: "camera"
    }
  ],

  // LISTADO DE RECUERDOS (FOTOS Y VIDEOS)
  items: [
    // ================= 1. ESCUELA ANTIGUA =================
    {
      id: "escuela-vieja1",
      categoryId: "escuela-vieja",
      type: "image",
      title: "Instalaciones de la Escuela Antigua (1)",
      description: "Vista panorámica del Centro de Educación Básica Especial Cajamarca en sus primeros años de labor educativa.",
      url: "ceec50/assets/escuela-vieja1.jpg",
      year: "1978"
    },
    {
      id: "escuela-vieja2",
      categoryId: "escuela-vieja",
      type: "image",
      title: "Instalaciones de la Escuela Antigua (2)",
      description: "El antiguo patio central donde jugaban y compartían los primeros niños del Centro.",
      url: "ceec50/assets/escuela-vieja2.jpg",
      year: "1979"
    },
    {
      id: "escuela-vieja3",
      categoryId: "escuela-vieja",
      type: "image",
      title: "Instalaciones de la Escuela Antigua (3)",
      description: "Aulas originales de madera previas a la construcción del local moderno.",
      url: "ceec50/assets/escuela-vieja3.jpg",
      year: "1978"
    },

    // ================= 2. CONSTRUCCIÓN LOCAL ACTUAL (INICIADA 1982) =================
    {
      id: "cee-vid",
      categoryId: "construccion",
      type: "video",
      title: "Construcción de la Escuela (Video Digitalizado)",
      description: "El valioso registro audiovisual de los cimientos, el levantamiento de muros y el esfuerzo conjunto de la comunidad para construir las aulas del Centro de Educación Básica Especial Cajamarca.",
      url: "https://www.youtube.com/embed/4ffiErIGYgI",
      thumbnailUrl: "ceec50/assets/construccion1.jpg",
      year: "1982"
    },
    {
      id: "construccion1",
      categoryId: "construccion",
      type: "image",
      title: "Construcción de la Escuela (1)",
      description: "Trabajos de cimentación y estructura inicial del nuevo local iniciados en 1982.",
      url: "ceec50/assets/construccion1.jpg",
      year: "1982"
    },
    {
      id: "construccion2",
      categoryId: "construccion",
      type: "image",
      title: "Construcción de la Escuela (2)",
      description: "Comunidad y obreros levantando los primeros muros de ladrillo del pabellón principal.",
      url: "ceec50/assets/construccion2.jpg",
      year: "1982"
    },
    {
      id: "construccion3",
      categoryId: "construccion",
      type: "image",
      title: "Construcción de la Escuela (3)",
      description: "Padres de familia y voluntarios colaborando activamente en la mezcla y vaciado de concreto.",
      url: "ceec50/assets/construccion3.jpg",
      year: "1982"
    },
    {
      id: "construccion4",
      categoryId: "construccion",
      type: "image",
      title: "Construcción de la Escuela (4)",
      description: "Avance de las aulas y colocación de vigas estructurales.",
      url: "ceec50/assets/construccion4.jpg",
      year: "1982"
    },
    {
      id: "construccion5",
      categoryId: "construccion",
      type: "image",
      title: "Construcción de la Escuela (5)",
      description: "Jornada comunitaria de apoyo para techar el primer pabellón escolar.",
      url: "ceec50/assets/construccion5.jpg",
      year: "1982"
    },
    {
      id: "construccion6",
      categoryId: "construccion",
      type: "image",
      title: "Construcción de la Escuela (6)",
      description: "Construcción del patio y accesos adaptados del Centro de Educación Básica Especial Cajamarca.",
      url: "ceec50/assets/construccion6.jpg",
      year: "1982"
    },
    {
      id: "construccion7",
      categoryId: "construccion",
      type: "image",
      title: "Construcción de la Escuela (7)",
      description: "Detalle de los acabados y pintura en las primeras aulas recién edificadas.",
      url: "ceec50/assets/construccion7.jpg",
      year: "1982"
    },
    {
      id: "construccion8",
      categoryId: "construccion",
      type: "image",
      title: "Construcción de la Escuela (8)",
      description: "Voluntarios e ingenieros supervisando los planos de ampliación de la obra.",
      url: "ceec50/assets/construccion8.jpg",
      year: "1982"
    },
    {
      id: "construccion9",
      categoryId: "construccion",
      type: "image",
      title: "Construcción de la Escuela (9)",
      description: "Inauguración simbólica y colocación de la placa conmemorativa del nuevo local.",
      url: "ceec50/assets/construccion9.jpg",
      year: "1982"
    },

    // ================= 3. INSTALACIONES Y AULAS =================
    { id: "escuela1", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (1)", description: "Vista exterior de las aulas modernas y jardines cuidados del centro.", url: "ceec50/assets/escuela1.jpg", year: "1990" },
    { id: "escuela2", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (2)", description: "El salón de terapia física y estimulación psicomotriz adaptada.", url: "ceec50/assets/escuela2.jpg", year: "1992" },
    { id: "escuela3", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (3)", description: "Biblioteca y salón de lectura infantil del Centro.", url: "ceec50/assets/escuela3.jpg", year: "1995" },
    { id: "escuela4", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (4)", description: "Fachada de ingreso engalanada para las celebraciones escolares.", url: "ceec50/assets/escuela4.jpg", year: "1991" },
    { id: "escuela5", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (5)", description: "Salón de artes plásticas, dibujo y manualidades ocupacionales.", url: "ceec50/assets/escuela5.jpg", year: "1993" },
    { id: "escuela6", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (6)", description: "Patio techado para deportes y recreación segura de los alumnos.", url: "ceec50/assets/escuela6.jpg", year: "1996" },
    { id: "escuela7", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (7)", description: "Comedor principal del Centro de Educación Básica Especial Cajamarca.", url: "ceec50/assets/escuela7.jpg", year: "1994" },
    { id: "escuela8", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (8)", description: "Detalle de los murales educativos pintados en los pasillos principales.", url: "ceec50/assets/escuela8.jpg", year: "1995" },
    { id: "escuela9", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (9)", description: "Juegos infantiles y columpios adaptados en el patio de recreo.", url: "ceec50/assets/escuela9.jpg", year: "1993" },
    { id: "escuela10", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (10)", description: "Aula de estimulación sensorial y cómputo educativo.", url: "ceec50/assets/escuela10.jpg", year: "1998" },
    { id: "escuela11", categoryId: "instalaciones", type: "image", title: "Ambiente y Aulas de la Escuela (11)", description: "Oficinas administrativas y dirección del Centro.", url: "ceec50/assets/escuela11.jpg", year: "1990" },

    // ================= 4. PROFESORES Y PERSONAL =================
    { id: "profesores1", categoryId: "profesores", type: "image", title: "Profesores y Personal Educativo (1)", description: "Reunión de coordinación pedagógica al inicio del año lectivo.", url: "ceec50/assets/profesores1.jpg", year: "1985" },
    { id: "profesores2", categoryId: "profesores", type: "image", title: "Profesores y Personal Educativo (2)", description: "Cuerpo docente reunido frente a la fachada principal de la escuela.", url: "ceec50/assets/profesores2.jpg", year: "1988" },
    { id: "profesores3", categoryId: "profesores", type: "image", title: "Profesores y Personal Educativo (3)", description: "Taller de capacitación y actualización pedagógica con especialistas.", url: "ceec50/assets/profesores3.jpg", year: "1991" },
    { id: "profesores4", categoryId: "profesores", type: "image", title: "Profesores y Personal Educativo (4)", description: "Celebración fraternal por el Día del Maestro en las instalaciones del Centro.", url: "ceec50/assets/profesores4.jpg", year: "1990" },
    { id: "profesores5", categoryId: "profesores", type: "image", title: "Profesores y Personal Educativo (5)", description: "Docentes del Centro participando con entusiasmo en un desfile cívico.", url: "ceec50/assets/profesores5.jpg", year: "1993" },
    { id: "profesores6", categoryId: "profesores", type: "image", title: "Profesores y Personal Educativo (6)", description: "Equipo de terapeutas físicas, de lenguaje y psicólogos del Centro.", url: "ceec50/assets/profesores6.jpg", year: "1994" },
    { id: "profesores7", categoryId: "profesores", type: "image", title: "Profesores y Personal Educativo (7)", description: "Educadoras de estimulación temprana posando en su aula decorada.", url: "ceec50/assets/profesores7.jpg", year: "1996" },
    { id: "profesores8", categoryId: "profesores", type: "image", title: "Profesores y Personal Educativo (8)", description: "Personal auxiliar, de cocina y de mantenimiento, soporte vital en el día a día.", url: "ceec50/assets/profesores8.jpg", year: "1992" },
    { id: "profesores9", categoryId: "profesores", type: "image", title: "Profesores y Personal Educativo (9)", description: "Directora fundadora junto a las primeras profesoras que sembraron las bases del CEE.", url: "ceec50/assets/profesores9.jpg", year: "1980" },
    { id: "profesores10", categoryId: "profesores", type: "image", title: "Profesores y Personal Educativo (10)", description: "Foto grupal solemne del cuerpo docente conmemorando las Bodas de Plata.", url: "ceec50/assets/profesores10.jpg", year: "1999" },

    // ================= 5. ALUMNOS Y VIDA ESCOLAR =================
    { id: "alumnos1", categoryId: "alumnos", type: "image", title: "Alumnos en Clase y Convivencia (1)", description: "Alumnos compartiendo y aprendiendo juntos en una jornada de integración y aprendizaje activo.", url: "ceec50/assets/alumnos1.jpg", year: "1989" },

    // ================= 6. ACTUACIONES Y TEATRO (20 FOTOS) =================
    { id: "teatro1", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (1)", description: "Danza típica interpretada con alegría por los alumnos del nivel primario.", url: "ceec50/assets/teatro1.jpg", year: "1992" },
    { id: "teatro2", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (2)", description: "Obra de teatro infantil con coloridos disfraces de animales y escenografía artesanal.", url: "ceec50/assets/teatro2.jpg", year: "1993" },
    { id: "teatro3", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (3)", description: "Representación dramática sobre el cuidado de la naturaleza y el medio ambiente.", url: "ceec50/assets/teatro3.jpg", year: "1995" },
    { id: "teatro4", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (4)", description: "Danza folclórica andina presentada durante las celebraciones de Fiestas Patrias.", url: "ceec50/assets/teatro4.jpg", year: "1994" },
    { id: "teatro5", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (5)", description: "Festival de talentos y música en el escenario principal del Centro.", url: "ceec50/assets/teatro5.jpg", year: "1996" },
    { id: "teatro6", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (6)", description: "Representación del cuento clásico de Caperucita Roja protagonizado por los alumnos.", url: "ceec50/assets/teatro6.jpg", year: "1995" },
    { id: "teatro7", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (7)", description: "Banda rítmica escolar tocando durante la inauguración de las Olimpiadas Especiales.", url: "ceec50/assets/teatro7.jpg", year: "1997" },
    { id: "teatro8", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (8)", description: "Danza costera presentada por el elenco juvenil de danzas del CEE.", url: "ceec50/assets/teatro8.jpg", year: "1996" },
    { id: "teatro9", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (9)", description: "Pastorela y cánticos de villancicos en el Festival Navideño de la escuela.", url: "ceec50/assets/teatro9.jpg", year: "1997" },
    { id: "teatro10", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (10)", description: "Dramatización histórica sobre la fundación y primeros maestros del Centro.", url: "ceec50/assets/teatro10.jpg", year: "1998" },
    { id: "teatro11", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (11)", description: "Elegante coreografía de marinera ejecutada con gran destreza por los estudiantes.", url: "ceec50/assets/teatro11.jpg", year: "1998" },
    { id: "teatro12", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (12)", description: "Recital de declamación poética en homenaje por el Día de la Madre.", url: "ceec50/assets/teatro12.jpg", year: "1997" },
    { id: "teatro13", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (13)", description: "Coreografía moderna durante la clausura festiva de las Olimpiadas Especiales.", url: "ceec50/assets/teatro13.jpg", year: "1999" },
    { id: "teatro14", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (14)", description: "Obra de teatro basada en tradiciones y leyendas de la comunidad.", url: "ceec50/assets/teatro14.jpg", year: "1998" },
    { id: "teatro15", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (15)", description: "Desfile de disfraces ecológicos elaborados creativamente con material reciclado.", url: "ceec50/assets/teatro15.jpg", year: "1999" },
    { id: "teatro16", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (16)", description: "Ensamble musical con instrumentos de percusión construidos en talleres por los alumnos.", url: "ceec50/assets/teatro16.jpg", year: "1999" },
    { id: "teatro17", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (17)", description: "Danza festiva de fin de año en el patio central rodeado de padres de familia.", url: "ceec50/assets/teatro17.jpg", year: "1998" },
    { id: "teatro18", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (18)", description: "Función de títeres y cuentacuentos interactivos para los más pequeños.", url: "ceec50/assets/teatro18.jpg", year: "1999" },
    { id: "teatro19", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (19)", description: "Danza folclórica de la selva con trajes autóctonos y gran dinamismo.", url: "ceec50/assets/teatro19.jpg", year: "1999" },
    { id: "teatro20", categoryId: "teatro-danzas", type: "image", title: "Presentación de Teatro y Actuaciones (20)", description: "Gran coro navideño integrado por la totalidad de alumnos y profesores en el estrado.", url: "ceec50/assets/teatro20.jpg", year: "1999" },

    // ================= 7. CELEBRACIONES DE ANIVERSARIO =================
    { id: "aniversario1", categoryId: "aniversarios", type: "image", title: "Celebración de Aniversario (1)", description: "Acto solemne por el aniversario del Centro en el patio de honor de la escuela.", url: "ceec50/assets/aniversario1.jpg", year: "1995" },
    { id: "aniversario1b", categoryId: "aniversarios", type: "image", title: "Celebración de Aniversario (1b)", description: "Momento emotivo del brindis de honor entre directivos, profesores y padres de familia.", url: "ceec50/assets/aniversario1b.jpg", year: "1995" },
    { id: "aniversario2", categoryId: "aniversarios", type: "image", title: "Celebración de Aniversario (2)", description: "Torta conmemorativa y festejo junto a los alumnos y toda la comunidad escolar.", url: "ceec50/assets/aniversario2.jpg", year: "1997" },

    // ================= 8. OTROS RECUERDOS HISTÓRICOS =================
    { id: "nn", categoryId: "otros", type: "image", title: "Recuerdo del Centro (1)", description: "Fotografía histórica perteneciente a la colección de los 50 años del Centro.", url: "ceec50/assets/nn.jpg", year: "1982" },
    { id: "nn2", categoryId: "otros", type: "image", title: "Recuerdo del Centro (2)", description: "Paseo escolar campestre en una inolvidable jornada de recreación.", url: "ceec50/assets/nn2.jpg", year: "1983" }
  ]
};

