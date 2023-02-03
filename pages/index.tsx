import type { NextPage } from 'next'

// Components
import Section from '../components/Section/Section'
import ContentArticle from '../components/Content/ContentArticle'
import TopBanner from '../components/Banner/TopBanner'
import Footer from '../core/components/Navigations/Footer'
import Navbar from '../core/components/Navigations/Navbar'
import ContentMap from '../components/Content/ContentMap'
import ContributorSection from '../components/Contributors/ContributorSection'
import IntroBanner from '../components/Banner/IntroBanner'
import ScrollToTop from '../core/components/Navigations/ScrollToTop'
import FloatingMenu from '../core/components/Navigations/FloatingMenu'

// Data
import { Paragraphs, PetaAnalisisKopi, PetaAnalisisKopi2 } from '../data/contents/article'

const pengantar = Paragraphs[0]
const pengambilandata = Paragraphs[1]
const metodologi = Paragraphs[2]
const hasilanalisis = Paragraphs[3]
const penduduk = Paragraphs[4]
const korelasi = Paragraphs[5]

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />

      <TopBanner />

      <IntroBanner>
        <ContentMap
          mapTitle=''
          footer=''
          mapProperties={PetaAnalisisKopi2}
        />
      </IntroBanner>
      <FloatingMenu
        models={[
          {
            title: pengantar.heading
          },
          {
            title: pengambilandata.heading
          }, {
            title: metodologi.heading
          }
          , {
            title: hasilanalisis.heading
          }, {
            title: penduduk.heading
          }, {
            title: korelasi.heading
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
        title={"Pengambilan Data".toUpperCase()}
        id={pengambilandata.heading.toLowerCase()}
      >
        <ContentArticle
          article={pengambilandata.content[0].content[0]}
          contentType={pengambilandata.content[0].type}
        />

        <ContentArticle
          article={pengambilandata.content[0].content[1]}
          contentType={pengambilandata.content[0].type}
        />
        <ContentMap
          mapTitle='Lingkup Analisis Artikel'
          footer='Lingkup Analisis'
          mapProperties={PetaAnalisisKopi}
        />


      </Section>

      <Section
        isOpen={true}
        title={"Metodologi".toUpperCase()}
        id={metodologi.heading.toLowerCase()}
      >
        <ContentArticle
          article={metodologi.content[0].content[0]}
          contentType={metodologi.content[0].type}
        />
        <ContentArticle
          article={metodologi.content[0].content[1]}
          contentType={metodologi.content[0].type}
        />
      </Section>

      <Section
        isOpen={true}
        title={"Bagaimana Persebaran Toko Kopi di Jakarta?".toUpperCase()}
        id={hasilanalisis.heading.toLowerCase()}
      >
        <ContentArticle
          articleTitle='Hasil Analisis'
          article={hasilanalisis.content[0].content[0]}
          contentType={hasilanalisis.content[0].type}
        />
        <ContentMap
          mapTitle='Peta Sebaran Kopi'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />
        <ContentArticle
          articleTitle=''
          article={hasilanalisis.content[0].content[1]}
          contentType={hasilanalisis.content[0].type}
        />
        <ContentMap
          mapTitle='Peta Hotspot'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />
        <ContentArticle
          articleTitle=''
          article={hasilanalisis.content[0].content[2]}
          contentType={hasilanalisis.content[0].type}
        />

        <ContentArticle
          articleTitle=''
          article={hasilanalisis.content[0].content[3]}
          contentType={hasilanalisis.content[0].type}
        />
        <ContentArticle
          articleTitle=''
          article={hasilanalisis.content[0].content[4]}
          contentType={hasilanalisis.content[0].type}
        />
        <ContentMap
          mapTitle='Peta Aglomerasi'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />
        <ContentArticle
          articleTitle=''
          article={hasilanalisis.content[0].content[5]}
          contentType={hasilanalisis.content[0].type}
        />

      </Section>

      <Section
        isOpen={true}
        title={"Penduduk Jakarta Di Mana?".toUpperCase()}
        id={penduduk.heading.toLowerCase()}
      >

        <ContentArticle
          articleTitle=''
          article={penduduk.content[0].content[0]}
          contentType={penduduk.content[0].type}
        />

        <ContentMap
          mapTitle='Peta Penduduk'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />


        <ContentArticle
          articleTitle=''
          article={penduduk.content[0].content[1]}
          contentType={penduduk.content[0].type}
        />

        <ContentMap
          mapTitle='Peta Penduduk'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />



      </Section>


      <Section
        isOpen={true}
        title={"Hubungan Penduduk & Toko Kopi".toUpperCase()}
        id={korelasi.heading.toLowerCase()}
      >

        <ContentArticle
          articleTitle=''
          article={korelasi.content[0].content[0]}
          contentType={korelasi.content[0].type}
        />
      </Section>

      <ContributorSection />
      <ScrollToTop />
      <Footer />
    </div >
  )
}

export default Home