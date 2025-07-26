import React, { useState } from 'react';
import { User } from 'lucide-react';

interface ProfilePictureProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBorder?: boolean;
  animated?: boolean;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ 
  size = 'md', 
  className = '', 
  showBorder = true,
  animated = true 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const borderClasses = showBorder 
    ? 'ring-4 ring-primary-500/20 dark:ring-primary-400/30 ring-offset-4 ring-offset-white dark:ring-offset-gray-900' 
    : '';

  const animationClasses = animated 
    ? 'transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-primary-500/25' 
    : '';

  // Using a placeholder image URL - in a real app, you'd use the actual profile image
 // const profileImageUrl = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400";
  const profileImageUrl = "/public/Image/Ass.jpg?auto=compress&cs=tinysrgb&w=400";

  
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Animated background glow */}
      {animated && (
        <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-20 animate-pulse`} />
      )}
      
      {/* Profile image container */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden ${borderClasses} ${animationClasses} bg-gradient-to-br from-primary-500 to-accent-500 p-1`}>
        {!imageError ? (
          <img
            src={profileImageUrl}
            alt="Abhishek Ahire"
            className={`w-full h-full object-cover rounded-full transition-all duration-300 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback avatar with gradient background
          <div className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-accent-500">
            <User className="w-1/2 text-white h-1/2" />
          </div>
        )}
        
        {/* Loading state */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500">
            <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin" />
          </div>
        )}
      </div>
      
      {/* Floating particles effect for larger sizes */}
      {animated && (size === 'lg' || size === 'xl') && (
        <>
          <div className="absolute w-3 h-3 rounded-full -top-2 -right-2 bg-primary-400 animate-bounce opacity-60" style={{ animationDelay: '0s' }} />
          <div className="absolute w-2 h-2 rounded-full -bottom-2 -left-2 bg-accent-400 animate-bounce opacity-60" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-success-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }} />
        </>
      )}
    </div>
  );
};