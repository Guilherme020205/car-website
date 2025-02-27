import { Input } from "@heroui/input";
import { IoIosSearch } from "react-icons/io";
import { ListTypes } from "./listTypes/listTypes";
import { useState } from "react";

interface FiltroProps {
  onUpdatePreferences: (preferences: {
    title: string;
    greater_value?: string;
    lowest_value?: string;
    type_fuel?: string[];
    type_exchange?: string[];
    type_bodyWorks?: string[];
  }) => void;
}

export function Filtro({ onUpdatePreferences }: FiltroProps) {
  const [searchValue, setSearchValue] = useState("");
  const [valueMaxVehicle, setValueMaxVehicle] = useState("");
  const [valueMinVehicle, setValueMinVehicle] = useState("");
  const [selectedFuel, setSelectedFuel] = useState<string[]>([]);
  const [selectedExchange, setSelectedExchange] = useState<string[]>([]);
  const [selectedBodyWork, setSelectedBodyWork] = useState<string[]>([]);

  function applyFilters() {
    onUpdatePreferences({
      title: searchValue,
      greater_value: valueMaxVehicle,
      lowest_value: valueMinVehicle,
      type_fuel: selectedFuel,
      type_exchange: selectedExchange,
      type_bodyWorks: selectedBodyWork,
    });
  }

  function clearFilters() {
    setSearchValue("");
    setValueMaxVehicle("");
    setValueMinVehicle("");
    setSelectedFuel([]);
    setSelectedExchange([]);
    setSelectedBodyWork([]);
    onUpdatePreferences({
      title: "",
      greater_value: "",
      lowest_value: "",
      type_fuel: [],
      type_exchange: [],
      type_bodyWorks: [],
    });
  }

  return (
    <div
      className="flex 
        flex-col gap-10
        md:flex-row md:gap-40
        "
    >
      <div
        className="select-none flex bg-gray-100 rounded-md
        flex-row w-full h-[50px] max-w-[500px] 
        "
      >
        <Input
          label="Pesquisar..."
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={applyFilters} className="bg-green-200 rounded-e-md">
          <IoIosSearch className="w-16" />
        </button>
      </div>

      <div className="flex flex-col max-w-[800px]">
        <div className="flex bg-red-800 justify-center text-white font-bold rounded-t-md hover:bg-red-700 
        p-2 max-w-60
        md:p-2 md:max-w-60 
        "
        >
          <button
            onClick={clearFilters}
            className="
          w-screen select-none
          "
          >
            Limpar
          </button>
        </div>

        <div className="flex px-2 py-4 gap-10 border-[2px] border-red-900 
        flex-col
        md:flex-row
        ">
          <div className="flex flex-col 
          p-1 gap-8 mb-5
          md:p-10 md:gap-4
          "
          >
            <div className="flex flex-row gap-8">
              <Input
                label="De"
                type="number"
                className="w-[200px] select-none"
                value={valueMinVehicle}
                onChange={(e) => setValueMinVehicle(e.target.value)}
              />
              <Input
                label="Até"
                type="number"
                className="w-[200px] select-none"
                value={valueMaxVehicle}
                onChange={(e) => setValueMaxVehicle(e.target.value)}
              />
            </div>
            <div className="flex 
            flex-col gap-4
            md:flex-row md:gap-10
            "
            >
              <div>
                <p className="font-bold text-[15px] select-none">Combustível</p>
                <ListTypes
                  nameType="fuels"
                  selectedItems={selectedFuel}
                  onSelect={setSelectedFuel}
                />
              </div>
              <div>
                <p className="font-bold text-[15px] select-none">Carroceria</p>
                <ListTypes
                  nameType="bodyworks"
                  selectedItems={selectedBodyWork}
                  onSelect={setSelectedBodyWork}
                />
              </div>
              <div>
                <p className="font-bold text-[15px] select-none">Câmbio</p>
                <ListTypes
                  nameType="exchanges"
                  selectedItems={selectedExchange}
                  onSelect={setSelectedExchange}
                />
              </div>
            </div>
          </div>

          <div className="flex relative">
            <div className="absolute bottom-0 right-0 flex max-w-80 bg-white justify-center text-black font-bold p-2 rounded-md border-[2px] border-red-900 hover:bg-red-50">
              <button
                onClick={applyFilters}
                className="text-[12px] select-none"
              >
                Adicionar/Atualizar preferências
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
