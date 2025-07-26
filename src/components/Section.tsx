import React from 'react';
import { PageTransition, useInView } from './PageTransition';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id={id} ref={ref} className={`min-h-screen py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTransition isVisible={isInView} direction="up">
          {title && (
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 via-primary-600 to-accent-600 dark:from-white dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              {title}
            </h2>
          )}
        </PageTransition>
        <PageTransition isVisible={isInView} direction="up" delay={200}>
          {children}
        </PageTransition>
      </div>
    </section>
  );
};