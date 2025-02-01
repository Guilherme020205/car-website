"use client"

import { api } from "@/services/api"
import { useEffect, useState } from 'react';
 import CardVehicle from './Cardcontact/Cardcontact'
import CardnetWork from "./CardnetWork/CardnetWork";


interface Contact {
    id: string;
    name: string;
    number: string;
    photo: string;
    // web.whatsapp.com/send?phone=+
}

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

export default function ContactsList() {

    const [contacts, setContacts] = useState<Contact[]>([]);
    const [netWorks, setnetWorks] = useState<NetWorks[]>([]);
    const [typeNetWorks, setTypeNetWorks] = useState<TypeNetWorks[]>([]);

    useEffect(() => {
        async function listContacts() {
            try {
                const response = await api.get('/contact/list')
                setContacts(response.data)
                // console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        listContacts()

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
        <div className="mb-[300px] flex flex-col gap-20 justify-center mx-16">

            {/* div contatos */}
            <div className="flex flex-col items-center mt-10">

                <h2 className="font-bold mb-10 text-3xl text-white">Contato comercial</h2>

                {contacts.length > 0 ? (
                    <ul className="grid grid-cols-2 gap-8">
                        {contacts.map(contacts => (
                            <li key={contacts.id}>
                                <CardVehicle
                                    name={contacts.name}
                                    number={contacts.number}
                                    photo={contacts.photo}
                                />
                            </li>
                        ))}
                    </ul>

                ) : (
                    <p className='text-gray-500 select-none'>carregando...</p>
                )}

            </div>


            {/*div redes*/}

            <div className="flex flex-col items-center">

                <h2 className="font-bold mb-10 text-3xl text-white">Nossas redes sociais</h2>

                {netWorks.length > 0 ? (
                    <ul className="background-card flex flex-row mb-4 justify-center gap-12 items-center py-4 w-[100%] rounded-xl">
                        {netWorks.map(netWork => (
                            <li key={netWork.id}>
                                <CardnetWork
                                    linck={netWork.linck}
                                    photo={getTypeBanner(netWork.type_id) }
                                />
                            </li>
                        ))}
                    </ul>

                ) : (
                    <p className='text-gray-500 select-none'>carregando...</p>
                )}

            </div>

        </div >
    );
} 
