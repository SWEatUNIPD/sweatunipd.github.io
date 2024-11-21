import { Badge } from "@/components/ui/badge";
import { File as FileIcon } from "lucide-react";

export type FileProps = {
  nome: string;
  versione: string | null;
  link: string;
};

export default function File(props: FileProps) {
  return (
    <a
      href={props.link}
      target='_blank'
      className='w-fit text-lg space-x-2 flex flex-row my-3 items-center hover:text-primary [transition:color_.25s]'
    >
      <FileIcon className='flex-shrink-0' size={24} color='#16a34a' />
      <span className='underline'>
        {props.nome.charAt(0).toUpperCase() + props.nome.slice(1)}
      </span>
      {props.versione && <Badge variant='default'>{props.versione}</Badge>}
    </a>
  );
}
