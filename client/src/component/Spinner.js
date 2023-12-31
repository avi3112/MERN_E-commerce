import React,{useState,useEffect} from "react";
import { Navigate, useNavigate,useLocation } from "react-router-dom";

const Spinner = () => {
    const[count,setcount]= useState(5)
    const navigate= useNavigate()
    const location = useLocation()

    useEffect(()=>{
        const interval= setInterval(()=>{
            setcount((preval) => --preval)
        },1000)
        count === 0 && navigate("/login",{
            state:location.pathname,
        })
        return ()=> clearInterval(interval)
    },[count,navigate,location])
  return (
    <>
      <div className="d-flex justify-content-center">
      <h1>redirecting to you in {count}</h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
