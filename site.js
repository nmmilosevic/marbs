(() => {
  const cleanCurrentUrl = () => {
    const url = new URL(window.location.href);
    const cleanPath = url.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");

    if (cleanPath !== url.pathname) {
      url.pathname = cleanPath;
      window.history.replaceState({}, "", url);
    }
  };

  cleanCurrentUrl();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = Array.from(document.querySelectorAll(".reveal"));

  revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-order", index % 6);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
})();

(() => {
  const translations = {
    en: {
      title: "Marbella Creative",
      navLabel: "Primary navigation",
      nav: ["Home", "Work", "Services", "Packages", "Contact"],
      heroTitle: "We create content that makes Marbella brands stand out.",
      heroCopy:
        "Websites, social media, and visuals designed to attract more clients for restaurants, real estate, and local businesses in Marbella.",
      heroPrimary: 'View Packages <span>+</span>',
      heroSecondary: "Start a Project",
      introTitle: "Content that gets attention",
      introCopy:
        "In Marbella, image matters. We create visuals, websites, and content that make people stop, look, and choose your business.",
      mosaicLabel: "Restaurant, lifestyle, and hospitality content examples",
      servicesTitle: "What we do",
      services: [
        {
          title: "Social Media Content",
          copy: "We create Instagram content that looks sharp, stays consistent, and keeps your brand active.",
        },
        {
          title: "Website Design Marbella",
          copy: "Clean, modern websites built to convert visitors into clients.",
        },
        {
          title: "Photography & Content Production",
          copy: "Food, products, spaces, lifestyle. Real visuals for businesses that need to stand out.",
        },
        {
          title: "Print Design",
          copy: "Menus, business cards, flyers. Everything aligned with your brand.",
        },
      ],
      packagesTitle: "Simple packages that work",
      packagesCopy: "Clear offers. No complexity.",
      packages: [
        {
          title: "Launch",
          copy: "For small businesses that need a clean presence fast.",
          price: "€790 setup",
          subprice: "€390/month",
          items: ["Brand or logo refresh", "Basic visual direction", "1 Instagram post per month", "Landing page", "Light copywriting", "1 revision"],
          button: "Get Started",
        },
        {
          badge: "Most Popular",
          title: "Grow",
          copy: "For businesses that want consistent visibility.",
          price: "€1,490 setup",
          subprice: "€790/month",
          items: ["Brand direction", "10 Instagram posts per month", "Story templates", "5 page website", "Print basics", "2 revisions"],
          button: "Most Popular",
        },
        {
          title: "Scale",
          copy: "For brands that want full control of their image.",
          price: "€2,490 setup",
          subprice: "€1,490/month",
          items: [
            "Everything branded daily, done for you",
            "Full creative direction",
            "20 content assets per month",
            "Monthly content shoot",
            "Website up to 8 pages",
            "Print design pack",
            "Priority support",
          ],
          button: "Start Project",
        },
      ],
      note: "No long-term contract · Limited availability",
      processTitle: "How it works",
      process: [
        { title: "Plan", copy: "We understand your business and define what you need." },
        { title: "Create", copy: "We design your content, visuals, and website." },
        { title: "Launch", copy: "Everything goes live, clean and ready." },
        { title: "Grow", copy: "We improve and scale your presence." },
      ],
      ctaTitle: "Built for Marbella businesses",
      ctaCopy:
        "Restaurants, beach clubs, real estate, and local brands all compete on image here. We help you stand out with content and design that attracts clients.",
      ctaButton: 'Start your project <span>+</span>',
      contactTitle: "Let's build something that gets you noticed",
      contactCopy: "Tell us about your project and we'll come back with a clear plan.",
      phone: "Phone",
      formName: "Your Name",
      formNamePlaceholder: "Your Name",
      formProject: "Project",
      formProjectPlaceholder: "Tell us about your project...",
      formButton: 'Send Message <span>+</span>',
      footerLocation: "Based in Marbella, Spain",
    },
    es: {
      title: "Marbella Creative",
      navLabel: "Navegación principal",
      nav: ["Inicio", "Proyectos", "Servicios", "Paquetes", "Contacto"],
      heroTitle: "Creamos contenido que hace destacar a las marcas de Marbella.",
      heroCopy:
        "Webs, redes sociales y visuales pensados para atraer más clientes a restaurantes, inmobiliarias y negocios locales en Marbella.",
      heroPrimary: 'Ver paquetes <span>+</span>',
      heroSecondary: "Empezar un proyecto",
      introTitle: "Contenido que llama la atención",
      introCopy:
        "En Marbella, la imagen importa. Creamos visuales, webs y contenido que hacen que la gente se detenga, mire y elija tu negocio.",
      mosaicLabel: "Ejemplos de contenido para restaurantes, estilo de vida y hostelería",
      servicesTitle: "Qué hacemos",
      services: [
        {
          title: "Contenido para redes sociales",
          copy: "Creamos contenido para Instagram con una imagen cuidada, coherente y siempre activa.",
        },
        {
          title: "Diseño web en Marbella",
          copy: "Webs limpias y modernas creadas para convertir visitantes en clientes.",
        },
        {
          title: "Fotografía y producción de contenido",
          copy: "Comida, productos, espacios y estilo de vida. Visuales reales para negocios que necesitan destacar.",
        },
        {
          title: "Diseño impreso",
          copy: "Menús, tarjetas de visita y flyers. Todo alineado con tu marca.",
        },
      ],
      packagesTitle: "Paquetes simples que funcionan",
      packagesCopy: "Ofertas claras. Sin complicaciones.",
      packages: [
        {
          title: "Launch",
          copy: "Para pequeños negocios que necesitan una presencia limpia rápidamente.",
          price: "€790 inicial",
          subprice: "€390/mes",
          items: ["Refresh de marca o logo", "Dirección visual básica", "1 post de Instagram al mes", "Landing page", "Copywriting ligero", "1 revisión"],
          button: "Empezar",
        },
        {
          badge: "Más popular",
          title: "Grow",
          copy: "Para negocios que quieren visibilidad constante.",
          price: "€1,490 inicial",
          subprice: "€790/mes",
          items: ["Dirección de marca", "10 posts de Instagram al mes", "Plantillas para stories", "Web de 5 páginas", "Básicos de imprenta", "2 revisiones"],
          button: "Más popular",
        },
        {
          title: "Scale",
          copy: "Para marcas que quieren control total de su imagen.",
          price: "€2,490 inicial",
          subprice: "€1,490/mes",
          items: [
            "Todo tu branding diario, hecho por nosotros",
            "Dirección creativa completa",
            "20 piezas de contenido al mes",
            "Sesión mensual de contenido",
            "Web de hasta 8 páginas",
            "Pack de diseño impreso",
            "Soporte prioritario",
          ],
          button: "Iniciar proyecto",
        },
      ],
      note: "Sin contrato a largo plazo · Disponibilidad limitada",
      processTitle: "Cómo funciona",
      process: [
        { title: "Planificar", copy: "Entendemos tu negocio y definimos lo que necesitas." },
        { title: "Crear", copy: "Diseñamos tu contenido, tus visuales y tu web." },
        { title: "Lanzar", copy: "Todo sale online limpio y preparado." },
        { title: "Crecer", copy: "Mejoramos y escalamos tu presencia." },
      ],
      ctaTitle: "Creado para negocios de Marbella",
      ctaCopy:
        "Restaurantes, beach clubs, inmobiliarias y marcas locales compiten por imagen. Te ayudamos a destacar con contenido y diseño que atrae clientes.",
      ctaButton: 'Empezar tu proyecto <span>+</span>',
      contactTitle: "Construyamos algo que haga que te vean",
      contactCopy: "Cuéntanos tu proyecto y te responderemos con un plan claro.",
      phone: "Teléfono",
      formName: "Tu nombre",
      formNamePlaceholder: "Tu nombre",
      formProject: "Proyecto",
      formProjectPlaceholder: "Cuéntanos tu proyecto...",
      formButton: 'Enviar mensaje <span>+</span>',
      footerLocation: "Con base en Marbella, España",
    },
  };

  const pageTranslations = {
    en: {
      "work.kicker": "Selected work",
      "work.title": "Visual systems built for Marbella attention spans.",
      "work.copy": "The home page shows the mood. This page explains the method: every shoot, website, menu, and post is designed to make a local business easier to choose in a market where image moves fast.",
      "work.cta": 'Plan a content system <span>+</span>',
      "work.panelKicker": "What the visuals do",
      "work.panelTitle": "They create instant context.",
      "work.panelCopy": "A guest, buyer, or tourist should understand the level of the place before they read a sentence. We build image direction around lighting, texture, menu rhythm, social crops, and page hierarchy.",
      "work.card1Title": "Hospitality content",
      "work.card1Copy": "Food, interiors, staff moments, terraces, drinks, and lifestyle details shaped into a consistent monthly content bank.",
      "work.card2Title": "Real estate visuals",
      "work.card2Copy": "Property pages, neighborhood storytelling, agent content, and premium assets for listings that need to feel credible fast.",
      "work.card3Title": "Launch kits",
      "work.card3Copy": "Logo refresh, landing page, social templates, print basics, and the core copy needed to start selling clearly.",
      "work.splitTitle": "Designed as a repeatable asset, not a one-time post.",
      "work.list1Title": "Shoot once, use everywhere",
      "work.list1Copy": "We plan crops for Instagram, website hero sections, ads, menus, Google profile images, and launch announcements.",
      "work.list2Title": "Make the brand recognizable",
      "work.list2Copy": "Color, contrast, framing, and copy stay consistent so the business becomes easier to remember.",
      "work.list3Title": "Keep it practical",
      "work.list3Copy": "Every asset is delivered in formats your team can actually publish without rebuilding the design each time.",
      "work.finalTitle": "Have a place, product, or service that needs a sharper image?",
      "work.finalCopy": "Send us the business, the current channels, and the goal. We will map the content and page structure that makes sense first.",
      "work.finalButton": 'Start your project <span>+</span>',
      "services.kicker": "Services",
      "services.title": "Creative services that connect the whole brand.",
      "services.copy": "The home page lists what we do. This page explains how each service fits together: content, website, photography, and print are planned as one customer journey.",
      "services.cta": 'Compare packages <span>+</span>',
      "services.card1Title": "Social Media Content",
      "services.card1Copy": "Monthly content built around what your audience needs to see before they book, visit, call, or enquire.",
      "services.card1Item1": "Instagram posts and stories",
      "services.card1Item2": "Content calendars",
      "services.card1Item3": "Reusable visual templates",
      "services.card2Title": "Website Design Marbella",
      "services.card2Copy": "Fast, clear pages that explain the offer, build trust, and move visitors toward contact.",
      "services.card2Item1": "Landing pages and multi-page sites",
      "services.card2Item2": "Conversion-focused structure",
      "services.card2Item3": "Copywriting and visual hierarchy",
      "services.card3Title": "Photography & Content Production",
      "services.card3Copy": "Shoot planning, art direction, and asset delivery for web, social, Google, and print.",
      "services.card3Item1": "Food, product, interiors, and lifestyle",
      "services.card3Item2": "Shot lists for every channel",
      "services.card3Item3": "Edited asset libraries",
      "services.card4Title": "Print Design",
      "services.card4Copy": "Menus, flyers, cards, and branded documents that match the digital presence.",
      "services.card4Item1": "Menus and price lists",
      "services.card4Item2": "Business cards and flyers",
      "services.card4Item3": "Launch and event material",
      "services.processTitle": "How the work moves",
      "services.process1Title": "Audit",
      "services.process1Copy": "We review the current brand, channels, competitors, and what the customer needs to understand first.",
      "services.process2Title": "Direction",
      "services.process2Copy": "We define the visual language, content rhythm, website structure, and priorities.",
      "services.process3Title": "Production",
      "services.process3Copy": "We create the assets, pages, copy, and templates needed for launch or monthly delivery.",
      "services.process4Title": "Refine",
      "services.process4Copy": "We adjust based on the real use: what is published, what converts, and what the team needs next.",
      "services.finalTitle": "Need one service or the whole system?",
      "services.finalCopy": "We can start with one clear priority, then expand into the rest of the brand when the foundation is right.",
      "services.finalButton": 'Ask for a service plan <span>+</span>',
      "packages.kicker": "Packages",
      "packages.title": "Clear creative packages for different stages of visibility.",
      "packages.copy": "The home page shows the prices. This page explains what each package is really for, what it includes, and when it makes sense to move up.",
      "packages.cta": 'Choose with us <span>+</span>',
      "packages.fitTitle": "Which package fits?",
      "packages.fit1Kicker": "Launch fits when",
      "packages.fit1Copy": "You have no clear online presence, need one strong landing page, and want the brand to stop looking unfinished.",
      "packages.fit2Kicker": "Grow fits when",
      "packages.fit2Copy": "You already have demand, but your content and website are inconsistent or not premium enough for Marbella clients.",
      "packages.fit3Kicker": "Scale fits when",
      "packages.fit3Copy": "Your brand needs ongoing creative direction, monthly production, and enough assets to stay visible every week.",
      "packages.includeTitle": "What is included in the way we work",
      "packages.include1Title": "A clear starting point",
      "packages.include1Copy": "We begin with the offer, the customer, the visual level, and the pages or assets that matter first.",
      "packages.include2Title": "A usable delivery",
      "packages.include2Copy": "You get the design, content, and files in practical formats for web, social, and print.",
      "packages.include3Title": "A simple monthly rhythm",
      "packages.include3Copy": "For recurring packages, we keep production predictable so your brand does not disappear after launch.",
      "packages.finalTitle": "Not sure which package is right?",
      "packages.finalCopy": "Send your current website or Instagram. We will tell you which stage you are in and what should be fixed first.",
      "packages.finalButton": 'Get a recommendation <span>+</span>',
      "contact.kicker": "Contact",
      "contact.pageTitle": "Tell us what needs to look sharper.",
      "contact.pageCopy": "Use this page to start the conversation properly. The better the context, the faster we can recommend the right creative direction, package, or first step.",
      "contact.prompt1Title": "Send the current state",
      "contact.prompt1Copy": "Website, Instagram, menu, listing, or any material that shows where the brand is today.",
      "contact.prompt2Title": "Explain the goal",
      "contact.prompt2Copy": "More bookings, a cleaner launch, better listings, stronger social presence, or a complete brand reset.",
      "contact.prompt3Title": "Tell us the timing",
      "contact.prompt3Copy": "Launch dates, monthly content needs, event deadlines, or when the new website needs to go live.",
    },
    es: {
      "work.kicker": "Trabajos seleccionados",
      "work.title": "Sistemas visuales creados para captar atención en Marbella.",
      "work.copy": "La home muestra el estilo. Esta página explica el método: cada sesión, web, menú y post está diseñado para que un negocio local sea más fácil de elegir en un mercado donde la imagen va rápido.",
      "work.cta": 'Planificar un sistema de contenido <span>+</span>',
      "work.panelKicker": "Qué hacen los visuales",
      "work.panelTitle": "Crean contexto al instante.",
      "work.panelCopy": "Un cliente, comprador o turista debe entender el nivel del lugar antes de leer una frase. Construimos la dirección visual alrededor de luz, textura, ritmo de menú, formatos sociales y jerarquía web.",
      "work.card1Title": "Contenido para hostelería",
      "work.card1Copy": "Comida, interiores, equipo, terrazas, bebidas y detalles lifestyle convertidos en un banco mensual de contenido coherente.",
      "work.card2Title": "Visuales inmobiliarios",
      "work.card2Copy": "Páginas de propiedades, storytelling de zona, contenido para agentes y activos premium para listados que necesitan credibilidad rápida.",
      "work.card3Title": "Kits de lanzamiento",
      "work.card3Copy": "Refresh de logo, landing page, plantillas sociales, básicos de imprenta y el copy esencial para empezar a vender con claridad.",
      "work.splitTitle": "Diseñado como un activo repetible, no como un post suelto.",
      "work.list1Title": "Una sesión, muchos usos",
      "work.list1Copy": "Planificamos formatos para Instagram, héroes web, anuncios, menús, perfil de Google y anuncios de lanzamiento.",
      "work.list2Title": "Hacer la marca reconocible",
      "work.list2Copy": "Color, contraste, encuadre y copy se mantienen consistentes para que el negocio sea más fácil de recordar.",
      "work.list3Title": "Mantenerlo práctico",
      "work.list3Copy": "Cada activo se entrega en formatos que tu equipo puede publicar sin reconstruir el diseño cada vez.",
      "work.finalTitle": "¿Tienes un lugar, producto o servicio que necesita una imagen más fuerte?",
      "work.finalCopy": "Envíanos el negocio, los canales actuales y el objetivo. Primero mapearemos la estructura de contenido y página que tiene sentido.",
      "work.finalButton": 'Empezar tu proyecto <span>+</span>',
      "services.kicker": "Servicios",
      "services.title": "Servicios creativos que conectan toda la marca.",
      "services.copy": "La home enumera lo que hacemos. Esta página explica cómo cada servicio encaja: contenido, web, fotografía e imprenta se planifican como un solo recorrido de cliente.",
      "services.cta": 'Comparar paquetes <span>+</span>',
      "services.card1Title": "Contenido para redes sociales",
      "services.card1Copy": "Contenido mensual construido alrededor de lo que tu audiencia necesita ver antes de reservar, visitar, llamar o pedir información.",
      "services.card1Item1": "Posts y stories de Instagram",
      "services.card1Item2": "Calendarios de contenido",
      "services.card1Item3": "Plantillas visuales reutilizables",
      "services.card2Title": "Diseño web en Marbella",
      "services.card2Copy": "Páginas rápidas y claras que explican la oferta, generan confianza y llevan al visitante hacia el contacto.",
      "services.card2Item1": "Landing pages y webs multipágina",
      "services.card2Item2": "Estructura enfocada en conversión",
      "services.card2Item3": "Copywriting y jerarquía visual",
      "services.card3Title": "Fotografía y producción de contenido",
      "services.card3Copy": "Planificación de sesión, dirección artística y entrega de activos para web, redes, Google e imprenta.",
      "services.card3Item1": "Comida, producto, interiores y lifestyle",
      "services.card3Item2": "Shot lists para cada canal",
      "services.card3Item3": "Bibliotecas de activos editados",
      "services.card4Title": "Diseño impreso",
      "services.card4Copy": "Menús, flyers, tarjetas y documentos de marca alineados con la presencia digital.",
      "services.card4Item1": "Menús y listas de precios",
      "services.card4Item2": "Tarjetas de visita y flyers",
      "services.card4Item3": "Material de lanzamiento y eventos",
      "services.processTitle": "Cómo avanza el trabajo",
      "services.process1Title": "Auditoría",
      "services.process1Copy": "Revisamos la marca actual, canales, competidores y lo que el cliente debe entender primero.",
      "services.process2Title": "Dirección",
      "services.process2Copy": "Definimos lenguaje visual, ritmo de contenido, estructura web y prioridades.",
      "services.process3Title": "Producción",
      "services.process3Copy": "Creamos los activos, páginas, copy y plantillas necesarias para el lanzamiento o la entrega mensual.",
      "services.process4Title": "Ajuste",
      "services.process4Copy": "Ajustamos según el uso real: qué se publica, qué convierte y qué necesita el equipo después.",
      "services.finalTitle": "¿Necesitas un servicio o todo el sistema?",
      "services.finalCopy": "Podemos empezar con una prioridad clara y expandir el resto de la marca cuando la base esté bien.",
      "services.finalButton": 'Pedir un plan de servicio <span>+</span>',
      "packages.kicker": "Paquetes",
      "packages.title": "Paquetes creativos claros para distintas etapas de visibilidad.",
      "packages.copy": "La home muestra los precios. Esta página explica para qué sirve cada paquete, qué incluye y cuándo tiene sentido subir de nivel.",
      "packages.cta": 'Elegir con nosotros <span>+</span>',
      "packages.fitTitle": "¿Qué paquete encaja?",
      "packages.fit1Kicker": "Launch encaja cuando",
      "packages.fit1Copy": "No tienes una presencia online clara, necesitas una landing sólida y quieres que la marca deje de parecer inacabada.",
      "packages.fit2Kicker": "Grow encaja cuando",
      "packages.fit2Copy": "Ya tienes demanda, pero tu contenido y web son inconsistentes o no se sienten suficientemente premium para clientes de Marbella.",
      "packages.fit3Kicker": "Scale encaja cuando",
      "packages.fit3Copy": "Tu marca necesita dirección creativa continua, producción mensual y suficientes activos para seguir visible cada semana.",
      "packages.includeTitle": "Qué incluye nuestra forma de trabajar",
      "packages.include1Title": "Un punto de partida claro",
      "packages.include1Copy": "Empezamos por la oferta, el cliente, el nivel visual y las páginas o activos que importan primero.",
      "packages.include2Title": "Una entrega usable",
      "packages.include2Copy": "Recibes diseño, contenido y archivos en formatos prácticos para web, redes e imprenta.",
      "packages.include3Title": "Un ritmo mensual simple",
      "packages.include3Copy": "En paquetes recurrentes, mantenemos una producción predecible para que la marca no desaparezca después del lanzamiento.",
      "packages.finalTitle": "¿No sabes qué paquete elegir?",
      "packages.finalCopy": "Envíanos tu web o Instagram actual. Te diremos en qué etapa estás y qué habría que arreglar primero.",
      "packages.finalButton": 'Recibir una recomendación <span>+</span>',
      "contact.kicker": "Contacto",
      "contact.pageTitle": "Cuéntanos qué necesita verse mejor.",
      "contact.pageCopy": "Usa esta página para empezar bien la conversación. Cuanto mejor sea el contexto, antes podremos recomendar la dirección creativa, paquete o primer paso correcto.",
      "contact.prompt1Title": "Envía el estado actual",
      "contact.prompt1Copy": "Web, Instagram, menú, listing o cualquier material que muestre dónde está la marca hoy.",
      "contact.prompt2Title": "Explica el objetivo",
      "contact.prompt2Copy": "Más reservas, un lanzamiento más limpio, mejores listings, presencia social más fuerte o un reset completo de marca.",
      "contact.prompt3Title": "Cuéntanos los tiempos",
      "contact.prompt3Copy": "Fechas de lanzamiento, necesidades mensuales de contenido, deadlines de eventos o cuándo debe salir la nueva web.",
    },
  };

  const setText = (selector, text) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  };

  const setHtml = (selector, html) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
  };

  const setPlaceholder = (selector, placeholder) => {
    const element = document.querySelector(selector);
    if (element) element.placeholder = placeholder;
  };

  const setActivePage = () => {
    const page = document.body.dataset.page;
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.toggle("current", link.dataset.page === page);
      if (link.dataset.page === page) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const setDocumentTitle = (copy) => {
    const page = document.body.dataset.page;
    const pageLabels = {
      home: copy.nav[0],
      work: copy.nav[1],
      services: copy.nav[2],
      packages: copy.nav[3],
      contact: copy.nav[4],
    };

    document.title = page === "home" ? copy.title : `${pageLabels[page] || copy.title} | ${copy.title}`;
  };

  const applyLanguage = (language) => {
    const copy = translations[language] || translations.en;
    const pageCopy = pageTranslations[language] || pageTranslations.en;
    document.documentElement.lang = language;
    setDocumentTitle(copy);
    document.querySelector(".nav-links")?.setAttribute("aria-label", copy.navLabel);
    document.querySelector(".mosaic")?.setAttribute("aria-label", copy.mosaicLabel);

    document.querySelectorAll(".language-switch button").forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll(".nav-links a").forEach((link, index) => {
      link.textContent = copy.nav[index];
    });

    setText(".hero h1", copy.heroTitle);
    setText(".hero p", copy.heroCopy);
    setHtml(".button-row .primary", copy.heroPrimary);
    setText(".button-row .secondary", copy.heroSecondary);
    setText("#work h2", copy.introTitle);
    setText("#work .section-copy p", copy.introCopy);
    setText("#services h2", copy.servicesTitle);

    document.querySelectorAll(".service").forEach((service, index) => {
      service.querySelector("h3").textContent = copy.services[index].title;
      service.querySelector("p").textContent = copy.services[index].copy;
    });

    setText("#packages .section-copy h2", copy.packagesTitle);
    setText("#packages .section-copy p", copy.packagesCopy);
    document.querySelectorAll(".price-card").forEach((card, index) => {
      const packageCopy = copy.packages[index];
      const badge = card.querySelector(".badge");
      if (badge) badge.textContent = packageCopy.badge;
      card.querySelector("h3").textContent = packageCopy.title;
      card.querySelector("p").textContent = packageCopy.copy;
      card.querySelector("strong").textContent = packageCopy.price;
      card.querySelector(".subprice").textContent = packageCopy.subprice;
      card.querySelectorAll("li").forEach((item, itemIndex) => {
        item.textContent = packageCopy.items[itemIndex];
      });
      card.querySelector(".button").textContent = packageCopy.button;
    });
    setText(".note", copy.note);

    setText(".process h2", copy.processTitle);
    document.querySelectorAll(".process article").forEach((item, index) => {
      item.querySelector("h3").textContent = copy.process[index].title;
      item.querySelector("p").textContent = copy.process[index].copy;
    });

    setText(".cta h2", copy.ctaTitle);
    setText(".cta p", copy.ctaCopy);
    setHtml(".cta .button", copy.ctaButton);
    setText(".contact-copy h2", copy.contactTitle);
    setText(".contact-copy p", copy.contactCopy);
    setText(".contact-details span:nth-of-type(2)", copy.phone);
    setText(".contact-form label:nth-child(1) span", copy.formName);
    setPlaceholder('input[name="name"]', copy.formNamePlaceholder);
    setText(".contact-form label:nth-child(3) span", copy.formProject);
    setPlaceholder('textarea[name="project"]', copy.formProjectPlaceholder);
    setHtml(".contact-form button", copy.formButton);
    setText(".footer span:last-child", copy.footerLocation);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const text = pageCopy[element.dataset.i18n];
      if (text) element.textContent = text;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const html = pageCopy[element.dataset.i18nHtml];
      if (html) element.innerHTML = html;
    });

    setActivePage();

    try {
      localStorage.setItem("marbella-language", language);
    } catch (error) {
      return;
    }
  };

  document.querySelectorAll(".language-switch button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  let storedLanguage = "en";
  try {
    storedLanguage = localStorage.getItem("marbella-language") || "en";
  } catch (error) {
    storedLanguage = "en";
  }

  applyLanguage(storedLanguage);
})();
