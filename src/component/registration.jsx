import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import http from '../http';

export const RegistrationComponent = () => {


    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstname: "",
            lastname: "",
            emailid: "",
            password: ""
        }
    });



    const onSubmit = async (data) => {
        console.log(data);
        let res
        try {
            res = await http.post('/users',
                JSON.stringify(data),
                {
                    header: "multipart/form-data",
                    withCredentials: true
                }
            );

            if (res.status == 200) {
                toast.success('successfully registered', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }



        } catch (err) {
            if (err.status != 200) {
                toast.error('error while signing', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate >
                <label htmlFor="firstname">FIRST NAME :</label>
                <br />
                <input type="text" id="firstname" {...register("firstname", {
                    required: {
                        value: true,
                        message: "firstname required"
                    }

                })} />
                <p style={{ color: "red", fontSize: "12px" }}>{errors.firstname?.message}</p>

                <br />


                <label htmlFor="lastname">LAST NAME:</label>
                <br />
                <input type="text" id="lastname" {...register("lastname")} />
                <p style={{ color: "red", fontSize: "12px" }}>{errors.lastname?.message}</p>


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
                <button>SIGN up</button>
                <ToastContainer></ToastContainer>
            </form>
            <DevTool control={control} />
        </>
    );
}