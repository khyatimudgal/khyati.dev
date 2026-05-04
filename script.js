const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 20
    ? 'rgba(196, 132, 252, 0.25)'
    : 'rgba(196, 132, 252, 0.1)'
})

document.addEventListener('click', (e) => {
  const spark = document.createElement('span')
  spark.textContent = Math.random() > 0.5 ? '✦' : '✧'
  spark.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    pointer-events: none;
    font-size: ${10 + Math.random() * 10}px;
    color: ${Math.random() > 0.5 ? '#f472b6' : '#c084fc'};
    transform: translate(-50%, -50%);
    z-index: 9999;
    animation: spark-pop 0.6s ease forwards;
  `
  document.body.appendChild(spark)
  setTimeout(() => spark.remove(), 600)
})

const style = document.createElement('style')
style.textContent = `
  @keyframes spark-pop {
    0%   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    100% { opacity: 0; transform: translate(-50%, -120%) scale(1.6); }
  }
`
document.head.appendChild(style)
