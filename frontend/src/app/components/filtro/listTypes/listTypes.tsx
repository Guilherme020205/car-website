import { api } from '@/services/api';
import { useEffect, useState } from 'react';

interface TypesInfoCar {
  id: string;
  name: string;
}

export function ListTypes({ nameType }: { nameType: string }) {
  const [typeVehicle, setTypeVehicle] = useState<TypesInfoCar[]>([]);


  useEffect(() => {
    async function listTypes(urlType: string) {
      try {
        const response = await api.get(`/${urlType}`);
        console.log(response.data)
        setTypeVehicle(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    listTypes(nameType)

  }, []);

  return (
    <div className="flex flex-row gap-1 items-center">
      {typeVehicle.length > 0 ? (
        <ul className='flex flex-col'>
          {typeVehicle.map(typeVehicle => (
            <li key={typeVehicle.id} className='flex flex-row gap-1 items-center'>
              <input type="radio" id={typeVehicle.id} />
              <p className='text-sm'>{typeVehicle.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-red-700'>carregando filtro...</p>
      )}
    </div>
  );
}
