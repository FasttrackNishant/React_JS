import React from 'react'
import Cookies from "universal-cookie";
const cookies = new Cookies();

const authComponent = () => {

    const logout = () => {
        // destroy the cookie
        cookies.remove("TOKEN", { path: "/" });
        // redirect user to the landing page
        window.location.href = "/";
      }

      
  return (
    <>
    <div>authComponent</div>

    <button type="submit" onClick={logout} class="btn btn-danger">Logout</button>
    </>
  )
}

export default authComponent