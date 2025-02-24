import { Badge } from "@/components/ui/badge";
import { File as FileIcon, FolderCode } from "lucide-react";

export type FileProps = {
  nome: string;
  versione: string | null;
  link: string;
  isDocument?: boolean;
};

export default function File(props: FileProps) {
  const nome = props.nome.replace("rtb", "RTB");
  return (
    <a
      href={props.link}
      target='_blank'
      className='w-fit text-lg space-x-2 flex flex-row my-3 items-center hover:text-primary [transition:color_.25s]'
    >
      {props.isDocument ? (
        <FileIcon className='flex-shrink-0' size={24} color='#22C55D' />
      ) : (
        <FolderCode className='flex-shrink-0' size={24} color='#22C55D' />
      )}
      <span className='underline'>
        {nome.charAt(0).toUpperCase() + nome.slice(1)}
      </span>
      {props.versione && <Badge variant='default'>{props.versione}</Badge>}
    </a>
  );
}
