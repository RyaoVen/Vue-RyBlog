<script setup>
import {onMounted, ref} from "vue";

let notes = ref()
let note = ref()
let projects = ref()
let project = ref()
let passages = ref()
let passage = ref()
let projectsState = false
let notesState = false
let passagesState = false


function passagesClick(){
  if(!passagesState){
    passages.value.classList.remove('folded')
    passage.value.classList.add('rotating')
    passagesState = true
  }else {
    passages.value.classList.add('folded')
    passage.value.classList.remove('rotating')
    passagesState = false
  }
}

function goArticleManagement(){
  router.push("/admin/articleManagement")
}
function goMain(){
  router.push("/admin/main")
}
function goMyselfSet(){
  router.push("/admin/myselfSet")
}
function goFindsLinks(){
  router.push("/admin/friendsLinks")
}
function goOneWord(){
  router.push("/admin/oneWord")
}
function goEditor(){
  router.push("/admin/editor")
}
function goWeb(){
  router.push("/home")
}
import Tx from "@/components/tx.vue";
import router from "../route/index-page.js"
import {ArrowDown, ChatDotSquare, Document, Folder, House, Link, Notebook, User,HotWater} from "@element-plus/icons-vue";
</script>

<template>
<main>
  <div class="listSideMenu">
    <div class="topCard">
      <tx size="35"/> <span>RyBlog Backstage</span>
    </div>
    <ul>
      <li >
        <div class="menuTitle" @click="goMain">
        <span class="title"><el-icon color="#404040"><House /></el-icon>首页</span>
        </div>
      </li>
      <li>
        <div class="menuTitle" @click="goEditor">
          <span class="title"><el-icon color="#404040"><Document /></el-icon>文章发布</span >
        </div>
      </li>
      <li>

        <div class="menuTitle" @click="passagesClick"><span class="title"><el-icon color="#404040"><Document /></el-icon>发布管理</span ><div ref="passage" class="arrow"><el-icon color="#404040"><ArrowDown /></el-icon></div></div>
        <ul class="folded" ref="passages">
          <li>
            <div class="menuTitle" @click="goArticleManagement">
              <span class="title"><el-icon color="#404040"><Document /></el-icon>文章管理</span >
            </div>
          </li>
          <li>
            <div class="menuTitle"> <span class="title"><el-icon color="#404040"><Folder /></el-icon>项目管理</span ></div>
          </li>
          <li>
            <div class="menuTitle"><span class="title"><el-icon color="#404040"><Notebook /></el-icon>手记管理</span ></div>
          </li>

        </ul>
      </li>
      <li>
        <div class="menuTitle"><span class="title"><el-icon color="#404040"><ChatDotSquare /></el-icon>评论管理</span></div>
      </li>
      <li>
        <div class="menuTitle" @click="goFindsLinks"><span class="title"><el-icon color="#404040"><Link /></el-icon>友链</span></div>
      </li>
      <li>
        <div class="menuTitle" @click="goMyselfSet"><span class="title"><el-icon color="#404040"><User /></el-icon>个人资料</span></div>
      </li>
      <li>
        <div class="menuTitle"><span class="title"><el-icon color="#404040"><Folder /></el-icon>图库</span ></div>
      </li>
      <li>
        <div class="menuTitle" @click="goOneWord"><span class="title"><el-icon><HotWater /></el-icon>一言</span ></div>
      </li>
      <li>
        <div class="menuTitle" @click="goWeb"><span class="title"><el-icon><HotWater /></el-icon>去前台</span ></div>
      </li>

    </ul>
  </div>

  <div class="content">
    <RouterView>

    </RouterView>
  </div>
</main>
</template>

<style scoped>
.arrow{
  transition: all 0.22s ease;
}
main{
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
}
.listSideMenu{

  height: 100vh;
  width: 220px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-right: 2px solid rgba(64, 64, 64, 0.15);

}
span{
  user-select:none;
}
.rotating{
  transform: rotate(180deg);
}
.content{
  height: 110vh;
  width: calc(100vw - 220px);

  margin-left: 220px;
}
.folded {
  opacity: 0;
  max-height: 0 ;
  pointer-events: none; /* 禁止交互 */
  transform: translateY(-10px);
}
li{
  list-style: none;

  width: 100%;


  transition: all ease 0.22s;




}
.menuTitle{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px ;
  padding: 10px;
  margin: 8px;
  cursor: pointer;
  width: calc(100% - 36px);
  transition: all ease 0.22s;
}
.menuTitle span{
  font-size: 0.9em;
  display: flex;
  justify-content: start;
  color: #404040;
  align-items: center;
  flex-direction: row;
  gap: 6px;
}
.menuTitle:hover{
  background-color: rgba(128, 128, 128, 0.15);
}
.topCard{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 10px;
}
.topCard span{
  font-size: 1em;
  font-weight: bold;
}
ul{
  padding: 0;
  margin: 0;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  max-height:999px;
}


</style>