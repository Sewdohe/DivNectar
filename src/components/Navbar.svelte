<script>
  export let title;
  let mobileMenuVisible = false;
  function toggleMenu() {
    console.log('toggle')
    mobileMenuVisible = !mobileMenuVisible;
  }
</script>

<!-- navbar goes here -->
<nav class="bg-navbar border-b-2 border-pink shadow-xl top-0 backdrop-blur-xl z-20 h-70 fixed w-screen">
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
          <a
            href="/tags"
            class="py-5 px-3 text-purple hover:text-green font-bold transition-all">Tags</a
          >
          <a
            href="/resume"
            class="py-5 px-3 text-purple hover:text-green font-bold transition-all">Resume</a
          >
        </div>
      </div>

      <!-- secondary nav -->
      <div class="hidden md:flex items-center space-x-1">
        <a href="https://github.com/sewdohe" class="py-5 px-3">Github</a>
      </div>
    </div>
  </div>
</nav>

<style>
  svg {
    height: 32px;
  }
</style>
