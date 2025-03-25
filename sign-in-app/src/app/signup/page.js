'use client'
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
    }
    return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6">Sign up</h1>
            <form onSubmit={handleForm} className="space-y-4">
                <label htmlFor="email" className="block font-medium text-gray-700">
                    <p>Email</p>
                </label>
                    <input onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required type="email" name="email" id="email" placeholder="example@mail.com" />
                
                <label htmlFor="password" className="block font-medium text-gray-700">
                    <p>Password</p>
                </label>
                <input onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required type="password" name="password" id="password" placeholder="password" />
                
                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200">Sign up</button>
            </form>
        </div>
    </div>);
}

export default Page;