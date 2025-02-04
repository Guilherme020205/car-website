"use client"
import { api } from '@/services/api';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FunctionfetchLogo from "../functions/getLogo";
import NetWorks from './../netWorks/netWorks';
import Link from 'next/link';

export function Footer() {

    const [logoWeb, setLogoWeb] = useState<{ linck: string } | null>(null);
    const [localizacao, setLocalizacao] = useState<{ locationName: string } | null>(null);

    useEffect(() => {
        async function fetchLogo() {
            try {
                const logo = await FunctionfetchLogo();
                if (logo) {
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
        <footer className="flex flex-col gap-5 h-screen max-h-[300px] background-web justify-center items-center text-white">

            <div>
                {logoWeb && logoWeb.linck ? (

                    <Image
                        src={logoWeb.linck}
                        alt="Logo"
                        width={200}
                        height={70}
                        className="object-cover max-w-[200px] max-h-[70px] rounded-md"
                    />
                ) : (
                    <p className='text-gray-500 select-none'>carregando...</p>
                )}



            </div>
            <NetWorks></NetWorks>
            <div className="flex flex-row gap-40">
                <Link href='/' className='hover:destacText '>Home</Link>
                <Link href="contact" className='hover:destacText '>Contatos</Link>
                <Link href={`${localizacao?.locationName}`} className='hover:destacText' target="_blank" rel="noopener noreferrer">Localização</Link>
            </div>

            <div className='bg-white mt-[10px] w-[100%] h-[1px]'></div>
        </footer>
    )
}