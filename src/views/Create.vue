<template>
  <section class="max-w-4xl p-6 mx-auto rounded-md shadow-md bg-gray-700">
    <h2 class="text-lg font-semibold text-gray-200 capitalize text-white">
      Create Blog
    </h2>

    <form @submit.prevent="saveCourse()">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label class="text-gray-200 dark:text-gray-200">Title</label>
            <input
              v-model="course.title"
              type="text"
              class="
                block
                w-full
                px-4
                py-2
                mt-2
                text-gray-200
                bg-gray-700
                border border-gray-200
                rounded-md
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
                dark:focus:border-blue-300
                focus:outline-none focus:ring
              "
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label class="text-gray-200 dark:text-gray-200">Description </label>
            <input
              v-model="course.description"
              type="text"
              class="
                block
                w-full
                px-4
                py-2
                mt-2
                text-gray-200
                bg-gray-700
                border border-gray-200
                rounded-md
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
                dark:focus:border-blue-300
                focus:outline-none focus:ring
              "
            />
          </div>

          <div class="col-span-6 sm:col-span-6">
            <label class="block text-sm font-medium text-gray-200"
              >Category
            </label>
            <select
              name=""
              v-model="course.category_id"
              id="category"
              autocomplete="country-name"
              class="
                mt-1
                block
                w-full
                text-gray-200
                py-2
                px-3
                border border-gray-300
                bg-gray-700
                rounded-md
                shadow-sm
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
            >
              <option class="text-gray-200" select disabled>categories</option>
              <option
                v-for="categories in categoryList"
                :key="'categories' + categories.id"
                :value="categories.id"
              >
                {{ categories.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="
              px-6
              py-2
              leading-5
              text-white
              transition-colors
              duration-200
              transform
              bg-emerald-500
              rounded-md
              hover:bg-emerald-600
              focus:outline-none focus:bg-emerald-600
            "
          >
            Save
          </button>
        </div>
 

        <ul
          v-for="error in errors"
          :key="error"
          class=" "
        >
        
        <div class="   "  >
          <p class="text-red-500">{{ error}} </p>
  
           
        </div>
          
        </ul>
      </div>
    </form>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [],
      errors: [],

      course: {
        title: "",
        description: "",
        category_id: "",
      },
    };
  },

  created() {
    this.getCategories();
  },

  methods: {
    getCategories() {
      this.axios
        .get("/categories")
        .then((response) => {
          this.categoryList = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async saveCourse() {
      await this.axios
        .post("/courses/", this.course)
        .then((response) => {
          //let course = response.data;
          //this.courses.push(course);

          this.$swal.fire("¡Buen trabajo!", "Tu post se creo con exito!", "success");

         

          this.course = {
            title: "",
            description: "",
            category_id: "",
          };
           
        })
        .catch((error) => {
          console.log(error.response.data);

          let errors = Object.values(error.response.data.errors).flat();
          
          this.errors = errors;
           
        });
    },
  },
};
</script>

<style>

</style>