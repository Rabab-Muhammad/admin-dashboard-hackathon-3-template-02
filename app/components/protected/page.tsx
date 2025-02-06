"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({children}:{children:React.ReactNode}){
    const router = useRouter()

    useEffect(()=>{
        const isLoggegIn = localStorage.getItem("isLoggedIn")
        if(!isLoggegIn){
            router.push("/admin/dashboard")
        }
    },[router])

    return <>{children}</>
}