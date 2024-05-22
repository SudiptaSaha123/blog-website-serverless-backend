import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
          <div className="text-[2rem] font-medium capitalize">This is full stack blog website built with serverless backend</div>
          <div className="flex gap-8 mt-10">
            <Link to={"/signup"} className="uppercase text-white bg-black rounded-lg px-10 py-5 text-[1.2rem]">SignUp</Link>
            <Link to={"signin"} className="uppercase text-white bg-black rounded-lg px-10 py-5 text-[1.2rem]">SignIn</Link>
          </div>
    </div>
  )
}

export default Home