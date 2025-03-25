'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/admin")
    }, [user])

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6">Only logged in users can view this page</h1>
        </div>
        
    </div>
    

);
}

export default Page;