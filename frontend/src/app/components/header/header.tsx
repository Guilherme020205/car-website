"use client"
import { api } from "@/services/api"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react';
import FunctionfetchLogo from "../functions/getLogo";

export function Header() {

    const [logoWeb, setLogoWeb] = useState<{ linck: string } | null>(null);
    const [localizacao, setLocalizacao] = useState<{ locationName: string } | null>(null);

    useEffect(() => {
        async function fetchLogo() {
            try {
                // const response = await api.get('/logo')
                // console.log(response.data)
                // if(response.data && response.data.length > 0){
                //     setLogoWeb(response.data[0])
                // }
                const logo = await FunctionfetchLogo();
                if(logo){
                    setLogoWeb(logo)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchLogo()

        async function fetchLocalizacao() {
            try {
                const response = await api.get('/location')
                console.log(response.data[0])
                setLocalizacao(response.data[0])

            } catch (error) {
                console.log(error)
            }
        }
        fetchLocalizacao()

    }, []);

    return (
        <header className="flex bg-white  flex-row h-[80px] justify-between mx-16 items-center">

            {logoWeb && logoWeb.linck? (

                <Image
                // src="https://res.cloudinary.com/dts3okbt6/image/upload/v1736902985/iktpca0gxrzcbyeo43ru.png"
                src={logoWeb.linck}
                alt="Logo"
                width={300}
                height={70}
                className="object-cover max-w-[300px] max-h-[70px] "
                />
            ): (
                <p className='text-gray-500 select-none'>carregando...</p>
            )}


            <div className="flex flex-row mx-36 gap-36">
                <Link href='/' className='hover:destacText2 '>Home</Link>
                <div className="flex flex-row gap-10">
                    <Link href="/Contact" className='hover:destacText2 '>Contatos</Link>
                    <Link href={`${localizacao?.locationName}`} className='hover:destacText2' target="_blank" rel="noopener noreferrer">Localização</Link>
                </div>
            </div>
        </header>
    )
}