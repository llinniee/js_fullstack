<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input type="date" class="form-control"
        v-miodel="date" placeholder="Date">
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input type="number" class="form-control"
        v-miodel="totalTime" placeholder="Hours">
      </div>
    </div>
    <div class="form-group">
      <label>备注</label>
      <input type="text" class="form-control"
        v-miodel="comment" placeholder="Comment">
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
