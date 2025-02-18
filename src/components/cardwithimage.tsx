import React from 'react'

interface CardImageProps {
    size: 'small' | 'medium' | 'large';
    text: string;
    image?: string;
}

const CardImages: React.FC<CardImageProps> = ({ text, size, image }) => {
    const sizeClasses = {
        small: 'h-[420px] w-[328px]',
        medium: 'h-[600px] w-[80%]',
        large: 'h-[656px] w-[512px]',
   
    };

    return (
        <div className={`relative bg-gray-200 shadow-lg ${sizeClasses[size]}`}>
            {image && (
                <img 
                    src={`/assets/images/${image}`} 
                    alt={text} 
                    className="w-full h-full object-cover"
                />
            )}
            {text && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                    {text}
                </div>
            )}
        </div>
    );
};

export default CardImages;
