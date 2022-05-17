import { Form } from "@unform/web";
import { useParams } from "react-router";
import Input from "../../components/form/input";
import { api } from "../../services/api";

export function TasksNew(){

    const { clientId } = useParams();

    const handleForm = (data, { reset }) => {
        data.client_id = clientId;
        api.post('/api/tasks', data).then((response) => {
            window.location = `/clients/${clientId}`;
            reset();
        })
    }

    return(
        <div className="container mx-auto px-4 pt-5">
            <Form onSubmit={handleForm}>
                <Input name="title" type="text" placeholder="Task"/>

                <div className="flex justify-between">
                    <a href={`/clients/${clientId}`} className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Cancelar
                    </a>
                    <button type="submit" className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                        Cadastrar
                    </button>

                </div>
            </Form>
        </div>
    )
}