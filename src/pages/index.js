import React from 'react'
import '../css/normalize.css'
import '../css/styles.css'
import { NavBar } from '../components/NavBar'
import { Hello } from '../components/Hello'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

const hiddenElements = document.querySelectorAll("main div.hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})
hiddenElements.forEach((el) => observer.observe(el));

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
