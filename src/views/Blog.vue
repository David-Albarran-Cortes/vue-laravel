<template>
   
<div class="    overflow-y-auto     rounded-md max-h-80  ">
  <div  class="   max-w-2xl mt-4  mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800" v-for="course in courseList" :key="course.id" >
        <img class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article">

        <div class="p-6">
            <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{{course.category.name}}</span>
              <RouterLink :to="{name:'courses', params:{id: course.id}}" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">{{course.title}}</RouterLink>
              </div>

            <div class="mt-4">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar">
                        <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200">Jone Doe</a>
                    </div>
                    <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                </div>
            </div>
        </div>
    </div>
</div>
   
     
      
    
   
</template>

<script>
export default {
  data() {
    return {
      courseList: [],
    };
  },

  created() {
    this.getCourseList();
  },

  methods: {
    getCourseList() {
      this.axios
        .get("https://cursos-prueba.tk/api/courses" + '?included=category')
        .then((response) => {
          this.courseList = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>