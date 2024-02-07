import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;
function YouTubeForm() {
  const form = useForm();
  const { register, control } = form;
  
  renderCount++;
  
  return (
    <div className="container w-6xl h-screen border-[1px] flex flex-col justify-center items-center">
    <div className="flex flex-col md:w-[30%] border-[1px] py-10 px-5 rounded-md space-y-7">
    <h1 className='text-center text-4xl font-bold'>YouTube Form</h1>
    <h2 className='text-center text-2xl font-semibold text-slate-400'>Render Count: {renderCount/2}</h2>
    </div>
    
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
    <DevTool control={control} />
    </div>
    )
  }
  
  export default YouTubeForm