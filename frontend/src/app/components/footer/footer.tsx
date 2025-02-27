"use client";
import { api } from "@/services/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import FunctionfetchLogo from "../functions/getLogo";
import NetWorks from "./../netWorks/netWorks";
import Link from "next/link";
import { Spinner } from "@heroui/spinner";

export function Footer() {
  const [logoWeb, setLogoWeb] = useState<{ linck: string } | null>(null);
  const [localizacao, setLocalizacao] = useState<{
    locationName: string;
  } | null>(null);

  useEffect(() => {
    async function fetchLogo() {
      try {
        const logo = await FunctionfetchLogo();
        if (logo) {
          setLogoWeb(logo);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchLogo();

    async function fetchLocalizacao() {
      try {
        const response = await api.get("/location");
        console.log(response.data[0]);
        setLocalizacao(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLocalizacao();
  }, []);

  return (
    <footer className="">
      <div
        className="
                select-none flex flex-col background-web py-10
                justify-center items-center 
                md:gap-5 md:text-white 
            "
      >
        <div>
          {logoWeb && logoWeb.linck ? (
            <Image
              src={logoWeb.linck}
              alt="Logo"
              width={200}
              height={70}
              className="object-cover max-w-[200px] max-h-[70px] rounded-md"
            />
          ) : (
            // <p className='text-gray-500 select-none'>carregando...</p>
            <div className="flex justify-center">
              <Spinner size="lg" color="danger" />
            </div>
          )}
        </div>
        <NetWorks></NetWorks>
        <div
          className="
                    flex flex-row text-white 
                    gap-10 mt-16
                    md:gap-40 md:mt-0
                "
        >
          <Link href="/" className="hover:destacText ">
            Home
          </Link>
          <Link href="Contact" className="hover:destacText ">
            Contatos
          </Link>
          <Link
            href={`${localizacao?.locationName}`}
            className="hover:destacText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Localização
          </Link>
        </div>

        <div className="bg-white mt-[10px] w-[100%] h-[1px]"></div>
      </div>
    </footer>
  );
}
