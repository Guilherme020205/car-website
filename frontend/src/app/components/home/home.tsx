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
        <div className="background-web min-h-screen max-h-[800px] flex items-center justify-center mb-7">
            {banner && banner.linck ? (
                <Image
                    src={banner.linck}
                    width={1000}
                    height={400}
                    className="object-cover max-h-[400px] max-w-[1000px] rounded-md"
                    alt="Image banner"
                />
            ) : (
                <p className='text-red-700'>Loading banner...</p>
            )}
        </div>
    );
}
