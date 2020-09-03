<template>
    <div 
        class="m--videowr" 
        :class="{grid: isGrid}"
    >
        <div class="m--video">
            <div class="m--imgwr">
                <img :src="`${video.covers.main}`" alt="">
            </div>
            <div class="m--textwr d-flex">
                <p class="m--title" v-html="video.title">
                </p>
                <a 
                    :href="video.options.link" 
                    class="m--link"
                    :class="{ buy: video.access, watch: !video.access}"
                >
                    {{video.access ? 'Придбати' : 'Дивитися'}}
                    <span><i class="fa fa-chevron-right"></i></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['video', 'isGrid'],
}
</script>