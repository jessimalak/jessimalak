const projects = {
  insitu: {
    name: "In Situ",
    logo: "inSitu/logo_c1.png",
    icon: "inSitu/ic_launcher-playstore.png",
    desc: `Los lugares mas bellos e interesantes junto con eventos y actividades culturales por todo el Valle de Aburrá los encuentras en In Situ.

    El arte, la ciencia, el deporte y mas está ahora en tu bolsillo para revisar cuando lo necesites incluso sin conexión a internet* para que no te pierdas de nada y puedas divertirte, aprender o pasar un buen momento de esparcimiento a solas o con la mejor compañía.
    
    
    *Requiere conectarse al menos una vez.`,
    platforms: ["android", "react", "pwa"],
    type: "personales",
    other: [
      { name: "Lenguaje principal 📑", value: "Typescript" },
      { name: "Otros lenguajes 📄", value: ["HTML5", "Sass", "Java"] },
      {
        name: "Paquetes/Librerias 📚",
        value: [
          "React",
          "React Native",
          "Firebase",
          "React router",
          "Google maps API",
          "Google Geocode",
          "Semantic-UI",
        ],
      },
    ],
    links: [
      {
        icon: "google-playstore",
        name: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.insitu.jc2",
      },
      { icon: "html5", name: "Web", url: "https://insituapp.com.co" },
      {
        icon: "pwa",
        name: "Web creadores",
        url: "https://creadoresinsitu.web.app",
      },
    ],
    images: [
      { label: "", img: "inSitu/screen_1.png" },
      { label: "", img: "inSitu/screen_2.png" },
      { label: "", img: "inSitu/screen_3.png" },
      { label: "", img: "inSitu/screen_4.png" },
      { label: "", img: "inSitu/screen_5.png" },
      { label: "", img: "inSitu/screen_6.png" },
    ],
  },
  quorum: {
    name: "Quorum",
    logo: "quorum/logoc1.png",
    icon: "quorum/ic_launcher-playstore.png",
    desc: "App de chat que busca asegurar la privacidad de la información usando distintos metodos de encriptado combinados. Ofrece una amplica personalización con mas de 8 distintos temas para el interfaz además de la opción de elegir en cada mensaje el color de la burbuja",
    platforms: ["android", "electron"],
    type: "personales",
    other: [
      { name: "Lenguaje Principal 📑", value: "Typescript" },
      { name: "Otros lenguajes 📄", value: ["HTML5", "CSS3", "Java"] },
      {
        name: "Paquetes/Librerias 📚",
        value: [
          "React Native",
          "Electron",
          "Crypto-es",
          "Firebase",
          "Sweet alert 2",
          "React navigation",
          "Jquery",
        ],
      },
    ],
    links: [
      {
        icon: "github",
        name: "Android",
        url: "https://github.com/jessimalak/Quorum_React",
      },
      {
        icon: "github",
        name: "Escritorio",
        url: "https://github.com/jessimalak/Quorum",
      },
    ],
  },
  // intiva: {
  //   name: "Intiva",
  //   logo: "intiva/logo_w.png",
  //   icon: "intiva/ic_launcher-playstore.png",
  //   desc: "lorem ipsum dolor sit amet, description larga pero no tanto, he he he, touch  me, touch me hard",
  //   platforms: ["android", "apple-appstore", "apple", "microsoft"],
  //   type: "laborales",
  //   other: [
  //     {
  //       name: "Lenguajes",
  //       value: ["Typescript", "Swift", "Objecitve-C", "Java", "C#"],
  //     },
  //     {
  //       name: "Paquetes/Librerias",
  //       value: [
  //         "React Native",
  //         "Lottie",
  //         "Awesome-sharp",
  //         "Crypto-es",
  //         "React-native-PDF",
  //       ],
  //     },
  //   ],
  // },
  neeo: {
    name: "NEEO",
    logo: "neeo/logo.png",
    icon: "neeo/ic_launcher-playstore.png",
    desc: `Proyecto de investigación participante de la Feria Central CT+I 2016, cuyo objetivo principal es realizar un inventario de todos los árboles en la zona urbana del municipio de Sabaneta, Antioquia, y crear un mapa virtual donde se puedan conocer los distintos datos de cada árbol.
    Incluye desarrollo una app (para android y windows) donde además del mapa se dispondrán de guías de sembrado y cuidado del arbolado, información bibliográfica y pronto algunas funciones más.`,
    platforms: ["android", "microsoft"],
    type: "personales",
    other: [
      { name: "Lenguajes 📑", value: ["Java", "C#"] },
      { name: "Paquetes/Librerías 📚", value: ["Firebase", "Google maps API"] },
    ],
    images: [
      { label: "Inicio Android", img: "neeo/screenshot1.png" },
      { label: "Menú Android", img: "neeo/screenshot2.png" },
      { label: "Info Android", img: "neeo/screenshot3.png" },
      { label: "Guías Android", img: "neeo/screenshot4.png" },
      { label: "Inicio windows", img: "neeo/screenshot5.png" },
      { label: "Info windows", img: "neeo/screenshot6.png" },
      { label: "Guías windows", img: "neeo/screenshot7.png" },
    ],
  },
};

export default projects;
