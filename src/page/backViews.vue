<script setup>
import {ref} from "vue";

let notes = ref()
let note = ref()
let projects = ref()
let project = ref()
let passages = ref()
let passage = ref()
let projectsState = false
let notesState = false
let passagesState = false
function notesClick(){
if(!notesState){
  notes.value.classList.remove('folded')
  note.value.classList.add('rotating')
  notesState = true
}else {
  notes.value.classList.add('folded')
  note.value.classList.remove('rotating')
  notesState = false
}
}

function projectsClick(){
  if(!projectsState){
    projects.value.classList.remove('folded')
    project.value.classList.add('rotating')
    projectsState = true
  }else {
    projects.value.classList.add('folded')
    project.value.classList.remove('rotating')
    projectsState = false
  }
}

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


import Tx from "@/components/tx.vue";
import {ArrowDown, ChatDotSquare, Document, Folder, House, Link, Notebook, User} from "@element-plus/icons-vue";
</script>

<template>
<main>
  <div class="listSideMenu">
    <div class="topCard">
      <tx size="35"/> <span>RyBlog Backstage</span>
    </div>
    <ul>
      <li >
        <div class="menuTitle">
        <span class="title"><el-icon color="#404040"><House /></el-icon>首页</span>
        </div>
      </li>
      <li>
        <div class="menuTitle" @click="passagesClick"><span class="title"><el-icon color="#404040"><Document /></el-icon>文章</span ><div ref="passage" class="arrow"><el-icon color="#404040"><ArrowDown /></el-icon></div></div>
        <ul class="folded" ref="passages">
          <li>
            <div class="menuTitle">
              <span class="title"><el-icon color="#404040"><Document /></el-icon>文章管理</span >
            </div>
          </li>
          <li>
            <div class="menuTitle">
              <span class="title"><el-icon color="#404040"><Document /></el-icon>文章发布</span >
            </div>
          </li>

        </ul>
      </li>

      <li >
        <div class="menuTitle" @click="projectsClick" ref="projects">
          <span class="title"><el-icon color="#404040"><Folder /></el-icon>项目</span><div ref="project" class="arrow"><el-icon color="#404040"><ArrowDown /></el-icon></div>
        </div>
        <ul ref="projects" class="folded">
          <li>
           <div class="menuTitle"> <span class="title"><el-icon color="#404040"><Folder /></el-icon>项目管理</span ></div>
          </li>
          <li>
            <div class="menuTitle"><span class="title"><el-icon color="#404040"><Folder /></el-icon>项目发布</span ></div>
          </li>

        </ul>
      </li>

      <li  >
        <div class="menuTitle" @click="notesClick"><span class="title"><el-icon color="#404040" ><Notebook /></el-icon>手记</span><div ref="note" class="arrow"><el-icon  color="#404040"><ArrowDown /></el-icon></div></div>
        <ul ref="notes" class="folded">
          <li>
            <div class="menuTitle"><span class="title"><el-icon color="#404040"><Notebook /></el-icon>手记管理</span ></div>
          </li>
          <li>
            <div class="menuTitle"><span class="title"><el-icon color="#404040"><Notebook /></el-icon>手记发布</span ></div>
          </li>

        </ul>
      </li>

      <li>
        <div class="menuTitle"><span class="title"><el-icon color="#404040"><ChatDotSquare /></el-icon>评论管理</span></div>
      </li>
      <li>
        <div class="menuTitle"><span class="title"><el-icon color="#404040"><Link /></el-icon>友链</span></div>
      </li>
      <li>
        <div class="menuTitle"><span class="title"><el-icon color="#404040"><User /></el-icon>个人资料</span></div>
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
  background-color: #91bc25;
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