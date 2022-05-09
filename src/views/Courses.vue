<template>

    <div class="max-w-2xl mx-auto overflow-hidden  rounded-lg shadow-md bg-gray-700">
        <img class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article">

        <div class="p-6">
            <div>                                                                            
                <span class="text-xs font-medium text-emerald-600 uppercase text-emerald-400">{{category.name}}</span>
                <p href="#" class="block mt-2 text-2xl font-semibold text-emerald-400 transition-colors duration-200 transform dark:text-white   ">{{course.title}}</p>
                <p class="mt-2 text-sm text-emerald-600 dark:text-emerald-400">{{course.description}}.</p>
            </div>

            <div class="mt-4">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img class="object-cover h-10 rounded-full" :src="user.profile_photo_url" alt="Avatar">
                        <p  class="mx-2 font-semibold text-gray-300 dark:text-gray-200">{{user.name}}</p>
                    </div>
                    <span class="mx-1 text-xs text-gray-300 text-gray-300">21 SEP 2015</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      course: {},
      category:{},
      user:{}
    };
  },

  created() {
    this.getCourse();
  },

  methods: {
    getCourse() {
      this.axios.get('/courses/' + this.$route.params.id + '?included=category,user')
        .then(response => {
          this.course = response.data;
           this.category = response.data.category;
           this.user = response.data.user;

           //{{course.category.name}}

          
        })
        .catch(error => {
          console.log(error);
        })
    },
  },
};
</script>

<style>
</style>