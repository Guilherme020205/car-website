"use client"
import { api } from "@/services/api";
import { CardVehicle } from './cardVehicle/cardVehicle';
import { useEffect, useState, useRef } from "react";
import { Filtro } from './../filtro/filtro';
import { Select, SelectItem } from "@heroui/select";
import Link from "next/link"

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

export const maxItensPage = [
    { id: 10, label: "10" },
    { id: 20, label: "20" },
    { id: 50, label: "50" },
    { id: 80, label: "80" },
    { id: 100, label: "100" }
    // Isso ta feio eu sei kkk
]

export default function Vehicles() {
    const [vehicles, setVehicles] = useState<Vehicles[]>([]);
    const [filteredVehicles, setFilteredVehicles] = useState<Vehicles[]>([]); // Estado para veículos filtrados

    const [valueChangeMinOrMaxVehicle, setValueChangeMinOrMaxVehicle] = useState("20");

    const [maxVehicles, setMaxVehicles] = useState(Number(valueChangeMinOrMaxVehicle));
    const [minVehicles, setMinVehicles] = useState(0);
    const divBaseRef = useRef<HTMLDivElement | null>(null);

    async function fetchVehicles(filters = {}) {
        try {
            const response = await api.post("/search", filters);
            const data = response.data;
            setVehicles(data);
            setFilteredVehicles(data); // Atualiza veículos filtrados
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
        setMinVehicles(minVehicles - Number(valueChangeMinOrMaxVehicle));
        setMaxVehicles(maxVehicles - Number(valueChangeMinOrMaxVehicle));
        scrollToDivBase();
    }

    function changeMaxVehicle() {
        setMinVehicles(minVehicles + Number(valueChangeMinOrMaxVehicle));
        setMaxVehicles(maxVehicles + Number(valueChangeMinOrMaxVehicle));
        scrollToDivBase();
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value; // Valor selecionado do evento
        setValueChangeMinOrMaxVehicle(selectedValue); // Atualiza o estado  
        setMaxVehicles(Number(selectedValue)); // Atualiza o valor de maxVehicles com o novo valor
        setMinVehicles(0); // Reseta o minVehicles para 0
    };

    return (
        <div className="flex flex-col gap-10">
            <Filtro onUpdatePreferences={fetchVehicles} />
            <div>
                <div ref={divBaseRef} className="mb-4 ">
                    <Select
                        isRequired
                        className="max-w-xs"
                        label="Selecione"
                        defaultSelectedKeys={["2"]}
                        onChange={handleSelectChange} // Adicionando o evento onChange
                    >
                        {maxItensPage.map((maxItens) => (
                            <SelectItem key={maxItens.id} value={maxItens.label}>{maxItens.label}</SelectItem> // Passando o value correto
                        ))}
                    </Select>
                </div>
                {filteredVehicles.length > 0 ? (
                    <ul className="mx-4 grid grid-cols-5 gap-4 justify-between">
                        {filteredVehicles.slice(minVehicles, maxVehicles).map(vehicle => ( 
                            <li key={vehicle.id}>
                                <Link href={`ViewVehicle/${vehicle.id}`}>

                                    <CardVehicle
                                        imgVeihcle={vehicle.baner1}
                                        logoVeihcle={vehicle.mark.banner}
                                        nameVeihcle={vehicle.model}
                                        kmVeihcle={vehicle.km}
                                        yearVeihcle={vehicle.year}
                                        priceVeihcle={vehicle.price.toLocaleString('pt-BR')}
                                    />
                                    
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 select-none">Buscando...</p>
                )}
                {/* Verificar se há veículos para paginar */}
                <div className="flex flex-row justify-center gap-10 my-20 select-none">
                    <button
                        onClick={changeMinVehicle}
                        disabled={minVehicles === 0 || filteredVehicles.length === 0}
                        className={`px-4 py-2 hover:bg-red-100 rounded border-red-700 border-[1px] ${minVehicles === 0 || filteredVehicles.length === 0 ? "invisible" : "visible"}`}
                    >
                        Voltar
                    </button>

                    <button
                        onClick={changeMaxVehicle}
                        disabled={maxVehicles >= filteredVehicles.length || filteredVehicles.length === 0}
                        className={`px-4 py-2 hover:bg-green-100 rounded border-green-700 border-[1px] ${maxVehicles >= filteredVehicles.length || filteredVehicles.length === 0 ? "invisible" : "visible"}`}
                    >
                        Avançar
                    </button>
                </div>
            </div>
        </div>
    );
}
