import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center gap-5">
            <h1 className="text-6xl text-red-700 font-bold">Opps Something wrong</h1>
            <Link to={'/'}>
            <button className="px-4 py-2 border-2 border-red-700 text-red-700 font-bold text-2xl rounded-3xl">Back to Home !</button>
            </Link>
        </div>
    );
};

export default ErrorPage;