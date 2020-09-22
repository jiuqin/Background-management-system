<template>
<div class="hello">
    <h4>商城一周访问数据</h4>
<div id="chart1"></div>
</div>
</template>

<script>
export default {
name: 'HelloWorld',
data () {
return {
}
},
mounted() {
this.$chart.line1('chart1');
}
}
</script>

<style scoped>
#chart1 {
width: 1200px;
height: 400px;
}
</style>