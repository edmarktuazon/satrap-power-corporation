import { reactive, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

export function useNav() {
  const route = useRoute()
  const navLinks = reactive([
    { name: 'Home', to: '/' },
    { name: 'Our Company', to: '/our-company' },
    { name: 'Our Projects', to: '/our-projects' },
    { name: 'Contact Us', to: '/contact' },
  ])

  const isOpen = ref(false)
  const prevScrollY = ref(0)
  const isHidden = ref(false)

  const getIsActivePage = (linkTo) => {
    return route.path === linkTo
  }

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const closeMenu = () => {
    isOpen.value = false
  }

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      isOpen.value = false
    }
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    // Scroll down: hide navbar
    if (currentScrollY > prevScrollY.value && currentScrollY > 50) {
      isHidden.value = true
    }
    // Scroll up: show navbar
    else if (currentScrollY < prevScrollY.value) {
      isHidden.value = false
    }
    prevScrollY.value = currentScrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  })

  return {
    navLinks,
    isOpen,
    isHidden,
    toggleMenu,
    closeMenu,
    getIsActivePage,
  }
}
