import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAddInputFormData } from "./useInputFormData"
import "../Styles/inputForm.css"

const InputForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { mutate: addInputData } = useAddInputFormData()
  const [display, setDisplay] = useState(false)

  const onSubmit = (data) => {
    const inputData = { data }
    console.log("data :", data);
    addInputData(inputData)
    setDisplay(true)
  }


  console.log("errors", errors.email);

  return (
    <>

      {display && <div className='message_div'>
        <h1>Thank You! </h1>
        <h2>Registration completed successfully</h2>
      </div>}

      <div className='form_container'>
        <h2>SignUp to this Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Username</label>
          <input type="text" name="name" placeholder='Enter your name' {...register("name", { required: "Username is Required" })} /><br />


          <p>{errors.name?.message}</p>


          <label>Email</label>
          <input type="email" name="email" placeholder='Enter your Email' {...register("email", { required: "Email is Required" })} /><br />

          <p>{errors.email?.message}</p>

          <label>Password</label>
          <input type="password" name="password" placeholder='Enter your Password' {...register("password",
            {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
              }
            })} />
          <br />

          <p>{errors.password?.message}</p>
          < button className='signin_btn'>Sign Up</button>
        </form>
      </div >
    </>
  )
}

export default InputForm






