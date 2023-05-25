import { useState } from "react";

const Form = () => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [property]:value})
    };
    return (
        <form>
            <div>
                <label htmlFor="username" > Username:</label>
                <input type="text" name= "username" value = {userData.username} onChange={handleInputChange}/>
            </div>
            
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" name= "password" value = {userData.password} onChange={handleInputChange}/>
            </div>
            <button></button>
        </form>
    )
};
export default Form