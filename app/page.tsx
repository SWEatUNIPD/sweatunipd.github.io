"use client";

import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
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
import { AuroraText } from "@/components/magicui/aurora-text";
import { clsx } from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.code == "Escape") setIsOpen(false);
    };
  }, []);

  return (
    <>
      <header className='sticky top-2 flex flex-col items-center justify-between md:flex-row bg-[#ffffff70] dark:bg-[#1C191770] backdrop-blur-md mx-7 rounded-xl px-5 py-4 h-auto shadow-[inset_0_1px_1px_0_hsla(0,0%,100%,.15)] z-[999]'>
        <div className='flex flex-row w-full md:w-fit justify-between items-center'>
          <Link href='/'>
            <svg
              viewBox='0 0 743 260'
              fill='none'
              width={150}
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>SWEat</title>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M26.1259 197.517L26.1251 197.517L26.1244 197.518C26.1244 197.518 25.9614 197.668 25.8585 197.765C25.7331 197.884 25.5409 198.072 25.5409 198.072C19.533 203.488 10.2678 203.303 4.48236 197.517C-1.30308 191.733 -1.48801 182.467 3.92755 176.459L4.48236 175.875L42.642 137.715L5.05191 100.125C-0.924574 94.1486 -0.924574 84.4588 5.05191 78.4824C11.0284 72.5059 20.7182 72.5059 26.6947 78.4824L26.7045 78.4922L75.1061 126.894C81.0824 132.87 81.0824 142.56 75.1061 148.537L75.0992 148.544C75.0992 148.544 45.1783 178.319 26.1259 197.517Z'
                fill='#04E824'
              />
              <path
                d='M135.834 166.4C135.834 171.867 136.768 176.533 138.634 180.4C140.501 184.267 143.101 187.467 146.434 190C149.768 192.4 153.568 194.2 157.834 195.4C162.234 196.467 166.968 197 172.034 197C177.501 197 182.168 196.4 186.034 195.2C189.901 193.867 193.034 192.2 195.434 190.2C197.834 188.2 199.568 185.933 200.634 183.4C201.701 180.733 202.234 178.067 202.234 175.4C202.234 169.933 200.968 165.933 198.434 163.4C196.034 160.733 193.368 158.867 190.434 157.8C185.368 155.933 179.434 154.2 172.634 152.6C165.968 150.867 157.701 148.667 147.834 146C141.701 144.4 136.568 142.333 132.434 139.8C128.434 137.133 125.234 134.2 122.834 131C120.434 127.8 118.701 124.4 117.634 120.8C116.701 117.2 116.234 113.533 116.234 109.8C116.234 102.6 117.701 96.4 120.634 91.2C123.701 85.8667 127.701 81.4667 132.634 78C137.568 74.5333 143.168 72 149.434 70.4C155.701 68.6667 162.034 67.8 168.434 67.8C175.901 67.8 182.901 68.8 189.434 70.8C196.101 72.6667 201.901 75.5333 206.834 79.4C211.901 83.2667 215.901 88.0667 218.834 93.8C221.768 99.4 223.234 105.933 223.234 113.4H198.234C197.568 104.2 194.434 97.7333 188.834 94C183.234 90.1333 176.101 88.2 167.434 88.2C164.501 88.2 161.501 88.5333 158.434 89.2C155.368 89.7333 152.568 90.7333 150.034 92.2C147.501 93.5333 145.368 95.4 143.634 97.8C142.034 100.2 141.234 103.2 141.234 106.8C141.234 111.867 142.768 115.867 145.834 118.8C149.034 121.6 153.168 123.733 158.234 125.2C158.768 125.333 160.834 125.933 164.434 127C168.168 127.933 172.301 129 176.834 130.2C181.368 131.4 185.768 132.6 190.034 133.8C194.434 134.867 197.568 135.667 199.434 136.2C204.101 137.667 208.168 139.667 211.634 142.2C215.101 144.733 217.968 147.667 220.234 151C222.634 154.2 224.368 157.667 225.434 161.4C226.634 165.133 227.234 168.867 227.234 172.6C227.234 180.6 225.568 187.467 222.234 193.2C219.034 198.8 214.768 203.4 209.434 207C204.101 210.6 198.034 213.2 191.234 214.8C184.434 216.533 177.501 217.4 170.434 217.4C162.301 217.4 154.634 216.4 147.434 214.4C140.234 212.4 133.968 209.333 128.634 205.2C123.301 201.067 119.034 195.8 115.834 189.4C112.634 182.867 110.968 175.2 110.834 166.4H135.834ZM235.122 71.2H260.522L286.322 180.4H286.722L315.522 71.2H341.122L369.122 180.4H369.522L396.122 71.2H421.522L382.122 214H356.722L328.122 104.8H327.722L298.522 214H272.722L235.122 71.2ZM437.989 71.2H540.789V92.8H462.989V130.2H534.989V150.6H462.989V192.4H542.189V214H437.989V71.2Z'
                className='fill-black dark:fill-white'
              />
              <path
                d='M647.477 232.4C633.61 232.4 620.877 230.133 609.277 225.6C597.81 221.067 587.877 214.6 579.477 206.2C571.077 197.933 564.543 188.2 559.877 177C555.343 165.667 553.077 153.2 553.077 139.6C553.077 126 555.343 113.6 559.877 102.4C564.543 91.0667 571.077 81.2667 579.477 73C587.877 64.7333 597.81 58.3333 609.277 53.8C620.877 49.2667 633.61 47 647.477 47C660.143 47 671.743 49.2667 682.277 53.8C692.81 58.3333 701.943 64.7333 709.677 73C717.41 81.2667 723.343 91.0667 727.477 102.4C731.743 113.6 733.877 126 733.877 139.6H717.877C717.877 128.267 716.143 117.867 712.677 108.4C709.21 98.9333 704.343 90.7333 698.077 83.8C691.81 76.8667 684.343 71.5333 675.677 67.8C667.143 64.0667 657.743 62.2 647.477 62.2C636.01 62.2 625.477 64.0667 615.877 67.8C606.277 71.5333 597.943 76.8667 590.877 83.8C583.943 90.7333 578.543 98.9333 574.677 108.4C570.943 117.867 569.077 128.267 569.077 139.6C569.077 150.933 570.943 161.333 574.677 170.8C578.543 180.267 583.943 188.467 590.877 195.4C597.943 202.333 606.277 207.667 615.877 211.4C625.477 215.267 636.01 217.2 647.477 217.2C652.543 217.2 658.01 216.467 663.877 215C669.877 213.667 674.877 211.933 678.877 209.8L686.877 222C681.277 225.067 674.743 227.533 667.277 229.4C659.943 231.4 653.343 232.4 647.477 232.4ZM636.677 187C628.143 187 620.543 185 613.877 181C607.343 176.867 602.21 171.2 598.477 164C594.743 156.8 592.877 148.6 592.877 139.4C592.877 130.067 594.743 121.867 598.477 114.8C602.21 107.733 607.343 102.2 613.877 98.2C620.543 94.0667 628.143 92 636.677 92C645.077 92 652.477 94.0667 658.877 98.2C665.41 102.2 670.543 107.733 674.277 114.8C678.01 121.867 679.877 130.067 679.877 139.4C679.877 148.6 678.01 156.8 674.277 164C670.543 171.2 665.41 176.867 658.877 181C652.477 185 645.077 187 636.677 187ZM641.477 170.6C647.21 170.6 652.277 169.267 656.677 166.6C661.077 163.933 664.477 160.267 666.877 155.6C669.41 150.8 670.677 145.4 670.677 139.4C670.677 133.267 669.41 127.933 666.877 123.4C664.343 118.867 660.81 115.267 656.277 112.6C651.877 109.933 646.81 108.6 641.077 108.6C635.21 108.6 630.077 109.933 625.677 112.6C621.277 115.133 617.81 118.733 615.277 123.4C612.743 127.933 611.477 133.267 611.477 139.4C611.477 145.4 612.743 150.8 615.277 155.6C617.943 160.267 621.477 163.933 625.877 166.6C630.41 169.267 635.61 170.6 641.477 170.6ZM694.877 193C689.943 193 685.61 192 681.877 190C678.277 188.133 675.477 185.4 673.477 181.8C671.61 178.067 670.677 173.733 670.677 168.8L687.477 168.2C687.477 171.533 688.277 174.133 689.877 176C691.477 177.733 693.543 178.6 696.077 178.6C700.343 178.6 704.077 176.933 707.277 173.6C710.61 170.267 713.21 165.667 715.077 159.8C716.943 153.933 717.877 147.2 717.877 139.6H733.877C733.877 150 732.21 159.2 728.877 167.2C725.543 175.2 720.943 181.533 715.077 186.2C709.21 190.733 702.477 193 694.877 193ZM670.677 168.8L670.077 94.2H687.477V168.2L670.677 168.8Z'
                fill='#04E824'
              />
            </svg>
          </Link>

          <Button
            variant='outline'
            size='icon'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Tasto di apertura menu'
            className='md:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              viewBox='0 0 15 14'
              fill='none'
              className={clsx(
                "max-w-none box-border align-middle w-full h-full z-1 relative [transition:transform_0.65s_cubic-bezier(0.65,0.05,0,1)]",
                isOpen && "transform rotate-[135deg]"
              )}
            >
              <path
                d='M7.02441 0.2C7.02441 0.0895426 7.11396 0 7.22441 0H8.57441C8.68487 0 8.77441 0.0895431 8.77441 0.2V13.8C8.77441 13.9105 8.68487 14 8.57441 14H7.22441C7.11396 14 7.02441 13.9105 7.02441 13.8V0.2Z'
                fill='currentColor'
              ></path>
              <path
                d='M14.6994 6.125C14.8099 6.125 14.8994 6.21454 14.8994 6.325V7.675C14.8994 7.78546 14.8099 7.875 14.6994 7.875L1.09941 7.875C0.988957 7.875 0.899414 7.78546 0.899414 7.675L0.899414 6.325C0.899414 6.21454 0.988957 6.125 1.09941 6.125L14.6994 6.125Z'
                fill='currentColor'
              ></path>
              <path
                d='M8.77441 4.375V6.125H10.5244C9.55798 6.125 8.77441 5.34143 8.77441 4.375Z'
                fill='currentColor'
              ></path>
              <path
                d='M8.77441 9.625V7.875H10.5244C9.55798 7.875 8.77441 8.65857 8.77441 9.625Z'
                fill='currentColor'
              ></path>
              <path
                d='M7.02441 4.375V6.125H5.27441C6.24084 6.125 7.02441 5.34143 7.02441 4.375Z'
                fill='currentColor'
              ></path>
              <path
                d='M7.02441 9.625V7.875H5.27441C6.24084 7.875 7.02441 8.65857 7.02441 9.625Z'
                fill='currentColor'
              ></path>
            </svg>
          </Button>
        </div>
        <ul className='hidden md:flex items-center flex-row [&_a]:[transition:color_.25s_ease-in-out] space-y-0 space-x-5 [&_a]:font-bold [&_a]:text-lg w-auto mt-0'>
          <li>
            <Link className='hover:text-primary text-left' href='#pb'>
              PB
            </Link>
          </li>
          <li>
            <Link className='hover:text-primary' href='#rtb'>
              RTB
            </Link>
          </li>
          <li>
            <Link className='hover:text-primary' href='#candidatura'>
              Candidatura
            </Link>
          </li>
          <li>
            <Link className='hover:text-primary text-left' href='#contatti'>
              Chi siamo
            </Link>
          </li>
        </ul>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed md:hidden top-0 left-0 right-0 bottom-0 bg-[#ffffff70] dark:bg-[#1C191770] z-[99] backdrop-blur-md overflow-hidden flex flex-col items-center justify-center'
          >
            <ul
              className={clsx(
                "flex flex-col items-center w-full [&_a]:[transition:color_.25s_ease-in-out] space-y-4 [&_a]:font-bold [&_a]:text-3xl"
              )}
            >
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "tween",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 + 1 / 10,
                }}
              >
                <Link
                  className='hover:text-primary text-left'
                  href='#pb'
                  onClick={() => setIsOpen(false)}
                >
                  PB
                </Link>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "tween",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 + 2 / 10,
                }}
              >
                <Link
                  className='hover:text-primary'
                  href='#rtb'
                  onClick={() => setIsOpen(false)}
                >
                  RTB
                </Link>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "tween",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 + 3 / 10,
                }}
              >
                <Link
                  className='hover:text-primary'
                  href='#candidatura'
                  onClick={() => setIsOpen(false)}
                >
                  Candidatura
                </Link>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "tween",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 + 4 / 10,
                }}
              >
                <Link
                  className='hover:text-primary'
                  href='#contatti'
                  onClick={() => setIsOpen(false)}
                >
                  Chi siamo
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <main className='flex flex-col mx-7 space-y-5 mt-10'>
        <div className='w-full flex flex-col items-center justify-between'>
          <h2 className='scroll-m-20 text-5xl lg:text-6xl font-semibold tracking-tight first:mt-0 text-center py-2'>
            Every line of code is worth the <AuroraText>SWEat.</AuroraText>
          </h2>
          <h3 className='text-lg text-muted-foreground text-center mt-2'>
            Sito di presentazione del progetto didattico di Ingegneria del
            Software (2024-25) erogato dal CdL in Informatica
            dell&apos;Università degli Studi di Padova, svolto dal gruppo 12 del
            primo lotto
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
        </div>
        <Card id='pb' className='scroll-mt-24'>
          <CardHeader>
            <CardTitle>
              <h2 className='flex flex-row items-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
                <ChevronRight color='#04E824' size={32} strokeWidth={3} />
                PB
              </h2>
            </CardTitle>
            <CardDescription>
              Documenti relativi alla seconda revisione del progetto: &quot;
              <span lang='en'>Product Baseline</span>&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              Documenti generali
            </h3>
            <div className='w-full'>
              {fileListing.pb.documenti_generali?.map((element, idx) => (
                <File
                  key={idx}
                  nome={element.nome}
                  versione={element.versione}
                  link={element.link}
                  isDocument
                />
              ))}
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Verbali esterni
            </h3>
            <div className='w-full'>
              {fileListing.pb.verbali_esterni
                ?.map((element, idx) => (
                  <File
                    key={idx}
                    nome={element.nome}
                    versione={element.versione}
                    link={element.link}
                    isDocument
                  />
                ))
                .reverse()}
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Verbali interni
            </h3>
            <div className='w-full'>
              {fileListing.pb.verbali_interni
                ?.map((element, idx) => (
                  <File
                    key={idx}
                    nome={element.nome}
                    versione={element.versione}
                    link={element.link}
                    isDocument
                  />
                ))
                .reverse()}
            </div>
          </CardContent>
        </Card>

        <Card id='rtb' className='scroll-mt-24'>
          <CardHeader>
            <CardTitle>
              <h2 className='flex flex-row items-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
                <ChevronRight color='#04E824' size={32} strokeWidth={3} />
                RTB
              </h2>
            </CardTitle>
            <CardDescription>
              Documenti relativi alla prima revisione del progetto: &quot;
              <span lang='en'>Requirements and Technology Baseline</span>&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='w-full'>
              <File
                nome='Proof of Concept'
                versione={null}
                link='https://github.com/SWEatUNIPD/NearYou/releases/tag/v1.0.0'
                isDocument={false}
              />
              <File
                nome='Lettera di presentazione RTB'
                versione={null}
                link='https://sweatunipd.github.io/docs/rtb/lettera_di_presentazione_rtb.pdf'
                isDocument
              />
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Documenti di progetto
            </h3>
            <div className='w-full'>
              {fileListing.rtb.documenti_generali
                ?.filter((doc) => doc.nome.indexOf("lettera") == -1)
                .map((element, idx) => (
                  <File
                    key={idx}
                    nome={element.nome}
                    versione={element.versione}
                    link={element.link}
                    isDocument
                  />
                ))}
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Verbali esterni
            </h3>
            <div className='w-full'>
              {fileListing.rtb.verbali_esterni
                ?.map((element, idx) => (
                  <File
                    key={idx}
                    nome={element.nome}
                    versione={element.versione}
                    link={element.link}
                    isDocument
                  />
                ))
                .reverse()}
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Verbali interni
            </h3>
            <div className='w-full'>
              {fileListing.rtb.verbali_interni
                ?.map((element, idx) => (
                  <File
                    key={idx}
                    nome={element.nome}
                    versione={element.versione}
                    link={element.link}
                    isDocument
                  />
                ))
                .reverse()}
            </div>
          </CardContent>
        </Card>

        <Card id='candidatura' className='scroll-mt-24'>
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
              Documenti di progetto
            </h3>
            <div className='w-full'>
              {fileListing.candidatura.documenti_generali?.map(
                (element, idx) => (
                  <File
                    key={idx}
                    nome={element.nome}
                    versione={element.versione}
                    link={element.link}
                    isDocument
                  />
                )
              )}
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Verbali esterni
            </h3>
            <div className='w-full'>
              {fileListing.candidatura.verbali_esterni
                ?.map((element, idx) => (
                  <File
                    key={idx}
                    nome={element.nome}
                    versione={element.versione}
                    link={element.link}
                    isDocument
                  />
                ))
                .reverse()}
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-7'>
              Verbali interni
            </h3>
            <div className='w-full'>
              {fileListing.candidatura.verbali_interni
                ?.map((element, idx) => (
                  <File
                    key={idx}
                    nome={element.nome}
                    versione={element.versione}
                    link={element.link}
                    isDocument
                  />
                ))
                .reverse()}
            </div>
          </CardContent>
        </Card>
        <Card id='contatti' className='scroll-mt-24'>
          <CardHeader>
            <CardTitle>
              <h2 className='flex flex-row items-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
                <ChevronRight color='#04E824' size={32} strokeWidth={3} />
                Chi siamo
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col items-baseline justify-center space-y-3'>
            <div className='flex flex-row items-center justify-between w-auto'>
              <Avatar>
                <AvatarImage src='https://avatars.githubusercontent.com/u/148521685?v=4' />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
              <Link
                href='https://github.com/perruzz'
                target='_blank'
                className='ml-2 underline underline-offset-2'
              >
                Andrea Perozzo
              </Link>
            </div>
            <div className='flex flex-row items-center justify-between w-auto'>
              <Avatar>
                <AvatarImage src='https://avatars.githubusercontent.com/u/91291702?v=4' />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
              <Link
                href='https://github.com/erpreco'
                target='_blank'
                className='ml-2 underline underline-offset-2'
              >
                Andrea Precoma
              </Link>
            </div>
            <div className='flex flex-row items-center justify-between w-auto'>
              <Avatar>
                <AvatarImage src='https://avatars.githubusercontent.com/u/83000107?v=4' />
                <AvatarFallback>DM</AvatarFallback>
              </Avatar>
              <Link
                href='https://github.com/marindavide'
                target='_blank'
                className='ml-2 underline underline-offset-2'
              >
                Davide Marin
              </Link>
            </div>
            <div className='flex flex-row items-center justify-between w-auto'>
              <Avatar>
                <AvatarImage src='https://avatars.githubusercontent.com/u/149704818?v=4' />
                <AvatarFallback>DM</AvatarFallback>
              </Avatar>
              <Link
                href='https://github.com/davim02'
                target='_blank'
                className='ml-2 underline underline-offset-2'
              >
                Davide Martinelli
              </Link>
            </div>
            <div className='flex flex-row items-center justify-between w-auto'>
              <Avatar>
                <AvatarImage src='https://avatars.githubusercontent.com/u/119404292?v=4' />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <Link
                href='https://github.com/DavidePicc'
                target='_blank'
                className='ml-2 underline underline-offset-2'
              >
                Davide Picello
              </Link>
            </div>
            <div className='flex flex-row items-center justify-between w-auto'>
              <Avatar>
                <AvatarImage src='https://avatars.githubusercontent.com/u/43652136?v=4' />
                <AvatarFallback>KM</AvatarFallback>
              </Avatar>
              <Link
                href='https://github.com/klamerja'
                target='_blank'
                className='ml-2 underline underline-offset-2'
              >
                Klaudio Merja
              </Link>
            </div>
            <div className='flex flex-row items-center justify-between w-auto'>
              <Avatar>
                <AvatarImage src='https://avatars.githubusercontent.com/u/145909678?v=4' />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <Link
                href='https://github.com/milanriccardo03'
                target='_blank'
                className='ml-2 underline underline-offset-2'
              >
                Riccardo Milan
              </Link>
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
