import { Header } from './Components/Header';
import {Post} from './Components/Post';
import {Sidebar} from './Components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/JulioCunh.png',
      name: 'Julio Cunha',
      role: 'Marmiteiro'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa ð'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
    { type: 'link', content: 'jane.design/doctorcare'}, 
  ],
  publishedAt: new Date('2022-05-03 20:00:00')
},
{
  id: 2,
  author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'JosÃ© Cunha',
    role: 'Pedreiro'
},
content: [
  {type: 'paragraph', content: 'Fala galeraa ð'},
  { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
  { type: 'link', content: 'jane.design/doctorcare'}, 
],
publishedAt: new Date('2022-05-03 20:00:00')
},
];

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
           return <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
           />
          })}
        </main>
      </div>

    </div>    

  )
}

