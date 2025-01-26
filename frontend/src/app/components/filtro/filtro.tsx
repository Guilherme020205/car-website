import { Input } from "@heroui/input";
import { IoIosSearch } from "react-icons/io";
import { ListTypes } from './listTypes/listTypes';
import { useState } from "react";

export function Filtro() {

    const [searchValue, setSearchValue] = useState('')
    const [valueMaxVeihcle, setValueMaxVeihcle] = useState('')
    const [valueMinVeihcle, setValueMinVeihcle] = useState('')

    function RecebendoPreferencias() {
        console.log(searchValue)
        console.log(valueMaxVeihcle)
        console.log(valueMinVeihcle)
    }

    function LimpandoPreferencias() {
        setSearchValue("")
        setValueMaxVeihcle("")
        setValueMinVeihcle("")

        console.log(searchValue)
        console.log(valueMaxVeihcle)
        console.log(valueMinVeihcle)
    }

    return (
        <div className="flex flex-row justify-between gap-10">

            <div className="flex flex-row w-full h-[50px] max-w-[500px] bg-gray-100 rounded-md">
                <Input
                    label="Pesquisar..."
                    type="text"
                    required
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button onClick={RecebendoPreferencias} className="bg-green-200 rounded-e-md"><IoIosSearch className="w-16" /></button>
            </div>

            <div className="flex flex-col max-w-[800px] gap">
                <div className="flex max-w-[800px] justify-end">
                    <div className="flex max-w-60 bg-red-800 justify-center text-white font-bold p-2 rounded-t-md">
                        <button onClick={LimpandoPreferencias}>Remover preferências</button>
                    </div>
                </div>
                <div className="flex flex-row px-2 py-4 gap-10 border-[2px] border-red-900">
                    <div className="flex flex-col p-10 gap-4">

                        <div className="flex flex-row gap-8">
                            <Input label="De" type="number" className="w-[200px]"
                                value={valueMinVeihcle}
                                onChange={(e) => setValueMinVeihcle(e.target.value)}
                            />
                            <Input label="Até" type="number" className="w-[200px]"
                                value={valueMaxVeihcle}
                                onChange={(e) => setValueMaxVeihcle(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-row gap-10">

                            <div>
                                <p className="font-bold text-[15px]">Combustível</p>
                                <ListTypes nameType="fuels"></ListTypes>
                            </div>

                            <div>
                                <p className="font-bold text-[15px]">Carroceria</p>
                                <ListTypes nameType="bodyworks"></ListTypes>
                            </div>
                            <div>
                                <p className="font-bold text-[15px]">Câmbio</p>
                                <ListTypes nameType="exchanges"></ListTypes>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative">
                        <div className="absolute bottom-0 right-0 flex max-w-80 bg-white justify-center text-black font-bold p-2 rounded-md border-[2px] border-red-900">
                            <button onClick={RecebendoPreferencias} className="text-[12px]">Adicionar/Atualizar preferências</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
} 