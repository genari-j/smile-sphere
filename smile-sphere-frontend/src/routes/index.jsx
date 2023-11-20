import { Routes, Route } from 'react-router-dom'

import ProtectedRoutes from './ProtectedRoutes'

import {
  SignUp,
  SignIn,
  Registration,
  Editing,
  Listing,
  ListingByID
} from '../pages'

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