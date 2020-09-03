<template>
    <div>
        <header class="header">
            <a 
                href="#" 
                class="h--menu-link"
                @click="toggleMenu"
            >
                Меню
            </a>
        </header>
        <div id="app">
            <div class="row">
                <Sidebar 
                    ref="menu"
                    :categories="categories"
                    :types="types"
                    @themeClick="filterThemes"
                    @checkClick="filterChecks"
                />
                <div class="m--content col">
                    <div class="m--section-top d-flex justify-content-between">
                        <h1 class="m--heading">{{ currentTheme | category }}</h1>
                        <div class="m--tools d-flex">
                            <form>
                                <input type="search" v-model="searchText">
                            </form>
                            <div @click="setGridView"></div>
                            <div @click="setListView"></div>
                        </div>
                    </div>
                    <div 
                        class="m--videos d-flex"
                        :class="{grid: isGrid}"
                        :key="isGrid"
                        v-if="typesVideos.length"
                    >
                        <Video 
                            v-for="v in typesVideos"
                            :key="v.id"
                            :video="v"
                        />
                    </div>
                    <div v-else>
                        <p>На жаль, відеозаписи не знайдено</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .row {
        width: 100%;
    }

    @media(max-width: 607px) {
        .row {
            margin-left: 0;
            margin-right: 0;
        }
    }
</style>

<script>
import Sidebar from '@/components/Sidebar'
import Video from '@/components/Video'

export default {
    data: () => ({
        data: [],
        isGrid: true,
        categories: [],
        videos: [],
        typesVideos: [],
        searchedVideos: [],
        currentTheme: 'all',
        searchText: '',
        menuIsExpanded: false
    }),
    watch: {
        searchText() {
            this.typesVideos = this.searchedVideos.filter(el => el.title.includes(this.searchText))
        }
    },
    methods: {
        async setGridView() {
            this.isGrid = await this.$store.dispatch('setGrid', true)
        },
        async setListView() {
            this.isGrid = await this.$store.dispatch('setGrid', false)
        },
        toggleMenu() {
            this.$refs.menu.$el.style.left = this.menuIsExpanded ? '-100%' : '0'
            this.menuIsExpanded = !this.menuIsExpanded
        },
        filterThemes(val) {
            if(screen.width < 607) {
                this.toggleMenu()
            }
            this.currentTheme = val
            if(val === 'all') {
                this.typesVideos = this.data
                return
            }
            this.typesVideos = this.data.filter(el => el.theme === val)
            this.videos = this.typesVideos
            this.searchedVideos = this.typesVideos
        },
        filterChecks(checks) {
            if(screen.width < 607) {
                this.toggleMenu()
            }
            this.typesVideos = this.videos.filter(el => {
                if(checks.discount) {
                    return el.options.sale
                }
                if(checks.popular) {
                    return el.options.popular
                }
                if(checks.nevv) {
                    return new Date(el.date).getMonth() === 7
                }
                return true
            })
            this.searchedVideos = this.typesVideos
            
        }
    },
    computed: {
        types() {
            return [
                ['discount', this.typesVideos.filter(el => el.options.sale).length],
                ['popular', this.typesVideos.filter(el => el.options.popular).length],
                ['nevv', this.typesVideos.filter(el => new Date(el.date).getMonth() === 7).length]
            ]
        }
    },
    async mounted() {
        this.data = await this.$store.dispatch('fetchData')
        this.typesVideos = this.data
        this.videos = this.data
        this.searchedVideos = this.data
        this.isGrid = await this.$store.dispatch('fetchView')
        this.data.forEach(el => {this.categories[el.theme] = this.categories[el.theme] + 1 || 1 })
        this.categories = Object.entries(this.categories)
    },
    components: {
        Sidebar, Video
    }
}
</script>