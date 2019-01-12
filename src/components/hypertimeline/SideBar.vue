<template>
    <div id="side-bar" class="custom-scroll">
        <el-button type="primary" :loading="true">Loading</el-button>
        <hr />
        {{text}}
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            text: `Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros libero, gravida eu metus et, maximus congue metus. Etiam lacinia semper nisi ut ullamcorper. Vestibulum purus sem, maximus sed dignissim quis, tincidunt vel est. Vivamus erat leo, imperdiet egestas diam varius, pretium imperdiet nulla. Aliquam eu condimentum eros. Ut mollis ipsum ac ante vehicula elementum. Aenean erat est, eleifend non nibh vel, interdum imperdiet purus. Sed nec dui quis tortor aliquet elementum. Maecenas purus libero, vehicula ut feugiat dictum, euismod non purus. Donec tincidunt aliquet eros, vel pretium lectus tempor nec. Morbi et nibh eget orci ornare interdum. Suspendisse potenti. Duis non faucibus nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros libero, gravida eu metus et, maximus congue metus. Etiam lacinia semper nisi ut ullamcorper. Vestibulum purus sem, maximus sed dignissim quis, tincidunt vel est. Vivamus erat leo, imperdiet egestas diam varius, pretium imperdiet nulla. Aliquam eu condimentum eros. Ut mollis ipsum ac ante vehicula elementum. Aenean erat est, eleifend non nibh vel, interdum imperdiet purus. Sed nec dui quis tortor aliquet elementum. Maecenas purus libero, vehicula ut feugiat dictum, euismod non purus. Donec tincidunt aliquet eros, vel pretium lectus tempor nec. Morbi et nibh eget orci ornare interdum. Suspendisse potenti. Duis non faucibus nunc.`,
        }
    },
    methods: {
    },
})
</script>

<style>
#side-bar{
	background: white;
	width: 25%;
	padding: 10px;
	overflow: hidden scroll;
    box-shadow: 
        -3px 0 0 0 hsla(0, 0%, 0%, 0.2),
        -9px 0 0 0 hsla(0, 0%, 0%, 0.2);
    box-shadow: 
        0 0 10px 0 hsla(0, 0%, 0%, 0.3);
    z-index: 1;
}
</style>
