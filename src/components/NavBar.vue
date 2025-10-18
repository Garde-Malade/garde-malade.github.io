<template>
  <nav class="nav">
    <div class="nav-container">
      <div class="brand">
        <span class="title">Garde‑Malade</span>
      </div>

      <div class="nav-right">
        <ul class="links">
          <li><RouterLink to="/">{{ t('nav.home') }}</RouterLink></li>
          <li><RouterLink to="/about">{{ t('nav.about') }}</RouterLink></li>
          <li><RouterLink to="/contact">{{ t('nav.contact') }}</RouterLink></li>
        </ul>

        <div class="language-switcher">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="changeLocale(lang.code)"
            :class="['lang-btn', { active: locale === lang.code }]"
            :title="lang.name"
          >
            {{ lang.code.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' }
]

const changeLocale = (lang) => {
  locale.value = lang
}
</script>

<style scoped>
.nav {
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.title {
  font-weight: 700;
  font-size: 1.25rem;
  color: #1e293b;
  letter-spacing: -0.02em;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.links {
  list-style: none;
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
}

.links a {
  color: #475569;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s;
}

.links a:hover {
  background: #f1f5f9;
  color: #1e293b;
}

.links .router-link-active {
  background: #0ea5e9;
  color: white;
}

.language-switcher {
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  background: #f1f5f9;
  border-radius: 8px;
}

.lang-btn {
  background: transparent;
  border: none;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}

.lang-btn:hover {
  color: #1e293b;
  background: rgba(255, 255, 255, 0.8);
}

.lang-btn.active {
  background: #ffffff;
  color: #0ea5e9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .nav-right {
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
  }

  .links {
    gap: 0.25rem;
  }

  .links a {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
  }
}
</style>
