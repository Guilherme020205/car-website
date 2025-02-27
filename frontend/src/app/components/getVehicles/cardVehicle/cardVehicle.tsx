"use client";
import Image from "next/image";

export function CardVehicle({
  imgVeihcle,
  logoVeihcle,
  nameVeihcle,
  kmVeihcle,
  yearVeihcle,
  priceVeihcle,
}: {
  imgVeihcle: string;
  logoVeihcle: string;
  nameVeihcle: string;
  kmVeihcle: number;
  yearVeihcle: string;
  priceVeihcle: string;
}) {
  return (
    <div
      className="select-none flex flex-col justify-between bg-gray-200 h-[100%] rounded-md gap-1
        w-[150px]
        md:w-[200px]
        "
    >
      <div>
        <Image
          src={imgVeihcle}
          alt="foto_veiculo"
          width={200}
          height={130}
          className="rounded-t-md 
                    w-[150px] h-[100px] max-w-[150px] max-h-[100px]
                    md:w-[200px] md:h-[130px] md:max-w-[200px] md:max-h-[130px]
                    "
        />
      </div>

      {/* Acima de MD */}
      <div className="mx-2 hidden md:block">
        <h1 className="text-black font-bold text-[20px] italic">
          {nameVeihcle}
        </h1>

        <div className="flex justify-between items-center flex-row">
          <div>
            <Image src={logoVeihcle} alt="logo_marca" width={35} height={35} />
          </div>
          <div>
            <div className="flex flex-col">
              <h2 className="font-bold text-[20px] italic">{kmVeihcle} km</h2>
              <p className="text-[10px]">{yearVeihcle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Abaixo de MD */}
      <div className="mx-2 block md:hidden">
        <h1 className="text-black font-bold text-[20px] italic">
          {nameVeihcle}
        </h1>

        <div className="flex justify-between items-center flex-col gap-2">
          <div>
            <div className="flex flex-row items-center gap-4">
              <Image
                src={logoVeihcle}
                alt="logo_marca"
                width={35}
                height={35}
              />
              <p className="text-[10px]">{yearVeihcle}</p>
            </div>
          </div>
          <h2 className="font-bold text-[20px] italic">{kmVeihcle} km</h2>
        </div>
      </div>

      <div className="flex gap-1 bg-gray-300 w-[100%] rounded-ee-md rounded-es-md">
        <div className="flex flex-row gap-1 items-center ml-4 my-1">
          <p
            className="font-bold italic
                    text-[15px] 
                    md:text-[20px] 
                    "
          >
            R$
          </p>
          <p
            className="font-bold text-red-500 italic
                    text-[18px]
                    md:text-[23px]
                    "
          >
            {priceVeihcle}
          </p>
        </div>
      </div>
    </div>
  );
}
