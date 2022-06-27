// Rotas
import { Routes, Route } from 'react-router-dom'

// Pages
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Registration } from '../pages/Patients/Create'
import { Listing } from '../pages/Patients/Listing'
import { Editing } from '../pages/Patients/Editing'
import { ListingByID } from '../pages/Patients/ListingByID'

// Páginas restritas
import ProtectedRoutes from './ProtectedRoutes'

export function RoutesApp() {

    return (
        <Routes>

            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/registration" element={<Registration />} />
                <Route path="/patients" element={<Listing />} />
                <Route path="/patients/editing/:id" element={<Editing />} />
                <Route path="/patients/:id" element={<ListingByID />} />
            </Route>

        </Routes>
    )
}