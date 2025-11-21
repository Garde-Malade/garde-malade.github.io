<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">{{ t('hero.title') }}</h1>
        <p class="hero-subtitle">{{ t('hero.subtitle') }}</p>
        <div class="hero-actions">
          <RouterLink to="/contact" class="btn-primary">{{ t('hero.contactBtn') }}</RouterLink>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/accueil-2.jpeg"
             alt="Caregiver with elderly person"
             loading="lazy" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">{{ t('features.title') }}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3>{{ t('features.screening') }}</h3>
            <p>{{ t('features.screeningDesc') }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <h3>{{ t('features.placement') }}</h3>
            <p>{{ t('features.placementDesc') }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3>{{ t('features.matching') }}</h3>
            <p>{{ t('features.matchingDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Section -->
    <section class="image-section">
      <div class="container">
        <div class="image-grid">
          <img src="@/assets/accueil-1.jpeg"
               alt="Professional caregiver"
               loading="lazy" />
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <h2 class="section-title">{{ t('services.title') }}</h2>
        <p class="section-intro i18n-text-with-paragraphs">{{ t('services.intro') }}</p>

        <div class="services-grid">
          <div class="service-category">
            <h3>{{ t('services.servicesOfferedTitle') }}</h3>
            <ul>
              <li>{{ t('services.assistance') }}</li>
              <li>{{ t('services.presence') }}</li>
              <li>{{ t('services.psychological') }}</li>
              <li>{{ t('services.adminHelp') }}</li>
              <li>{{ t('services.accompaniment') }}</li>
            </ul>
          </div>
          <div class="service-category">
            <h3>{{ t('services.serviceTypesTitle') }}</h3>
            <ul>
              <li>{{ t('services.dayNight') }}</li>
              <li>{{ t('services.temporary') }}</li>
              <li>{{ t('services.longTerm') }}</li>
              <li>{{ t('services.occasional') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.home {
  background: #ffffff;
}

.i18n-text-with-paragraphs {
  white-space: pre-line;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 500px;
}

.hero-content {
  animation: fadeInUp 0.8s ease-out;
}

.hero-title {
  font-size: 2rem;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #475569;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  display: inline-block;
  background: #0ea5e9;
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(14, 165, 233, 0.2);
}

.btn-primary:hover {
  background: #0284c7;
  transform: translateY(-2px);
  box-shadow: 0 8px 12px rgba(14, 165, 233, 0.3);
}

.hero-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-out;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Features Section */
.features {
  background: #f8fafc;
  padding: 5rem 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon svg {
  width: 32px;
  height: 32px;
  color: white;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
}

/* Image Section */
.image-section {
  padding: 5rem 2rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.image-grid img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

/* Services Section */
.services-section {
  padding: 5rem 2rem;
  background: #D4F6FF;
}

.section-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.125rem;
  color: #475569;
  line-height: 1.8;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.service-category h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.service-category ul {
  list-style: none;
  padding: 0;
}

.service-category li {
  background: white;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  font-size: 1rem;
  color: #334155;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .features {
    padding: 3rem 1rem;
  }

  .image-section {
    padding: 3rem 1rem;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
