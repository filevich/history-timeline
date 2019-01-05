<template>
    <div id="side-bar">
        <el-button type="primary" :loading="true">Loading</el-button>
        <hr />
        {{loremIpsum}}
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            loremIpsum: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mauris ac magna imperdiet tempus. Sed quis sem ut ligula ultricies ultrices eget ut risus. Fusce at ornare justo. Ut fermentum mollis ipsum, id ornare risus tincidunt et. Vivamus finibus lacus id ante rhoncus, ac feugiat quam convallis. Vivamus pellentesque elit et risus elementum pretium. Fusce eu eros libero. Sed egestas arcu id lectus hendrerit, eget egestas sem commodo. Etiam eu augue est. Pellentesque eu justo ligula. Donec lacinia cursus erat, vitae sodales nisl auctor non. Cras eget velit turpis. Curabitur eleifend a magna non lobortis. Nulla pretium arcu non turpis dictum consectetur. Phasellus faucibus est nec varius mattis.
				Nulla dolor leo, ornare sit amet neque sed, congue feugiat ipsum. Cras sed orci sapien. Proin eget vulputate sem, vel viverra sapien. Suspendisse potenti. Ut sollicitudin massa sit amet ante fringilla pretium. Mauris id ante quis justo pharetra tincidunt. Donec id luctus est. Nunc in accumsan est.
				Curabitur dignissim purus eget mattis accumsan. Donec id mauris congue, mollis eros ut, faucibus turpis. Sed lacus dui, gravida sed ullamcorper ac, rutrum in velit. Maecenas purus libero, tincidunt vel hendrerit quis, ornare a libero. Quisque a vehicula massa, vitae ornare nisi. Fusce id sodales augue. Fusce viverra mi a ligula tristique, ut suscipit dui tincidunt.
				In arcu turpis, eleifend at facilisis vel, pretium sed neque. Aliquam erat volutpat. Nullam dignissim urna eget nulla consequat, ac tempus leo sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris orci nisi, tristique sit amet tortor nec, placerat rutrum nulla. Aliquam non tortor est. Proin condimentum ullamcorper aliquet. Quisque diam justo, venenatis at justo vehicula, tristique interdum augue. Sed pulvinar, est convallis pulvinar tincidunt, libero turpis ullamcorper erat, ut accumsan sem velit sed arcu. Vestibulum fringilla justo vel est tristique accumsan. Vivamus lacinia, augue a pellentesque egestas, diam ante cursus mauris, sed gravida tellus augue in ex. Maecenas fermentum magna ut auctor efficitur. Aenean efficitur mi imperdiet ante pulvinar consequat. Donec eu ligula nec est imperdiet vestibulum.
				Maecenas ex elit, dapibus id pharetra non, molestie sit amet diam. Nulla nec placerat est, et consequat nibh. Aliquam dui ex, auctor quis consectetur sit amet, viverra eu mi. In imperdiet leo at tempus auctor. Nulla vestibulum lacus nec convallis condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisis, purus vel accumsan mollis, nisi nunc sagittis ligula, non lacinia nisi odio et neque. Nullam faucibus nibh orci, in venenatis urna facilisis et. In hac habitasse platea dictumst. Donec sit amet ante sem.`,
        }
    },
    methods: {
    },
})
</script>

<style>
#side-bar{
	background: rgba(0, 0, 255, 0.3);
	width: 25%;
	padding: 10px;
	overflow: hidden scroll;
}
</style>
