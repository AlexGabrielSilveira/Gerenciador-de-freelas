import axios from "axios";
import Button from "./Button";
import { API_URL } from "../config/config";
import { toast } from "sonner";
import { use, useState } from "react";
import { start } from "repl";

export enum ProjectStatus {
  STARTED,
  WORKING,
  COMPLETED,
  CANCELED,
  FINISHED
}
interface ProjectProps {
    name: string;
    clientName: string;
    clientEmail?: string;
    description?: string;
    status: ProjectStatus;
    amountHourly: number;
    timeWorked: string;
}

function ProjectCard({ name, clientName, status, amountHourly, timeWorked, description}: ProjectProps) {
  const [projectStatus,setProjectStatus] = useState<ProjectStatus>(status);
  const [startProject, setStartProject] = useState<boolean>(false);

  const projectStatusString = projectStatus.toString().toUpperCase();
  function handleStatusChange(status: string){
    const parseName = name.toLowerCase();

    axios.put(`${API_URL}/project/${parseName}/status/${status}`)
    .then(response => {
      setProjectStatus(response.data.status);
      toast.success(`Status atualizado para ${status}`);

      if(projectStatusString === "WORKING") {
        setStartProject(true);
      }
    })
    .catch(error => {
      toast.error("Erro ao atualizar o status do projeto. Tente novamente.");
    })

  }
  console.log(startProject);
  return (
    <div className="bg-zinc-800 p-5 rounded-lg shadow-md flex flex-col gap-4 max-w-sm m-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white text-lg font-semibold">{name}</h3>
          <p className="text-zinc-400 text-sm">clientName: {clientName}</p>
          <br />
          <p className="text-zinc-400 text-sm">{description}</p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
              projectStatusString == "WORKING"
              ? 'bg-yellow-500/20 text-yellow-400'
              : projectStatusString == "COMPLETED"
              ? 'bg-green-500/20 text-green-400'
              : projectStatusString == "CANCELED"
              ? 'bg-red-500/20 text-red-400'
              : 'bg-zinc-600 text-zinc-200'
          }`}
        >
          {projectStatus}
        </span>
      </div>
      <div className="flex justify-between text-zinc-300 text-sm">
        <div>
          <span className="block">R$ {amountHourly}/h</span>
          <span className="block text-zinc-500 text-xs">Valor hora</span>
        </div>
        <div>
          <span className="block">{timeWorked}/h</span>
          <span className="block text-zinc-500 text-xs">Tempo trabalhado</span>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        {projectStatusString === "WORKING" && startProject == true ? (
          <Button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-sm py-1.5 rounded-md transition" text="⏸️ Pausar" onClick={() => setStartProject(!startProject)}/>
        ) : (
          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm py-1.5 rounded-md transition" text="▶️ Iniciar" onClick={() => handleStatusChange('working')}/>
        )}
        <Button className="bg-zinc-700 hover:bg-zinc-600 text-white text-sm px-3 py-1.5 rounded-md" text="✅ Finalizar" onClick={() => handleStatusChange('finished')}/>

        <Button className="bg-zinc-700 hover:bg-zinc-600 text-white text-sm px-3 py-1.5 rounded-md" text="❌ Cancelar" onClick={() => handleStatusChange('canceled')}/>
      </div>
    </div>
  );
}
export default ProjectCard;