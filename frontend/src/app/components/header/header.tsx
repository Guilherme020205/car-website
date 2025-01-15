"use client"
import { api } from "@/services/api"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react';

export function Header() {

    const [logoWeb, setLogoWeb] = useState<{ linck: string } | null>(null);

    useEffect(() => {
        async function fetchLogo() {
            try {
                const response = await api.get('/logo')
                console.log(response.data)
                if(response.data && response.data.length > 0){
                    setLogoWeb(response.data[0])
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchLogo()

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
                <p>Loading logo</p>
            )}


            <div className="flex flex-row mx-36 gap-36">
                <Link href='/'>Home</Link>
                <div className="flex flex-row gap-10">
                    <Link href="contact">Contatos</Link>
                    <Link href="location">Localização</Link>
                </div>
            </div>
        </header>
    )
}