import { ContentType, ContentSection } from "../../lib/Contents/Interface/ContentInterface"
import Data from '../maps/data'
import { MapProperties, MapColorScheme, MapStyleProperies, MapOnEachFeature } from '../../lib/Contents/Interface/MapInterface'

// Method to create maps

const onEachFeature: MapOnEachFeature = (feature: any, layer: any) => {
    if (feature.properties && feature.properties.coffee_count) {
        layer.bindTooltip(feature.properties.coffee_count);
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

export const PetaAnalisisKopi: MapProperties = {
    data: Data,
    style: styleMap,
    onEachFeature: onEachFeature
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