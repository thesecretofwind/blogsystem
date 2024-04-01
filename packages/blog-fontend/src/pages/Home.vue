<!-- 首页 -->
<template>
  <div>
      <blog-header></blog-header>
      <div class="container">
          <el-row  :gutter="30">
              <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
                  <articlelist></articlelist>
              </el-col>
              <el-col :sm="24"  :md="8" >
                  <rightlist></rightlist>
              </el-col>
          </el-row>
      </div>
      hello world
  </div>
</template>

<script setup lang="ts">
import BlogHeader from '@/components/header.vue'
import articlelist from '@/components/articlelist.vue'
import rightlist from '@/components/rightlist.vue'
</script>

<style lang="less" scoped>
</style>
