<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="">
      <nav id="nav" class="shadow bg-gray-900">
        <div class="container px-6 py-3 mx-auto md:flex">
          <div class="flex items-center justify-between">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://router.vuejs.org/logo.png"
                alt="Workflow"
              />
            </div>

            <!-- Mobile menu button -->
            <div class="flex md:hidden">
              <button
                @click="toggle"
                type="button"
                class="
                  text-gray-500
                  dark:text-gray-200
                  hover:text-gray-600
                  dark:hover:text-gray-400
                  focus:outline-none focus:text-gray-600
                  dark:focus:text-gray-400
                "
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div
            :class="open ? 'block' : 'hidden'"
            class="w-full md:flex md:items-center md:justify-between"
          >
            <div
              class="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0"
            >
              <div
                class="
                  flex flex-col
                  px-2
                  py-3
                  -mx-4
                  md:flex-row md:mx-0 md:py-0
                "
              >
                <RouterLink
                  name="/blog"
                  to="/blog"
                  class="
                    px-2
                    py-1
                    text-sm
                    font-medium
                    text-gray-200
                    transition-colors
                    duration-200
                    transform
                    rounded
                    dark:text-emerald-200
                    hover:bg-emerald-700 hover:text-emerald-100
                    md:mx-2
                  "
                  >Blog</RouterLink
                >
              </div>

              <div
                v-if="auth"
                class="flex flex-col px-2 -mx-4 md:flex-row md:mx-0 md:py-0"
              >
                <RouterLink
                  to="/create"
                  class="
                    px-2
                    py-1
                    text-sm
                    font-medium
                    text-gray-200
                    transition-colors
                    duration-200
                    transform
                    rounded
                    dark:text-emerald-200
                    hover:bg-emerald-700 hover:text-emerald-100
                    md:mx-2
                  "
                  >Create</RouterLink
                >
                <RouterLink
                  to="/dashboard"
                  class="
                    px-2
                    py-1
                    text-sm
                    font-medium
                    text-gray-200
                    transition-colors
                    duration-200
                    transform
                    rounded
                    dark:text-emerald-200
                    hover:bg-emerald-700 hover:text-emerald-100
                    md:mx-2
                  "
                  >Dashboard</RouterLink
                >
              </div>
            </div>

            <div class="relative">
              <div class="flex items-center py-2 -mx-1 md:mx-0" v-if="auth">
                <RouterLink
                  @click="logout"
                  to="/register "
                  class="
                    block
                    w-1/2
                    px-3
                    py-2
                    mx-1
                    text-sm
                    font-medium
                    leading-5
                    text-center text-white
                    transition-colors
                    duration-200
                    transform
                    bg-red-500
                    rounded-md
                    hover:bg-red-600
                    md:mx-0 md:w-auto
                  "
                  >Logout</RouterLink
                >
              </div>

              <div class="flex items-center py-2 -mx-1 md:mx-0" v-else="auth">
                <RouterLink
                  to="/login"
                  class="
                    block
                    w-1/2
                    px-3
                    py-2
                    mx-1
                    text-sm
                    font-medium
                    leading-5
                    text-center text-white
                    transition-colors
                    duration-200
                    transform
                    bg-gray-500
                    rounded-md
                    hover:bg-blue-600
                    md:mx-2 md:w-auto
                  "
                  >Login</RouterLink
                >
                <RouterLink
                  to="/register"
                  class="
                    block
                    w-1/2
                    px-3
                    py-2
                    mx-1
                    text-sm
                    font-medium
                    leading-5
                    text-center text-white
                    transition-colors
                    duration-200
                    transform
                    bg-gray-500
                    rounded-md
                    hover:bg-blue-600
                    md:mx-2 md:w-auto
                  "
                  >Register</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="p-4 flex-grow">
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            <div class="p-4 flex-grow">
              <RouterView />
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </main>

    <footer class="">
      <Footer />
    </footer>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      //menu movil
      open: false,
    };
  },
  created() {
    this.setAuth();
  },

  methods: {
    ...mapActions(["setAuth", "logout"]),

    //menu movil
    toggle() {
      this.open = !this.open;
    },
  },

  computed: {
    ...mapState(["auth"]),
  },

  watch: {
    auth(newValue) {
      if (newValue) {
        this.axios.defaults.headers.common["Authorization"] =
          "Bearer " + newValue.token.access_token;
      }
    },
  },
};
</script>

<style  >
#nav .active-link {
  background-color: #10b981;
}

#nav .active-link:hover {
  background-color: #10b982;
}
</style>
 


 