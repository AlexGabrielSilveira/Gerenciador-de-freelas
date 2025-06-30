
import Button from "./Button";
enum ProjectStatus {
  started = 'started',
  working = 'working',
  completed = 'completed',
  canceled = 'canceled',
  finished = 'finished'
}
interface ProjectProps {
    name: string;
    client: string;
    status: ProjectStatus | 'started';
    hourlyRate: number;
    timeWorked: string;
}

function ProjectCard({ name, client, status, hourlyRate, timeWorked }: ProjectProps) {
  return (
    <div className="bg-zinc-800 p-5 rounded-lg shadow-md flex flex-col gap-4 max-w-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white text-lg font-semibold">{name}</h3>
          <p className="text-zinc-400 text-sm">Cliente: {client}</p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            status === 'working'
              ? 'bg-yellow-500/20 text-yellow-400'
              : status === 'completed'
              ? 'bg-green-500/20 text-green-400'
              : status === 'canceled'
              ? 'bg-red-500/20 text-red-400'
              : 'bg-zinc-600 text-zinc-200'
          }`}
        >
          {status.toUpperCase()}
        </span>
      </div>
      <div className="flex justify-between text-zinc-300 text-sm">
        <div>
          <span className="block">R$ {hourlyRate}/h</span>
          <span className="block text-zinc-500 text-xs">Valor hora</span>
        </div>
        <div>
          <span className="block">{timeWorked}</span>
          <span className="block text-zinc-500 text-xs">Tempo trabalhado</span>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        {status === 'working' ? (
          <Button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-sm py-1.5 rounded-md transition" text="⏸️ Pausar"/>
        ) : (
          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm py-1.5 rounded-md transition" text="▶️ Iniciar"/>
        )}
        <Button className="bg-zinc-700 hover:bg-zinc-600 text-white text-sm px-3 py-1.5 rounded-md" text="✅ Finalizar"/>

        <Button className="bg-zinc-700 hover:bg-zinc-600 text-white text-sm px-3 py-1.5 rounded-md" text="❌ Cancelar"/>
      </div>
    </div>
  );
}
export default ProjectCard;