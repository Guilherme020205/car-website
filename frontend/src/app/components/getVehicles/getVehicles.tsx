"use client"
import { api } from "@/services/api";
import { CardVehicle } from './cardVehicle/cardVehicle';
import { useEffect, useState } from "react";
import { Fltro } from './../filtro/filtro';

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

    const [vehicles, setVehicles] = useState<Vehicles[]>([])
    const valueChangeMinOrMaxVehicle = 20
    const [maxVehicles, setMaxVehicles] = useState(valueChangeMinOrMaxVehicle)
    const [minVehicles, setMinVehicles] = useState(0)

    useEffect(() => {
        async function listVehicle() {
            try {
                const response = await api.post("/search")
                console.log(response.data)
                setVehicles(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        listVehicle()
    }, []);

    async function changeMinVehicle() {
        const novoValorMinimo = (minVehicles - valueChangeMinOrMaxVehicle)
        setMinVehicles(novoValorMinimo)
        const novoValorMaximo = (maxVehicles - valueChangeMinOrMaxVehicle)
        setMaxVehicles(novoValorMaximo)
    }

    async function changeMaxVehicle() {
        const novoValorMinimo = (minVehicles + valueChangeMinOrMaxVehicle)
        setMinVehicles(novoValorMinimo)
        const novoValorMaximo = (maxVehicles + valueChangeMinOrMaxVehicle)
        setMaxVehicles(novoValorMaximo)
    }

    return (
        <div className="flex flex-col gap-10">
            <Fltro></Fltro>
            <div>
                <div id="div-base">
                    {/* Esse fica sem nada dentro mesmo serve para direcionar após paginar a tela*/}
                </div>
                {vehicles.length > 0 ? (
                    <ul className="mx-4 grid grid-cols-5 gap-4 justify-between ">
                        {vehicles.slice(minVehicles, maxVehicles).map(vehicles => (
                            <li key={vehicles.id}>
                                <CardVehicle
                                    imgVeihcle={vehicles.baner1}
                                    logoVeihcle={vehicles.mark.banner}
                                    nameVeihcle={vehicles.model}
                                    kmVeihcle={vehicles.km}
                                    yearVeihcle={vehicles.year}
                                    priceVeihcle={vehicles.price}
                                ></CardVehicle>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Carregando ...</p>
                )}

                <div className="flex flex-row justify-center gap-10 my-20 select-none">
                    <button onClick={changeMinVehicle}
                        disabled={minVehicles == 0} // Desativa o botão se o limite for o máximo
                        className={`px-4 py-2 hover:bg-red-100 rounded border-red-700 border-[1px]  ${minVehicles == 0
                            ? "invisible"
                            : "visible"
                            }`}
                    >
                        Voltar
                    </button>

                    <button onClick={changeMaxVehicle}
                        disabled={maxVehicles >= vehicles.length} // Desativa o botão quando atingir o limite máximo
                        className={`px-4 py-2 hover:bg-green-100 rounded border-green-700 border-[1px] ${maxVehicles >= vehicles.length
                            ? "invisible"
                            : "visible"
                            }`}
                    >
                        Avançar
                    </button>

                </div>
            </div>

        </div>
    )
}