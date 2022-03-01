<template>
  <div>
    <h1 @click="stop">cancel</h1>
    <div id="text-reveal-animation-container">
      <span id="text1"></span>
      <span id="text2"></span>
    </div>

    <svg id="filters">
      <defs>
        <filter id="threshold">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'TextRevealAnimation',
}
</script>

<script setup>
// imports
import { onMounted, ref } from 'vue'

// variables
const elts = ref({})
const texts = [
  'If',
  'You',
  'Like',
  'It',
  'Please',
  'Give',
  'a Love',
  ':)',
  'by @DotOnion',
]
const morphTime = 1
const cooldownTime = 0.25
let textIndex = texts.length - 1
let time = new Date()
let morph = 0
let cooldown = cooldownTime
let animationId = null

// functions
function doMorph() {
  morph -= cooldown
  cooldown = 0

  let fraction = morph / morphTime

  if (fraction > 1) {
    cooldown = cooldownTime
    fraction = 1
  }

  setMorph(fraction)
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

  fraction = 1 - fraction
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

  elts.text1.textContent = texts[textIndex % texts.length]
  elts.text2.textContent = texts[(textIndex + 1) % texts.length]
}

function doCooldown() {
  morph = 0

  elts.text2.style.filter = ''
  elts.text2.style.opacity = '100%'

  elts.text1.style.filter = ''
  elts.text1.style.opacity = '0%'
}

function animate() {
  animationId = requestAnimationFrame(animate)
  console.log('called')

  let newTime = new Date()
  let shouldIncrementIndex = cooldown > 0
  let dt = (newTime - time) / 1000
  time = newTime

  cooldown -= dt

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++
    }
    doMorph()
  } else {
    doCooldown()
  }
}

function stop() {
  cancelAnimationFrame(animationId)
}

// mounted
onMounted(() => {
  elts.text1 = document.getElementById('text1')
  elts.text2 = document.getElementById('text2')

  elts.text1.textContent = texts[textIndex % texts.length]
  elts.text2.textContent = texts[(textIndex + 1) % texts.length]

  animate()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap');

body {
  margin: 0;
}

#text-reveal-animation-container {
  position: absolute;
  margin: auto;
  width: 100vw;
  height: 80pt;
  top: 0;
  bottom: 0;

  filter: url(#threshold) blur(0.6px);
}

#text1,
#text2 {
  position: absolute;
  width: 100%;
  display: inline-block;

  font-family: 'Raleway', sans-serif;
  font-size: 80pt;

  text-align: center;

  user-select: none;
}
</style>
