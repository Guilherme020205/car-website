"use client"
import Image from "next/image"

export function CardVehicle(
    { imgVeihcle, logoVeihcle, nameVeihcle, kmVeihcle, yearVeihcle, priceVeihcle }:
        { imgVeihcle: string; logoVeihcle: string; nameVeihcle: string; kmVeihcle: number; yearVeihcle: string; priceVeihcle: string; }
) {


    return (
        <div className="select-none flex flex-col bg-gray-200 w-[200px] h-[100%] rounded-md gap-2">

            <div>
                <Image
                    src={imgVeihcle}
                    alt="foto_veiculo"
                    width={200}
                    height={130}
                    className="rounded-t-md max-h-[130px] max-w-[200px] w-[200px] h-[130px]"
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