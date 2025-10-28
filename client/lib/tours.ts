import { TourStep } from "@/hooks/useTour";

// Tour step configurations for each page
// These can be imported and used in their respective pages

export const dashboardTourSteps: TourStep[] = [
  {
    element: ".dashboard-heading",
    popover: {
      title: "Dashboard",
      description: "Esta es la vista general de tu información financiera.",
      side: "bottom",
    },
  },
  {
    element: ".dashboard-tabs",
    popover: {
      title: "Pestañas de navegación",
      description:
        "Usa estas pestañas para navegar entre diferentes vistas de tu información financiera.",
      side: "bottom",
    },
  },
  {
    element: ".dashboard-stats",
    popover: {
      title: "Estadísticas principales",
      description:
        "Aquí puedes ver un resumen de tus balances, ingresos y gastos.",
      side: "top",
    },
  },
  {
    element: ".dashboard-transactions",
    popover: {
      title: "Transacciones recientes",
      description: "Lista de tus últimas actividades financieras.",
      side: "left",
    },
  },
  {
    element: ".dashboard-alerts",
    popover: {
      title: "Alertas y recordatorios",
      description:
        "Notificaciones importantes sobre el estado de tus finanzas.",
      side: "left",
    },
  },
];

export const indexTourSteps: TourStep[] = [
  {
    element: ".hero-section",
    popover: {
      title: "Bienvenido a FINGEST",
      description: "Aquí comienza tu viaje hacia un mejor manejo financiero.",
      side: "bottom",
    },
  },
  {
    element: ".features-section",
    popover: {
      title: "Nuestras características",
      description: "Descubre las poderosas herramientas que tenemos para ti.",
      side: "top",
    },
  },
  {
    element: ".cta-section",
    popover: {
      title: "¡Comienza ahora!",
      description: "Da el primer paso hacia tu bienestar financiero.",
      side: "top",
    },
  },
];

export const transactionsTourSteps: TourStep[] = [
  {
    element: ".transactions-header",
    popover: {
      title: "Transacciones",
      description:
        "Aquí puedes ver y administrar todas tus transacciones financieras.",
      side: "bottom",
    },
  },
  {
    element: ".add-transaction-btn",
    popover: {
      title: "Añadir Transacción",
      description: "Haz clic aquí para registrar una nueva transacción.",
      side: "left",
    },
  },
  {
    element: ".transactions-filters",
    popover: {
      title: "Filtros",
      description: "Filtra tus transacciones por tipo o búsqueda.",
      side: "bottom",
    },
  },
  {
    element: ".transactions-table",
    popover: {
      title: "Lista de Transacciones",
      description: "Visualiza todas tus transacciones con sus detalles.",
      side: "top",
    },
  },
];

export const profileTourSteps: TourStep[] = [
  {
    element: ".profile-header",
    popover: {
      title: "Mi Perfil",
      description: "Aquí puedes ver y administrar tu información personal.",
      side: "bottom",
    },
  },
  {
    element: ".profile-tabs",
    popover: {
      title: "Secciones del Perfil",
      description: "Navega entre las diferentes secciones de tu perfil.",
      side: "bottom",
    },
  },
  {
    element: ".profile-general",
    popover: {
      title: "Información General",
      description: "Revisa y actualiza tu información personal.",
      side: "right",
    },
  },
  {
    element: ".profile-security",
    popover: {
      title: "Seguridad",
      description: "Gestiona tus credenciales de acceso y seguridad.",
      side: "left",
      align: "start",
    },
  },
];

export const loginTourSteps: TourStep[] = [
  {
    element: ".login-logo",
    popover: {
      title: "Bienvenido a FinGest",
      description: "El asistente financiero que te acompaña en cada paso.",
      side: "bottom",
    },
  },
  {
    element: ".login-form",
    popover: {
      title: "Iniciar sesión",
      description: "Ingresa tus credenciales para acceder a tu cuenta.",
      side: "right",
    },
  },
  {
    element: ".login-email",
    popover: {
      title: "Correo Electrónico",
      description: "Ingresa el correo con el que te registraste.",
      side: "bottom",
    },
  },
  {
    element: ".login-password",
    popover: {
      title: "Contraseña",
      description: "Tu contraseña personal de acceso.",
      side: "top",
    },
  },
  {
    element: ".login-button",
    popover: {
      title: "Iniciar Sesión",
      description: "Haz clic aquí para acceder a tu cuenta.",
      side: "top",
    },
  },
  {
    element: ".login-register",
    popover: {
      title: "¿No tienes cuenta?",
      description:
        "Regístrate rápidamente para comenzar a usar nuestros servicios.",
      side: "top",
    },
  },
];

export const subAccountsTourSteps: TourStep[] = [
  {
    element: ".subcuentas-header",
    popover: {
      title: "Subcuentas",
      description: "Administra tus diferentes cuentas y fondos separados.",
      side: "bottom",
    },
  },
  {
    element: ".subcuentas-list",
    popover: {
      title: "Tus Subcuentas",
      description: "Visualiza todas tus subcuentas y sus balances actuales.",
      side: "top",
    },
  },
];

export const alertsTourSteps: TourStep[] = [
  {
    element: ".alerts-header",
    popover: {
      title: "Alertas y Recordatorios",
      description: "Mantente al día con notificaciones importantes.",
      side: "bottom",
    },
  },
  {
    element: ".alerts-list",
    popover: {
      title: "Tus Alertas",
      description: "Revisa todas tus alertas financieras activas.",
      side: "left",
    },
  },
];

export const financialAdviceTourSteps: TourStep[] = [
  {
    element: ".advice-header",
    popover: {
      title: "Consejos Financieros",
      description: "Recomendaciones personalizadas para mejorar tus finanzas.",
      side: "bottom",
    },
  },
  {
    element: ".advice-cards",
    popover: {
      title: "Recomendaciones",
      description: "Consejos basados en tu comportamiento financiero actual.",
      side: "top",
    },
  },
];

export const coursesTourSteps: TourStep[] = [
  {
    element: ".courses-header",
    popover: {
      title: "Cursos Financieros",
      description: "Aprende más sobre finanzas personales y estrategias de inversión.",
      side: "bottom",
    },
  },
  {
    element: ".courses-list",
    popover: {
      title: "Catálogo de Cursos",
      description: "Explora nuestros cursos para mejorar tus conocimientos financieros.",
      side: "left",
    },
  },
];
