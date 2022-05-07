<template>

 
  <div class="rounded-md max-h-96">
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

    <hr class="mt-4 bg-emerald-300" />

    <div
      class="
        max-w-2xl
        mt-6
        mx-auto
        overflow-hidden
        rounded-lg
        shadow-md
        bg-gray-700
      "
      v-for="course in courseList"
      :key="course.id"
    >
      <img
        class="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
            >{{ course.category.name }}</span
          >
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
            >{{ course.title }}</RouterLink
          >
        </div>

        <div class="mt-4"  v-if="auth">
          <div class="flex justify-end mt-4">
            <RouterLink :to="{ name: 'edit', params: { id: course.id } }">
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
</template>

<script>
 import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      search: [],
      courseList: [],
    };
  },

  created() {
    this.getCourseList();
  },
   computed: {
    ...mapState(["auth"]),
  },

  methods: {
    getCourseList() {
      this.axios  //
        .get(  
          "/api/courses" +"?included=category" + "&filter[title]=" + this.search)
        .then((response) => {
          this.courseList = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async deleteCourse(id) {
      await this.axios.delete("/api/courses/" + id);
      this.getCourseList();
    },
  },

  //vigilante
  watch: {
    search() {
      this.getCourseList();
    },
    paginate() {},
  },
};
</script>

<style>
</style>