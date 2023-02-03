import { ContentType, ContentSection } from "../../lib/Contents/Interface/ContentInterface"
import Data from '../maps/data'
import { MapProperties, MapColorScheme, MapStyleProperies, MapOnEachFeature } from '../../lib/Contents/Interface/MapInterface'

// Method to create maps

const onEachFeature: MapOnEachFeature = (feature: any, layer: any) => {
    if (feature.properties && feature.properties.coffee_count) {
        layer.bindTooltip(feature.properties.coffee_count);
    }
}

const onEachFeature2: MapOnEachFeature = (feature: any, layer: any) => {
    if (feature.properties && feature.properties.quadrant_population) {
        layer.bindTooltip(`quadrant: ${feature.properties.quadrant_population}`);
    }
}

const styleMap = (feature: any): MapStyleProperies => {
    const total_coffee_shop: string = feature.properties.coffee_count
    const schema: MapColorScheme = {
        'tidak teridentifikasi': '#242424',
        'ada toko kopi': '#253494',
        'sedikit': '#2c7fb8',
        'banyak': '#41b6c4',
        'sangat banyak': '#ffffcc'
    }
    return {
        fillColor: schema[total_coffee_shop],
        stroke: false,
        fillOpacity: (total_coffee_shop === 'tidak teridentifikasi') ? 0.2 : 0.6
    }
}

const styleMap2 = (feature: any): MapStyleProperies => {
    const quadrant_population: string = feature.properties.quadrant_population
    const schema: MapColorScheme = {
        1: '#242424',
        2: '#253494',
        3: '#2c7fb8',
        4: '#41b6c4',
        // 'sangat banyak': '#ffffcc'
    }
    return {
        fillColor: schema[quadrant_population],
        stroke: false,
        fillOpacity: 0.6
    }
}

export const PetaAnalisisKopi: MapProperties = {
    data: Data,
    style: styleMap,
    onEachFeature: onEachFeature
}

export const PetaAnalisisKopi2: MapProperties = {
    data: Data,
    style: styleMap2,
    onEachFeature: onEachFeature2
}

