import {
  Leaf,
  Palette,
  Sprout,
  Wrench,
  GraduationCap,
  Flower2,
  Phone,
  Ruler,
  FileText,
  Hammer,
  CheckCircle2,
} from "lucide-react"

export const projects = [
  {
    id: 1,
    name: "WUF13 - URBAN EXPO",
    description: "Premium səviyyəli yaşıllaşdırma işlərinin tam icrası",
    status: "Tamamlanmış",
    images: [
      "/WUF13 - URBAN EXPO/WUF1.jpeg",
      "/WUF13 - URBAN EXPO/WUF2.jpeg",
      "/WUF13 - URBAN EXPO/WUF3.jpeg",
      "/WUF13 - URBAN EXPO/WUF4.jpeg"
    ],
  },
  {
    id: 2,
    name: "WUF13 - VIP ZONE",
    description: "Premium səviyyəli yaşıllaşdırma işlərinin tam icrası",
    status: "Tamamlanmış",
    images: [
      "/WUF13 - VIP ZONE/Wuf-1.jpeg",
      "/WUF13 - VIP ZONE/Wuf-2.jpeg",
      "/WUF13 - VIP ZONE/Wuf-3.jpeg",
      "/WUF13 - VIP ZONE/Wuf-4.jpeg",
      "/WUF13 - VIP ZONE/Wuf-5.jpeg",
      "/WUF13 - VIP ZONE/Wuf-6.jpeg",
      "/WUF13 - VIP ZONE/Wuf-7.jpeg",
      "/WUF13 - VIP ZONE/Wuf-8.jpeg",
    ],
  },
  {
    id: 3,
    name: "WUF13 - AZERBIJAN PAVILION",
    description: "Premium səviyyəli yaşıllaşdırma işlərinin tam icrası",
    status: "Tamamlanmış",
    images: [
      "/WUF13 - AZERBIJAN PAVILION/WUF-1.jpeg",
      "/WUF13 - AZERBIJAN PAVILION/WUF-2.jpeg",
      "/WUF13 - AZERBIJAN PAVILION/WUF-3.jpeg",
      "/WUF13 - AZERBIJAN PAVILION/WUF-4.jpeg",
      "/WUF13 - AZERBIJAN PAVILION/WUF-5.jpeg",
      "/WUF13 - AZERBIJAN PAVILION/WUF-6.jpeg"
    ],
  },
  {
    id: 4,
    name: "Port Baku Tower 1",
    description: "Premium səviyyəli yaşıllaşdırma işlərinin tam icrası",
    status: "Tamamlanmış",
    images: [
      "/portBaku1/portBaku1.jpg",
      "/portBaku1/portBaku2.jpg",
      "/portBaku1/portBaku3.jpg"

    ],
  },
  {
    id: 5,
    name: "Port Baku Tower 2",
    description: "Premium səviyyəli yaşıllaşdırma işlərinin tam icrası",
    status: "Tamamlanmış",
    images: [
      "/portBaku2/portBaku.jpg",
      "/portBaku2/portBaku2.jpg",
      "/portBaku2/portBaku3.jpg",
      "/portBaku2/portBaku4.jpg",

    ],
  },
  
  {
    id: 6,
    name: "Hilton Garden İnn Baku",
    description: "Premium səviyyəli yaşıllaşdırma işlərinin tam icrası",
    status: "Tamamlanmış",
    images: [
      "/hilton/Hilton1.jpg",
      "/hilton/Hilton2.jpg",
      "/hilton/Hilton3.jpg",
      "/hilton/Hilton4.jpg",
      "/hilton/Hilton5.jpg",
    ],
  },
  {
    id: 7,
    name: "Hillside Residence",
    description: "Premium təbii qazon örtüyünün salınması",
    status: "Tamamlanmış",
    images: [
      "https://avatars.mds.yandex.net/i?id=5eb2d999f150e6ed297df522943c5088_l-4571839-images-thumbs&n=13",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/84/9d/9b/excelsior-hotel-baku.jpg?w=900&h=500&s=1",
      "https://avatars.mds.yandex.net/i?id=f5431ec7e97c91e5ef10b18a2d2fde8cd2031d20-16476092-images-thumbs&n=13"
    ],
  },
  {
    id: 8,
    name: "Təbriz Evləri",
    description: "Premium təbii qazon örtüyünün salınması",
    status: "Tamamlanmış",
    images: [
      "https://djb.az/uploads/posts/2018-01/1515048083_067.jpg",
      
    ],
  },
  {
    id: 9,
    name: "Çinar Plaza",
    description: "Premium təbii qazon örtüyünün salınması",
    status: "Tamamlanmış",
    images: [
      "data:image/jpeg;base64,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",
     ],
  },
  {
    id: 10,
    name: "Excelsior Hotel & Spa Baku",
    description: "Premium təbii qazon örtüyünün salınması",
    status: "Tamamlanmış",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/84/9d/9b/excelsior-hotel-baku.jpg?w=900&h=500&s=1",
      
    ],
  },
  {
    id: 11,
    name: "Zaqatala Kapital Bank",
    description: "Yaşıllıqlara baxım xidməti",
    status: "Tamamlanmış",
    images: [
      "https://olke.az/file/articles/2025/01/17/1737113906_narimanovfiliali1621576877.jpg",
      
    ],
  },

 
  {
    id: 12,
    name: "Pirallahi Nərəkənd",
    description: "Premium səviyyəli yaşıllaşdırma işləri",
    status: "Tamamlanmış",
    images: [
      "/projects/nerekend.png",
     
    ],
  },
  {
    id: 13,
    name: "Zəngilan rayonu Ağalı Hotel",
    description: "Premium səviyyəli yaşıllaşdırma işləri",
    status: "Tamamlanmış",
    images: [
      "https://iqtisadiyyat.az/storage/posts/3df26009a3cae18.webp",
    ],
  },
  {
    id: 14,
    name: "Xazri Villa Sea Side Baku",
    description: "Ərazinin peşəkar şəkildə təmizlənməsi və abadlığa hazırlığı",
    status: "Tamamlanmış",
    images: [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/607879667.jpg?k=d24f3b9463ac39bfb93d94fea14dc650d5f599029d12f3baf64fd99c3f14df4f&o=",
    "https://avatars.mds.yandex.net/i?id=722745736b8faa2fa8cbb90806b5ab4dd1fd8d54-12500494-images-thumbs&n=13"
    
    
    ],
  },
  {
    id: 15,
    name: "Şuşa SOCAR petrolium",
    description: "Yaşıllaşdırma və dekorativ landşaft işləri.",
    status: "Tamamlanmış",
    images: [
      "/projects/SushaPetrol.jpg"
      
    ],
  },
  {
    id: 16,
    name: "Müşfiqabad SOCAR petrolium",
    description: "Yaşıllaşdırma və dekorativ landşaft işləri.",
    status: "Tamamlanmış",
    images: [
      "/projects/MusfiqabadPetrol.jpg"
      
    ],
  },
  {
    id: 17,
    name: "Şəmkir SOCAR petrolium",
    description: "Yaşıllaşdırma və dekorativ landşaft işləri.",
    status: "Tamamlanmış",
    images: [
      "/projects/SocarPetrolium.webp",
  ],
  }
]

