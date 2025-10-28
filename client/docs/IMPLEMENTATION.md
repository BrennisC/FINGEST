# Implementación de Guías Interactivas con Driver.js

## Visión General

Hemos implementado un completo sistema de guías interactivas (tours) utilizando driver.js en la aplicación FINGEST. Este sistema permite guiar a los usuarios a través de las diferentes funcionalidades de la aplicación, proporcionando explicaciones paso a paso sobre cada elemento de la interfaz.

## Componentes Implementados

1. **Hook personalizado `useTour`**
   - Ubicación: `client/hooks/useTour/index.ts`
   - Proporciona una interfaz para configurar y controlar guías interactivas
   - Gestiona el ciclo de vida del tour, incluyendo inicio, navegación y cierre

2. **Contexto de Tour**
   - Ubicación: `client/context/TourContext.tsx`
   - Rastrea qué tours ha visto cada usuario
   - Persiste el estado en localStorage
   - Proporciona métodos para marcar tours como vistos o para restablecerlos

3. **Componente `TourButton`**
   - Ubicación: `client/components/TourButton.tsx`
   - Botón reutilizable para iniciar tours manualmente
   - Personalizable con variantes y tamaños

4. **Configuraciones de Tours Predefinidas**
   - Ubicación: `client/lib/tours.ts`
   - Contiene definiciones de pasos para cada página
   - Facilita la reutilización y mantenimiento centralizado

5. **Mecanismos de Prevención de Bucles**
   - Estados de control para prevenir múltiples inicializaciones
   - Condiciones de seguridad en los efectos
   - Dependencias adecuadamente configuradas en los hooks

6. **Documentación**
   - Ubicación: `client/docs/TOURS.md`
   - Guía detallada sobre cómo usar el sistema de tours
   - Incluye ejemplos de implementación y mejores prácticas

## Páginas con Tours Implementados

Hemos implementado guías interactivas en las siguientes páginas:

1. **Dashboard** - Tour general del panel principal
2. **Index (Home)** - Introducción a la aplicación
3. **Transactions** - Guía sobre gestión de transacciones
4. **Profile** - Explicación de la configuración del perfil
5. **Login** - Guía del proceso de inicio de sesión
6. **Subcuentas** - Introducción a la gestión de subcuentas

## Características Principales

- **Inicio automático** para nuevos usuarios
- **Botón de ayuda** para iniciar tours manualmente
- **Persistencia** de tours ya vistos
- **Animaciones suaves** de desplazamiento
- **Personalización** de textos y comportamiento
- **Soporte multiidioma** en las descripciones
- **Prevención de bucles infinitos** con estados de control

## Implementación Técnica

La implementación utiliza un enfoque modular que separa:

1. **La lógica de control** (useTour hook)
2. **El estado persistente** (TourContext)
3. **Las definiciones de contenido** (lib/tours.ts)
4. **La interfaz de usuario** (TourButton)

Esto permite una fácil extensión y mantenimiento del sistema.

## Prevención de Bucles Infinitos

La implementación incluye mecanismos para evitar bucles infinitos de renderizado:

1. **Estado de control autoStarted**: Cada página que utiliza tours tiene un estado `autoStarted` para rastrear si el tour ya se ha iniciado automáticamente.

2. **Condiciones de seguridad en useEffect**: Verificamos múltiples condiciones antes de iniciar un tour:

   ```tsx
   if (!hasSeenTour[pageName] && !autoStarted && !isOpen) {
     setAutoStarted(true);
     const timer = setTimeout(() => startTour(), 1000);
     // ...
   }
   ```

3. **Dependencias completas**: Todas las dependencias relevantes están incluidas en el array de dependencias del `useEffect` para prevenir actualizaciones innecesarias.

## Próximos Pasos

Para completar la implementación en toda la aplicación, se recomienda:

1. Implementar tours en las páginas restantes (Courses, FinancialAdvice, Alerts, etc.)
2. Añadir un panel de ayuda centralizado donde los usuarios puedan reiniciar todos los tours
3. Agregar eventos de analítica para medir la efectividad de los tours
4. Considerar tours contextuales para flujos específicos (completar una transacción, crear una subcuenta, etc.)

## Uso del Sistema

Para añadir un tour a una nueva página, consulta la documentación detallada en `client/docs/TOURS.md`, que incluye ejemplos y buenas prácticas.
