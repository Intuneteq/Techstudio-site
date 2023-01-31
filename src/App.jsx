// REACT DEFAULTS
import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// COMPONENTS
import { Accounts, Loading, Payment } from './components'
import { DashboardLayout } from './layout'
import {
  AboutUs,
  AdminDashboard,
  Blog,
  ContactUs,
  Development,
  Employers,
  HomePage,
  Intro,
  SignIn,
  Signup,
  SingleBlogPage,
  StudentCalssesView,
  StudentDashboard,
} from './pages'
import { DEVELOPMENT_CONTENT } from './pages/Development/content'

const App = () => {
  const {
    frontendDevelopment,
    fullStackDevelopment,
    datascience,
    mobileDevelopment,
    UIUXDevelopment,
  } = DEVELOPMENT_CONTENT

  return (
    <Suspense fallback={<Loading text='LOADING...' />}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tracks' element={<Intro />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/employers' element={<Employers />} />
        <Route path='/payment/accounts' element={<Accounts />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<SingleBlogPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route
          path='/course/frontend'
          element={<Development content={frontendDevelopment} />}
        />
        <Route
          path='/course/fullstack'
          element={<Development content={fullStackDevelopment} />}
        />
        <Route
          path='/course/uiux'
          element={<Development content={UIUXDevelopment} />}
        />
        <Route
          path='/course/data-science'
          element={<Development content={datascience} />}
        />
        <Route
          path='/course/mobile'
          element={<Development content={mobileDevelopment} />}
        />
      </Routes>
      {/* dashboard routes */}
      <Routes>
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/student' element={<DashboardLayout />}>
          <Route path='dashboard' element={<StudentDashboard />} />
          <Route path='classes' element={<StudentCalssesView />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
