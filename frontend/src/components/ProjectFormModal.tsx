import { useState } from "react";
import Button from "./Button";
import ProjectForm from "./ProjectForm";

function ProjectFormModal() {
  const [showProjectModal, setShowProjectModal ] = useState<boolean>(true);

  return (
    <>
      {showProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl w-full max-w-md space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-2xl font-bold">Novo Projeto</h2>
              <Button text="x" onClick={() => setShowProjectModal(!showProjectModal)} className="font-bold bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition-colors duration-200"/>
            </div>
           <ProjectForm />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectFormModal;
