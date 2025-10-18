import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact'
    },
    hero: {
      title: 'Harmony and Care at Home',
      subtitle: 'We connect families with qualified, compassionate caregivers',
      cta: 'Get Started',
      contactBtn: 'Contact Us'
    },
    features: {
      title: 'Our Services',
      screening: 'Thorough Screening',
      screeningDesc: 'All caregivers undergo comprehensive background checks and interviews',
      placement: 'Flexible Placement',
      placementDesc: 'Temporary or permanent positions tailored to your needs',
      matching: 'Personalized Matching',
      matchingDesc: 'We carefully match caregivers to your family\'s specific requirements'
    },
    about: {
      title: 'About Us',
      motto: 'Harmony & Care at Home',
      subtitle: 'Dedicated to providing exceptional caregiving services',
      mission: 'Our Mission',
      missionDesc: 'At Garde-Malade, we believe that quality care begins with trust. Our mission is to connect families with compassionate, skilled caregivers who provide not just assistance, but genuine companionship and peace of mind.',
      values: 'Our Values',
      value1: 'Compassion',
      value1Desc: 'We prioritize empathy and understanding in every interaction',
      value2: 'Excellence',
      value2Desc: 'We maintain the highest standards in caregiver selection and training',
      value3: 'Trust',
      value3Desc: 'We build lasting relationships based on reliability and integrity',
      story: 'Our Story',
      storyDesc: 'Founded with the vision of making quality home care accessible to all families, Garde-Malade has grown into a trusted partner for families seeking compassionate caregiving solutions. We understand that inviting someone into your home requires trust, and we take that responsibility seriously.'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      name: 'Your Name',
      email: 'Email Address',
      message: 'Message',
      send: 'Send Message',
      sending: 'Opening your mail client...',
      emailDirect: 'Or email us directly at',
      fillAll: 'Please fill all fields.',
      validEmail: 'Please provide a valid email address.',
      clientNote: 'If your mail client did not open, please email garde.malade.harmony@gmail.com directly.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      contact: 'Contact'
    },
    hero: {
      title: 'Harmony and Care at Home',
      subtitle: 'Nous connectons les familles avec des soignants qualifiés et compatissants',
      cta: 'Commencer',
      contactBtn: 'Nous Contacter'
    },
    features: {
      title: 'Nos Services',
      screening: 'Sélection Rigoureuse',
      screeningDesc: 'Tous les soignants font l\'objet de vérifications complètes et d\'entretiens',
      placement: 'Placement Flexible',
      placementDesc: 'Postes temporaires ou permanents adaptés à vos besoins',
      matching: 'Jumelage Personnalisé',
      matchingDesc: 'Nous jumelons soigneusement les soignants aux besoins spécifiques de votre famille'
    },
    about: {
      title: 'À Propos de Nous',
      motto: 'Harmonie & Soins à Domicile',
      subtitle: 'Dédiés à fournir des services de soins exceptionnels',
      mission: 'Notre Mission',
      missionDesc: 'Chez Garde-Malade, nous croyons que des soins de qualité commencent par la confiance. Notre mission est de connecter les familles avec des soignants compatissants et qualifiés qui offrent non seulement de l\'assistance, mais aussi une véritable compagnie et la tranquillité d\'esprit.',
      values: 'Nos Valeurs',
      value1: 'Compassion',
      value1Desc: 'Nous privilégions l\'empathie et la compréhension dans chaque interaction',
      value2: 'Excellence',
      value2Desc: 'Nous maintenons les normes les plus élevées dans la sélection et la formation des soignants',
      value3: 'Confiance',
      value3Desc: 'Nous construisons des relations durables basées sur la fiabilité et l\'intégrité',
      story: 'Notre Histoire',
      storyDesc: 'Fondée avec la vision de rendre les soins à domicile de qualité accessibles à toutes les familles, Garde-Malade est devenue un partenaire de confiance pour les familles à la recherche de solutions de soins compatissantes. Nous comprenons qu\'inviter quelqu\'un chez vous nécessite de la confiance, et nous prenons cette responsabilité au sérieux.'
    },
    contact: {
      title: 'Nous Contacter',
      subtitle: 'Prenez contact avec notre équipe',
      name: 'Votre Nom',
      email: 'Adresse Email',
      message: 'Message',
      send: 'Envoyer le Message',
      sending: 'Ouverture de votre client de messagerie...',
      emailDirect: 'Ou envoyez-nous un email directement à',
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
