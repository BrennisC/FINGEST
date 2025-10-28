# Guías Interactivas con Driver.js

Este documento explica cómo usar el sistema de guías interactivas (tours) implementado con driver.js en la aplicación FINGEST.

## Índice

1. [Visión General](#visión-general)
2. [Uso Básico](#uso-básico)
3. [Métodos de Implementación](#métodos-de-implementación)
   - [Método Completo](#método-completo)
   - [Método con Pasos Predefinidos](#método-con-pasos-predefinidos)
   - [Método Simplificado](#método-simplificado)
4. [Personalización](#personalización)
5. [Mejores Prácticas](#mejores-prácticas)
6. [Prevención de Bucles Infinitos](#prevención-de-bucles-infinitos)

## Visión General

El sistema de guías interactivas utiliza [driver.js](https://driverjs.com/) para mostrar instrucciones paso a paso a los usuarios, resaltando diferentes elementos de la interfaz. Las guías se pueden iniciar automáticamente la primera vez que un usuario visita una página o manualmente a través de un botón.

## Uso Básico

Para añadir una guía interactiva a una página:

1. Añade clases CSS a los elementos que quieres resaltar
2. Define los pasos del tour con títulos y descripciones
3. Implementa el hook `useTour` o la función `createPageTour`
4. Añade un botón para iniciar el tour manualmente

## Métodos de Implementación

### Método Completo

Implementación completa en el componente de página:

```tsx
import { useEffect } from "react";
import useTour, { TourStep } from "@/hooks/useTour";
import { useTourContext } from "@/context/TourContext";
import TourButton from "@/components/TourButton";

export default function MyPage() {
  const { hasSeenTour, markTourAsSeen } = useTourContext();
  const pageName = "mypage";

  // Define los pasos del tour
  const tourSteps: TourStep[] = [
    {
      element: ".my-section-1", // Selector CSS del elemento
      popover: {
        title: "Título del paso",
        description: "Descripción detallada del elemento",
        side: "bottom", // Ubicación del popover: top, right, bottom, left
      },
    },
    // Más pasos...
  ];

  const { startTour } = useTour({
    steps: tourSteps,
    onClose: () => markTourAsSeen(pageName),
  });

  // Iniciar automáticamente la primera vez
  const [autoStarted, setAutoStarted] = useState(false);

  useEffect(() => {
    if (!hasSeenTour[pageName] && !autoStarted && !isOpen) {
      setAutoStarted(true);
      setTimeout(startTour, 1000);
    }
  }, [hasSeenTour, pageName, startTour, autoStarted, isOpen]);

  return (
    <div>
      {/* Botón para iniciar tour manualmente */}
      <TourButton onClick={startTour} />

      {/* Contenido con clases para el tour */}
      <div className="my-section-1">{/* Contenido... */}</div>
    </div>
  );
}
```

### Método con Pasos Predefinidos

Utilizando pasos del tour predefinidos en `lib/tours.ts`:

```tsx
import { useEffect } from "react";
import useTour from "@/hooks/useTour";
import { useTourContext } from "@/context/TourContext";
import { myPageTourSteps } from "@/lib/tours"; // Importar pasos predefinidos
import TourButton from "@/components/TourButton";

export default function MyPage() {
  const { hasSeenTour, markTourAsSeen } = useTourContext();
  const pageName = "mypage";

  const { startTour } = useTour({
    steps: myPageTourSteps,
    onClose: () => markTourAsSeen(pageName),
  });

  // Iniciar automáticamente la primera vez
  const [autoStarted, setAutoStarted] = useState(false);

  useEffect(() => {
    if (!hasSeenTour[pageName] && !autoStarted && !isOpen) {
      setAutoStarted(true);
      setTimeout(startTour, 1000);
    }
  }, [hasSeenTour, pageName, startTour, autoStarted, isOpen]);

  return (
    <div>
      <TourButton onClick={startTour} />
      {/* Contenido con clases que coincidan con los pasos predefinidos */}
    </div>
  );
}
```

### Método Simplificado

Utilizando un hook useTour directamente con controles de ciclo de vida:

```tsx
import { useState, useEffect } from "react";
import useTour from "@/hooks/useTour";
import { useTourContext } from "@/context/TourContext";
import { myPageTourSteps } from "@/lib/tours";
import TourButton from "@/components/TourButton";

export default function MyPage() {
  const { hasSeenTour, markTourAsSeen } = useTourContext();
  const pageName = "mypage";
  const [autoStarted, setAutoStarted] = useState(false);

  const { startTour, isOpen } = useTour({
    steps: myPageTourSteps,
    onClose: () => markTourAsSeen(pageName),
  });

  // Prevención de bucles infinitos con autoStarted
  useEffect(() => {
    if (!hasSeenTour[pageName] && !autoStarted && !isOpen) {
      setAutoStarted(true);
      setTimeout(() => startTour(), 1000);
    }
  }, [hasSeenTour, pageName, startTour, autoStarted, isOpen]);

  return (
    <div>
      <TourButton onClick={startTour} />
      {/* Contenido con clases que coincidan con los pasos */}
    </div>
  );
}
```

## Personalización

Para personalizar el comportamiento del tour, puedes pasar opciones adicionales al hook `useTour`:

```tsx
const { startTour } = useTour({
  steps: tourSteps,
  onClose: () => markTourAsSeen(pageName),
  showProgress: true, // Mostrar barra de progreso
  showButtons: true, // Mostrar botones de navegación
  nextBtnText: "Siguiente", // Texto del botón siguiente
  prevBtnText: "Anterior", // Texto del botón anterior
  doneBtnText: "Finalizar", // Texto del botón finalizar
  startDelay: 500, // Retraso en ms antes de iniciar
  keyboardControl: true, // Permitir control por teclado
});
```

## Mejores Prácticas

1. **Usa nombres de clases semánticos** para los selectores CSS (ej: `.dashboard-header`, `.profile-form`)

2. **Define pasos en `lib/tours.ts`** para mantener la organización del código y facilitar la reutilización

3. **Mantén las descripciones concisas y útiles** para no abrumar al usuario

4. **Usa la variable autoStarted** para evitar bucles infinitos de renderizado

5. **Incluye isOpen en las dependencias** del useEffect para prevenir múltiples inicios

6. **Añade un `TourButton` visible** para que los usuarios puedan reiniciar el tour cuando lo necesiten

7. **Prueba en diferentes tamaños de pantalla** para asegurar que los elementos resaltados son visibles

8. **Establece `side` y `align` apropiados** para que los popovers no se salgan de la pantalla

## Prevención de Bucles Infinitos

Para evitar el error "Maximum update depth exceeded" común en los tours:

1. **Usa un estado de control**: Añade `const [autoStarted, setAutoStarted] = useState(false)` para marcar si ya se ha iniciado el tour.

2. **Añade condiciones de prevención**: En el useEffect, verifica que:
   - El usuario no ha visto el tour: `!hasSeenTour[pageName]`
   - El tour no se ha iniciado automáticamente: `!autoStarted`
   - El tour no está ya abierto: `!isOpen`

3. **Incluye todas las dependencias**:
   ```tsx
   useEffect(() => {
     if (!hasSeenTour[pageName] && !autoStarted && !isOpen) {
       setAutoStarted(true);
       const timer = setTimeout(() => startTour(), 1000);
       return () => clearTimeout(timer);
     }
   }, [hasSeenTour, pageName, startTour, autoStarted, isOpen]);
   ```

Este enfoque previene que el tour se inicie en bucle causando el error de profundidad máxima de actualización.
