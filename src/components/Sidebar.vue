<template>
    <aside class="sidebar col col-xl-3 col-lg-3 col-3">
        <div 
            class="s--controls"
            :class="{active: videoActive}"
        >
            <div @click="toggleVideo">
                <img :src="'../img/icons/controls-video.png'" alt="">
                Відео
                <i 
                    class="fa"
                    :class="{'fa-chevron-right' : !videoActive, 'fa-chevron-down' : videoActive}"
                ></i>
            </div>
            <form>
                <div
                    v-for="entry in types"
                    :key="entry[0]"
                >
                    <input 
                        type="checkbox"
                        name="video"
                        :id="entry[0]"
                        :disabled="!entry[1]"
                        v-model="checks[`${entry[0]}`]"
                    >
                    <label 
                        :for="entry[0]"
                    > 
                        {{ entry[0] | category }} ({{entry[1]}})
                    </label> <br>
                </div>
            </form>
        </div>
        <div 
            class="s--controls"
            :class="{active: themesActive}"
        >
            <div @click="toggleThemes">
                <img :src="'../img/icons/controls-themes.png'" alt="">
                Теми
                <i 
                    class="fa"
                    :class="{'fa-chevron-right' : !themesActive, 'fa-chevron-down' : themesActive}"
                ></i>
            </div>
            <div class="s--themes">
                <p
                    class="s--category"
                    @click="showTheme('all')"
                >
                    Всі теми ({{catLength}})
                </p>
                <p 
                    class="s--category"
                    v-for="entry in categories"
                    :key="entry[0]"
                    @click="showTheme(entry[0])"
                >
                    {{ entry[0] | category }} ({{entry[1]}})
                </p>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    props: ['categories', 'types'],
    data: () => ({
        videoActive: true,
        themesActive: true,
        checks: {
            'discount': false,
            'popular': false,
            'nevv': false
        }
    }),
    watch: {
        checks: {
            deep: true,
            handler() {
                this.$emit('checkClick', this.checks)
            }
        }
    },
    methods: {
        toggleVideo() {
            this.videoActive = !this.videoActive
        },
        toggleThemes() {
            this.themesActive = !this.themesActive
        },
        hideVideo() {
            this.videoActive = false
        },
        hideThemes() {
            this.themesActive = false
        },
        showTheme(theme) {
            this.$emit('themeClick', theme)
        },
    },
    computed: {
        catLength() {
            let length = 0
            for(let cat of this.categories) {
                length += cat[1]
            }
            return length
        }
    }
}
</script>