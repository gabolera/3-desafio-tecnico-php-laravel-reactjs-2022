import { api } from "../../services/api";
import { useEffect, useState } from "react"

export function ClientList() {
    const [clientList, setClientList] = useState([]);

    useEffect(() => {
        api.get(`api/clients`).then(response => {
            setClientList(response.data);
        })
    }, []);

    return (
        <div className="container mx-auto px-4 pt-5">
            <div className="flex ml-auto justify-end">
                <a href="/clients/new" className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                    Novo Cliente
                </a>
            </div>
            <table class="min-w-full">
                <thead class="border-b">

                        <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Cliente
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Email
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Telefone
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Tasks
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {clientList.map((client) => (
                    <tr class="border-b bg-white" key={client.id}>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {client.name}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {client.email}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {client.telephone}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {client.tasks.length}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-end items-center">
                            <a className="inline-block px-6 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href={`/clients/${client.id}`}> Ver detalhes</a>
                            <a className="inline-block px-6 py-1 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-2" href={`/clients/${client.id}`}> Editar</a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}