"use client"
import { api } from "@/services/api";
import { CardVehicle } from './cardVehicle/cardVehicle';
import { useEffect, useState, useRef } from "react";
import { Filtro } from './../filtro/filtro';

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

export default function Vehicles() {
    const [vehicles, setVehicles] = useState<Vehicles[]>([]);
    const valueChangeMinOrMaxVehicle = 20;
    const [maxVehicles, setMaxVehicles] = useState(valueChangeMinOrMaxVehicle);
    const [minVehicles, setMinVehicles] = useState(0);
    const divBaseRef = useRef<HTMLDivElement | null>(null);

    async function fetchVehicles(filters = {}) {
        try {
            const response = await api.post("/search", filters);
            setVehicles(response.data);
        } catch (error) {
            console.error("Erro ao buscar veículos:", error);
        }
    }

    useEffect(() => {
        fetchVehicles();
    }, []);

    const scrollToDivBase = () => {
        if (divBaseRef.current) {
            divBaseRef.current.scrollIntoView({ behavior: "auto", block: "start" });
        }
    };

    function changeMinVehicle() {
        setMinVehicles(minVehicles - valueChangeMinOrMaxVehicle);
        setMaxVehicles(maxVehicles - valueChangeMinOrMaxVehicle);
        scrollToDivBase();
    }

    function changeMaxVehicle() {
        setMinVehicles(minVehicles + valueChangeMinOrMaxVehicle);
        setMaxVehicles(maxVehicles + valueChangeMinOrMaxVehicle);
        scrollToDivBase();
    }

    return (
        <div className="flex flex-col gap-10">
            <Filtro onUpdatePreferences={fetchVehicles} />
            <div>
                <div ref={divBaseRef} className="h-1"></div>
                {vehicles.length > 0 ? (
                    <ul className="mx-4 grid grid-cols-5 gap-4 justify-between">
                        {vehicles.slice(minVehicles, maxVehicles).map(vehicle => (
                            <li key={vehicle.id}>
                                <CardVehicle
                                    imgVeihcle={vehicle.baner1}
                                    logoVeihcle={vehicle.mark.banner}
                                    nameVeihcle={vehicle.model}
                                    kmVeihcle={vehicle.km}
                                    yearVeihcle={vehicle.year}
                                    priceVeihcle={vehicle.price}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-gray-500 select-none'>carregando...</p>
                )}

                <div className="flex flex-row justify-center gap-10 my-20 select-none">
                    <button onClick={changeMinVehicle} disabled={minVehicles === 0} className="px-4 py-2 hover:bg-red-100 rounded border-red-700 border-[1px]">
                        Voltar
                    </button>
                    <button onClick={changeMaxVehicle} disabled={maxVehicles >= vehicles.length} className="px-4 py-2 hover:bg-green-100 rounded border-green-700 border-[1px]">
                        Avançar
                    </button>
                </div>
            </div>
        </div>
    );
}