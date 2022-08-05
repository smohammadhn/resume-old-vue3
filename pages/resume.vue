<template>
  <main class="resume container">
    <!-- head -->
    <Html lang="en-US">
      <Head>
        <Title>S.Mohammad Hosseininejad</Title>
        <Meta
          name="description"
          content="S.Mohammad Hosseininejad's resume page"
        />
      </Head>
    </Html>

    <!-- body -->
    <aside class="resume-left-column">
      <!-- image: only on desktop -->
      <div class="resume-left__image grid-centered">
        <img
          class="hidden-on-mobile"
          src="~/assets/images/profile-square@500px.jpg"
          alt="profile picture"
        />
      </div>

      <!-- contact -->
      <section role="region" class="resume-left__box bottom-spacer-3">
        <h2 class="resume-left__box-title primary-heading">contact</h2>
        <!-- contact box: 1 -->
        <div class="contact-box">
          <div>
            <svg viewBox="0 0 24 24">
              <path
                d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
              />
            </svg>
          </div>
          <h3 class="secondary-heading">linkedin</h3>
          <a
            href="https://www.linkedin.com/in/seyed-mohammad-hosseininejad-1704a6233/"
            target="_blank"
          >
            linkedin profile
          </a>
        </div>
        <!-- contact box: 2 -->
        <div class="contact-box">
          <div>
            <svg viewBox="0 0 24 24">
              <path
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
          </div>
          <h3 class="secondary-heading">github</h3>
          <a href="https://github.com/smohammadhn" target="_blank">
            github.com/smohammadhn
          </a>
        </div>
        <!-- contact box: 3 -->
        <div class="contact-box">
          <div>
            <svg viewBox="0 0 24 24">
              <path
                d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
          </div>
          <h3 class="secondary-heading">website</h3>
          <a href="https://smohammadhn.com/" target="_blank">
            smohammadhn.com
          </a>
        </div>
        <!-- contact box: 4 -->
        <div class="contact-box">
          <div>
            <svg viewBox="0 0 24 24">
              <path
                d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z"
              />
            </svg>
          </div>
          <h3 class="secondary-heading">email</h3>
          <a href="mailto:smohammadhnd@gmail.com">smohammadhnd@gmail.com</a>
        </div>
        <!-- contact box: 5 -->
        <div class="contact-box">
          <div>
            <svg viewBox="0 0 24 24">
              <path
                d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
              />
            </svg>
          </div>
          <h3 class="secondary-heading">phone</h3>
          <a href="tel:+989021211074">(+98)9021211074</a>
        </div>
      </section>

      <!-- pre skills -->
      <section role="region" class="resume-left__box bottom-spacer-3">
        <h2 class="resume-left__box-title primary-heading">pre skills</h2>
        <ul>
          <li class="pre-skills-box">
            <h3 class="secondary-heading">English</h3>
            <div>full proficiency</div>
          </li>

          <li class="pre-skills-box">
            <h3 class="secondary-heading">photoshop</h3>
            <div>basic familiarity</div>
          </li>

          <li class="pre-skills-box">
            <h3 class="secondary-heading">adobeXD / figma</h3>
            <div>basic familiarity</div>
          </li>

          <li class="pre-skills-box">
            <h3 class="secondary-heading">communication and lecturing</h3>
          </li>

          <li class="pre-skills-box">
            <h3 class="secondary-heading">Team-player</h3>
          </li>
        </ul>
      </section>

      <!-- education -->
      <section role="region" class="resume-left__box bottom-spacer-3">
        <h2 class="resume-left__box-title primary-heading">education</h2>
        <ul>
          <li class="education-item">
            <h3 class="secondary-heading">BS.c in Computer Engineering</h3>
            <p>Shahrood University of technology</p>
            <div>Sep. 2018 - Feb. 2023</div>
            <p class="bulleted">
              Ranked 5th among all industrial universities in the country
            </p>
          </li>
        </ul>
      </section>
    </aside>

    <section role="region" class="resume-right-column">
      <!-- image: only on mobile -->
      <div
        v-if="onMobile"
        class="resume-left__image grid-centered hidden-on-desktop"
      >
        <img
          src="~/assets/images/profile-square@500px.jpg"
          alt="profile picture"
        />
      </div>

      <!-- main title -->
      <h1 class="bottom-spacer-1">
        S.Mohammad
        <br />
        Hosseininejad
      </h1>

      <!-- subtitle -->
      <p class="bottom-spacer-3">Front-end Web Developer | Vue.js</p>

      <!-- about me -->
      <ResumeInformationCard title="About Me">
        <template #icon>
          <img src="~/assets/images/icons/profile.svg" alt="profile avatar" />
        </template>
        <template #content>
          <p class="resume-right__profile">
            Result-oriented front-end developer with 2+ years of professional
            experience with Vue.js and other frameworks on top, such as Nuxt.js
            and Vuetify.js. Collaborated in and designed 10+ feature-rich admin
            panels, websites and services used by wide range of customers in the
            country. Skilled in front-end best-practices and concepts including
            SSR, SEO techniques, UI/UX, and performance optimizations.
          </p>
        </template>
      </ResumeInformationCard>

      <!-- skills -->
      <ResumeInformationCard title="expertise">
        <template #icon>
          <img src="~/assets/images/icons/skills.svg" alt="skills icon" />
        </template>
        <template #content>
          <ul class="expertise">
            <li>
              <TechBadge text="VUE2 / NUXT2 / VUETIFY2" duration="1.5 yr." />
            </li>
            <li>
              <TechBadge text="VUE3 / NUXT3 / TYPESCRIPT" duration="0.5 yr." />
            </li>
            <li>
              <TechBadge text="HTML5 / CSS3" duration="3 yr." />
            </li>
            <li>
              <TechBadge text="JAVASCRIPT / ES6" duration="2.5 yr." />
            </li>
            <li>
              <TechBadge text="GIT / NPM" />
            </li>
            <li>
              <TechBadge text="VUEX" />
            </li>
            <li>
              <TechBadge text="VUETIFY.JS" />
            </li>
            <li>
              <TechBadge text="Server-side Rendering" />
            </li>
            <li>
              <TechBadge text="SEO" />
            </li>
            <li>
              <TechBadge text="I18n (internationalization)" />
            </li>
            <li>
              <TechBadge text="VITE" />
            </li>
            <li>
              <TechBadge text="SASS" />
            </li>
            <li>
              <TechBadge text="CYPRESS" />
            </li>
            <li>
              <TechBadge text="Agile methodologies" />
            </li>
          </ul>
        </template>
      </ResumeInformationCard>

      <!-- work experience -->
      <ResumeInformationCard title="work experience">
        <template #icon>
          <img src="~/assets/images/icons/suitcase.svg" alt="suitcase" />
        </template>
        <template #content>
          <!-- bazarkhodro -->
          <div class="work-exp bottom-spacer-2">
            <div class="work-exp--title">
              <div>Front-end Developer at Bazarkhodro</div>
              <span>Sep. 2021 - present (9 mos.)</span>
            </div>

            <p class="work-exp--description">
              Working on five repositories including two websites and three
              admin panels.
            </p>

            <ul class="work-exp--tech">
              <li>
                <TechBadge text="Vue.js" />
              </li>
            </ul>

            <ul class="work-exp--products">
              <li class="bottom-spacer-1">
                <img
                  src="~/assets/images/logos/rentifa.png"
                  alt="bazarkhodro fav icon"
                  class="rectangle"
                />
                <span>
                  <a
                    href="https://rentifa.com/"
                    style="font-weight: bold"
                    target="_blank"
                  >
                    Rentifa.com
                  </a>
                  is a bilingual website providing car rental service in the
                  country and neighboring countries.
                </span>
              </li>

              <li>
                <img
                  src="~/assets/images/logos/bazarkhodro.svg"
                  alt="bazarkhodro fav icon"
                  class="rectangle"
                />
                <span>
                  <a
                    href="https://bazarkhodro.ir/"
                    target="_blank"
                    class="fw-bold"
                  >
                    Bazarkhodro.ir
                  </a>
                  is a feature-rich website enabling users to buy/sell cars in
                  the country.
                </span>
              </li>
            </ul>
          </div>

          <!-- Ryca -->
          <div class="work-exp bottom-spacer-2">
            <div class="work-exp--title">
              <div>Front-end Developer at Ryca</div>
              <span>Jun. 2021 - Sep. 2021 (4 mos.)</span>
            </div>

            <p class="work-exp--description">
              My internship job which I worked on two admin panels. I worked
              with awesome people there!
            </p>

            <ul class="work-exp--tech">
              <li>
                <TechBadge text="Vue.js" />
              </li>
            </ul>

            <ul class="work-exp--products">
              <li class="bottom-spacer-1">
                <img
                  src="~/assets/images/logos/ryca.svg"
                  alt="bazarkhodro fav icon"
                  class="square"
                />
                <span>
                  <a
                    href="https://msmarket.ir/"
                    style="font-weight: bold"
                    target="_blank"
                  >
                    Msmarket.ir
                  </a>
                  is a convenient admin panel for managing stockholders'
                  information of a particular company.
                </span>
              </li>
            </ul>
          </div>

          <!-- freelance -->
          <div class="work-exp bottom-spacer-2">
            <div class="work-exp--title">
              <div>Freelance Front-end Developer</div>
              <span>Feb 2020 - Jun. 2021 (~1.5 yr.)</span>
            </div>

            <ul class="work-exp--tech">
              <li>
                <TechBadge text="HTML5" />
              </li>
              <li>
                <TechBadge text="CSS3" />
              </li>
              <li>
                <TechBadge text="JAVASCRIPT" />
              </li>
            </ul>

            <ul class="work-exp--products">
              <li class="bottom-spacer-1">
                <img
                  src="~/assets/images/logos/nutrica.png"
                  alt="bazarkhodro fav icon"
                  class="square black-background"
                />
                <span>
                  <a
                    href="https://nutricasteel.com/"
                    style="font-weight: bold"
                    target="_blank"
                  >
                    Nutricasteel.com
                  </a>
                  is a website belonging to a start-up called "Nutricasteel" to
                  introduce their products to their customers from various
                  countries.
                </span>
              </li>

              <li>
                <img
                  src="~/assets/images/logos/hivasls.png"
                  alt="bazarkhodro fav icon"
                  class="square"
                />
                <span>
                  <a
                    href="https://hivasls2.ir/"
                    style="font-weight: bold"
                    target="_blank"
                  >
                    Hivasls.ir
                  </a>
                  is a single-page website for students of "Shokuh-e-hiva"
                  language institute to enter their online learning platform
                  panel. (BigBlueButton)
                </span>
              </li>
            </ul>
          </div>
        </template>
      </ResumeInformationCard>
    </section>
  </main>
