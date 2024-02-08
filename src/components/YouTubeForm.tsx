import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;
type FormData = {
  username: string;
  email: string;  
  channel: string;
};


function YouTubeForm() {
  const form = useForm<FormData>();
  const { register, control, handleSubmit } = form;
  
  const onSubmit = (data: FormData) => {
    data.username = data.username.trim();
    data.email = data.email.trim(); 
    data.channel = data.channel.trim();
  }
  
  renderCount++;
  
  return (
    <div className="container w-6xl h-screen border-[1px] flex flex-col justify-center items-center">
    <div className="flex flex-col md:w-[30%] border-[1px] py-10 px-5 rounded-md space-y-7 mb-2">
    <h1 className='text-center text-3xl font-bold'>YouTube Form</h1>
    <h2 className='text-center text-xl font-semibold text-slate-400'>Render Count: {renderCount/2}</h2>
    </div>
    
    <form className='flex flex-col md:w-[30%] border-[1px] py-10 px-5 rounded-md space-y-7' onSubmit={handleSubmit(onSubmit)} noValidate>
    <span>
    <label htmlFor="username" className="font-bold"> Username:</label>
    <input className="input" type='text' id='username' {...register("username", {required: 'username is required'})} />
    </span>
    
    <span> <label htmlFor="username" className="font-bold"> Email:</label>
    <input className="input" type='email' id='email' {...register("email", {
      pattern: {
        value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "Invalid email format",
      },
    })} /> 
    </span>
    
    <span>
    <label htmlFor="username" className="font-bold"> Channel:</label>
    <input className="input" type='channel' id='channel' {...register("channel", {required: 'channel is required'})}/>
    </span>
    
    <button className='text-white bg-blue-400 mx-auto px-3 py-1 mt-3 rounded-md hover:bg-sky-500'>Submit</button>
    </form>
    <DevTool control={control} />
    </div>
    )
  }
  
  export default YouTubeForm
  
  