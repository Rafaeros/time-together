import React from "react";
import Image from 'next/image';

interface GaleryProps {
    images: string[];
}

export default function Galery({ images = [] }: GaleryProps) {
    if (!images.length) {
        return <p className="text-white">Nenhuma imagem disponível</p>;
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold p-10 text-center text-white">
                Nossas fotos juntos
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-10">
                {images.map((image, index) => (
                    <div key={index} className="flex items-center justify-center bg-white p-4 shadow-md rounded hover:scale-105 transition duration-300">
                        <Image src={image} alt={`Imagem ${index + 1}`} width={300} height={100} className="h-56 sm:h-72 md:h-80 lg:h-96" />
                    </div>
                ))}
            </div>
        </div>
    );
}