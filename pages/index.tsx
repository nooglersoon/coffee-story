import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import Section from '../components/Section/Section'
import ContentArticle from '../components/Content/ContentArticle'
import ContentImage from '../components/Content/ContentImage'
import TopBanner from '../components/Banner/TopBanner'
import Footer from '../core/components/Navigations/Footer'
import Navbar from '../core/components/Navigations/Navbar'
import ContentMap from '../components/Content/ContentMap'
import ContributorSection from '../components/Contributors/ContributorSection'
import IntroBanner from '../components/Banner/IntroBanner'
import ScrollToTop from '../core/components/Navigations/ScrollToTop'
import FloatingMenu from '../core/components/Navigations/FloatingMenu'

// Data
import { Paragraphs, PetaAnalisisKopi, PetaAnalisisKopi2 } from '../src/contents/article'

const pengantar = Paragraphs[0]
const Peta = Paragraphs[1]

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />

      <TopBanner />

      <IntroBanner />
      <FloatingMenu
        models={[
          {
            id: 'pengantar',
            title: 'Pengantar'
          },
          {
            id: 'tujuanDanSasaran',
            title: 'Tujuan dan Sasaran'
          }, {
            id: 'metodologi',
            title: 'Metodologi'
          }
          , {
            id: 'hasil',
            title: 'Hasil'
          }, {
            id: 'temuan',
            title: 'Temuan'
          }, {
            id: 'SaranPemilihanLokasi',
            title: 'Saran Pemilihan Lokasi'
          }
        ]}
      />
      <Section
        isOpen={true}
        title={pengantar.heading.toUpperCase()}
        id='pengantar'
      >
        <ContentArticle
          article={pengantar.content[0].content[0]}
          contentType={pengantar.content[0].type}
        />
        <ContentArticle
          article={pengantar.content[0].content[1]}
          contentType={pengantar.content[0].type}
        />
        <ContentArticle
          article={pengantar.content[0].content[2]}
          contentType={pengantar.content[0].type}
        />
        <ContentArticle
          article={pengantar.content[1].content[0]}
          contentType={pengantar.content[1].type}
        />
        <ContentArticle
          article={pengantar.content[1].content[1]}
          contentType={pengantar.content[1].type}
        />
        <ContentArticle
          article={pengantar.content[1].content[2]}
          contentType={pengantar.content[1].type}
        />
      </Section>

      <Section
        isOpen={true}
        title={"Tujuan dan Sasaran".toUpperCase()}
        id='tujuanDanSasaran'
      >
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

      <Section
        isOpen={true}
        title={"Metodologi Analisis".toUpperCase()}
        id='metodologi'
      >
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

      <Section
        isOpen={true}
        title={"Analisis".toUpperCase()}
        id='hasil'
      >
        <ContentArticle
          articleTitle='Hasil Analisis'
          article={Peta.content[0].content[0]}
          contentType={Peta.content[0].type}
        />
        <ContentMap
          mapTitle='Peta Sebaran Kopi'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />
        <ContentArticle
          articleTitle='Hasil Analisis'
          article={Peta.content[0].content[0]}
          contentType={Peta.content[0].type}
        />
        <ContentMap
          mapTitle='Peta Sebaran Kopi'
          footer='2. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi2}
        />
      </Section>
      <ContributorSection />
      <ScrollToTop />
      <Footer />
    </div >
  )
}

export default Home