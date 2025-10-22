<template>
  <section
    class="relative h-[50vh] w-full bg-[url('https://images.pexels.com/photos/8250904/pexels-photo-8250904.jpeg')] bg-center bg-cover bg-no-repeat font-montserrat flex items-center justify-center overflow-hidden"
  >
    <!-- Dark Glass Overlay -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

    <div
      class="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-fade-up"
    >
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg tracking-wide">
        Get in Touch
      </h1>
    </div>
  </section>

  <section
    class="min-h-[80vh] bg-gray-50 py-20 px-6 font-montserrat flex items-center justify-center"
  >
    <div
      class="max-w-4xl w-full bg-white shadow-xl rounded-2xl px-8 py-12 text-center border border-gray-100"
    >
      <h2 class="text-3xl font-semibold text-secondary mb-10">Contact Information</h2>

      <div class="space-y-6 text-secondary text-lg">
        <div>
          <p class="font-semibold text-xl">Satrap Power Corporation</p>
          <p class="text-gray-600">
            Metrotent, Metrowalk, Meralco Ave., Ortigas Center,<br />
            Pasig City, Philippines
          </p>
        </div>

        <div class="space-y-2">
          <p>
            <span class="font-medium">Contact Number: </span>
            <a href="tel:+6325708851" class="text-primary hover:underline"> +63 (2) 570 8851 </a>
          </p>
          <p>
            <span class="font-medium">Email Address: </span>
            <a href="mailto:info@satrappowercorp.com" class="text-primary hover:underline">
              info@satrappowercorp.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 800ms ease-out forwards;
}
</style>
