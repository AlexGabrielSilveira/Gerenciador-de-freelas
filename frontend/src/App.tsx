import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import ProjectFormModal from './components/ProjectFormModal';
import { API_URL } from './config/config';
import { io } from 'socket.io-client';
import { toast, Toaster } from 'sonner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';

function App() {
  const [projectForm, setProjectForm] = useState<boolean>(false);

  useEffect(() => { 
    const socket = io(API_URL);

    return () => {
      socket.off("project_message_success");
      socket.off("project_message_error");
      socket.disconnect();
    }
  }, []);

  return (
    <>
    <BrowserRouter>
      <Routes> 
          <Route path="/projects" element={ <Projects />} />
      </Routes>
      <Header />
      <div>
        <Toaster position="top-right" richColors closeButton />
        <main className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-4 text-gray-200">Welcome to Freelas</h1>
          <p className="text-lg mb-6 text-gray-400 font-semibold">Your platform for manage your freelances!</p>
          <Button onClick={() => setProjectForm(!projectForm)} text="+ Novo Projeto" className="font-bold bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition-colors duration-200"/>
          {projectForm && (<ProjectFormModal />)}
        </main> 
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
