import React from 'react'
import Banner from '../Banner/Banner'
import Choose from '../Choose/Choose'
import Faq from '../Faq/Faq'
import Team from '../Team/Team'
import Trust from './Trust/Trust'
import Successful from '../Successful/Successful'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Choose/>
      <Faq/>
      <Team/>
      <Trust/>
      <Successful/>
    </div>
  )
}

export default Home