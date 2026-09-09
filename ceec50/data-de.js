/**
 * ERINNERUNGSDATENBANK - 50-JÄHRIGES JUBILÄUM (GOLDENE HOCHZEIT 1976 - 2026)
 * SONDERSCHULZENTRUM CAJAMARCA (CEEC) & VEREIN SANTA DOROTEA
 */

const GALLERY_DATA = {
  // DIE 8 HAUPTKATEGORIEN DES ZENTRUMS
  categories: [
    {
      id: "escuela-vieja",
      title: "Alte Schule",
      subtitle: "Die Anfangsjahre",
      description: "Die Anfänge des Sonderschulzentrums Cajamarca. Die ersten Klassenräume und Einrichtungen, in denen dieser große Bildungsauftrag begann, bevor das moderne Gebäude errichtet wurde.",
      icon: "school"
    },
    {
      id: "construccion",
      title: "Bau des heutigen Gebäudes",
      subtitle: "Historisches Werk",
      description: "Das wertvolle audiovisuelle und fotografische Dokument des gemeinschaftlichen Einsatzes, der Errichtung der Mauern, Arbeitseinsätze und Fundamente des heutigen Schulgebäudes.",
      icon: "tools"
    },
    {
      id: "instalaciones",
      title: "Einrichtungen und Räume",
      subtitle: "Lern- und Therapieräume",
      description: "Rundgang durch die Klassenzimmer, Bibliothek, Psychomotorikräume, überdachte Höfe und speziell gestaltete Bereiche für die ganzheitliche Entwicklung der Schüler.",
      icon: "home"
    },
    {
      id: "profesores",
      title: "Lehrkräfte und Personal",
      subtitle: "Hingabe und pädagogischer Einsatz",
      description: "Hommage an die Schulleiter, Pädagogen, Therapeuten, Assistenten und Verwaltungskräfte, die ihr Leben und Herz der inklusiven Bildung in diesen 50 Jahren gewidmet haben.",
      icon: "heart"
    },
    {
      id: "alumnos",
      title: "Schüler und Schulleben",
      subtitle: "Unsere Schülerinnen und Schüler",
      description: "Die Freude, die ständige Entwicklung und das geschwisterliche Miteinander der Kinder und Jugendlichen, die jeden Winkel der Schule mit Leben erfüllen.",
      icon: "star"
    },
    {
      id: "teatro-danzas",
      title: "Aufführungen und Theater",
      subtitle: "Kunst, Tänze und Feste",
      description: "Künstlerische Darbietungen, Theaterstücke, traditionelle Folklorefestivals, Rhythmusgruppen und festliche Umzüge, die mit großer Begabung von den Schülern gestaltet wurden.",
      icon: "theater"
    },
    {
      id: "aniversarios",
      title: "Jubiläumsfeiern",
      subtitle: "Meilensteine und Silberjubiläum",
      description: "Die institutionellen Feiern, feierlichen Zeremonien und unvergesslichen Momente zum Gedenken an den Weg unserer Schule.",
      icon: "award"
    },
    {
      id: "otros",
      title: "Weitere Erinnerungen",
      subtitle: "Historische Fotosammlung",
      description: "Ausflüge, Aktivitäten im Freien und besondere Erinnerungen aus dem historischen Archiv des 50-jährigen Bestehens des Sonderschulzentrums Cajamarca.",
      icon: "camera"
    }
  ],

  // LISTE DER ERINNERUNGEN (FOTOS UND VIDEOS)
  items: [
    // ================= 1. ALTE SCHULE =================
    { id: "escuela-vieja1", categoryId: "escuela-vieja", type: "image", title: "Gelände der alten Schule (1)", description: "", url: "ceec50/assets/escuela-vieja1.jpg", year: "1978" },
    { id: "escuela-vieja2", categoryId: "escuela-vieja", type: "image", title: "Gelände der alten Schule (2)", description: "", url: "ceec50/assets/escuela-vieja2.jpg", year: "1979" },
    { id: "escuela-vieja3", categoryId: "escuela-vieja", type: "image", title: "Gelände der alten Schule (3)", description: "", url: "ceec50/assets/escuela-vieja3.jpg", year: "1978" },

    // ================= 2. BAU DES HEUTIGEN GEBÄUDES (BEGONNEN 1982) =================
    {
      id: "cee-vid",
      categoryId: "construccion",
      type: "video",
      title: "Bau der Schule (Historisches Video 1982)",
      description: "Die wertvolle audiovisuelle Aufzeichnung der Fundamente, der Mauern und des gemeinsamen Einsatzes der Gemeinschaft zum Bau der Klassenräume des Sonderschulzentrums Cajamarca.",
      url: "https://youtu.be/4ffiErIGYgI",
      embedUrl: "https://www.youtube-nocookie.com/embed/4ffiErIGYgI",
      thumbnailUrl: "ceec50/assets/construccion1.jpg",
      year: "1982"
    },
    { id: "construccion1", categoryId: "construccion", type: "image", title: "Bau der Schule (1)", description: "", url: "ceec50/assets/construccion1.jpg", year: "1982" },
    { id: "construccion2", categoryId: "construccion", type: "image", title: "Bau der Schule (2)", description: "", url: "ceec50/assets/construccion2.jpg", year: "1982" },
    { id: "construccion3", categoryId: "construccion", type: "image", title: "Bau der Schule (3)", description: "", url: "ceec50/assets/construccion3.jpg", year: "1982" },
    { id: "construccion4", categoryId: "construccion", type: "image", title: "Bau der Schule (4)", description: "", url: "ceec50/assets/construccion4.jpg", year: "1982" },
    { id: "construccion5", categoryId: "construccion", type: "image", title: "Bau der Schule (5)", description: "", url: "ceec50/assets/construccion5.jpg", year: "1982" },
    { id: "construccion6", categoryId: "construccion", type: "image", title: "Bau der Schule (6)", description: "", url: "ceec50/assets/construccion6.jpg", year: "1982" },
    { id: "construccion7", categoryId: "construccion", type: "image", title: "Bau der Schule (7)", description: "", url: "ceec50/assets/construccion7.jpg", year: "1982" },
    { id: "construccion8", categoryId: "construccion", type: "image", title: "Bau der Schule (8)", description: "", url: "ceec50/assets/construccion8.jpg", year: "1982" },
    { id: "construccion9", categoryId: "construccion", type: "image", title: "Bau der Schule (9)", description: "", url: "ceec50/assets/construccion9.jpg", year: "1982" },

    // ================= 3. EINRICHTUNGEN UND RÄUME =================
    { id: "escuela1", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (1)", description: "", url: "ceec50/assets/escuela1.jpg", year: "1990" },
    { id: "escuela2", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (2)", description: "", url: "ceec50/assets/escuela2.jpg", year: "1992" },
    { id: "escuela3", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (3)", description: "", url: "ceec50/assets/escuela3.jpg", year: "1995" },
    { id: "escuela4", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (4)", description: "", url: "ceec50/assets/escuela4.jpg", year: "1991" },
    { id: "escuela5", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (5)", description: "", url: "ceec50/assets/escuela5.jpg", year: "1993" },
    { id: "escuela6", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (6)", description: "", url: "ceec50/assets/escuela6.jpg", year: "1996" },
    { id: "escuela7", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (7)", description: "", url: "ceec50/assets/escuela7.jpg", year: "1994" },
    { id: "escuela8", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (8)", description: "", url: "ceec50/assets/escuela8.jpg", year: "1995" },
    { id: "escuela9", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (9)", description: "", url: "ceec50/assets/escuela9.jpg", year: "1993" },
    { id: "escuela10", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (10)", description: "", url: "ceec50/assets/escuela10.jpg", year: "1998" },
    { id: "escuela11", categoryId: "instalaciones", type: "image", title: "Räume und Hof der Schule (11)", description: "", url: "ceec50/assets/escuela11.jpg", year: "1990" },

    // ================= 4. LEHRKRÄFTE UND PERSONAL =================
    { id: "profesores1", categoryId: "profesores", type: "image", title: "Lehrkräfte und Personal (1)", description: "", url: "ceec50/assets/profesores1.jpg", year: "1985" },
    { id: "profesores2", categoryId: "profesores", type: "image", title: "Lehrkräfte und Personal (2)", description: "", url: "ceec50/assets/profesores2.jpg", year: "1988" },
    { id: "profesores3", categoryId: "profesores", type: "image", title: "Lehrkräfte und Personal (3)", description: "", url: "ceec50/assets/profesores3.jpg", year: "1991" },
    { id: "profesores4", categoryId: "profesores", type: "image", title: "Lehrkräfte und Personal (4)", description: "", url: "ceec50/assets/profesores4.jpg", year: "1990" },
    { id: "profesores5", categoryId: "profesores", type: "image", title: "Lehrkräfte und Personal (5)", description: "", url: "ceec50/assets/profesores5.jpg", year: "1993" },
    { id: "profesores6", categoryId: "profesores", type: "image", title: "Lehrkräfte und Personal (6)", description: "", url: "ceec50/assets/profesores6.jpg", year: "1994" },
    { id: "profesores7", categoryId: "profesores", type: "image", title: "Lehrkräfte und Personal (7)", description: "", url: "ceec50/assets/profesores7.jpg", year: "1996" },
    { id: "profesores8", categoryId: "profesores", type: "image", title: "Lehrkräfte und Personal (8)", description: "", url: "ceec50/assets/profesores8.jpg", year: "1992" },
    { id: "profesores9", categoryId: "profesores", type: "image", title: "Lehrkräfte und Personal (9)", description: "", url: "ceec50/assets/profesores9.jpg", year: "1980" },
    { id: "profesores10", categoryId: "profesores", type: "image", title: "Lehrkräfte und Personal (10)", description: "", url: "ceec50/assets/profesores10.jpg", year: "1999" },

    // ================= 5. SCHÜLER UND SCHULLEBEN =================
    { id: "alumnos1", categoryId: "alumnos", type: "image", title: "Schüler im Unterricht und Gemeinschaft (1)", description: "", url: "ceec50/assets/alumnos1.jpg", year: "1989" },

    // ================= 6. AUFFÜHRUNGEN UND THEATER =================
    { id: "teatro1", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (1)", description: "", url: "ceec50/assets/teatro1.jpg", year: "1992" },
    { id: "teatro2", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (2)", description: "", url: "ceec50/assets/teatro2.jpg", year: "1993" },
    { id: "teatro3", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (3)", description: "", url: "ceec50/assets/teatro3.jpg", year: "1995" },
    { id: "teatro4", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (4)", description: "", url: "ceec50/assets/teatro4.jpg", year: "1994" },
    { id: "teatro5", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (5)", description: "", url: "ceec50/assets/teatro5.jpg", year: "1996" },
    { id: "teatro6", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (6)", description: "", url: "ceec50/assets/teatro6.jpg", year: "1995" },
    { id: "teatro7", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (7)", description: "", url: "ceec50/assets/teatro7.jpg", year: "1997" },
    { id: "teatro8", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (8)", description: "", url: "ceec50/assets/teatro8.jpg", year: "1996" },
    { id: "teatro9", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (9)", description: "", url: "ceec50/assets/teatro9.jpg", year: "1997" },
    { id: "teatro10", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (10)", description: "", url: "ceec50/assets/teatro10.jpg", year: "1998" },
    { id: "teatro11", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (11)", description: "", url: "ceec50/assets/teatro11.jpg", year: "1998" },
    { id: "teatro12", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (12)", description: "", url: "ceec50/assets/teatro12.jpg", year: "1997" },
    { id: "teatro13", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (13)", description: "", url: "ceec50/assets/teatro13.jpg", year: "1999" },
    { id: "teatro14", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (14)", description: "", url: "ceec50/assets/teatro14.jpg", year: "1998" },
    { id: "teatro15", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (15)", description: "", url: "ceec50/assets/teatro15.jpg", year: "1999" },
    { id: "teatro16", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (16)", description: "", url: "ceec50/assets/teatro16.jpg", year: "1999" },
    { id: "teatro17", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (17)", description: "", url: "ceec50/assets/teatro17.jpg", year: "1998" },
    { id: "teatro18", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (18)", description: "", url: "ceec50/assets/teatro18.jpg", year: "1999" },
    { id: "teatro19", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (19)", description: "", url: "ceec50/assets/teatro19.jpg", year: "1999" },
    { id: "teatro20", categoryId: "teatro-danzas", type: "image", title: "Theater und Tanzaufführung (20)", description: "", url: "ceec50/assets/teatro20.jpg", year: "1999" },

    // ================= 7. JUBILÄUMSFEIERN =================
    { id: "aniversario1", categoryId: "aniversarios", type: "image", title: "Jubiläumsfeier (1)", description: "", url: "ceec50/assets/aniversario1.jpg", year: "1995" },
    { id: "aniversario1b", categoryId: "aniversarios", type: "image", title: "Jubiläumsfeier (1b)", description: "", url: "ceec50/assets/aniversario1b.jpg", year: "1995" },
    { id: "aniversario2", categoryId: "aniversarios", type: "image", title: "Jubiläumsfeier (2)", description: "", url: "ceec50/assets/aniversario2.jpg", year: "1997" },

    // ================= 8. WEITERE HISTORISCHE ERINNERUNGEN =================
    { id: "nn", categoryId: "otros", type: "image", title: "Erinnerung an das Zentrum (1)", description: "", url: "ceec50/assets/nn.jpg", year: "1982" },
    { id: "nn2", categoryId: "otros", type: "image", title: "Erinnerung an das Zentrum (2)", description: "", url: "ceec50/assets/nn2.jpg", year: "1983" }
  ]
};
