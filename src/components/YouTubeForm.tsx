import { useForm } from "react-hook-form";
function YouTubeForm() {
  const form = useForm();
  const { register } = form;
  
  return (
    <div className="container w-6xl h-screen border-[1px] flex justify-center items-center">
    <form className='flex flex-col md:w-[30%] border-[1px] py-10 px-5 rounded-md space-y-7'>
    <span>
    <label htmlFor="username" className="font-bold"> Username:</label>
    <input className="input" type='text' id='username' {...register("username")} />
    </span>
    
    <span> <label htmlFor="username" className="font-bold"> Email:</label>
    <input className="input" type='email' id='email' {...register("email")}/> 
    </span>
    
    <span>
    <label htmlFor="username" className="font-bold"> Channel:</label>
    <input className="input" type='channel' id='channel' {...register("channel")}/>
    </span>
    
    <button className='text-white bg-blue-400 mx-auto px-3 py-1 mt-3 rounded-md hover:bg-sky-500'>Submit</button>
    </form>
    </div>
    )
  }
  
  export default YouTubeForm