</template>

<script setup>
import ResumeInformationCard from '~/components/cards/ResumeInformationCard'
import TechBadge from '../components/badges/TechBadge'
import { onMounted, ref } from 'vue'

const onMobile = ref()

onMounted(() => {
  onMobile.value = window.innerWidth < 1000
})
</script>

<style lang="scss" scoped>
$breakpoint-layout-shift: 1050px;

h1 {
  font-size: var(--fs-huge);
  margin-top: min(3vw, 4rem);
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 1;
  font-weight: var(--fw-bold);
}

@media screen and (max-width: $breakpoint-layout-shift) {
  .hidden-on-mobile {
    display: none !important;
  }
}

@media screen and (min-width: $breakpoint-layout-shift) {
  .hidden-on-desktop {
    display: none !important;
  }
}

.resume {
  margin-inline: auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 2fr;
  color: var(--clr-primary-700);

  @media screen and (max-width: $breakpoint-layout-shift) {
    grid-template-columns: 1fr;
  }

  &-left {
    &-column {
      background: var(--clr-primary-300);
      padding-inline: min(7vw, 3rem);
    }

    &__image {
      padding-block: min(10vw, 5rem);
      background: var(--clr-primary-300);
      border-radius: 10px;

      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;

        @media screen and (max-width: $breakpoint-layout-shift) {
          width: max(35vw, 200px);
          height: max(35vw, 200px);
        }
      }
    }

    &__box {
      &-title {
        margin-bottom: 1.5rem;
        border-bottom: 3px solid var(--clr-primary-700);
      }

      .contact-box {
        margin-block: 1rem;
        display: grid;
        align-items: center;
        grid-template-areas: 'img title' 'img subtitle';
        grid-template-columns: 40px 1fr;

        div {
          grid-area: img;
          background: var(--clr-primary-700);
          border-radius: 50%;
          padding: 0.4rem;
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;

          svg {
            fill: white;
          }
        }

        h3 {
          grid-area: title;
          text-transform: uppercase;
          padding-bottom: 0.25rem;
        }

        p,
        a {
          text-decoration: none;
          grid-area: subtitle;
        }
      }

      .pre-skills-box {
        margin-block: 1.25rem;
        display: flex;
        justify-content: space-between;
        place-items: center;

        div {
          padding-block: 0.4rem;
          align-self: stretch;
          width: 130px;
          background: var(--clr-primary-700);
          color: white;
          font-weight: var(--fw-bold);
          border-radius: 5px;
          text-transform: capitalize;
          text-align: center;
          font-size: 90%;
        }
      }

      .education-item {
        .bulleted {
          margin-top: 0.75rem;

          &::before {
            content: '';
            width: 9px;
            height: 9px;
            border-radius: 50%;
            margin-right: 5px;
            display: inline-block;
            background-color: var(--clr-primary-700);
          }
        }
      }
    }
  }

  &-right {
    &-column {
      padding-inline: min(5vw, 3rem);
      background: white;

      @media screen and (max-width: $breakpoint-layout-shift) {
        grid-row: 1;
      }

      .expertise {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .work-exp {
        &--title {
          display: flex;
          align-items: center;
          justify-content: space-between;

          div {
            font-size: var(--fs-sub-primary-heading);
          }

          span {
            opacity: 0.8;
          }
        }

        &--tech {
          display: flex;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          gap: 0.75rem;
        }

        &--products {
          li {
            display: grid;
            align-items: center;
            grid-template-columns: 110px 1fr;
            gap: 1rem;

            img {
              justify-self: center;

              &.square {
                width: 60px;
                aspect-ratio: 1 / 1;
              }

              &.rectangle {
                width: 111px;
                height: auto;
              }

              &.black-background {
                background: rgba(0, 0, 0);
                border-radius: 10px;
              }
            }
          }
        }
      }
    }

    &__profile {
      line-height: 26px;
      text-align: justify;
      text-justify: inter-word;
    }
  }
}
</style>
