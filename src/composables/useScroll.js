import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const isActiveToTopButton = ref(false)

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = () => {
    isActiveToTopButton.value = window.scrollY > 0
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isActiveToTopButton,
    goToTop,
  }
}
