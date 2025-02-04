import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const img1 = "https://s2-g1.glbimg.com/c1tS_axTjV_qDkmMeMs3wYZCgGY=/0x0:5472x3648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/H/v/pTatikTlSIWRuTzd0JwA/j9a6180.jpg"
const img2 = "https://imagens.usp.br/wp-content/uploads/Campus-15-Foto-Marcos-Santos20101220_066.jpg"
const img3 = "https://storage.googleapis.com/dpw/app/uploads/2019/04/lazy-loading-nativo-imagens-iframes_.jpg"
const img4 = "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg"
const img5 = "https://wallpapers.com/images/hd/colorful-pictures-p98b7v38jff03w3r.jpg"

export default function Carrossel_images() {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className="overflow-hidden " ref={emblaRef}>
            <div className="flex">
                <div className="min-w-[1000px] flex-[0 0 100%]">
                    <img src={img1} alt="fff" className='w-[1000px] h-w-[1000px]'  />
                </div>
                <div className="min-w-[1000px] flex-[0 0 100%]">
                    <img src={img2} alt="fff" className='w-[1000px] h-w-[1000px]'/>
                </div>
                <div className="min-w-[1000px] flex-[0 0 100%]">
                    <img src={img3} alt="fff" className='w-[1000px] h-w-[1000px]'/>
                </div>
                <div className="min-w-[1000px] flex-[0 0 100%]">
                    <img src={img4} alt="fff" className='w-[1000px] h-w-[1000px]'/>
                </div>
                <div className="min-w-[1000px] flex-[0 0 100%]">
                    <img src={img5} alt="fff" className='w-[1000px] h-w-[1000px]'/>
                </div>
            </div>
        </div>
    )
}
