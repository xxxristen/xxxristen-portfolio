import React from 'react'
import '../css/normalize.css'
import '../css/styles.css'
import { NavBar } from '../components/NavBar'
import { Hello } from '../components/Hello'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <Hello />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
export default IndexPage
export const Head = () => <title>xxxristen's portfolio</title>
