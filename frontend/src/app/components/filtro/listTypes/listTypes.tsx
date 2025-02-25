import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Spinner } from "@heroui/spinner";

interface TypesInfoCar {
  id: string;
  name: string;
}

interface ListTypesProps {
  nameType: string;
  selectedItems: string[];
  onSelect: React.Dispatch<React.SetStateAction<string[]>>;
}

export function ListTypes({
  nameType,
  selectedItems,
  onSelect,
}: ListTypesProps) {
  const [typeVehicle, setTypeVehicle] = useState<TypesInfoCar[]>([]);

  useEffect(() => {
    async function listTypes(urlType: string) {
      try {
        const response = await api.get(`/${urlType}`);
        // console.log(response.data);
        setTypeVehicle(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    listTypes(nameType);
  }, [nameType]);

  function handleSelect(id: string) {
    if (selectedItems.includes(id)) {
      // Remover o item da seleção
      onSelect(selectedItems.filter((item) => item !== id));
    } else {
      // Adicionar o item à seleção
      onSelect([...selectedItems, id]);
    }
  }

  return (
    <div className="flex flex-row gap-1 items-center">
      {typeVehicle.length > 0 ? (
        <ul className="flex flex-col">
          {typeVehicle.map((typeVehicle) => (
            <li
              key={typeVehicle.id}
              className="flex flex-row gap-1 items-center"
            >
              <input
                type="checkbox"
                id={typeVehicle.id}
                checked={selectedItems.includes(typeVehicle.id)} // Verifica se o item está selecionado
                onChange={() => handleSelect(typeVehicle.id)} // Altera o estado ao selecionar/desmarcar
              />
              <p className="text-sm select-none">{typeVehicle.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        // <p className='text-gray-500 select-none'>carregando filtro...</p>
        <div className="flex justify-center">
          <Spinner size="lg" color="danger" />
        </div>
      )}
    </div>
  );
}
