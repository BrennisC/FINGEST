import { TourStep } from "@/hooks/useTour";

// Tour step configurations for each page
// These can be imported and used in their respective pages
// Incluye explicaciones de las heurísticas de Nielsen y leyes de Gestalt

export const dashboardTourSteps: TourStep[] = [
  {
    element: ".dashboard-heading",
    popover: {
      title: "Dashboard [Nielsen #1: Visibilidad del sistema]",
      description:
        "Esta es la vista general de tu información financiera. Siempre sabrás dónde te encuentras gracias al título destacado.",
      side: "bottom",
    },
  },
  {
    element: ".dashboard-tabs",
    popover: {
      title: "Pestañas de navegación [Ley de continuidad - Gestalt]",
      description:
        "Las pestañas están alineadas horizontalmente, creando una línea visual continua que facilita la navegación entre secciones relacionadas.",
      side: "bottom",
    },
  },
  {
    element: ".dashboard-stats",
    popover: {
      title: "Estadísticas principales [Ley de similitud - Gestalt]",
      description:
        "Las tarjetas de estadísticas tienen el mismo diseño visual, indicándote que son elementos de la misma categoría informativa.",
      side: "top",
    },
  },
  {
    element: ".dashboard-transactions",
    popover: {
      title: "Transacciones recientes [Nielsen #8: Diseño minimalista]",
      description:
        "Lista clara y concisa de tus actividades financieras, mostrando solo la información más relevante sin elementos distractores.",
      side: "left",
    },
  },
  {
    element: ".dashboard-alerts",
    popover: {
      title: "Alertas y recordatorios [Nielsen #1: Visibilidad del estado]",
      description:
        "Estas notificaciones te mantienen informado sobre eventos importantes, cumpliendo con la primera heurística de Nielsen.",
      side: "left",
    },
  },
  {
    element: ".dashboard-layout",
    popover: {
      title: "Ley de simetría (Gestalt)",
      description:
        "La distribución equilibrada de elementos en el dashboard crea armonía visual y facilita la comprensión de la información a primera vista.",
      side: "bottom",
    },
  },
];

export const indexTourSteps: TourStep[] = [
  {
    element: ".hero-section",
    popover: {
      title: "Bienvenido a FINGEST",
      description:
        "Aquí comienza tu viaje hacia un mejor manejo financiero. [Nielsen #8: Diseño estético y minimalista]",
      side: "bottom",
    },
  },
  {
    element: ".features-section",
    popover: {
      title: "Ley de Proximidad (Gestalt)",
      description:
        "Los elementos agrupados se perciben como un conjunto. Observa cómo las características similares están ubicadas cerca para formar unidades cognitivas.",
      side: "top",
    },
  },
  {
    element: ".cta-section",
    popover: {
      title: "¡Comienza ahora! [Nielsen #3: Control y libertad]",
      description:
        "El botón destacado te da libertad para iniciar cuando estés listo, con opción de volver atrás si lo necesitas.",
      side: "top",
    },
  },
  {
    element: ".features-cards",
    popover: {
      title: "Ley de Similitud (Gestalt)",
      description:
        "Las tarjetas con el mismo estilo visual indican que cumplen funciones similares, ayudándote a entender la interfaz más rápidamente.",
      side: "left",
    },
  },
  {
    element: ".navigation-menu",
    popover: {
      title: "Nielsen #4: Consistencia y estándares",
      description:
        "El menú de navegación mantiene una estructura familiar y consistente, usando convenciones estándar que facilitan su uso.",
      side: "bottom",
    },
  },
];

