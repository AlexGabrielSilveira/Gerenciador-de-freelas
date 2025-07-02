import axios from "axios";
import Button from "./Button";
import Input from "./Input";
import { API_URL } from "../config/config";
import { useState } from "react";
import { toast, Toaster } from "sonner";

function ProjectForm() {

  const [formData, setFormData] = useState({ 
    name: "",
    clientName: "",
    clientEmail: "",
    amountHourly: 0,
    description: "",
    timeWorked: 0,
    status: "STARTED"
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  const { name, value } = event.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: name === "amountHourly" || name === "timeWorked" ? parseFloat(value) || 0 : value
  }));
}

  function handleSubmit(event: React.FormEvent) {
      event.preventDefault();      

      axios.post(`${API_URL}/project/create`, { 
        name: formData.name,
        clientName: formData.clientName,
        clientEmail: formData.clientEmail,
        amountHourly: parseFloat(formData.amountHourly.toString()),
        description: formData.description,
        timeWorked: parseFloat(formData.timeWorked.toString()),
        status: formData.status
      }) 
      .then((response: any) => { 
        toast.success("Projeto criado com sucesso!");
      })
      .catch((error: any) => {
        toast.error("Erro ao criar o projeto. Tente novamente.");
      });
  }
 
  return(
      <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="projectName">
              <label className="block text-zinc-300 mb-1" htmlFor="projectName">Nome do Projeto</label>
              <Input
              name="name"
              type="text"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="Ex: Site para e-commerce"
              onChange={handleChange}
              value={formData.name}
            />
            </div>

            <div className="clientName">
              <label className="block text-zinc-300 mb-1" htmlFor="clientName">Nome do Cliente</label>
              
              <Input
                name="clientName"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Ex: João Silva"
                type="text"
                onChange={handleChange}
                value={formData.clientName}
              />

            </div>

            <div className="clientEmail">
              <label className="block text-zinc-300 mb-1" htmlFor="clientEmail">Email do Cliente</label>

              <Input
                name="clientEmail"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Ex: joao@email.com"
                type="email"
                onChange={handleChange}
                value={formData.clientEmail}
              />

            </div>

            <div className="amountHourly">
              <label className="block text-zinc-300 mb-1" htmlFor="rate">Valor por hora (R$)</label>
              
              <Input
                name="amountHourly"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Ex: 75"
                type="number"
                onChange={handleChange}
                value={formData.amountHourly}
              />


            </div>

            <div className="timeWorked">
              <label className="block text-zinc-300 mb-1" htmlFor="timeWorked">Tempo trabalhado</label>
              
              <Input
                name="timeWorked"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="0"
                type="number"
                onChange={handleChange}
                value={formData.timeWorked}
              />       

            </div>

            <div className="description">
              <label className="block text-zinc-300 mb-1" htmlFor="description">Descrição</label>

              <textarea
                name="description"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Breve descrição do projeto"
                onChange={handleChange}
                value={formData.description}
              />

            </div>

            <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition-colors duration-200" text="Criar Projeto"/>
          </form>
  )
}

export default ProjectForm; 