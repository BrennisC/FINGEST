import { useState, useEffect, useCallback } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// Helper function to create driver.js config
const createDriverConfig = (config: any) => config;

// Define a type for tour step
export interface TourStep {
  element: string; // CSS selector for the element
  popover: {
    title: string;
    description: string;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
  };
}

interface UseTourProps {
  steps: TourStep[];
  onClose?: () => void;
  showProgress?: boolean;
  showButtons?: boolean;
  showCloseButton?: boolean;
  autoPlay?: boolean;
  nextBtnText?: string;
  prevBtnText?: string;
  doneBtnText?: string;
  startDelay?: number;
  keyboardControl?: boolean;
}

const useTour = ({
  steps,
  onClose,
  showProgress = true,
  showButtons = true,
  showCloseButton = true,
  autoPlay = false,
  nextBtnText = "Siguiente",
  prevBtnText = "Anterior",
  doneBtnText = "Finalizar",
  startDelay = 500,
  keyboardControl = true,
}: UseTourProps) => {
  const [driverObj, setDriverObj] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [tourInitialized, setTourInitialized] = useState(false);

  // Initialize driver object with steps
  useEffect(() => {
    if (steps?.length) {
      const driverInstance = driver(
        createDriverConfig({
          showProgress,
          showButtons,
          showCloseButton,
          nextBtnText,
          prevBtnText,
          doneBtnText,
          keyboardControl,
          onHighlightStarted: (element) => {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 100,
              behavior: "smooth",
            });
          },
          onDestroyStarted: () => {
            setIsOpen(false);
            if (onClose) onClose();
          },
          steps,
        }),
      );

      setDriverObj(driverInstance);
    }

    return () => {
      if (driverObj) {
        driverObj.destroy();
      }
    };
  }, [
    steps,
    showProgress,
    showButtons,
    showCloseButton,
    nextBtnText,
    prevBtnText,
    doneBtnText,
    onClose,
    keyboardControl,
  ]);

  // Function to start the tour
  const startTour = useCallback(() => {
    if (driverObj && !isOpen) {
      setTimeout(() => {
        try {
          driverObj.drive();
          setIsOpen(true);
        } catch (error) {
          console.error("Error starting tour:", error);
        }
      }, startDelay);
    }
  }, [driverObj, startDelay, isOpen]);

  // Auto-start tour if autoPlay is true
  useEffect(() => {
    if (autoPlay && driverObj && !isOpen && !tourInitialized) {
      setTourInitialized(true);
      startTour();
    }
  }, [autoPlay, driverObj, isOpen, startTour, tourInitialized]);

  // Function to close the tour
  const closeTour = useCallback(() => {
    if (driverObj && isOpen) {
      driverObj.destroy();
      setIsOpen(false);
      if (onClose) onClose();
    }
  }, [driverObj, isOpen, onClose]);

  return { startTour, closeTour, isOpen };
};

// Helper function to create a tour for a page
export const createPageTour = (
  pageName: string,
  steps: TourStep[],
  useTourContext: () => {
    hasSeenTour: Record<string, boolean>;
    markTourAsSeen: (pageName: string) => void;
  },
) => {
  const { hasSeenTour, markTourAsSeen } = useTourContext();
  const [autoStartAttempted, setAutoStartAttempted] = useState(false);

  const { startTour, closeTour, isOpen } = useTour({
    steps,
    onClose: () => {
      markTourAsSeen(pageName);
    },
  });

  // Start tour automatically on first visit (only once)
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!hasSeenTour[pageName] && !autoStartAttempted && !isOpen) {
      setAutoStartAttempted(true);
      timer = setTimeout(() => {
        startTour();
      }, 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return { startTour, closeTour, isOpen };
};

export default useTour;
