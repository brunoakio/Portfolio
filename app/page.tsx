import Image from "next/image";
import Bground from "../components/home/background";
import Card from "../components/cards/card";

export default function Home() {
  return (
    <div>
      <Bground bsize='w-screen h-screen bg-cover bg-no-repeat'/>
    </div>
  );
}


const projects = [
  {
    title: 'Project 1',
    description: 'This is a project description',
    classStyle: ''
    
  }
]