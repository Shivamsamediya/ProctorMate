import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Browser Router provides routing fnalities to nav b/w pages.
import { BrowserRouter } from 'react-router-dom'

//auth provider for user state management.
import AuthProvider from './context/UseAuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </BrowserRouter>
)