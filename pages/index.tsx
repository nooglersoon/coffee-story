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
import SectionTitle from '../components/Section/SectionTitle'


// from Sutan: the contents

import { Paragraphs } from '../src/contents/article'

const pengantar = Paragraphs[0]

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />

      <Banner />

      <Section>
        <SectionTitle
          title={pengantar.heading.toUpperCase()}
        />
        <ContentArticle
          article={pengantar.content[0].content[0]}
          articleType={pengantar.content[0].type}
        />
        <ContentArticle
          article={pengantar.content[0].content[1]}
          articleType={pengantar.content[0].type}
        />
        <ContentArticle
          article={pengantar.content[0].content[2]}
          articleType={pengantar.content[0].type}
        />
        <ContentArticle
          article={pengantar.content[1].content[0]}
          articleType={pengantar.content[1].type}
        />
        <ContentArticle
          article={pengantar.content[1].content[1]}
          articleType={pengantar.content[1].type}
        />
        <ContentArticle
          article={pengantar.content[1].content[2]}
          articleType={pengantar.content[1].type}
        />
      </Section>

      <Section>
        <SectionTitle
          title="Tujuan dan Sasaran"
        />
        <ContentArticle
          article='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.'
        />
        <ContentArticle
          article='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.'
        />
      </Section>

      <Section>
        <SectionTitle
          title='Metodologi'
        />
        <ContentArticle
          articleTitle='Data dan Pengambilan Data'
          article='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.'
        />
        <ContentImage
          imageTitle='Lokasi Studi dan Unit Analisis'
          imageURL='https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
          footer='1. Image'
        />
        <ContentArticle
          articleTitle='Metodologi analisis'
          article='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.'
        />
      </Section>

      <Section>
        <SectionTitle
          title='Hasil'
        />
        <ContentArticle
          articleTitle='Hasil Analisis'
          article='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.'
        />
        <ContentMap
          mapTitle='Peta Sebaran Kopi'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
        />
      </Section>

      <Footer />
    </div >
  )
}

export default Home
