"use client"
import Image from "next/image"
import { useState } from "react"

export function CardVehicle() {

    const [imgVeihcle, setImgVeihcle] = useState('https://cronos.fiat.com.br/images/Gallery/cronos-precision-design-lateral@3x.webp')
    const [logoVeihcle, setLogoVeihcle] = useState('https://logodownload.org/wp-content/uploads/2014/05/fiat-logo-2.png')
    const [nameVeihcle, setNameVeihcle] = useState('Cronos')
    const [kmVeihcle, setKmVeihcle] = useState('0')
    const [yearVeihcle, setYearVeihcle] = useState('2024/2025')
    const [priceVeihcle, setPriceVeihcle] = useState('53.900')

    return (
        <div className="flex flex-col bg-gray-200 w-[200px] h-[100%] rounded-md gap-2">

            <div>
                <Image
                    src={imgVeihcle}
                    alt="foto_veiculo"
                    width={200}
                    height={200}
                    className="rounded-t-md"
                />
            </div>

            <div className="mx-2">

                <h1 className="text-black font-bold text-[20px] italic">{nameVeihcle}</h1>

                <div className="flex flex-row justify-between items-center ">
                    <div>
                        <Image
                            src={logoVeihcle}
                            alt="logo_marca"
                            width={35}
                            height={35}
                        />
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <h2 className="font-bold text-[20px] italic">{kmVeihcle} km</h2>
                            <p className="text-[10px]">{yearVeihcle}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-1 bg-gray-300 w-[100%] rounded-ee-md rounded-es-md">
                <div className="flex flex-row gap-1 items-center ml-4 my-1">
                    <p className="font-bold text-[20px] italic">R$</p>
                    <p className="font-bold text-[23px] text-red-500 italic">{priceVeihcle}</p>
                </div>
            </div>
        </div>
    )
}