export const transactionsTourSteps: TourStep[] = [
  {
    element: ".transactions-header",
    popover: {
      title: "Transacciones [Nielsen #1: Visibilidad del sistema]",
      description:
        "El encabezado claramente etiquetado te permite saber dónde te encuentras dentro de la aplicación en todo momento.",
      side: "bottom",
    },
  },
  {
    element: ".add-transaction-btn",
    popover: {
      title: "Añadir Transacción [Ley de figura-fondo - Gestalt]",
      description:
        "El botón de acción principal destaca visualmente del fondo, atrayendo tu atención hacia la función más importante de esta página.",
      side: "left",
    },
  },
  {
    element: ".transactions-filters",
    popover: {
      title: "Filtros [Nielsen #7: Flexibilidad y eficiencia]",
      description:
        "Estos controles permiten a usuarios avanzados encontrar rápidamente información específica, aumentando la eficiencia de uso.",
      side: "bottom",
    },
  },
  {
    element: ".transactions-table",
    popover: {
      title: "Lista de Transacciones [Ley de proximidad - Gestalt]",
      description:
        "Las transacciones relacionadas están agrupadas visualmente, permitiéndote percibir rápidamente patrones y relaciones entre tus movimientos financieros.",
      side: "top",
    },
  },
  {
    element: ".transaction-sorting",
    popover: {
      title: "Ordenamiento [Nielsen #6: Reconocer mejor que recordar]",
      description:
        "Las opciones de ordenamiento están visibles, sin necesidad de que recuerdes comandos específicos para organizar tus datos.",
      side: "right",
    },
  },
];

