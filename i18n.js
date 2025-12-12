import { CardNumber } from "@mercadopago/sdk-react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        welcome: "Bienvenido a la página",
        donate: "Donar ahora",
        nav: {
          home: "Contenido",
          about: "Quienes Somos",
          history: "Nuestra Historia",
          contact: "Contáctanos",
          donate: "Dona ahora",
        },
        DynamicDonationCard: {
          main: "no solo entrena,<br />forma integralmente para el alto rendimiento<br />y la vida.",
        },
        Hero: {
          text: "Transformando vidas con talento <br /> a través del fútbol",
        },
        section1: {
          title: "¿Por qué ALIENTA PERUANO?",
          reasons: [
            "Porque el fútbol puede salvar una vida.",
            "Muchos niños llegan sin dinero, sin comida y sin nadie que los apoye.",
            "Los recibimos con lo poco que tenemos, porque creemos en ellos más que nadie.",
          ],
          part2Title: "Les brindamos: ",
          part2Card1Title: "Entrenamiento de futbol personalizado",
          part2Card2Title: "Suplementacion Alimenticia",
          part2Card3Title: "Asistencia médica y psicológica",
          part2Card4Title: "Apoyo educativo y emocional",
        },
        section2: {
          title: "Nuestra Realidad",
          subtitle: "¿Qué enfrentamos?",
          paragraph: "Trabajamos con niños de zonas altamente vulnerables:",
          part2Card1: "Violencia, drogas y pandillaje",
          part2Card2: "Falta de acceso educacion y salud",
          part2Card3: "Pobreza extrema y desnutricion",
          part2Card4: "Ausencia de apoyo familiar y oportunidades",
        },
        section3: {
          title: "Lo que nos limita",
          part2Box1: "No contamos con financiamiento",
          part2Box2: "Muchos niños no pueden pagar ni el transporte",
          part2Box3:
            "No tenemos infraestructura adecuada (canchas, gimnasio, nutrición estable)",
          part2Box4:
            "Necesitamos recursos para ofrecer una formación de calidad",
        },
        section4: {
          title: "Lo que necesitamos",
          subtitle: "Aliados con corazón y visión",
          part2Title: "Buscamos:",
          part2Box1:
            "Empresas y personas que apoyen con financiamiento o productos",
          part2Box2: "Voluntarios, entrenadores, médicos, psicólogos, docentes",
          part2Box3: "Apadrinamiento de niños o donaciones mensuales",
          part2Box4: "Difusión de nuestra causa",
        },
        section5: {
          title: "Impacto real",
          part2Box1: "Hemos acogido a cientos de niños y adolescentes.",
          part2Box2:
            "Algunos de ellos ya son profesionales en distintos campos.",
          part2Box3: "Les enseñamos valores, disciplina y autoestima.",
          part2Box4: "Creamos comunidad, respeto y sueños posibles.",
        },
        section6: {
          title: "Público objetivo",
          part2Box1Title: "Primario",
          part2Box1Paragraph:
            "Niños de entre 8 y 17 años con talento futbolístico, en contextos de vulnerabilidad",
          part2Box2Title: "Secundario",
          part2Box2Paragraph: "Padres o tutores de los niños",
          part2Box3Title: "Terciario (aliados)",
          part2Box3Paragraph:
            "Empresas privadas, instituciones educativas, medios de comunicación, entrenadores profesionales, figuras públicas del fútbol.",
        },
        section7: {
          title: "Análisis de competencia",
          part2Box1Title: "Escuelas de fútbol tradicionales:",
          part2Box1Paragraph:
            "Se enfocan solo en la técnica. No abordan nutrición, psicología ni educación formal",
          part2Box2Title: "Academias profesionales privadas",
          part2Box2Paragraph:
            "Costosas, inaccesibles para niños de bajos recursos",
          part2Box3Title: "ONGs deportivas:",
          part2Box3Paragraph:
            "Existen, pero pocas con enfoque profesionalizante",
          part3Title: "Diferenciador clave",
          part3Paragraph:
            "ALIENTA PERUANO no solo entrena, forma integralmente para el alto rendimiento y la vida",
        },
        history: {
          title: "Nuestra Historia",
          subtitle: "¿Cómo empezó todo?",
          paragraphs: {
            n1: "ALIENTA PERUANO nació en diciembre de 2015, en San Juan de Lurigancho, gracias al esfuerzo de un grupo de amigos unidos por el amor al fútbol y el deseo de ayudar.",
            n2: "Comenzamos con pocos niños en una cancha humilde, pero con un sueño grande: usar el fútbol como herramienta para alejar a los niños de la delincuencia, las drogas, el abandono y la pobreza.",
            n3: "Muchos de nuestros niños no cuentan con el apoyo de sus familias, ni los medios para pagar una formación deportiva. Aun así, entrenan con pasión, aunque no tengan recursos económicos, o sin que nadie crea en ellos. Porque para ellos, el fútbol no es solo un deporte, es una oportunidad de vida.",
            n4: "Hoy somos una asociación comprometida a transformar futuros, brindando entrenamiento, salud, nutrición, educación y apoyo emocional. Sin embargo, nuestros recursos son limitados y la necesidad es enorme.",
          },
        },
        contact: {
          title: "¡Contactanos!",
          subtitle: "Únete a nuestro equipo Alienta un sueño",
          slogan: "Transforma una vida",
          contactNumber: "Contacto: 999 999 999"
        },
      },
    },
    en: {
      translation: {
        welcome: "Welcome to the page",
        donate: "Donate now",
        nav: {
          home: "Home",
          about: "About Us",
          history: "our history",
          contact: "Contact Us",
          donate: "Donate now",
        },
        DynamicDonationCard: {
          main: "not only trains,<br />develops integrally for high performance<br />and life.",
        },
        Hero: {
          text: "Transforming lives with talent <br /> through football",
        },
        section1: {
          title: "Why ALIENTA PERUANO?",
          reasons: [
            "Because football can save a life.",
            "Many children arrive without money, without food, and without anyone to support them.",
            "We welcome them with the little we have, because we believe in them more than anyone.",
          ],
          part2Title: "We provide: ",
          part2Card1Title: "Personalized football training",
          part2Card2Title: "Nutritional Supplementation",
          part2Card3Title: "Medical and psychological assistance",
          part2Card4Title: "Educational and emotional support",
        },
        section2: {
          title: "Our Reality",
          subtitle: "What do we face?",
          paragraph: "we work with children from highly vulnerable areas:",
          part2Card1: "Violence, drugs and gang activity",
          part2Card2: "Lack of access to education and healthcare",
          part2Card3: "Extreme poverty and malnutrition",
          part2Card4: "Lack of family support and opportunities",
        },
        section3: {
          title: "What limit us",
          part2Box1: "We do not have constant funding",
          part2Box2: "Many children cannot even afford transportation",
          part2Box3:
            "We do not have adequate infrastructure (fields, gym, stable nutrition)",
          part2Box4: "We need resources to provide quality training",
        },
        section4: {
          title: "What we need",
          subtitle: "Allies with heart and vision",
          part2Title: "We seek:",
          part2Box1:
            "Companies and individuals who support with funding or products.",
          part2Box2: "Volunteers, coaches, doctors, psychologists, teachers.",
          part2Box3: "Child sponsorship or monthly donations",
          part2Box4: "Promotion of our cause",
        },
        section5: {
          title: "Real impact",
          part2Box1: "We have welcomed hundreds of children and adolescents.",
          part2Box2:
            "Some of them are already professionals in different fields.",
          part2Box3: "We teach them values, discipline, and self-esteem.",
          part2Box4: "We create community, respect, and possible dreams.",
        },
        section6: {
          title: "Target audience",
          part2Box1Title: "Primary",
          part2Box1Paragraph:
            "Children between 8 and 17 years old with football talent",
          part2Box2Title: "Secondary",
          part2Box2Paragraph: "Parents or guardians of the children",
          part2Box3Title: "Tertiary (allies)",
          part2Box3Paragraph:
            "Private companies, educational institutions, media outlets, profesional coaches, public football figures.",
        },
        section7: {
          title: "Competitor analysis",
          part2Box1Title: "Traditional football schools",
          part2Box1Paragraph:
            "They focus only on technique. They do not address nutrition, psychology, or formal education",
          part2Box2Title: "Private professional academies:",
          part2Box2Paragraph:
            "Expensive, inaccessible for children from low-income families",
          part2Box3Title: "Sports NGOs",
          part2Box3Paragraph:
            "They exist, but few with a professionalizing focus",
          part3Title: "Key differentiator",
          part3Paragraph:
            "ALIENTA PERUANO not only trains, it comprehensively prepares for high performance and life",
        },
        history: {
          title: "Our History",
          subtitle: "How did it all start?",
          paragraphs: {
            n1: "ALIENTA PERUANO was born in December 2015, in San Juan de Lurigancho, thanks to the effort of a group of friends united by their love of football and their desire to help.",
            n2: "We started with a few children on a humble field, but with a big dream: to use football as a tool to keep children away from crime, drugs, neglect, and poverty.",
            n3: "Many of our children do not have the support of their families, nor the means to pay for sports training. Even so, they train with passion, even if they lack financial resources or if no one believes in them. Because for them, football is not just a sport, it is a life opportunity.",
            n4: "Today we are an association committed to transforming futures, providing training, health, nutrition, education, and emotional support. However, our resources are limited and the need is enormous.",
          },
        },
        contact: {
          title: "Contact Us!",
          subtitle: "Join our team, Encourage a dream",
          slogan: "Transform a life",
          contactNumber: "Contact: 999 999 999"
        },
      },
    },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
