<template>
  <div
    class="bg-[url('https://images.pexels.com/photos/3747075/pexels-photo-3747075.jpeg')] bg-center bg-cover bg-no-repeat h-screen w-full"
  >
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-sm md:text-lg text-white mb-2">
        <slot name="heading"></slot>
      </h1>
      <p class="text-lg md:text-2xl mb-8 text-white">
        <!-- <slot name="paragraph"></slot> -->
      </p>
    </div>
  </div>
</template>
