const nav = document.getElementById('nav')
let scrolled = false

window.addEventListener('scroll', () => {
  const isScrolled = window.scrollY > 20
  if (isScrolled === scrolled) return
  scrolled = isScrolled
  nav.classList.toggle('scrolled', isScrolled)
}, { passive: true })

document.addEventListener('click', (e) => {
  const spark = document.createElement('span')
  spark.className = Math.random() > 0.5 ? 'spark spark-pink' : 'spark spark-purple'
  spark.textContent = Math.random() > 0.5 ? '✦' : '✧'
  spark.style.left = `${e.clientX}px`
  spark.style.top = `${e.clientY}px`
  spark.style.fontSize = `${10 + Math.random() * 10}px`
  spark.addEventListener('animationend', () => spark.remove())
  document.body.appendChild(spark)
})