export const profileTourSteps: TourStep[] = [
  {
    element: ".profile-header",
    popover: {
      title: "Mi Perfil [Nielsen #2: Lenguaje del usuario]",
      description:
        "La interfaz utiliza un lenguaje claro y familiar, evitando términos técnicos innecesarios.",
      side: "bottom",
    },
  },
  {
    element: ".profile-tabs",
    popover: {
      title: "Secciones del Perfil [Ley de continuidad - Gestalt]",
      description:
        "Las pestañas crean una línea visual que guía tu mirada de izquierda a derecha, facilitando la comprensión de las opciones disponibles.",
      side: "bottom",
    },
  },
  {
    element: ".profile-general",
    popover: {
      title: "Información General [Ley de proximidad - Gestalt]",
      description:
        "Los campos relacionados están agrupados visualmente, permitiéndote identificar rápidamente bloques de información relacionada.",
      side: "right",
    },
  },
  {
    element: ".profile-security",
    popover: {
      title: "Seguridad [Nielsen #5: Prevención de errores]",
      description:
        "Esta sección incluye validaciones que previenen problemas de seguridad antes de que ocurran.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".profile-form",
    popover: {
      title: "Formulario [Nielsen #3: Control y libertad]",
      description:
        "Puedes editar tus datos con libertad y cancelar los cambios en cualquier momento, dándote control sobre tus acciones.",
      side: "right",
    },
  },
];

export const loginTourSteps: TourStep[] = [
  {
    element: ".login-logo",
    popover: {
      title: "Bienvenido a FinGest",
      description:
        "El asistente financiero que te acompaña en cada paso. [Nielsen #2: Lenguaje del usuario]",
      side: "bottom",
    },
  },
  {
    element: ".login-form",
    popover: {
      title: "Ley de proximidad (Gestalt)",
      description:
        "Los campos de correo y contraseña están agrupados visualmente para que tu cerebro los perciba como un conjunto relacionado, facilitando su comprensión.",
      side: "right",
    },
  },
  {
    element: ".login-email",
    popover: {
      title: "Correo Electrónico [Nielsen #6: Reconocer mejor que recordar]",
      description:
        "El campo incluye un placeholder que te ayuda a identificarlo sin esfuerzo de memoria.",
      side: "bottom",
    },
  },
  {
    element: ".login-password",
    popover: {
      title: "Contraseña [Nielsen #5: Prevención de errores]",
      description:
        "La interfaz oculta la contraseña por defecto y te ofrece validación en tiempo real para prevenir errores.",
      side: "top",
    },
  },
  {
    element: ".login-button",
    popover: {
      title: "Ley de figura-fondo (Gestalt)",
      description:
        "El botón destaca visualmente sobre el fondo, siguiendo la ley figura-fondo de Gestalt, para dirigir tu atención hacia la acción principal.",
      side: "top",
    },
  },
  {
    element: ".login-register",
    popover: {
      title: "¿No tienes cuenta? [Nielsen #7: Flexibilidad y eficiencia]",
      description:
        "Acceso directo al registro, sin necesidad de búsquedas adicionales, mejorando la eficiencia para nuevos usuarios.",
      side: "top",
    },
  },
  {
    element: ".login-forgot-password",
    popover: {
      title: "¿Olvidaste tu contraseña? [Nielsen #9: Ayudar en errores]",
      description:
        "Proporciona una solución clara para recuperar el acceso, siguiendo la heurística de Nielsen sobre recuperación de errores.",
      side: "top",
    },
  },
  {
    element: ".login-form-container",
    popover: {
      title: "Ley de cierre (Gestalt)",
      description:
        "Aunque el borde del formulario está sutilmente marcado, tu cerebro 'completa' visualmente la forma, percibiéndola como una unidad completa.",
      side: "left",
    },
  },
];

export const subAccountsTourSteps: TourStep[] = [
  {
    element: ".subcuentas-header",
    popover: {
      title: "Subcuentas [Nielsen #1: Visibilidad del sistema]",
      description:
        "El encabezado claramente etiquetado te permite saber que estás en la sección de subcuentas.",
      side: "bottom",
    },
  },
  {
    element: ".subcuentas-list",
    popover: {
      title: "Tus Subcuentas [Ley de similitud - Gestalt]",
      description:
        "Cada subcuenta presenta un formato visual idéntico, permitiéndote identificar rápidamente que son elementos del mismo tipo.",
      side: "top",
    },
  },
  {
    element: ".add-subcuenta-btn",
    popover: {
      title: "Crear subcuenta [Ley de figura-fondo - Gestalt]",
      description:
        "El botón destaca visualmente del entorno, atrayendo tu atención hacia la acción principal de esta sección.",
      side: "left",
    },
  },
  {
    element: ".subcuenta-balance",
    popover: {
      title: "Balances [Nielsen #4: Consistencia]",
      description:
        "El formato de los balances se muestra de manera consistente en toda la aplicación, facilitando su reconocimiento.",
      side: "right",
    },
  },
];

export const alertsTourSteps: TourStep[] = [
  {
    element: ".alerts-header",
    popover: {
      title: "Alertas y Recordatorios [Nielsen #1: Visibilidad del sistema]",
      description:
        "Esta sección te mantiene informado sobre eventos importantes relacionados con tus finanzas.",
      side: "bottom",
    },
  },
  {
    element: ".alerts-list",
    popover: {
      title: "Tus Alertas [Ley de proximidad - Gestalt]",
      description:
        "Las alertas similares están agrupadas visualmente, facilitando la identificación de patrones y prioridades.",
      side: "left",
    },
  },
  {
    element: ".alert-priority",
    popover: {
      title: "Prioridad [Ley de similitud - Gestalt]",
      description:
        "Los códigos de color consistentes te ayudan a identificar rápidamente la importancia de cada alerta.",
      side: "top",
    },
  },
  {
    element: ".alerts-settings",
    popover: {
      title: "Configuración [Nielsen #7: Flexibilidad y eficiencia]",
      description:
        "Personaliza qué alertas recibir y cómo, adaptando la experiencia a tus necesidades específicas.",
      side: "right",
    },
  },
];

export const financialAdviceTourSteps: TourStep[] = [
  {
    element: ".advice-header",
    popover: {
      title: "Consejos Financieros [Nielsen #2: Lenguaje del usuario]",
      description:
        "Recomendaciones personalizadas en un lenguaje claro y accesible, sin jerga financiera compleja.",
      side: "bottom",
    },
  },
  {
    element: ".advice-cards",
    popover: {
      title: "Recomendaciones [Ley de similitud - Gestalt]",
      description:
        "Los consejos similares comparten el mismo formato visual, permitiéndote identificar rápidamente categorías de recomendaciones.",
      side: "top",
    },
  },
  {
    element: ".advice-personalized",
    popover: {
      title: "Personalización [Nielsen #8: Diseño minimalista]",
      description:
        "La información se presenta de forma clara y directa, sin elementos innecesarios que distraigan de los consejos importantes.",
      side: "left",
    },
  },
  {
    element: ".advice-action-buttons",
    popover: {
      title: "Acciones [Nielsen #7: Flexibilidad y eficiencia]",
      description:
        "Botones que te permiten implementar directamente los consejos, ahorrando tiempo y aumentando la eficiencia.",
      side: "bottom",
    },
  },
];

export const coursesTourSteps: TourStep[] = [
  {
    element: ".courses-header",
    popover: {
      title: "Cursos Financieros [Nielsen #10: Ayuda y documentación]",
      description:
        "Recursos educativos diseñados para aumentar tus conocimientos financieros, siguiendo la heurística de Nielsen sobre documentación útil.",
      side: "bottom",
    },
  },
  {
    element: ".courses-list",
    popover: {
      title: "Catálogo de Cursos [Ley de proximidad - Gestalt]",
      description:
        "Los cursos están agrupados visualmente por categorías, facilitando la búsqueda de contenido relacionado con tus intereses.",
      side: "left",
    },
  },
  {
    element: ".course-difficulty",
    popover: {
      title: "Nivel de dificultad [Ley de similitud - Gestalt]",
      description:
        "Los indicadores visuales consistentes te permiten identificar rápidamente la complejidad de cada curso.",
      side: "top",
    },
  },
  {
    element: ".course-progress",
    popover: {
      title: "Progreso [Nielsen #1: Visibilidad del sistema]",
      description:
        "Indicadores claros te muestran cuánto has avanzado en cada curso, manteniéndote informado de tu estado actual.",
      side: "bottom",
    },
  },
  {
    element: ".course-search",
    popover: {
      title: "Búsqueda [Nielsen #7: Flexibilidad y eficiencia]",
      description:
        "La función de búsqueda permite a usuarios avanzados encontrar rápidamente contenido específico sin navegar por todo el catálogo.",
      side: "right",
    },
  },
];

export const HeaderTourSteps: TourStep[] = [
  {
    element: ".header",
    popover: {
      title: "Ley de proximidad y de similitud (Gestalt)",
      description:
        "Los elementos relacionados están agrupados visualmente (proximidad) y comparten características de diseño (similitud), facilitando su identificación como parte de la navegación principal.",
      side: "bottom",
    },
  },
  {
    element: ".header-logo",
    popover: {
      title: "Logo [Nielsen #4: Consistencia y estándares]",
      description:
        "El logo siempre aparece en la misma ubicación en todas las páginas, siguiendo estándares de diseño web que facilitan la orientación.",
      side: "right",
    },
  },
  {
    element: ".header-nav",
    popover: {
      title: "Navegación [Ley de continuidad - Gestalt]",
      description:
        "Los elementos de navegación están alineados horizontalmente, creando una línea visual que guía tu mirada a través de las opciones disponibles.",
      side: "bottom",
    },
  },
  {
    element: ".header-user",
    popover: {
      title: "Perfil de usuario [Ley de figura-fondo - Gestalt]",
      description:
        "El avatar de usuario destaca visualmente contra el fondo, siguiendo la ley figura-fondo que dirige tu atención a este elemento importante.",
      side: "left",
    },
  },
  {
    element: ".header-notifications",
    popover: {
      title: "Notificaciones [Nielsen #1: Visibilidad del sistema]",
      description:
        "El indicador de notificaciones te mantiene informado sobre eventos importantes, cumpliendo con la primera heurística de Nielsen.",
      side: "bottom",
    },
  },
];
