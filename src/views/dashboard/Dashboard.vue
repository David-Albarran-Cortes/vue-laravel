
<template>
 
        
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-gray-100 dark:text-white    ">Welcome {{auth.user.name}} </h1>
            <a   class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Options</a>
        </div>

        <div class="mt-2">
            <a href="#" class="text-2xl font-bold text-gray-200 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Accessibility tools for designers and developers</a>
            <p class="mt-2 text-gray-200 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
        </div>
        
        <div class="flex items-center justify-between mt-4">
            <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

            <div class="flex items-center">
                <img class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar">
                <a class="font-bold text-gray-300 cursor-pointer dark:text-gray-200">Khatab wedaa</a>
            </div>
        </div>


        
   
        
   
</template>

<script>
import { mapActions, mapState } from "vuex";
 export default {


    data() {
        return {
         

        }
    },
 


    methods: {
    ...mapActions(["logout"]),
  },

computed: {
    ...mapState(["auth"]),
  },

}
</script>

<style>

</style>