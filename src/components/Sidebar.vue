<template>
    <aside class="sidebar col col-3">
        <div 
            class="s--controls"
            :class="{active: video.active}"
        >
            <div @click="toggleVideo">
                <img :src="'../img/icons/controls-video.png'" alt="">
                Відео
                <i 
                    class="fa"
                    :class="{'fa-chevron-right' : !video.active, 'fa-chevron-down' : video.active}"
                ></i>
            </div>
            <form ref="video">
                <input type="checkbox" name="video" id="discount">
                <label for="discount">Акція ({{video.discount.length}})</label> <br>
                <input type="checkbox" name="video" id="popular">
                <label for="popular">Популярні ({{video.popular.length}})</label> <br>
                <input type="checkbox" name="video" id="new">
                <label for="new">Новинки ({{video.new.length}})</label>
            </form>
        </div>
        <div 
            class="s--controls"
            :class="{active: themes.active}"
        >
            <div @click="toggleThemes">
                <img :src="'../img/icons/controls-themes.png'" alt="">
                Теми
                <i 
                    class="fa"
                    :class="{'fa-chevron-right' : !themes.active, 'fa-chevron-down' : themes.active}"
                ></i>
            </div>
            <div class="s--themes">
                <p 
                    class="s--category"
                    v-for="c in categories"
                    :key="c"
                >
                    {{c}}
                </p>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    data: () => ({
        video: {
            discount: [],
            popular: [],
            new: [],
            active: true
        },
        themes: {
            active: true
        }
    }),
    methods: {
        toggleVideo() {
            this.video.active = !this.video.active
        },
        toggleThemes() {
            this.themes.active = !this.themes.active
        },
        hideVideo() {
            this.video.active = false
        },
        hideThemes() {
            this.themes.active = false
        }
    },
    computed: {
        categories() {
            return ['12', '23', '34', '45', '56']
        }
    }
}
</script>