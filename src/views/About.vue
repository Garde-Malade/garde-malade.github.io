<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <h1>{{ t('about.title') }}</h1>
        <p class="motto">{{ t('about.motto') }}</p>
        <p class="subtitle">{{ t('about.subtitle') }}</p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <h2>{{ t('about.mission') }}</h2>
            <p>{{ t('about.missionDesc') }}</p>
          </div>
          <div class="content-image">
            <img src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600&auto=format&fit=crop"
                 alt="Caregiving mission"
                 loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">{{ t('about.values') }}</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h3>{{ t('about.value1') }}</h3>
            <p>{{ t('about.value1Desc') }}</p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
            <h3>{{ t('about.value2') }}</h3>
            <p>{{ t('about.value2Desc') }}</p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3>{{ t('about.value3') }}</h3>
            <p>{{ t('about.value3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="story-section">
      <div class="container">
        <div class="content-grid reverse">
          <div class="content-image">
            <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&auto=format&fit=crop"
                 alt="Our story"
                 loading="lazy" />
          </div>
          <div class="content-text">
            <h2>{{ t('about.story') }}</h2>
            <p>{{ t('about.storyDesc') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.about-page {
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.about-hero {
  background: #D4F6FF;
  padding: 5rem 2rem;
  text-align: center;
}

.about-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #1e293b;
}

.motto {
  font-size: 1.75rem;
  font-weight: 600;
  color: #0284c7;
  margin-bottom: 1rem;
  font-style: italic;
}

.subtitle {
  font-size: 1.25rem;
  color: #475569;
}

/* Mission Section */
.mission-section {
  padding: 5rem 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.content-grid.reverse {
  grid-template-columns: 1fr 1fr;
}

.content-text h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.content-text p {
  font-size: 1.125rem;
  color: #475569;
  line-height: 1.8;
}

.content-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.content-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

/* Values Section */
.values-section {
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

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  text-align: center;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: #C6E7FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.value-icon svg {
  width: 40px;
  height: 40px;
  color: #1e293b;
}

.value-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.value-card p {
  color: #64748b;
  line-height: 1.6;
}

/* Story Section */
.story-section {
  padding: 5rem 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2rem;
  }

  .motto {
    font-size: 1.25rem;
  }

  .content-grid,
  .content-grid.reverse {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .content-text h2 {
    font-size: 2rem;
  }

  .values-section {
    padding: 3rem 1rem;
  }

  .mission-section,
  .story-section {
    padding: 3rem 1rem;
  }
}
</style>

