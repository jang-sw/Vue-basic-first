<template>

  <div class="black-bg" v-if="modal_state">  
    <div class="white-bg" @click="modalClose">
      <h4>상세 페이지</h4>
      <p>상세 페이지 내용</p>
    </div>
  </div>
  <div v-for="(data, i) in datas" :key="i" @click="modalOpen">
      <img class = "room-img" :src="data.image"/> <!-- 속성에 데이터 바인딩은 : 이용-->
      <h4 >{{data.title}}</h4>
      <p>{{data.price}} 만원</p>
  </div>
  
</template>

<script>

import datas from '../data/post.js'

export default {
    name: 'InfoView',
    data(){
        return {
            datas : datas,
            prices : [60,70,80],
            modal_state: false,
        }
    },
    methods:{
        modalOpen(){
            this.modal_state = true;
        },
        modalClose(){
            this.modal_state = false;
        }
    }
}
</script>

<style>
    .room-img{
        width: 50%;
        margin-top: 40px;
    }
    .black-bg{
        width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        padding: 20px;
    }
    .white-bg{
        width: 30%; 
        height: 60%;
        top: 25%;
        left:35%;
        position:fixed;
        background: white;
        border-radius: 8px;
        padding: 20px;
    }
</style>
