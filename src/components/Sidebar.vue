<template>
    <aside class="sidebar col col-3">
        <div class="s--controls">
            <div>
                <img :src="'../img/icons/controls-video.png'" alt="">
                Відео
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
            :class="{active: themes}"
        >
            <div>
                <img :src="'../img/icons/controls-themes.png'" alt="">
                Теми
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
            new: []
        },
        themes: true
    }),
    computed: {
        categories() {
            return ['12', '23', '34', '45', '56']
        }
    }
}
</script>