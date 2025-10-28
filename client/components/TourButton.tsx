import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TourButtonProps {
  onClick: () => void;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children?: React.ReactNode;
}

const TourButton: React.FC<TourButtonProps> = ({
  onClick,
  className,
  variant = 'outline',
  size = 'icon',
  children,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={cn('rounded-full', className)}
      title="Iniciar guía interactiva"
      aria-label="Iniciar guía interactiva"
    >
      {children || <HelpCircle className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  );
};

export default TourButton;
