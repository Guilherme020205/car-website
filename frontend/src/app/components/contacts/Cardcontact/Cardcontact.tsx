"use client"

import { api } from "@/services/api"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo_whatsapp from '../../img/79dc31280371b8ffbe56ec656418e122.png'

interface Contact {
    name: string;
    number: string;
    photo: string;
    // web.whatsapp.com/send?phone=+
}
export default function ContactsList({ name, number, photo }: Contact) {



    return (
        <div className="background-card flex flex-row mb-4 justify-items-start gap-4 items-center px-10 py-4 w-[400px] rounded-xl">
            <Image
                src={photo}
                width={70}
                height={70}
                alt="Photo"
                className="object-cover max-h-16 max-w-16 rounded-[100%]"
            />
            <div>
                <a href={`https://web.whatsapp.com/send?phone=+55${number}`} className="flex flex-row justify-center ">
                    <Image
                        src={logo_whatsapp}
                        width={25}
                        height={25}
                        alt="Photo"
                        className="object-cover"
                    />
                    <p className="font-extralight text-white text-xl">{name}</p>
                </a>
            </div>
        </div>
    );
} 
