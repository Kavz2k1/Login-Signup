

import { useState } from 'react';
import './LoginSignup.css';

function LoginSignup() {
    const [action, setAction] = useState("Login");
    const [uname, setuName] = useState(""); 
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    const [signedUp, setSignedUp] = useState(false);  
   

    // Mock user database (array)
    const [users, setUsers] = useState( [
        { email: "test@example.com", password: "123", name: "rk" },
        { email: "sample@example.com", password: "mypassword", name: "Jane" },
    ]);
    const handleLogin = () => {
        const existingUser = users.find(user => user.email === email);
        if (existingUser && existingUser.password === pass) {
          setMessage(" ✅ Login successful!");
          setIsSubmitted(true);
          setEmail(""); // Clear email input
            setPass(""); // Clear password input
          
        } else {
          setMessage("❗Require Sign up.");
          setIsSubmitted(true);
          setUsers([]);
          setEmail(""); // Clear email input
            setPass(""); // Clear password input
        }
      };

      const handleSignUp = () => {
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
          setMessage("⚠️ Email is already registered.");
          setIsSubmitted(true);
         
        } else {
          // Add new user to the list
          const newUser = { email, password: pass, name: uname };
          setUsers([...users, newUser]); // Properly update state
          setMessage(" ✅ Sign up successful! Please log in.");
          setIsSubmitted(true);
          setEmail("");  // Clear email input
          setPass("");   // Clear password input
          setuName(""); 
        }
      };
    
    
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
                <div className='inputs'>
                    {action === "Login" ? <div></div> : 
                        <div className='input'>
                            <input type="text" placeholder='Enter your Name' value={uname} onChange={(evt) => setuName(evt.target.value)} />
                        </div>
                    }

                    <div className='input'>
                        <input type="email" placeholder='Enter your email' value={email} onChange={(evt) => setEmail(evt.target.value)} />
                    </div>
                    <div className='input'>
                        <input type="password" placeholder='Enter your Password' value={pass} onChange={(evt) => setPass(evt.target.value)} />
                    </div>
                </div>

                {action === "Sign Up" ? (
                    <div className='forgot-password'>
                        Already have an account?  
                        <span onClick={() => {setAction("Login");setMessage("")}}>Login</span>
                    </div>
                ) : (
                    <div className='forgot-password'>
                        Don't have an account? 
                    <span onClick={() => { setAction("Sign Up"); setMessage("")}}>Sign Up</span>
                    </div>
                )}
                

                {/* Toggle buttons (Login / Sign Up) */}
                {/* <div className='submit-cont'>
                    <div 
                        className={action === "Login" ? "submit" : "submit gray"} 
                        onClick={() => {
                            setAction("Login");
                            setIsSubmitted(false); // Reset form submission state
                        }}
                    >
                        Login
                    </div>
                    <div 
                        className={action === "Sign Up" ? "submit" : "submit gray"} 
                        onClick={() => {
                            setAction("Sign Up");
                            setIsSubmitted(false); // Reset form submission state
                        }}
                    >
                        Sign Up
                    </div>
                </div>
            </div> */}

            {isSubmitted && <div className='message'>{message}</div>}

            {/* No submit button, the functionality is handled by the toggle buttons */}
            <div className='submit-cont'>
                {action === "Login" ? (
                    <div className='submit' onClick={handleLogin} >Login</div>
                ) : (
                    <div className='submit' onClick={handleSignUp}>Sign Up</div>
                )}
                </div>

</div>  
</div>        
    );
}

export default LoginSignup;
