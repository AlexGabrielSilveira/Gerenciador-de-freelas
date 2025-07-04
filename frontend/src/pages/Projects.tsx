import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProjectCard, { ProjectStatus } from "../components/ProjectCard";
import axios from "axios";
import { API_URL } from "../config/config";
import { Toaster } from "sonner";

interface ProjectInterface{
    name: string;
    description?: string;
    clientName: string;
    clientEmail: string;
    amountHourly: number;
    status: ProjectStatus;
    timeWorked: string;
}

function Projects() {
    const[projects, setProjects] = useState<ProjectInterface[]>([]);
    useEffect(() => {
        getProjects();
    }, []);

    function getProjects() {    
        axios.get(`${API_URL}/project/all`)
        .then((response) => {
            setProjects(response.data);
        })
        .catch((error) => {
            console.error("Error fetching projects:", error);
        });
    }
    return (
        <>
        <Header />  
        <Toaster position="top-right" richColors closeButton />
            <div className="flex flex-wrap items-center justify-center h-screen">
                {projects.map((project) => (
                    <ProjectCard
                        name={project.name}
                        description={project.description}
                        clientName={project.clientName}
                        clientEmail={project.clientEmail}
                        amountHourly={project.amountHourly}
                        status={project.status}
                        timeWorked={project.timeWorked}
                        />
                ))}
            </div>
        </>
    );
}
export default Projects;