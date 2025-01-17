"use client"
import { api } from "@/services/api"
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NetWorks {
    id: string;
    linck: string;
    type_id: string;
}
interface TypeNetWorks {
    id: string;
    name: string;
    banner: string;
}

export default function etWorks() {

    const [netWorks, setnetWorks] = useState<NetWorks[]>([]);
    const [typeNetWorks, setTypeNetWorks] = useState<TypeNetWorks[]>([]);

    useEffect(() => {
        async function listNetWorks() {
            try {
                const response = await api.get('/rede/list')
                setnetWorks(response.data)
                // console.log(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        listNetWorks()

        async function listTypeNetWorks() {
            try {
                const response = await api.get('/typerede/list')
                setTypeNetWorks(response.data)
                // console.log(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        listTypeNetWorks()

    }, []);
    
    function getTypeBanner(type_id: string): string {
        const typeNetWork = typeNetWorks.find(type => type.id === type_id);
        return typeNetWork ? typeNetWork.banner : ''; // Retorna a URL da imagem ou uma string vazia
    }

    return (
        <div className="flex justify-center mx-16">

            <div className="flex flex-col gap-0 items-center"> {/*div redes*/}
                <h2 className="font-bold">Nossas redes sociais</h2>
                {netWorks.length > 0 ? (
                    <ul className="flex flex-row gap-5">
                        {netWorks.map(netWork => (
                            <li key={netWork.id} className="mb-4">
                                <a
                                    href={netWork.linck}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black flex items-center p-2 hover:bg-gray-300 transition duration-[1.5s] max-w-[300px] rounded"
                                >
                                    <Image
                                        src={getTypeBanner(netWork.type_id) }
                                        width={40}
                                        height={40}
                                        className="object-cover max-h-[40px] max-w-[40px] rounded-md"
                                        alt="Image banner"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No networks...</p>
                )}


            </div>
        </div>
    );
} 
