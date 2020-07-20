import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { useRoutes } from "./routes"
import "materialize-css"
import {useAuth} from "./hooks/auth.hook"
import {AuthContext} from "./context/AuthContext"
import {Navbar} from "./components/Navbar";
import {Loader} from "./components/Loader";

const App = () => {
    const {token, login, userId, logout, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader />
    }

  return (
    <AuthContext.Provider value={{
        token, logout, login, userId, isAuthenticated
    }}>
        <Router>
            { isAuthenticated && <Navbar /> }
            <div className="container">{routes}</div>
        </Router>
    </AuthContext.Provider>
  )
}

export default App
