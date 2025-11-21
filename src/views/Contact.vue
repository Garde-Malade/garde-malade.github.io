<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="container">
        <h1>{{ t('contact.title') }}</h1>
        <p class="subtitle">{{ t('contact.subtitle') }}</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-wrapper">
            <form @submit.prevent="onSubmit" class="contact-form" novalidate>
              <div class="form-group">
                <label>{{ t('contact.name') }}</label>
                <input v-model="form.name" type="text" required class="form-input" />
              </div>

              <div class="form-group">
                <label>{{ t('contact.email') }}</label>
                <input v-model="form.email" type="email" required class="form-input" />
              </div>

              <div class="form-group">
                <label>{{ t('contact.message') }}</label>
                <textarea v-model="form.message" rows="6" required class="form-input"></textarea>
              </div>

              <div class="form-actions">
                <button type="submit" class="btn-submit">{{ t('contact.send') }}</button>
                <span v-if="status" class="status" aria-live="polite">{{ status }}</span>
              </div>
            </form>
          </div>

          <div class="contact-info">
            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3>Email</h3>
                <p>{{ t('contact.emailDirect') }}</p>
                <a :href="mailtoLink" class="contact-link">garde.malade.harmony@gmail.com</a>
              </div>

              <div class="info-card">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 4.5l3 1.5c.621.31 1.31.095 1.66-.5l1.2-1.8a.75.75 0 01.9-.3l2.7 1.08a2.25 2.25 0 011.35 1.89l.22 2.92a.75.75 0 01-.32.66l-1.62 1.2a11.25 11.25 0 005.4 5.4l1.2-1.62a.75.75 0 01.66-.32l2.92.22a2.25 2.25 0 011.89 1.35l1.08 2.7a.75.75 0 01-.3.9l-1.8 1.2c-.595.35-.81 1.04-.5 1.66l1.5 3A2.25 2.25 0 0120.25 24h-.75C8.77 24 2.25 17.48 2.25 6v-.75A2.25 2.25 0 014.5 2.25z" />
                  </svg>
                </div>
                <h3>Phone</h3>
                <p>{{ t('contact.phoneDirect') }}</p>
                <a :href="telLink" class="contact-link">+32495110941</a>
              </div>
            </div>

            <div class="info-image">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop"
                   alt="Contact us"
                   loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = reactive({ name: '', email: '', message: '' })
const status = ref('')

const mailtoLink = computed(() => `mailto:garde.malade.harmony@gmail.com`)

function validEmail(email) {
  return /\S+@\S+\.\S+/.test(email)
}

function onSubmit() {
  status.value = ''
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    status.value = t('contact.fillAll')
    return
  }
  if (!validEmail(form.email)) {
    status.value = t('contact.validEmail')
    return
  }

  const subject = encodeURIComponent(`Garde-Malade contact from ${form.name}`)
  const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
  const mailto = `mailto:garde.malade.harmony@gmail.com?subject=${subject}&body=${body}`

  status.value = t('contact.sending')
  setTimeout(() => {
    window.location.href = mailto
    setTimeout(() => {
      status.value = t('contact.clientNote')
    }, 1500)
  }, 300)
}
</script>
<style scoped>
.contact-page {
  background: #ffffff;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.contact-hero {
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.contact-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
}

.subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
}

/* Contact Content */
.contact-content {
  padding: 4rem 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Form */
.contact-form-wrapper {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #1e293b;
  font-size: 0.95rem;
}

.form-input {
  padding: 0.875rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn-submit {
  background: #0ea5e9;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(14, 165, 233, 0.2);
}

.btn-submit:hover {
  background: #0284c7;
  transform: translateY(-2px);
  box-shadow: 0 8px 12px rgba(14, 165, 233, 0.3);
}

.status {
  color: #64748b;
  font-size: 0.9rem;
  text-align: center;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Make info cards shrink-wrap their content but match heights when on the same row */
.info-cards {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: stretch; /* ensure cards stretch to the tallest item when in the same row */
}

/* Each card keeps a compact width but can stretch vertically to match siblings */
.info-card {
  background: #f8fafc;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* spread content vertically so footer/link aligns to bottom */
  flex: 0 0 auto;       /* do not grow horizontally to fill row */
  width: auto;          /* allow normal sizing (not max-content) so stretch works */
  max-width: 320px;     /* prevent extreme wide cards */
  box-sizing: border-box;
  align-self: stretch;  /* participate in cross-axis stretching */
}

.info-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  flex-shrink: 0;
}

.info-icon svg {
  width: 32px;
  height: 32px;
  color: white;
}

.info-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.info-card p {
  color: #64748b;
  margin-bottom: 0.75rem;
  word-wrap: break-word;
}

/* Links */
.contact-link {
  color: #0ea5e9;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
  word-break: break-all;
}

.contact-link:hover {
  color: #0284c7;
}

.info-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.info-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-hero h1 {
    font-size: 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-content {
    padding: 2rem 1rem;
  }

  .contact-form-wrapper {
    padding: 1.5rem;
  }

  .info-cards {
    flex-direction: column;
    align-items: stretch;
  }

  /* On small screens allow cards to expand full width */
  .info-card {
    width: 100%;
    max-width: none;
    align-items: flex-start;
    text-align: left;
    justify-content: flex-start;
    align-self: auto;
  }

  .info-icon {
    margin-left: 0;
  }
}
</style>