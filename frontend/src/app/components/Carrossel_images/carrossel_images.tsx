import Image from 'next/image';

import useEmblaCarousel from 'embla-carousel-react'

// const img1 = "https://s2-g1.glbimg.com/c1tS_axTjV_qDkmMeMs3wYZCgGY=/0x0:5472x3648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/H/v/pTatikTlSIWRuTzd0JwA/j9a6180.jpg"
// const img2 = "https://imagens.usp.br/wp-content/uploads/Campus-15-Foto-Marcos-Santos20101220_066.jpg"
// const img3 = "https://storage.googleapis.com/dpw/app/uploads/2019/04/lazy-loading-nativo-imagens-iframes_.jpg"
// const img4 = "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg"
// const img5 = "https://wallpapers.com/images/hd/colorful-pictures-p98b7v38jff03w3r.jpg"
interface CarrosselImagesProps {
    banner1: string;
    banner2: string;
    banner3: string;
    banner4: string;
    banner5: string;
}

export default function Carrossel_images({
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
}: CarrosselImagesProps) {

    const images = [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5
    ]

    // const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const [emblaRef] = useEmblaCarousel({ loop: true })

    return (
        <div className="overflow-hidden " ref={emblaRef}>
            <div className="flex">
                {images.map((img, index) => ( 
                    <div key={index} className="
                    min-w-[100%] flex-[0 0 100%]
                    md:min-w-[1000px] md:flex-[0 0 100%]
                    "
                    >
                        <img src={img} alt={`Slide ${index + 1}`} className=" object-cover transition-all duration-500 cursor-pointer
                        w-full h-[300px] hover:scale-125 
                        md:h-[500px] md:hover:scale-125 
                        "
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
