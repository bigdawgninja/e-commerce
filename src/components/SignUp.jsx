import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { signUpNewUser } = UserAuth()
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
          const result = await signUpNewUser(email, password); // Call context function
    
          if (result.success) {
            navigate("/dashboard"); // Navigate to dashboard on success
          } else {
            setError(result.error.message); // Show error message on failure
          }
        } catch (err) {
          setError("An unexpected error occurred."); // Catch unexpected errors
        } finally {
          setLoading(false); // End loading state
        }
      };

  return (
    <div>
      <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign Up now!</h2>
        <p>
            Already have an account? <Link to="/login">Sign in!</Link>
        </p>
        <div className="flex flex-col py-4">
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-3 mt-6 bg-gray-950" type="email"  />
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="p-3 mt-6 bg-gray-950" type="password"  />
            <button type="submit" disabled={loading} className="mt-6 w-full">Sign Up</button>
            {error && <p className='text-red-600 text-center pt-4'>{error}</p>}
        </div>
      </form>
    </div>
  )
}

export default SignUp
