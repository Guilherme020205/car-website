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
                console.log(response.data); // Resposta do db
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
        <div>
            {banner && banner.linck ? (
                <Image
                    src={banner.linck}
                    width={1000}
                    height={1000}
                    alt="Image banner"
                />
            ) : (
                <p>Loading banner...</p>
            )}
        </div>
    );
}
