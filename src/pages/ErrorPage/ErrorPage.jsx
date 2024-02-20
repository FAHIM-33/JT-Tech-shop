import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
let nav = useNavigate()

    return (
        <div>
        <h1 className="md:text-6xl text-4xl text-center mt-20 text-amber-400">Oops...</h1>
        <h1 className="text text-3xl md:text-5xl text-center mt-8">Page not found</h1>
        <h1 className="text-5xl text-center mt-8">Error <span className="text-red-600">404</span></h1>
        <button onClick={()=>nav(-1)} className="btn p-3 md:p-6 border-2 border-low rounded-lg mx-auto block w-fit mt-8 text-2xl">Go back</button>
    </div>
    );
};

export default ErrorPage;