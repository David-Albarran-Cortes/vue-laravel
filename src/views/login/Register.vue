<template>
  <section class="max-w-4xl p-6 mx-auto rounded-md shadow-md bg-gray-700">
    <h2 class="text-lg font-semibold text-gray-200 capitalize text-white">
      Register
    </h2>

    <form @submit.prevent="">
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label class="text-gray-200 dark:text-gray-200">name</label>
          <input
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

        <div>
          <label class="text-gray-200 dark:text-gray-200">email</label>
          <input
            type="email"
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
          <label class="block text-sm font-medium text-gray-200"
            >password
          </label>
          <input
            type="password"
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
          Register
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>