export const Paragraphs: ContentSection[] = [
    {
        heading: "Pengantar",
        level: 1,
        content: [
            {
                type: ContentType.Paragraph,
                content: [
                    'Toko kopi merupakan salah satu usaha yang lagi sangat berkembang di Indonesia. Walaupun warung-warung kopi sudah sejak lama ada, baru pada sekitar tahun 2017 usaha kopi  mengalami pertumbuhan yang sangat pesat (source).  Perkembangan usaha kopi ini dipicu oleh beberapa hal mulai dari kebutuhan masyarakat terhadap barang kopi itu sendiri hingga trend dan pemenuhan gaya hidup. Selain itu toko kopi juga sering kali menyediakan alternatif tempat untuk melakukan berbagai aktivitas mulai dari belajar, kumpul Bersama teman, hingga bekerja dan melakukan pertemuan.',
                    'Untuk membuka usaha toko kopi apasih yang perlu diperhatikan? Biasanya lokasi usaha mengutamakan kedekatan dengan lokasi pembeli. Bisa juga dengan mengetahui informasi lokasi usaha pesaing, usaha yang akan didirikan dapat memutuskan untuk menjauh atau mendekati usaha pesaing. Pentingnya memiliki informasi ini dapat menentukan kesuksesan toko kopi yang akan dibuka. ',
                    'Tulisan ini menceritakan pola lokasi toko kopi di Jakarta. Untuk menggali hal tersebut terdapat beberapa pertanyaan terkait lokasi toko kopi untuk dijawab, seperti:'
                ]
            },
            {
                type: ContentType.Point,
                content: [
                    'Apakah terdapat pola khusus berlokasi untuk toko kopi di Jakarta saat ini? Apakah toko kopi cenderung berkumpul atau tersebar di Kota Jakarta?',
                    'Bagaimana hubungan antara toko kopi dengan lokasi penduduk? Apakah toko kopi cenderung berlokasi di wilayah di mana penduduk berkumpul?',
                    'Informasi apa yang dapat dimanfaatkan untuk pemilihan lokasi toko kopi baru?'
                ]
            }
        ]
    },
    {
        heading: "Pengambilan Data",
        level: 1,
        content: [
            {
                type: ContentType.Paragraph,
                content: [
                    'Data yang digunakan dalam studi ini adalah data lokasi toko kopi di Jakarta dan data populasi penduduk Jakarta. Lokasi toko kopi bersumber dari permintaan menggunakan Google Maps. Sementara untuk data populasi penduduk, kami mengambil dari Global Human Settlement Layer – population (GHSL). Peta berikut merupakan peta lingkup analisis yang kamil lakukan.',
                    'Data yang kami gunakan meliputi data lokasi toko kopi dan lingkup studi yang dibagi ke dalam polygon-poligon kecil. Data lokasi toko kopi dan jumlah penduduk diambil dan ditambahkan sebagai atribut tiap unit analisis heksagon. Data yang telah disimpan dalam polygon dengan luas yang sama ini dapat pula diartikan data kepadatan toko kopi dan penduduk.'
                ]
            }
        ]
    },
    {
        heading: "Metodologi",
        level: 1,
        content: [
            {
                type: ContentType.Paragraph,
                content: [
                    'Hal yang perlu digaris bawahi adalah perbandingan area heksagon ini dilakukan hanya terhadap heksagon yang memiliki keterkaitan secara keruangan. Kami menggunakan semacam matriks yang di dalamnya berisi informasi keterkaitan untuk tiap tiap heksagon satu dengan yang lainnya.',
                    'Analisis lain yang dilakukan adalah mengukur tingkat berkumpul atau tersebarnya toko kopi dalam bentuk indeks. Kami mencari hotspotnya. Analisis ini memiliki dua bentuk, pertama mengukur tingkat tingkat berkumpul pada skala Kota Jakarta. Bentuk ini menghasilkan indeks yang memperlihatkan pola fitur berlokasi berupa berkumpul, tersebar, atau tidak terbentuk pola sama sekali. Bentuk kedua adalah analisis yang dilakukan secara lokal. Kami membagi hexagon menjadi beberapa kelompok: (1) Tinggi-Tinggi, (2) Rendah-Rendah,(3) Rendah-Tinggi, dan (4) Tinggi-Rendah. Terakhir, kami melakukan analisis keterkaitan antara data jumlah 300k toko kopi dan permukiman penduduk untuk melihat apakah jumlah  300k toko kopi berbanding lurus dengan jumlah penduduk di sekitarnya.'
                ]
            }
        ]
    },
    {
        heading: "Hasil Analisis",
        level: 1,
        content: [
            {
                type: ContentType.Paragraph,
                content: [
                    'Peta berikut adalah peta jumlah toko kopi per hexagon area di Kota Jakarta. Menunjukkan jumlah toko kopi yang terdapat dalam radius 500-meter heksagon. Jumlah toko kopi untuk tiap heksagon berkisar 0 hingga 8 toko kopi. Tampak wilayah yang cukup luas tanpa toko kopi di sebelah utara yang merupakan area laut, timur sebagai wilayah industri, serta selatan dan barat yang banyak areanya sebagai lahan bandara.',
                    'Peta berikut menunjukkan ukuran sebuah ukuran indeks hotspot toko kopi di wilayah Jakarta. Area dengan warna lebih terang menunjukkan semakin banyak toko kopi yang dapat dijangkau dari area tersebut. Jika dibandingkan dengan gambar jumlah toko kopi, pada gambar ini tampak area dengan warna paling terang bukan selalu area dengan toko kopi terbanyak. Hal ini dikarenakan jumlah toko kopi di sekitar area yang terkait juga ikut diperhitungkan. Jika dilihat dari gambar, lokasi toko kopi terbanyak sekaligus menjadi hotspot/ pusat toko kopi di Jakarta berada di daerah Pantai Indah Kapuk, Mall Kelapa gading, Duren-Kalibata, dan Pekayon. ',
                    'Hasil analisis aglomerasi mengelompokkan unit hexagon menjadi 4 kategori seperti peta di bawah. Analisis aglomerasi global mengindikasikan pola berlokasi toko kopi untuk skala Jakarta bersifat random atau lebih tiepatnya tidak memusat di satu tempat dan tidak pula tersebar di seluruh wilayah. ',
                    'Membahas peta pengelompokkan karakteristik area toko kopi, ditunjukkan oleh warna (1) adalah area yang memiliki banyak toko kopi dan berada dikelilingi oleh area yang memiliki banyak toko kopi pula. Kemungkinan area ini adalah area yang cukup ramai di mana orang berkumpul dan beraktivitas sehingga menarik peluang bisnis kopi di wilayah tersbut. Selain hotspot yang sudah disebutkan dalam analisis sebelumnya terdapat pula area dengan kumpulan toko kopi yang tidak sebanyak hotspot namun terhitung cukup tinggi dan menyatu dalam area yang cukup luas seperti Gondangdia-Cikini, Stasiun Gambir, Bundaran HI. Area ini berkarakteristik di Pusat Kota Jakarta.',
                    `Heksagon dengan warna (2) menunjukkan area di mana tidak terdapat toko kopi baik di dalam area tersebut maupun di sekelilingnya. Biasanya merupakan area yang tidak ramai aktivitas.
                    Heksagon dengan warna (3) menunjukkan area di mana di area tersebut tidak terdapat toko kopi namun di sekelilingnya terdapat banyak toko kopi. Area ini menunjukkan wilayah peralihan/ terluar dari tempat keramaian toko kopi. 
                    Sementara area berwarna (4) menunjukkan area dengan banyak toko kopi di tengah tempat yang tidak banyak menyediakan toko kopi. 
                    `,
                    `Catatan dalam analisis ini adalah walaupun ukuran aglomerasi menujukkan pengelompokkan toko kopi bersifat random, perlu dipahami bahwa analisis ini merupakan skala agregat di mana unit heksagon di dalamnya tidak tercermin di dalam analisis. Jika area studi dipersempit, maka kemungkinan ukuran aglomerasi toko kopi bisa menjadi lebih tinggi. Seperti area pusat kota maupun pusat perbelanjaan`
                ]
            }
        ]
    },
    {
        heading: "Penduduk Jakarta",
        level: 1,
        content: [
            {
                type: ContentType.Paragraph,
                content: [
                    'Peta persebaran penduduk menunjukkan persebaran jumlah penduduk dalam unit heksagon. Dalam gambar ditunjukkan bahwa hampir seluruh wilayah Jakarta dihuni oleh penduduk, kecuali di wilayah dengan warna terang.',
                    `Heksagon dengan warna (1) menunjukkan area adengan populasi penduduk yang tinggi dan berada di area dengan jumlah penduduk yang serupa. Terlihat aglomerasi penduduk di Kota Jakarta yang membentang dari barat hingga bagian timur kota.
                    Kemudian heksagon dengan warna (3) menunjukkan kantung-kantung dengan kepadatan penduduk yang rendah ditengah permukiman padat penduduk.
                    hexagon dengan warna nomor 4 menunjukkan hexagon dengan jumlah penduduk yang tinggi dikelilingi oleh penduduk kepadatan rendah. Wilayah ini terdapat di wilayah peralihan padat permukiman (area nomor 1).
                    `
                ]
            },

        ]
    },
    {
        heading: "Toko Kopi & Penduduk Jakarta",
        level: 1,
        content: [
            {
                type: ContentType.Paragraph,
                content: [
                    `Analisis keterkaitan jumlah toko kopi terhadap jumlah penduduk menunjukkan tidak ada keterkaitan yang signifikan. Dapat diartikan bahwa toko kopi tidak mengincar permukiman untuk tempat berlokasi sekalipun tempat tersebut padat akan penduduk. Kendati demikian toko kopi juga tidak bergerak menjauhi permukiman/ kepadatan. Terdapat cerita lain yang menjadi penyebab toko kopi memilih lokasi selain dari lokasi padat penduduk.
                    Yang menjadi catatan adalah data penduduk yang digunakan adalah data tempat penduduk tinggal/ bermukim. Toko kopi tetap memerlukan keramaian untuk dapat beroperasi, data tempat penduduk beraktivitas bisa menjadi pendekatan yang lebih baik untuk memprediksi alasan toko kopi berlokasi.
                    Walau tidak memiliki keterkaitan khusus, pola keterkaitan antara toko kopi dan jumlah/ kepadatan penduduk tetap dapat disajikan dalam bentuk peta seperti pada gambar 8. Kita membagi area ke dalam 4 kelompok sesuai dengan jumlah toko kopi dan kepadatan penduduk dalam tiap heksagon. 
                    Perhatikan nomor 3 dan 4 pada peta.
                     (Nomor 3) adalah wilayah banyak toko kopi di area rendah kepadatan penduduk. Area ini bukan tempat bermukim namun banyak terdapat tempat kopi, diindikasikan area ini adalah area tempat orang beraktivitas seperti bekerja, berbelanja, atau transit dan bepergian. Area ini hanya sebanyak 5.2% area di Jakarta. 45%
                     (Nomor 4) adalah wilayah banyak toko kopi di wilayah padat penduduk. Diindikasikan toko kopi ini berada di area dekat dengan pusat aktivitas di permukiman penduduk seperti kumpulan toko-toko yang dekat dengan rumah. Jenis toko kopi ini menempati 6.3% area di Jakarta. 54%
                    `
                ]
            },

        ]
    },
    {
        heading: "Contoh Peta",
        level: 1,
        content: [
            {
                type: ContentType.Paragraph,
                content: [
                    'Berikut merupakan peta hasil analisis persebaran kopi di DKI Jakarta. Bagaimana hubungan antara toko kopi dengan lokasi penduduk? Apakah toko kopi cenderung berlokasi di wilayah di mana penduduk berkumpul?'
                ]
            },
            {
                type: ContentType.Point,
                content: [
                    'Berikut merupakan peta hasil analisis persebaran kopi di DKI Jakarta. Bagaimana hubungan antara toko kopi dengan lokasi penduduk? Apakah toko kopi cenderung berlokasi di wilayah di mana penduduk berkumpul?'
                ]
            }
        ]
    },
]