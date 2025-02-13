'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { api } from '@/services/api';

export default function Home() {
    const [banner, setBanner] = useState<{ linck: string } | null>(null);

    useEffect(() => {
        async function fetchBanner() {
            try {
                const response = await api.get('/banner');
                //console.log(response.data); // Resposta do db
                if (response.data && response.data.length > 0) {
                    setBanner(response.data[0]);  // Pega o primeiro item do array
                }
            } catch (error) {
                console.error('Error fetching banner:', error);
            }
        }

        fetchBanner();
    }, []); 
    
    return (
        <div className="
                select-none background-web flex items-center justify-center mb-7 py-40
                md:py-40
            "
        >
            {banner && banner.linck ? (
                <Image
                    src={banner.linck}
                    width={1000}
                    height={400}
                    className="
                        object-cover max-h-[100%] max-w-[350px]
                        md:max-w-[1000px] md:rounded-md
                    "
                    alt="Image banner"
                />
            ) : (
                <p className='text-gray-500 select-none'>carregando...</p>
            )}
        </div>
    );
}