export const services = [
  {
    icon: Leaf,
    title: "Kompleks yaşıllaşdırma",
    description: "Tam həllər sizin məkanınız üçün",
  },
  {
    icon: Palette,
    title: "Landşaft dizaynı",
    description: "Kreativ və funksional dizayn layihələri",
  },
  {
    icon: Sprout,
    title: "Bitki əkini",
    description: "Keyfiyyətli bitki materialları və peşəkar əkim",
  },
  {
    icon: Wrench,
    title: "Texniki qulluq",
    description: "Davamlı yaşıllıq üçün müntəzəm qulluq",
  },
  {
    icon: GraduationCap,
    title: "Aqronom konsultasiyası",
    description: "Peşəkar məsləhət və tövsiyələr",
  },
  {
    icon: Flower2,
    title: "Dekorativ kompozisiyalar",
    description: "Estetik və unikal landşaft həlləri",
  },
]

export const standards = [
  "Beynəlxalq keyfiyyət standartlarına uyğunluq",
  "Ekoloji cəhətdən təmiz materiallar",
  "Sertifikatlı aqronomlar və dizaynerlər",
  "Kompleks zəmanət xidməti",
  "Müştəri məmnuniyyəti prioriteti",
  "Vaxtında layihə təhvili",
]

export const steps = [
  {
    icon: Phone,
    title: "İlkin müraciət",
    description: "Sizinlə əlaqə qururuq və tələblərinizi öyrənirik",
  },
  {
    icon: Ruler,
    title: "Ölçmə və analiz",
    description: "Sahəni detallı olaraq öyrənir və ölçülər aparırıq",
  },
  {
    icon: FileText,
    title: "Təklif",
    description: "Fərdi dizayn layihəsi və təklif hazırlayırıq",
  },
  {
    icon: Hammer,
    title: "Əkin və icra",
    description: "Peşəkar komandamız işləri yüksək keyfiyyətlə yerinə yetirir",
  },
  {
    icon: CheckCircle2,
    title: "Təhvil",
    description: "Layihəni təhvil verir və zəmanət təqdim edirik",
  },
]

export const partners = [
  { name: "PMD Group", logo: "https://fed.az/upload/news/629485.png" },
  { name: "PDM Projects", logo: "https://pmdprojects.az/uploads/2026/02/logo.svg" },
  { name: "FMG Group", logo: "https://fmg.az/M0/mainlogo/20251201_134927_1764582567_49d0211925.png" },
  { name: "MOR MMC", logo: "https://www.mor.az/svg/logo-ag.png" },
  { name: "IMF Group", logo: "https://imfco.az/images/logo.svg" },
  { name: "UNICO Group ", logo: "https://b4064436.smushcdn.com/4064436/wp-content/uploads/2025/08/uloq99.webp?lossy=2&strip=1&webp=1" },
  { name: "core enginering ", logo: "./core_enginering.jpg" },
]
