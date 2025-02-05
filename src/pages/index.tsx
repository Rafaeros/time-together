import React from "react";
import Header from "./components/Header";
import Galery from "./components/Galery";

const imagePath: string = '/assets/images/';
const images: string[] = [
  imagePath + '1.jpg',
  imagePath + '2.jpg',
  imagePath + '3.jpg',
  imagePath + '4.jpg',
  imagePath + '5.jpg',
  imagePath + '6.jpg',
  imagePath + '7.jpg',
  imagePath + '8.jpg',
  imagePath + '9.jpg',
];

export default function Home() {

  return (
    <div className="bg-gray-700">
      <header>
        <Header />
      </header>
      <main className="flex flex-col items-center justify-center">
        <Galery images={images || []} />
      </main>
    </div>
  );
}