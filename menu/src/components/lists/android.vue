<template>
	<v-list :type='title'></v-list>
</template>

<script type="text/javascript">

	import vList from './list.vue';

	export default{
		name : "v-android",
		data(){
			return {
				title : 'android',
			}
		},
		components : {
			vList,
		}
	}
</script>