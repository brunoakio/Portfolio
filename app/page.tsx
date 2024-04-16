import Image from "next/image";
import Bground from "../components/home/background";
import Card from "../components/cards/card";



export default function Home() {
  return (
    
      <div>
        <div className="border-4 rounded-lg p-8 animate-borderColor w-96 h-42">
          <Card title="Project 1" description="teste"/>
        </div>
      </div>
    
  );
}


