<template>
  <section class="max-w-4xl p-6 mx-auto rounded-md shadow-md bg-gray-700">
    <h2 class="text-lg font-semibold text-gray-200 capitalize text-white">
      Login
    </h2>

    <form @submit.prevent="Login()">
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label class="text-gray-200 dark:text-gray-200">email </label>
          <input
            type="email"
            v-model="email"
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

        <div>
          <label class="text-gray-200 dark:text-gray-200">password</label>
          <input
            type="password"
            v-model="password"
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
      </div>

      <p class="text-white">{{ auth }}</p>

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
            disabled
          "
        >
          Login
        </button>
      </div>

      <div>
        

           <p class="flex items-center   text-white    ">
        
        <span class="mx-1 text-red-500"> {{ errors }}</span>
    </p>


      </div>
    </form>
  </section>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: "",
    };
  },
  computed: {
    ...mapState(["auth"]),
  },
  methods: {
    ...mapMutations(["setAuth"]),

    Login() {
      this.axios
        .post("/login", {
          gran_type: "password",
          client_id: "95e1d3ff-7270-4e6c-8e9c-6dcd6bc10df2",
          client_secret: "O3tH7XtTgQTD06hMZV2NgfiRk94IsaUGFBTKYKdP",
          username: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data.user);
          this.setAuth(response.data);
          localStorage.setItem("auth", JSON.stringify(response.data));

          this.$router.push({ path: "dashboard" });

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          // console.log(error.response.data.message);

          

          let errors = error.response.data.message;

          this.errors =  errors ;

           
          
           

        });
    },
  },
};
</script>

<style>
</style>