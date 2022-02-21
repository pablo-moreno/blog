<template>
  <header
    class="fixed top-0 z-40 w-full border-b dark:border-gray-800 bg-white dark:bg-gray-900"
    :class="{ shadow: !onTop, 'shadow-reverse': onTop }"
  >
    <div class="container mx-auto flex-1 px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="lg:w-1/5 flex items-center pr-4">
          <NuxtLink to="/">
            <img
              v-if="$config.logo"
              class="h-10 max-w-full"
              :src="$config.logo"
            />

            <template v-else-if="$config.logoLight && $config.logoDark">
              <img
                :src="$config.logoLight"
                class="h-10 max-w-full light-img"
                height="100"
              />
              <img
                :src="$config.logoDark"
                class="h-10 max-w-full dark-img"
                height="100"
              />
            </template>

            <AppLogo
              v-else-if="$options.components['AppLogo']"
              class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
            />
          </NuxtLink>
        </div>
        <div class="flex-1 flex justify-start w-4/6">
          <AppSearch />
        </div>
        <div class="lg:w-1/5 flex items-center pl-4 lg:pl-8 justify-end">
          <a
            v-if="$config.linkedinUsername"
            :href="`https://www.linkedin.com/in/${$config.linkedinUsername}`"
            target="_blank"
            class="hidden sm:block ml-3"
            rel="noopener"
            aria-label="linkedin"
          >
            <IconLinkedin class="w-6 h-6" />
          </a>

          <a
            v-if="$config.twitterUsername"
            :href="`https://twitter.com/${$config.twitterUsername}`"
            target="_blank"
            class="hidden sm:block ml-3"
            rel="noopener"
            aria-label="twitter"
          >
            <IconTwitter class="w-6 h-6" />
          </a>

          <a
            v-if="$config.githubOwner"
            :href="`https://github.com/${$config.githubOwner}`"
            target="_blank"
            class="hidden sm:block ml-3"
            rel="noopener"
            aria-label="github"
          >
            <IconGithub class="w-6 h-6" />
          </a>

          <div class="flex-1 flex ml-3">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      onTop: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.onTop = window.pageYOffset < 60;
    },
  },
};
</script>
