import React, { createContext, ReactNode, useContext, useState } from 'react';

interface TourContextType {
  hasSeenTour: Record<string, boolean>;
  markTourAsSeen: (pageName: string) => void;
  resetTour: (pageName: string) => void;
  resetAllTours: () => void;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

interface TourProviderProps {
  children: ReactNode;
}

export const TourProvider: React.FC<TourProviderProps> = ({ children }) => {
  const [hasSeenTour, setHasSeenTour] = useState<Record<string, boolean>>(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('fingest-tours');
    return saved ? JSON.parse(saved) : {};
  });

  // Mark a specific tour as seen
  const markTourAsSeen = (pageName: string) => {
    const updated = { ...hasSeenTour, [pageName]: true };
    setHasSeenTour(updated);
    localStorage.setItem('fingest-tours', JSON.stringify(updated));
  };

  // Reset a specific tour
  const resetTour = (pageName: string) => {
    const updated = { ...hasSeenTour };
    delete updated[pageName];
    setHasSeenTour(updated);
    localStorage.setItem('fingest-tours', JSON.stringify(updated));
  };

  // Reset all tours
  const resetAllTours = () => {
    setHasSeenTour({});
    localStorage.removeItem('fingest-tours');
  };

  return (
    <TourContext.Provider value={{ hasSeenTour, markTourAsSeen, resetTour, resetAllTours }}>
      {children}
    </TourContext.Provider>
  );
};

// Custom hook to use the tour context
export const useTourContext = () => {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error('useTourContext must be used within a TourProvider');
  }
  return context;
};
