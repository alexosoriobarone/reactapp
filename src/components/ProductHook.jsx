import React from 'react';
import {useForm} from "react-hook-form";
export default function ProductHook(){
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit=data => console.log(data);
    return(
        <div className="jumbotron">
            <h3 className="display-4">Formulario</h3>
        <div className="container-sm">
    <form className='row' onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
        <input className="form-control" type="text" {...register('description',{required:true,maxLength:80})} />
        {errors.description && <div className="invalid-feedback">Campo es es requerido</div>}
       </div>
       
        <input type="number" {...register('price',{required:true,maxLength:10})} />
        {errors.price && errors.price.type === "required" && <span>This is required</span>}
        {errors.price && errors.price.type === "maxLength" && <span>Max length exceeded</span> }
        <select {...register('category',{required:true})}>
        <option value="">Select a Category</option>
            <option value="Deporte">Deporte</option>
            <option value="Deporte">Casual</option>
            <option value="Deporte">Familiar</option>
        </select>
        {errors.category && 'Field category is required'}
    <input type='submit' value='Send'/>
    </form>
    </div>
    </div>
    );
}