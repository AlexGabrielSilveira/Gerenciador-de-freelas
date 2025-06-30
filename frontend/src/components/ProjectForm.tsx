import Button from "./Button";
import Input from "./Input";

function ProjectForm() {
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();      
        console.log("Formulário enviado");
    }
    return(
        <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-zinc-300 mb-1" htmlFor="projectName">Nome do Projeto</label>
                <input
                  type="text"
                  id="projectName"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Ex: Site para e-commerce"
                />
              </div>
              <div>
                <label className="block text-zinc-300 mb-1" htmlFor="clientName">Nome do Cliente</label>
                <Input id="clientName" className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600" placeholder="Ex: João Silva" type="text" />
              </div>
              <div>
                <label className="block text-zinc-300 mb-1" htmlFor="clientEmail">Email do Cliente</label>
                <Input id="clientEmail" className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600" placeholder="Ex: João Silva" type="email" />
              </div>
              <div>
                <label className="block text-zinc-300 mb-1" htmlFor="rate">Valor por hora (R$)</label>
                <Input id="rate" className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600" placeholder="Ex: 75" type="number" />                
              </div>
              <div>
                <label className="block text-zinc-300 mb-1" htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Breve descrição do projeto"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition-colors duration-200" text="Criar Projeto"/>
            </form>
    )
     
}

export default ProjectForm; 