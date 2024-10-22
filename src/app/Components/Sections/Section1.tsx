'use client'
import { FaArrowRightLong } from "react-icons/fa6";
import SendResume from "../SendResume/SendResume";
import Image from "next/image";

export default function Section1() {
  return (
    <div className="text-white flex flex-col lg:flex-row gap-8 items-center justify-between p-4 lg:p-8">
      <div className="flex flex-col gap-6 max-w-md w-full lg:w-1/2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <p className="text-sm">Novidade: </p>
          <button className="flex items-center justify-center gap-2 text-white rounded-md border-2 border-blue-600 p-2 text-sm w-full sm:w-auto">
            Listagem de empresas <FaArrowRightLong />
          </button>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">Envie seu curriculos automaticamente</h1>
        <p className="text-base lg:text-lg">Envie seus curriculos gratuitamente e de forma automática, para milhares de empresas e profissionais.</p>
        <SendResume />
      </div>
      <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/images/Banner.png"
          alt="imagem"
          width={400}
          height={600}
          className="w-full max-w-[300px] lg:max-w-[400px] h-auto"
        />
      </div>
    </div>
  )
}