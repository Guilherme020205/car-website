import Image from 'next/image';
import imagem from '../components/img/maps.png'

export default function Location() {
    return (
        <div className='flex flex-col mx-20 items-center my-20'>
            <h1 className='text-4xl font-bold mb-4'>Venha nos visitar</h1>
            <Image
                src={imagem}
                width={1000}
                height={1000}
                alt="Photo"
                className="object-cover max-h-max-w-96 max-w-96 rounded-sm"
            />
        </div>
    )
}