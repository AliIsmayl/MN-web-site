import React from 'react'
import { Helmet } from "react-helmet";
import Header from '../components/Header';
import IndustrySection from '../components/IndustrySection';
import InsightsSection from '../components/InsightsSection';
import LetsWorkSection from '../components/LetsWorkSection';
import OurCaseSection from '../components/OurCaseSection';

function HomePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Header/>
      <IndustrySection/>
      <InsightsSection/>
      <OurCaseSection/>
      <LetsWorkSection/>
    </>
  )
}

export default HomePage