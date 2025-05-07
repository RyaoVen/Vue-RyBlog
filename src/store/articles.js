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
