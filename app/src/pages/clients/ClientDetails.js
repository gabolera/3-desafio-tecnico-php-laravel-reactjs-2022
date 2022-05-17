import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Input from "../../components/form/input";
import { api } from "../../services/api";


export function ClientDetails(){
    const { clientId } = useParams();

    const [ clientDetails, setClientDetails ] = useState({});
    const [ tasks, setTasks ] = useState([]);

    
    function handleToggleTaskCompletion(id, checked) {
        let data = {
            conclusion_date: new Date()
        }
        if(checked){
            data.conclusion_date = false;
        }
        
        api.put(`/api/tasks/${id}`, data).then(
            (response) => {
            setTasks(
                tasks.map(element => (
                    element.id === id ? { ...element, conclusion_date: (element.conclusion_date ? null : new Date()) } : element
                ))
            )
        })
        
      }

    useEffect(() => {
        api.get(`api/clients/${clientId}`).then(response => {
            setClientDetails(response.data);
            setTasks(response.data.tasks);
        });
    }, []);

    return(
        <div className="container mx-auto px-4 pt-5">
            Detalhes de { clientDetails.name }
            <div className="flex ml-auto justify-end">
                <a href={`/clients/${clientDetails.id}/task`} className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                    Nova Task
                </a>
            </div>
            

            <table className="min-w-full">
                <thead className="border-b">

                        <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Finalizado
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Task
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                    <tr className="border-b bg-white" key={task.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-center justify-center" width="5%">
                            <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                type="checkbox" 
                                value=""
                                onClick={() => handleToggleTaskCompletion(task.id, task.conclusion_date)}
                                checked={task.conclusion_date ? true : false}/>
                            </div>
                            
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {task.conclusion_date ? new Intl.DateTimeFormat('pt-BR').format(new Date(task.conclusion_date)) : 'Não finalizado'}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {task.title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap justify-end flex">
                            <a className="inline-block px-6 py-1 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-2" href="#" onClick={() => alert('ainda não finalizado, use a API')}> Editar</a>
                            <a className="inline-block px-6 py-1 border-2 border-red-400 text-red-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-2" href="#" onClick={() => alert('ainda não finalizado, use a API')}> Deletar</a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}