<template>
    <div class="row">
        <Sidebar />
        <div class="m--content col">
            <div class="m--section-top d-flex justify-content-between">
                <h1 class="m--heading">Усі відео</h1>
                <div class="m--tools d-flex">
                    <form>
                        <input type="search">
                    </form>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="m--videos d-flex">
                <Video 
                    v-for="v in videos"
                    :key="v"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .row {
        width: 100%;
    }
</style>

<script>
import Sidebar from '@/components/Sidebar'
import Video from '@/components/Video'

export default {
    data: () => ({
        videos: [1,2,3,4,5]
    }),
    components: {
        Sidebar, Video
    }
}
</script>