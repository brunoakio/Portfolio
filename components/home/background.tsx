'use client';
import React from 'react';
import Image from 'next/image';
import bground from '../../img/background.webp'

interface BGProps {
    bsize: string;
}

export default function Bground({bsize} : BGProps) {
    return (
    <div>
        <Image className={bsize} src={bground} alt="bground"/>
    </div>
    );
}