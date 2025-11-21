import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'Our Agency',
      contact: 'Contact'
    },
    hero: {
      title: 'Harmony and Care at Home',
      subtitle: 'We connect families with qualified, compassionate caregivers',
      cta: 'Get Started',
      contactBtn: 'Contact Us'
    },
    features: {
      title: 'Our Advantages',
      screening: 'Thorough Screening',
      screeningDesc: 'Our carers have a minimum of 3 years\' professional experience, and we ensure that  care assistants have relevant training or certification.\n' +
          'We request references from previous employers.\n' +
          'We ensure that carers can adapt to different situations and are able to work independently while following instructions.',
      placement: 'Flexible Placement',
      placementDesc: 'We organise replacements and practical arrangements. We find a solution for your loved ones within 24 hours. \n' +
          'You have an advisor who takes care of everything, from organising the placement of your carer to providing support and follow-up in your daily life.\n',
      matching: 'Personalized Matching',
      matchingDesc: 'For us, human relationships are paramount.\n' +
          'We ensure that the carer is compatible with the patient. We look for qualities in our carers such as empathy, patience and listening skills, which are essential for the patient. A sense of organisation and impeccable rigour are also necessary.'
    },
    services: {
      title: 'Our Nursing Services',
      intro: 'Our nursing services offer personalised assistance to people who have lost their independence, have a disability, or are recovering from hospitalisation, providing support for daily activities, a reassuring presence, and help with household and administrative tasks. They can provide assistance day or night, on a temporary or permanent basis, working with healthcare professionals to ensure continuity of care.',
      servicesOfferedTitle: 'Services offered',
      assistance: 'Assistance with daily living: Help with washing, dressing, moving around and eating meals.',
      presence: 'Presence and supervision: Providing a reassuring presence, monitoring health and alerting others if necessary.',
      psychological: 'Psychological support: Offering a friendly presence and moral support.',
      adminHelp: 'Help with administrative and household tasks: Shopping, meal preparation, housekeeping, managing prepared medication, etc.',
      accompaniment: 'Accompaniment: Outings, medical appointments, social activities.',
      serviceTypesTitle: 'Types of services',
      dayNight: 'Day or night care: Available 24/7 according to your needs.',
      temporary: 'Temporary assistance: Help following hospitalisation or during a period of convalescence.',
      longTerm: 'Long-term support: Ongoing support for elderly people who are losing their independence.',
      occasional: 'Occasional support: Help when the family needs a break.'
    },
    about: {
      title: 'The spirit of our agency',
      motto: 'Harmony & Care at Home',
      subtitle: 'Dedicated to providing exceptional caregiving services',
      mission: 'Our Mission',
      missionDesc: 'At Garde-Malade, we believe that quality care begins with trust.\n\nOur mission is to connect families with compassionate, skilled caregivers who provide not just assistance, but genuine companionship and peace of mind.',
      values: 'Our Values',
      value1: 'Compassion',
      value1Desc: 'We prioritize empathy and understanding in every interaction',
      value2: 'Excellence',
      value2Desc: 'We maintain the highest standards in caregiver selection and training',
      value3: 'Trust',
      value3Desc: 'We build lasting relationships based on reliability and integrity',
      story: 'Our Experience',
      storyDesc: 'We have the expertise of true professionals and the spirit of a real family. Our aim is to offer the best home care services to the elderly people we support.\n\nThis involves taking a very human approach to our work, in particular by creating strong bonds between our teams, carers and our clients.\n\nWe have the same high standards for our clients as we do for our own grandparents.'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      name: 'Your Name',
      email: 'Email Address',
      message: 'Message',
      send: 'Send Message',
      sending: 'Opening your mail client...',
      emailDirect: 'Email us directly at',
        phoneDirect: 'Call us at',
      fillAll: 'Please fill all fields.',
      validEmail: 'Please provide a valid email address.',
      clientNote: 'If your mail client did not open, please email garde.malade.harmony@gmail.com directly.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'Notre Agence',
      contact: 'Contact'
    },
    hero: {
      title: 'Harmony and Care at Home',
      subtitle: 'Nous connectons les familles avec des soignants qualifiés et compatissants',
      cta: 'Commencer',
      contactBtn: 'Nous Contacter'
    },
    features: {
      title: 'Nos Avantages',
      screening: 'Sélection Rigoureuse',
      screeningDesc: 'Nos gardes malades ont un minimum de 3 ans d\'expérience professionnelle, nous nous assurons que  l\'aide soignante a une formation qualifiante ou une certification.\n' +
          'Nous demandons des références auprès des anciens employeurs.\n' +
          'Nous nous assurons que le garde malade peut s\'adapter à différentes situations et sait être capable d\'agir en toute autonomie tout en respectant les consignes.',
      placement: 'Placement Flexible',
      placementDesc: 'Nous organisons le remplacement et l’organisation pratique. Nous trouvons une solution pour vos proches dans les 24 heures. \n' +
          'Vous avez un conseiller qui se charge de tout, de l’organisation de la mise en place de votre garde-malade jusqu’au soutien et au suivi dans votre quotidien.',
      matching: 'Jumelage Personnalisé',
      matchingDesc: 'Pour nous, la relation humaine est primordiale.\n' +
          'Nous nous assurons que le garde malade est compatible avec le patient. Nous recherchons chez nos gardes-malades des qualités comme l\'empathie, la patience et l\'écoute qui sont essentielles pour le patient. Un sens de l\'organisation et une rigueur irréprochable sont nécessaires également.'
    },
    services: {
      title: 'Nos Services de Garde-Malade',
      intro: 'Nos services de garde-malade offrent une assistance personnalisée aux personnes en perte d\'autonomie, en situation de handicap, ou se remettant d\'une hospitalisation, en assurant un soutien pour les activités de la vie quotidienne, la présence rassurante et l\'aide aux tâches ménagères et administratives. Ils peuvent intervenir de jour comme de nuit, selon des besoins temporaires ou permanents, en collaborant avec les professionnels de santé pour garantir la continuité des soins.',
      servicesOfferedTitle: 'Missions et services proposés',
      assistance: 'Aide à la vie quotidienne : Assistance pour la toilette, l\'habillage, les déplacements et la prise de repas.',
      presence: 'Présence et surveillance : Assurer une présence rassurante, une surveillance de l\'état de santé et alerter en cas de besoin.',
      psychological: 'Soutien psychologique : Offrir une présence conviviale et un soutien moral.',
      adminHelp: 'Aide aux tâches administratives et ménagères : Courses, préparation des repas, entretien du logement, gestion des médicaments préparés, etc..',
      accompaniment: 'Accompagnement : Sorties, rendez-vous médicaux, activités sociales.',
      serviceTypesTitle: 'Types d\'interventions',
      dayNight: 'Garde de jour ou de nuit : Disponible 24h/24 et 7j/7 selon vos besoins.',
      temporary: 'Assistance temporaire : Aide suite à une hospitalisation ou pendant une période de convalescence.',
      longTerm: 'Accompagnement longue durée : Soutien continu pour les personnes âgées en perte d\'autonomie.',
      occasional: 'Soutien ponctuel : Aide lorsque la famille a besoin d\'un répit.'
    },
    about: {
      title: 'l\'Esprit de notre agence',
      motto: 'Harmony and Care at Home',
      subtitle: 'Dédiés à fournir des services de soins exceptionnels',
      mission: 'Notre Mission',
      missionDesc: 'Chez Garde-Malade, nous croyons que des soins de qualité commencent par la confiance.\n\nNotre mission est de connecter les familles avec des soignants compatissants et qualifiés qui offrent non seulement de l\'assistance, mais aussi une véritable compagnie et la tranquillité d\'esprit.',
      values: 'Nos Valeurs',
      value1: 'Compassion',
      value1Desc: 'Nous privilégions l\'empathie et la compréhension dans chaque interaction',
      value2: 'Excellence',
      value2Desc: 'Nous maintenons les normes les plus élevées dans la sélection et la formation des soignants',
      value3: 'Confiance',
      value3Desc: 'Nous construisons des relations durables basées sur la fiabilité et l\'intégrité',
      story: 'Notre Expérience',
      storyDesc: 'Nous avons la compétence d’un vrai professionnel et l’esprit d’une vraie famille. Notre souhait est de proposer les meilleures services d’aide à domicile aux personnes âgées que nous accompagnons.\n\n' +
          'Cela passe par une approche très humaine de notre métier, et notamment par la création de liens forts entre nos équipes, les aides soignants et nos clients.\n\n' +
          'Nous avons le même niveau d’exigence pour nos clients que pour nos propres grands-parents.'
    },
    contact: {
      title: 'Nous Contacter',
      subtitle: 'Prenez contact avec notre équipe',
      name: 'Votre Nom',
      email: 'Adresse Email',
      message: 'Message',
      send: 'Envoyer le Message',
      sending: 'Ouverture de votre client de messagerie...',
      emailDirect: 'Envoyez-nous un email directement à',
        phoneDirect: 'Appelez-nous au',
      fillAll: 'Veuillez remplir tous les champs.',
      validEmail: 'Veuillez fournir une adresse email valide.',
      clientNote: 'Si votre client de messagerie ne s\'est pas ouvert, veuillez envoyer un email à garde.malade.harmony@gmail.com directement.'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'fr', // default to French
  fallbackLocale: 'en',
  messages
})

export default i18n
