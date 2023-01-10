import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section from '../components/Section/Section'
import ContentArticle from '../components/Content/ContentArticle'
import ContentImage from '../components/Content/ContentImage'
import Banner from '../components/Banner/Banner'
import Footer from '../core/components/Navigations/Footer'
import Navbar from '../core/components/Navigations/Navbar'
import ContentMap from '../components/Content/ContentMap'

const Prototype: NextPage = () => {

  return (
    <div>
      <Navbar />
      <Banner />
      <Section>
        <ContentArticle />
        <ContentImage />
      </Section>
      <Section>
        <ContentArticle />
        <ContentArticle />
        <ContentArticle />
        <ContentMap />
      </Section>
      <Section>
        <ContentImage />
      </Section>
      <Footer />
    </div >
  )
}

export default Prototype
