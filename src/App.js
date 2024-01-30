import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import load from "./assets/images/loadingicon.gif";
import './index.css'

const Home = lazy(() => import('./pages/home'));
const Page404 = lazy(() => import('./pages/page-404'));
const About = lazy(() => import('./pages/about-us'));
const ContactUs = lazy(() => import('./pages/contact-us'));
const Company = lazy(() => import('./pages/company-list'));
const Candidates = lazy(() => import('./pages/candidates-list'));
const InfoCandidate = lazy(() => import('./pages/cadidates-info'));
const InfoCompany = lazy(() => import('./pages/company-info'));
const LoginPage = lazy(() => import('./components/login-form'));
const Dashboard = lazy(() => import('./pages/dashboard-page'))
const Job  = lazy(()=> import('./pages/jobs'))
const Applicant = lazy(()=> import('./pages/applicants'))
const Candidate = lazy(()=> import ('./pages/candidates'))
const Package = lazy(() => import('./pages/packages'))
const CompanyList = lazy(()=> import('./pages/company-name'))
const Setting = lazy(()=> import('./pages/settings'))
const PostJob = lazy(()=> import('./pages/post-job'))
const Meeting = lazy(()=> import('./pages/meeting'))
const Messege = lazy(()=> import('./pages/messege'))
function App() {

  
  return (
   
    <div>
    <BrowserRouter>
      <Suspense fallback={<div className="loading">
        <img src={load} alt="" className="imgggg" />
      </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/company" element={<Company />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/info" element={<InfoCandidate />} />
          <Route path="/infocompany" element={<InfoCompany />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/package" element={<Package />} />
          <Route path="/company-name" element={<CompanyList />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/messege" element={<Messege/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </div>

 
  );
}

export default App;
