"use client"
import { api } from "@/services/api";
import { CardVehicle } from './cardVehicle/cardVehicle';
import { useEffect, useState } from "react";
import { Fltro } from './../filtro/filtro';

export default function Vehicles() {

    const [imgVeihcle, setImgVeihcle] = useState('https://cronos.fiat.com.br/images/Gallery/cronos-precision-design-lateral@3x.webp')
    const [logoVeihcle, setLogoVeihcle] = useState('https://logodownload.org/wp-content/uploads/2014/05/fiat-logo-2.png')
    const [nameVeihcle, setNameVeihcle] = useState('Cronos')
    const [kmVeihcle, setKmVeihcle] = useState('0')
    const [yearVeihcle, setYearVeihcle] = useState('2024/2025')
    const [priceVeihcle, setPriceVeihcle] = useState('53.900')

    return (
        <div className="flex flex-col gap-10">
            <Fltro></Fltro>
             <div className="w-screen grid grid-cols-5 gap-4 justify-between">
                {[...Array(20)].map((_, index) => (
                    <div key={index}>
                        <CardVehicle
                            imgVeihcle={imgVeihcle}
                            logoVeihcle={logoVeihcle}
                            nameVeihcle={nameVeihcle}
                            kmVeihcle={kmVeihcle}
                            yearVeihcle={yearVeihcle}
                            priceVeihcle={priceVeihcle}
                        ></CardVehicle>
                    </div>
                ))}
            </div>

        </div>
    )
}