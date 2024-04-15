'use client';

import { StaticImageData } from 'next/image';
import React from 'react';
import  Image  from 'next/image';

interface CardProps {
    title: string;
    description: string;
    classStyle?: string;

}

export default function Card({title, description, classStyle}: CardProps) {
    return (
      <div className={classStyle}>
        
        <div>
          <div className={classStyle}>{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
      </div>
    );
  }