// "use client"
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function ProtectedRoute({children}:{children:React.ReactNode}){
//     const router = useRouter()

//     useEffect(()=>{
//         const isLoggegIn = localStorage.getItem("isLoggedIn")
//         if(!isLoggegIn){
//             router.push("/admin/dashboard")
//         }
//     },[router])

//     return <>{children}</>
// }

"use client";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

// Define props interface
interface ProtectedRouteProps {
  children: ReactNode;
}

// Correct function component export with explicit typing
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin/dashboard");
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
