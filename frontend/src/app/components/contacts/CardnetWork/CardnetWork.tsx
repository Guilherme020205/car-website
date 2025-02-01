"use client"

import Image from 'next/image';

interface NetWorks {
    linck: string;
    photo: string;
}
export default function CardnetWork({ linck, photo }: NetWorks) {



    return (
        <div>
            <a href={linck} className="flex flex-row justify-center ">
                <Image
                    src={photo}
                    width={60}
                    height={60}
                    alt="Photo"
                    className="object-cover"
                />
            </a>
        </div>
    );
} 
