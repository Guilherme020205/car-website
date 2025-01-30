"use client"
import { api } from '@/services/api';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Accordion, AccordionItem } from "@heroui/accordion";


interface Vehicles {
  id: string;
  model: string;
  mark_id: string;
  exchange_id: string;
  fuel_id: string;
  bodyWork_id: string;
  km: number;
  year: string;
  price: number;
  description_id: string;
  baner1: string;
  baner2: string;
  baner3: string;
  baner4: string;
  baner5: string;
  create_at: string;
  updated_at: string;
  mark: {
    id: string;
    name: string;
    banner: string;
  };
  fuel: {
    id: string;
    name: string;
  };
  exchange: {
    id: string;
    name: string;
  };
  bodyWork: {
    id: string;
    name: string;
  };
  description: {
    id: string;
    description: string;
  };
}

export default function ViewVehiclePage() {
  const params = useParams();
  const { id } = params;

  const [vehicle, setVehicle] = useState<Vehicles | null>(null);

  useEffect(() => {
    async function getVehicle() {
      try {
        const response = await api.get(`/vehicle/${id}`);
        console.log(response.data);
        setVehicle(response.data[0]); // Assumindo que é o primeiro item do array
      } catch (error) {
        console.log(error);
      }
    }
    getVehicle();
  }, [id]);

  if (!vehicle) return <div>Carregando...</div>;

  return (
    <div>
      <div className='flex flex-col gap-5 mb-20 select-none'>

        <div className="flex gap-0 max-h-[500px] w-full">

          <div className="w-[55%] h-[500px] relative">
            <Image
              src={vehicle.baner1}
              alt={`${vehicle.mark.name} banner`}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 w-[45%] h-[500px]">
            {[vehicle.baner2, vehicle.baner3, vehicle.baner4, vehicle.baner5].map(
              (banner, index) => (
                <div key={index} className="relative w-full h-full">
                  <Image
                    src={banner}
                    alt={`Banner ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>


        <div className='flex flex-col gap-5 mx-20'>
          <div className='flex flex-row justify-between items-start'>

            <div className='flex flex-row gap-7 items-center'>
              <Image
                src={vehicle.mark.banner}
                width={100}
                height={100}
                alt={`${vehicle.mark.name} banner`}
                className="w-[100px]"
              />

              <h1 className='text-gray-700 text-base font-sans'><strong className='text-black text-6xl font-serif'>{vehicle.model}</strong> {vehicle.mark.name}</h1>

            </div>

              <p className='text-gray-500 text-xs select-text'>{vehicle.id}</p>

          </div>

          <div className='flex flex-row justify-between items-center mb-20'>

            <div className='flex flex-col gap-1'>
              <p className='text-4xl'><strong className='text-5xl'>{vehicle.km}</strong><strong>km</strong></p>
              <p className='text-4xl text-gray-700 italic'>{vehicle.year}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='flex flex-row gap-4 text-red-600 text-[60px] italic font-bold'><strong className='text-black not-italic font-normal'>R$</strong>{vehicle.price.toLocaleString('pt-BR')}</p>
            </div>

          </div>

          <div className='flex flex-row justify-center gap-20 mb-20'>
            <p className='flex flex-col text-xl'><strong className='text-3xl text-gray-800 underline'>Combustível</strong> {vehicle.fuel.name}</p>
            <p className='flex flex-col text-xl'><strong className='text-3xl text-gray-800 underline'>Câmbio</strong> {vehicle.exchange.name}</p>
            <p className='flex flex-col text-xl'><strong className='text-3xl text-gray-800 underline'>Carroceria</strong> {vehicle.bodyWork.name}</p>
          </div>

          <div>

            <Accordion variant="splitted" className='w-[80%]'>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                subtitle="Pressione"
                title="Descrição"
              >

                <p className='font-normal m-8'>{vehicle.description.description}</p>

              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </div>
    </div>
  );
}
