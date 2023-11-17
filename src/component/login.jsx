import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import http from '../http';


export const LoginComponent = () => {

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            emailid: "",
            password: ""
        }
    });

   

    const onSubmit = async (data) => {
        console.log(data);
        let res;
        try {
             res = await http.post('/users',

                {
                    header: "application/json",
                    withCredentials:true
                }
            );

         

        } catch(err) {
                if(res.status!=200){
                    toast.error('error while logging',{
                        position: toast.POSITION.BOTTOM_CENTER
                    });
                }else if(res.status==401){
                    toast.error('unathorised',{
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                }
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate >
                <label htmlFor="emailid">EMAIL ID :</label>
                <br />
                <input type="text" id="emailid" {...register("emailid", {
                    required: {
                        value: true,
                        message: "email id required"
                    }, pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "invalid emailid "
                    }

                })} />
                <p style={{ color: "red", fontSize: "12px" }}>{errors.emailid?.message}</p>
                <br />
                <label htmlFor="password">PASSWORD  :</label>
                <br />
                <input type="password" {...register("password", {
                    required: {
                        value: true,
                        message: "password is required"
                    }, pattern: {
                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                        message: "invalid password"
                    },
                    minLength: {
                        value: 8,
                        message: "required minimum 8 length"
                    }
                })} />
                <p style={{ color: "red", fontSize: "12px" }}>{errors.password?.message}</p>

                <br />
                <button>Submit</button>
                <ToastContainer></ToastContainer>
            </form>
            <DevTool control={control} />
        </>
    );
}