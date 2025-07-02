import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import { API_URL } from "../config/config";

interface ProjectInterface{
    name: string;
    description?: string;
    clientName: string;
    clientEmail: string;
    amountHourly: number;
    status: 'started' | 'working' | 'completed' | 'canceled' | 'finished';
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
        <div className="flex flex-col items-center justify-center h-screen">
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