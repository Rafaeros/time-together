import React from "react";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from 'next/image';
import heart from '/public/assets/heart.png';

export default function Header() {
   // Memoriza o valor de `startDate` para evitar recriação em cada renderização
   const startDate = useMemo(() => new Date("2023-02-20T00:00:00Z"), []);

   const [timeElapsed, setTimeElapsed] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
 
   // Memoriza a função `calculateTimeElapsed` para evitar recriação em cada renderização
   const calculateTimeElapsed = useCallback(() => {
     const now = new Date();
     const diff = now.getTime() - startDate.getTime();
 
     const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
     const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
     const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((diff % (1000 * 60)) / 1000);
 
     return { years, months, days, hours, minutes, seconds };
   }, [startDate]); // Depende de `startDate`
 
   useEffect(() => {
     const interval = setInterval(() => {
       setTimeElapsed(calculateTimeElapsed());
     }, 1000);
 
     return () => clearInterval(interval);
   }, [calculateTimeElapsed]); // Depende de `calculateTimeElapsed`

  return (
    <nav className="bg-gray-800 shadow border-gray-700">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-row items-center justify-center p-4">
          <h1 className="text-3xl font-bold text-white pr-4">
            Estamos juntos há
          </h1>
          <a href="https://www.youtube.com/watch?v=Hjo7i7OzfoE&list=PLuUylLkt9KQmTW-s1b53SOp0ig-1-h64q" target="_blank">
            <Image
              src={heart}
              alt="Heart"
              width={50}
              height={50}
              className="hover:scale-110 transition duration-300 cursor-pointer animate-pulse"
            />
          </a>
        </div>
        <p className="text-2xl mt-4 text-white pb-10 text-center">
          {timeElapsed.years} anos, {timeElapsed.months} meses, {timeElapsed.days} dias, {timeElapsed.hours} horas, {timeElapsed.minutes} minutos, {timeElapsed.seconds} segundos
        </p>
      </div>
    </nav>
  );
}