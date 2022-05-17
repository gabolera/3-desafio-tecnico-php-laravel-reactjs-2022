import { api } from "../../services/api"
import { Form } from "@unform/web";
import Input from "../../components/form/input";

export function Login() {

  const handleLogin = (data, { reset }) => {
    api.post('/api/login', data).then((response) => {
      console.log(response);
      if(response.status == 200){
        localStorage.setItem('token', JSON.stringify(response.data.access_token));
        localStorage.setItem('expires_in', (new Date().getTime() + (response.data.expires_in * 60 * 1000)));
        window.location = '/clients';
        reset();
      }else{
        reset();
      }
    }).catch((err) => {
      alert('Email ou senha estão incorretos');
    })
  }

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Login</h4>
                    </div>
                    <Form onSubmit={handleLogin}>
                      <p className="mb-4">Faça login na sua conta</p>
                      <div className="mb-4">
                        <Input
                          name="email"
                          type="text"
                          placeholder="email"
                        />
                      </div>
                      <div className="mb-4">
                        <Input
                          name="password"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="st1 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="submit"
                        >
                          Log in
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none st2"
                >
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6"></h4>
                    <p className="text-sm">
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}