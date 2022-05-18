<script setup>
   import Hero from "@/components/Hero.vue";

</script>
<template>


  

  <section class="bg-gray-800">
    <div class="container px-6 py-12 mx-auto">
      <div class="relative">
        <input
          v-model="search"
          type="text"
          class="
            w-full
            py-3
            pl-10
            pr-4
            text-emerald-500
            border
            rounded-md
            bg-gray-800
            text-emerald-300
            dark:border-emerald-600
            focus:border-emerald-500
            dark:focus:border-emerald-500
            focus:outline-none focus:ring
          "
          placeholder="Search . . ."
        />
      </div>
      <div class="grid grid-cols-1 mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="bg-gray-700 rounded-md"
          v-for="course in courseList.data"
          :key="course.id"
        >
          <img
            class="object-cover w-full h-64 rounded-md"
            src="https://source.unsplash.com/300x300/?3d-renders?2"
            alt="Article"
          />

          <div class="p-6">
            <div>
              <span
                class="
                  text-xs
                  font-medium
                  text-emerald-600
                  uppercase
                  dark:text-blue-400
                "
              >
                {{ course.category.name }}
              </span>
              <RouterLink
                :to="{ name: 'courses', params: { id: course.id } }"
                class="
                  block
                  mt-2
                  text-2xl
                  font-semibold
                  text-emerald-400
                  transition-colors
                  duration-200
                  transform
                  dark:text-white
                "
                >{{ course.title }}
              </RouterLink>
            </div>

            <div class="flex items-center justify-between mt-4">
              <div class="flex items-center">
                <img
                  class="object-cover w-10 h-10 rounded-full sm:block"
                  :src="course.user.profile_photo_url"
                  alt="avatar"
                />
                <p class="mx-2 font-semibold text-gray-300 dark:text-gray-200">
                  {{ course.user.name }}
                </p>
              </div>

              <div class="">
                <div class="mt-4" v-if="auth && course.user.id == auth.user.id">
                  <div class="flex justify-end mt-4">
                    <RouterLink
                      :to="{ name: 'edit', params: { id: course.id } }"
                    >
                      <button
                        class="
                          flex
                          items-center
                          px-2
                          py-2
                          font-medium
                          tracking-wide
                          text-white
                          capitalize
                          transition-colors
                          duration-200
                          transform
                          bg-emerald-600
                          rounded-md
                          hover:bg-emerald-500
                          focus:outline-none
                          focus:ring
                          focus:ring-emerald-300
                          focus:ring-opacity-80
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </button>
                    </RouterLink>

                    <button
                      @click="deleteCourse(course.id)"
                      class="
                        flex
                        items-center
                        px-2
                        py-2
                        font-medium
                        tracking-wide
                        text-white
                        capitalize
                        transition-colors
                        duration-200
                        transform
                        bg-red-600
                        rounded-md
                        hover:bg-red-500
                        focus:outline-none
                        focus:ring
                        focus:ring-red-300
                        focus:ring-opacity-80
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="
      bg-gray-800
      px-4
      py-3
      flex
      items-center
      justify-between
      border-t border-emerald-500
      sm:px-6
    "
  >
    <div class="flex-1 flex justify-between hidden "  >
      <a
        href="#"
        class="
          relative
          inline-flex
          items-center
          px-4
          py-2
          border border-emerald-300
          text-sm
          font-medium
          rounded-md
          text-gray-200
          bg-emerald-500
          hover:bg-emerald-600
        "
      >
        Previous
      </a>

      <a
        href="#"
        class="
          ml-3
          relative
          inline-flex
          items-center
          px-4
          py-2
          border border-emerald-300
          text-sm
          font-medium
          rounded-md
          text-gray-200
          bg-emerald-500
          hover:bg-emerald-600
        "
      >
        Next
      </a>
    </div>
    <div class=" flex-1 flex  items-center  justify-between ">
        
      <div>
        
        <nav
          class="
            relative
            z-0
            inline-flex
            rounded-md
            shadow-sm
            sm:items-center
            -space-x-px
          "
          aria-label="Pagination"
        >
          <div
            v-for="pagination_link in paginations_links"
            :key="'pagination_link-' + pagination_link.label"
            class=""
          >
            <a
              @click="pageChange(pagination_link.url)"
              v-html="pagination_link.label"
              :class="
                pagination_link.active
                  ? 'z-10 bg-emerald-400      cursor-pointer border-emerald-400   relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                  : 'bg-gray-750 border-emerald-300  '
              "
              class="
                bg-gray-900
                border-emerald-300
                text-gray-200
                cursor-pointer
                hover:bg-emerald-50
                relative
                inline-flex
                items-center
                px-4
                py-2
                border
                text-sm
                font-medium
                hover:bg-emerald-800
              "
            >
            </a>
          </div>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <!--  <a href="#" aria-current="page" class="z-10 bg-emerald-900 border-emerald-500 text-gray-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>-->
        </nav>

      </div>
    </div>
  </div>

</template>

<script>
 import { mapActions, mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      search: [],
      courseList: [],
    };
  },
  paginations_links: {},

  created() {
    this.getCourseList();
  },
  computed: {
    ...mapState(["auth"]),

    page() {
      return this.$route.query.page ?? 1;
    },
  },

  methods: {
    getCourseList() {
      this.axios //
        .get(
          "/courses" +
            "?included=category,user" +
            "&per_page=6&page=" +
            this.page +
            "&filter[title]=" +
            this.search
        )
        .then((response) => {
          let res = response.data;
          this.courseList = response.data;
          this.paginations_links = res.links;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async deleteCourse(id) {
      await this.axios.delete("/courses/" + id);
      this.getCourseList();
    },

    pageChange(url) {
      this.$router.replace({
        query: {
          page: url.split("page=")[1],
        },
      });
    },
  },

  //vigilante
  watch: {
    search() {
      this.getCourseList();
    },
    paginate() {},
    page() {
      this.getCourseList();
    },
  },
};
</script>

<style>
</style>