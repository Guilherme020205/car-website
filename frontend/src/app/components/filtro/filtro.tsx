import { Input } from "@heroui/input";
import { IoIosSearch } from "react-icons/io";
import { ListTypes } from './listTypes/listTypes';

export function Fltro() {
    return (
        <div className="flex flex-row justify-between">

            <div className="flex flex-row w-full h-[50px] max-w-[500px] bg-gray-100 rounded-md">
                <Input label="Pesquisar..." type="text" />
                <button className="bg-green-200 rounded-e-md"><IoIosSearch className="w-16" /></button>
            </div>

            <div className="flex flex-col">
                <div className="flex max-w-60 bg-red-950 justify-center text-white font-bold p-2 rounded-t-md">
                    <button>Remover preferências</button>
                </div>
                <div className="p-10">

                    <div className="flex flex-row gap-8">
                        <Input label="De" type="number" className="w-[200px]" />
                        <Input label="Até" type="number" className="w-[200px]" />
                    </div>

                    <div>
                        <p>Combustível</p>
                        <ListTypes></ListTypes>
                    </div>

                </div>
            </div>
        </div>
    )
} 