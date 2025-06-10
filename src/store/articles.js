import { defineStore } from 'pinia';

export const useArticlesStore = defineStore('articles', {
    state: () => ({
        articles: {
            1: {
                id: 1,
                title: 'Vue3 组合式API详解',
                author: '张三',
                date: '2023-12-01',
                category: '技术',
                tags: ['Vue3', 'JavaScript', '前端开发'],
                cover: 'https://picsum.photos/800/400',
                content: `
<h1>Vue3 组合式 API 详解</h1>
    <h2>什么是组合式 API？</h2>
    <p>组合式 API 是 Vue3 中新增的特性，它允许我们使用函数的方式来组织组件的逻辑。</p>
    <h2>为什么使用组合式 API？</h2>
    <ol>
        <li>更好的代码组织</li>
        <li>更好的逻辑复用</li>
        <li>更好的类型推导</li>
    </ol>
    <pre>
        <code class="language-javascript">
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    
    onMounted(() => {
      console.log('组件已挂载')
    })
    
    return { count }
  }
}
        </code>
    </pre>
    `,
                views: 1200,
                likes: 350,
                comments: []
            },
            2: {
                id: 2,
                title: 'Element Plus 使用技巧',
                author: '李四',
                date: '2023-12-05',
                category: '技术',
                tags: ['Element Plus', 'UI框架', '前端开发'],
                cover: 'https://picsum.photos/800/400',
                content: `
# Element Plus 使用技巧

## 按需引入组件

Element Plus 支持按需引入，这可以显著减小打包体积。

## 自定义主题

通过修改 SCSS 变量来自定义主题。

\`\`\`javascript
import { ElButton, ElInput } from 'element-plus'

app.use(ElButton)
app.use(ElInput)
\`\`\`
    `,
                views: 800,
                likes: 220,
                comments: []
            },
            3: {
                id: 3,
                title: '关于RyBlog',
                author: 'RyaoVen',
                date: '2025-06-09',
                category: '技术',
                tags: ['RyBlog', 'UI框架', '前端开发'],
                cover: 'https://picsum.photos/800/400',
                content: `
 <header class="section">
        <h1>👋 你好呀！我是 <strong>RyaoVen</strong> 🌟</h1>
        <img src="https://komarev.com/ghpvc/?username=RyaoVen&color=ff69b4&style=flat-square" alt="访客量">
        <p class="profile-info"><em>(正在加载代码宇宙...)</em></p>
    </header>

    <section class="section" id="about">
        <h2>📌 <strong>关于我</strong> 📌</h2>
        <ul class="profile-info">
            <li>- <strong>坐标</strong>：中国·开封 🌆</li>
            <li>- <strong>身份</strong>：在校学生 🎓 | 全栈开发者养成中 🚀</li>
            <li>- <strong>技术方向</strong>：前端开发 🌐 + 后端探索 🖥️</li>
            <li>- <strong>GitHub</strong>：<a href="https://github.com/RyaoVen" target="_blank">RyaoVen</a> 🐙</li>
            <li>- <strong>邮箱</strong>：<a href="mailto:2098142568@qq.com">2098142568@qq.com</a> 📧</li>
        </ul>
    </section>

    <section class="section" id="tech-stack">
        <h2>🔥 <strong>我的技术栈</strong> 🔥</h2>
        
        <h3>💻 <strong>前端技能树</strong></h3>
        <div class="skill-item">
            <img src="https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vuedotjs&logoColor=4FC08D" alt="Vue3"> ⚡
        </div>
        <div class="skill-item">
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"> 🚀
        </div>
        <div class="skill-item">
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"> 🎨
        </div>
        <div class="skill-item">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"> 🏗️
        </div>

        <h3>🛠️ <strong>后端技能树</strong></h3>
        <div class="skill-item">
            <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=java&logoColor=white" alt="Java"> ☕
        </div>
        <div class="skill-item">
            <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=spring&logoColor=white" alt="Spring"> 🌱
        </div>
        <div class="skill-item">
            <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white" alt="C++"> 🚗
        </div>

        <h3>📚 <strong>正在学习</strong></h3>
        <div class="skill-item">
            <img src="https://img.shields.io/badge/Kotlin-0095D5?style=flat-square&logo=kotlin&logoColor=white" alt="Kotlin"> 🚀
        </div>
        <div class="skill-item">
            <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=flat-square&logo=spring-boot" alt="Spring Boot"> 🔥
        </div>
    </section>

    <section class="section" id="open-source">
        <h2>🚀 <strong>我的开源项目</strong> 🚀</h2>
        <h3>🌟 <strong>个人作品</strong> 🌟</h3>
        <table class="project-table">
            <thead>
                <tr>
                    <th>项目名称 📚</th>
                    <th>描述 📝</th>
                    <th>技术栈 👩💻</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>RyBlog</td>
                    <td>基于Vue3+JAVA SpringBoot的一个前后端完备博客</td>
                    <td>Java SpringBoot Vue3</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="section" id="stats">
        <h2>📊 <strong>我的数据看板</strong> 📊</h2>
        <div class="stats-container">
            <div class="stat-card">
                <img src="https://github-readme-stats.vercel.app/api?username=RyaoVen&theme=tokyonight&show_icons=true&count_private=true" alt="GitHub Stats">
            </div>
            <div class="stat-card">
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RyaoVen&theme=vue&layout=compact&langs_count=6" alt="Top Languages">
            </div>
        </div>

        <h3>🎯 <strong>GitHub 等级评分</strong></h3>
        <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=RyaoVen&theme=github" alt="GitHub Profile Summary">
    </section>

    <section class="section" id="life">
        <h2>✨ <strong>生活碎片</strong> ✨</h2>
        <ul class="life-fragment">
            <li>- <strong>兴趣爱好</strong>：编程 🖥️、摄影 📷、旅行 🌍</li>
            <li>- <strong>座右铭</strong>：Don't stop here , it isn't the end. 🍎</li>
            <li>- <strong>近期目标</strong>：写完我的博客 🦀</li>
        </ul>
        <p>如果我的项目对你有帮助，欢迎点个 <strong class="accent">⭐</strong> 支持一下！ 😊</p>
    </section>

    <footer class="footer">
        <p>*Last updated: 2025-06-03</p>
    </footer>
    `,
                views: 800,
                likes: 220,
                comments: []
            }
        }
    }),
    getters: {
        getArticleById: (state) => (id) => {
            return state.articles[id];
        }
    },
    actions: {
        updateArticleLikes(id, newLikes) {
            if (this.articles[id]) {
                this.articles[id].likes = newLikes;
            }
        },
        addComment(id, comment) {
            if (this.articles[id]) {
                this.articles[id].comments.push(comment);
            }
        }
    }
});
