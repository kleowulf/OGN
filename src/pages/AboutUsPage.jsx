import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'


const AboutUsPage = () => {
  return (
    <>
    <Navbar />
    <section className='py-4'>
    <div className='container-xl lg:container m-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
        <Card>
            <h1>Travis</h1>
        </Card>
        <Card>
            <h1>Clay</h1>
        </Card>
        <Card>
            <h1>Jared</h1>
        </Card>
      </div>
    </div>
  </section>
  </>
  )
}

export default AboutUsPage