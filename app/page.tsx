"use client";

import { FaGithub } from "react-icons/fa";
import Logo from "@/components/ui/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FileListing from "@/index.json";
import { ChevronRight, FolderCode } from "lucide-react";
import Link from "next/link";
import File from "@/components/ui/file";
import { Button } from "@/components/ui/button";

export type FileType = {
  nome: string;
  versione: string | null;
  link: string;
};

type FileList = {
  candidatura: {
    verbali_esterni: FileType[];
    verbali_interni: FileType[];
    documenti_generali: FileType[];
  };
  rtb: {
    verbali_esterni: FileType[];
    verbali_interni: FileType[];
    documenti_generali: FileType[];
  };
  pb: {
    verbali_esterni: FileType[];
    verbali_interni: FileType[];
    documenti_generali: FileType[];
  };
};

export default function Home() {
  const fileListing: FileList = FileListing;

  return (
    <>
      <header className='flex flex-col justify-center items-center mx-7'>
        <div className='max-w-[400px] w-full mt-10 mb-5'>
          <Logo />
        </div>
        <h2 className='scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0 text-center'>
          Every line of code is worth the SWEat.
        </h2>
        <h3 className='max-w-[85%] text-lg text-muted-foreground text-center mt-2'>
          Sito di presentazione del progetto didattico di Ingegneria del
          Software (2024-25) erogato dal CdL in Informatica dell&apos;Università
          degli Studi di Padova, svolto dal gruppo 12 del primo lotto
        </h3>
        <div className='flex flex-row items-center justify-center mt-5 space-x-5'>
          <Button asChild>
            <Link href='https://github.com/SWEatUNIPD/' target='_blank'>
              <FaGithub />
              Github
            </Link>
          </Button>
          <Button variant='secondary' asChild>
            <Link
              href='https://www.math.unipd.it/~tullio/IS-1/2024/Progetto/C4.pdf'
              target='_blank'
            >
              <FolderCode />
              Capitolato
            </Link>
          </Button>
        </div>
      </header>
      <main className='flex flex-col mx-7 space-y-5 mt-10'>
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className='flex flex-row items-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
                <ChevronRight color='#04E824' size={32} strokeWidth={3} />
                RTB
              </h2>
            </CardTitle>
            <CardDescription>
              Documenti relativi alla prima revisione del progetto:
              &quot;Requirements and Technology Baseline&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              Verbali interni
            </h3>
            <div className='w-full'>
              {fileListing.rtb.verbali_interni?.map((element, idx) => (
                <File
                  key={idx}
                  nome={element.nome}
                  versione={element.versione}
                  link={element.link}
                />
              ))}
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Verbali esterni
            </h3>
            <div className='w-full'>
              {fileListing.rtb.verbali_esterni?.map((element, idx) => (
                <File
                  key={idx}
                  nome={element.nome}
                  versione={element.versione}
                  link={element.link}
                />
              ))}
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Documenti generali
            </h3>
            <div className='w-full'>
              {fileListing.rtb.documenti_generali?.map((element, idx) => (
                <File
                  key={idx}
                  nome={element.nome}
                  versione={element.versione}
                  link={element.link}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className='flex flex-row items-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
                <ChevronRight color='#04E824' size={32} strokeWidth={3} />
                Candidatura
              </h2>
            </CardTitle>
            <CardDescription>
              Candidatura al capitolato C4:{" "}
              <em>NearYou - Smart custom advertising platform</em>{" "}
              dell&apos;azienda proponente Sync Lab S.r.l.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              Verbali interni
            </h3>
            <div className='w-full'>
              {fileListing.candidatura.verbali_interni?.map((element, idx) => (
                <File
                  key={idx}
                  nome={element.nome}
                  versione={element.versione}
                  link={element.link}
                />
              ))}
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Verbali esterni
            </h3>
            <div className='w-full'>
              {fileListing.candidatura.verbali_esterni?.map((element, idx) => (
                <File
                  key={idx}
                  nome={element.nome}
                  versione={element.versione}
                  link={element.link}
                />
              ))}
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Documenti generali
            </h3>
            <div className='w-full'>
              {fileListing.candidatura.documenti_generali?.map(
                (element, idx) => (
                  <File
                    key={idx}
                    nome={element.nome}
                    versione={element.versione}
                    link={element.link}
                  />
                )
              )}
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className='flex items-center justify-center p-5'>
        <span>Made with sweat by SWE@ team</span>
      </footer>
    </>
  );
}
