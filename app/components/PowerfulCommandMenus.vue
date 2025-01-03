<template>
  <section class="py-16 lg:py-24 bg-gray-900 text-white">
    <div class="container mx-auto max-w-5xl text-center">
      <h2 class="text-3xl lg:text-4xl font-bold">
        90% Faster Organic Growth
      </h2>
      <p class="mt-4 text-gray-400">
        Repo-Booster optimizes your GitHub workflow with powerful tools to boost growth and productivity.
      </p>
    </div>

    <div class="mt-12 lg:flex lg:items-start lg:justify-between lg:gap-12">
      <!-- Left Content -->
      <div class="flex-1 text-center lg:text-left">
        <div class="flex items-center justify-center lg:justify-start">
          <span class="i-octicon-terminal-24 text-xl p-4 border rounded-full" />
        </div>
        <h3 class="text-2xl font-bold mt-4">
          Powerful command menus
        </h3>
        <p class="mt-2 text-gray-400">
          Navigate through projects, repositories, users or manage anything in seconds with
          <kbd class="kbd">Ctrl</kbd> <kbd class="kbd">K</kbd> and search any issue with <kbd class="kbd">/</kbd>.
        </p>
        <a
          href="#"
          class="inline-block mt-4 text-primary-400 hover:underline"
        >
          Learn more →
        </a>
      </div>

      <div class="flex-1 relative mt-8 lg:mt-0">
        <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <!-- Command Input -->
          <div class="flex items-center px-4 py-2 border-b border-gray-700">
            <span class="i-octicon-terminal-24 text-gray-500" />
            <input
              v-model="query"
              type="text"
              placeholder="Type a command..."
              class="ml-4 flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
              @input="filterResults"
            >
            <button
              class="text-gray-500 hover:text-white"
              aria-label="Clear search"
              @click="clearSearch"
            >
              <span class="i-octicon-x-24" />
            </button>
          </div>

          <div class="max-h-64 overflow-y-auto">
            <div
              v-if="filteredRepositories.length"
              class="p-4"
            >
              <h4 class="text-sm text-gray-400 mb-2">
                Repositories
              </h4>
              <ul>
                <li
                  v-for="repo in filteredRepositories"
                  :key="repo"
                  class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer"
                  @click="selectResult(repo)"
                >
                  <img
                    :src="repo.logo"
                    alt=""
                    class="h-6 w-6 rounded-full"
                  >
                  <span class="text-white truncate">{{ repo.name }}</span>
                </li>
              </ul>
            </div>

            <div
              v-if="filteredUsers.length"
              class="p-4"
            >
              <h4 class="text-sm text-gray-400 mb-2">
                Users
              </h4>
              <ul>
                <li
                  v-for="user in filteredUsers"
                  :key="user"
                  class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer"
                  @click="selectResult(user)"
                >
                  <img
                    :src="user.avatar"
                    alt=""
                    class="h-6 w-6 rounded-full"
                  >
                  <span class="text-white truncate">{{ user.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      API: [
        { name: 'repo-booster/api', logo: 'https://github.com/repo-booster.png' },
        { name: 'github/platform-api', logo: 'https://github.com/github.png' },
        { name: 'gitlab/platform-api', logo: 'https://e7.pngegg.com/pngimages/394/173/png-clipart-gitlab-continuous-integration-computer-icons-source-code-logo-github-angle-company.png' },
        { name: 'bitbucket/platform-api', logo: 'https://bitbucket.com/bitbucket.png' },
        { name: 'google/browser-api', logo: 'https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png' },
        { name: 'google/search-console-api', logo: 'https://cdn.worldvectorlogo.com/logos/google-search-console.svg' },
        { name: 'openai/api', logo: 'https://github.com/openai.png' }

      ],
      users: [
        { name: 'Atinux', avatar: 'https://github.com/Atinux.png' },
        { name: 'pi0', avatar: 'https://github.com/pi0.png' },
        { name: 'danielroe', avatar: 'https://github.com/danielroe.png' },
        { name: 'antfu', avatar: 'https://github.com/antfu.png' }
      ],
      filteredRepositories: [],
      filteredUsers: []
    }
  },
  mounted() {
    this.filterResults()
  },
  methods: {
    filterResults() {
      const queryLower = this.query.toLowerCase()

      this.filteredRepositories = this.repositories.filter(repo =>
        repo.name.toLowerCase().includes(queryLower)
      )
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(queryLower)
      )
    },
    selectResult(result) {
      alert(`Selected: ${result.name}`)
    },
    clearSearch() {
      this.query = ''
      this.filterResults()
    }
  }
}
</script>

<style scoped>
.kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #cbd5e1;
  background: #374151;
  border-radius: 0.25rem;
  border: 1px solid #4b5563;
}
</style>
