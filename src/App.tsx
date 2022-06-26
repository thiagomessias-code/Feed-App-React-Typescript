import {Header} from "./components/Header"
import './global.css'
import styles from './App.module.css'
import {Sidebar} from "./components/Sidebar"
import {Post} from "./components/Post"

// author: {avatar_url: "", name: "", role: "" } publishedAt: Date Content:
// string

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/thiagomessias-code.png",
            name: "Thiago Messias",
            role: "Ctd Thiago"
        },
        content: [
            {
                type: 'paragraph',
                content: "Fala galeraa 👋"
            }, {
                type: 'paragraph',
                content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Ret" +
                        "urn, evento da Rocketseat.O nome do projeto é DoctorCare 🚀"
            },

            { type:'link',content: 'jane.design/doctorcare'}
        ],
        publishedAt: new Date('2022-06-25 20:00:00'),
    },
    {
      id: 2,
      author: {
          avatarUrl: "https://github.com/thiagomessias-code.png",
          name: "Kevin",
          role: "Ctd Thiago"
      },
      content: [
          {
              type: 'paragraph',
              content: "Fala galeraa 👋"
          }, {
              type: 'paragraph',
              content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Ret" +
                      "urn, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
          },

          { type:'link',content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2022-06-10 20:00:00'),
    }
]

function App() {

    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {posts.map(post => {
                      return (
                      <div>
                        <Post
                        key={post.id}
                        author={post.author}
                        content={post.content}
                        publishedAt={post.publishedAt}
                        />
                        
                      </div>)
                    })}
                </main>

            </div>
        </div>
    )
}

export default App
