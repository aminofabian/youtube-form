import { useForm } from "react-hook-form";

import { DevTool } from "@hookform/devtools";

let renderCount = 0;
type FormData = {
  username: string;
  email: string;  
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  },
  phoneNumber: string[];
};


function YouTubeForm() {
  const form = useForm<FormData>({
    defaultValues: {
      username: "batman",
      email: "addd@gmail.com",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumber: ["", ""],
    }
    
    //To Return Default form Values from an API end Point
    // defaultValues: async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    //   const data = await response.json()
    //   return {
    //     username: "Batman",
    //     email: data.email,
    //     channel: "",
    //   }
    // }
  });
  
  const { register, control, handleSubmit, formState } = form;
  const {errors} = formState;
  
  
  
  const onSubmit = (data: FormData) => {
    console.log(data);
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
    <input className="input" type='text' id='username' {...register("username", {
      required:
      {
        value: true,
        message: 'username is required',
      }
    })} />
    <p className="error">{errors.username?.message}</p>
    </span>
    
    <span> <label htmlFor="username" className="font-bold"> Email:</label>
    <input className="input" type='email' id='email' {...register("email", {
      required: {
        value: true,
        message: "email is required",
      },
      pattern: {
        value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "Invalid email format",
      },
      validate: {
        notAdmin: (fieldValue) => {
          return (fieldValue !== "admin@example.com" ||
          "enter a different email address, admin is not allowed"
          );
        },
        notBlacklisted: (fieldValue) => {
          return (!fieldValue.endsWith("gmail.com") || "gmail is not allowed. We only accept official email addresses"
          );
        }
      }
    })} /> 
    <p className="error">{errors.email?.message}</p>
    
    </span>
    
    <span>
    <label htmlFor="username" className="font-bold"> Channel:</label>
    <input className="input" type='channel' id='channel' {...register("channel", {
      required:
      {
        value: true,
        message:'channel is required'}
      })} />
      <p className="error">{errors.channel?.message}</p>
      
      </span>
      
      <span>
      <label htmlFor="twitter" className="font-bold"> twitter:</label>
      <input className="input" type='text' id='twitter' {...register("social.twitter")} />
      </span>
      
      <span>
      <label htmlFor="facebook" className="font-bold"> Facebook:</label>
      <input className="input" type='text' id='facebook' {...register("social.facebook")} />
      </span>
      
      <span>
      <label htmlFor="phoneNumber" className="font-bold"> Phone Number 1:</label>
      <input className="input" type='text' id='phoneNumber' {...register("phoneNumber.0", {
        required:
        {
          value: true,
          message: 'phone number is required'}
        })} />  
        <p className="error">{errors.phoneNumber?.[0]?.message}</p>        
        </span>
        
        <span>
        <label htmlFor="phoneNumber" className="font-bold"> Phone Number 2:</label>
        <input className="input" type='text' id='phoneNumber' {...register("phoneNumber.1", {
          required:
          {
            value: true,
            message: 'phone number is required'}
          })} />
          <p className="error">{errors.phoneNumber?.[1]?.message}</p>        
          
          </span>
          
          <button className='text-white bg-blue-400 mx-auto px-3 py-1 mt-3 rounded-md hover:bg-sky-500'>Submit</button>
          </form>
          <div>
          </div>
          
          <DevTool control={control} />
          </div>
          )
        }
        
        export default YouTubeForm
        
        