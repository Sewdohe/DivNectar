<script>
  export let title;
  let mobileMenuVisible = false;
  function toggleMenu() {
    console.log('toggle')
    mobileMenuVisible = !mobileMenuVisible;
  }
</script>

<!-- navbar goes here -->
<nav class="bg-navbar shadow-lg top-0 backdrop-blur-md z-20 h-70 fixed w-screen">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">
      <div class="flex space-x-4">
        <!-- logo -->
        <div>
          <a
            href="/"
            class="flex items-center py-5 px-2 text-pink hover:text-green transition-all"
          >
            <span class="font-extrabold text-3xl">&lt;DivNectar/&gt;</span>
          </a>
        </div>

        <!-- primary nav -->
        <div class="flex items-center space-x-1">
          <a
            href="/blog"
            class="py-5 px-3 text-purple hover:text-green font-bold transition-all">Blog</a
          >
        </div>
      </div>

      <!-- secondary nav -->
      <!-- <div class="hidden md:flex items-center space-x-1">
        <a href="" class="py-5 px-3">Login</a>
        <a href="" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
      </div> -->
    </div>
  </div>
  {#if title}
    <h1
      class="text-green font-extrabold leading-tighter tracking-tighter mb-4 font-heading text-center"
    >
      {title}
    </h1>
  {/if}
</nav>

<style>
  svg {
    height: 32px;
  }
</style>
