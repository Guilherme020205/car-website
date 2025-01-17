import { Input } from "@heroui/input";

export function Fltro() {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row w-full max-w-[500px]">
                <Input label="Pesquisar..." type="text" />
                <button className="bg-green-200">ddddss</button>
                
            </div>
            <div>
                <h2>filtros</h2>
            </div>
        </div>
    )
} 