import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
state={
 posts:[
  {
    id:1,
    titulo:'Título 1',
    conteudo: 'Conteúdo 1'
  },
  {
    id:2,
    titulo:'Título 2',
    conteudo: 'Conteúdo 2'
  },
  {
    id:3,
    titulo:'Título 3',
    conteudo: 'Conteúdo 3'
  }
 ]
}
render(){
  const{posts} = this.state; //Atribuição via desestruturação
  return (
    <div>
       {posts.map(post => (
        <div key={post.id}> 
         <h1> {post.titulo} </h1>
         <p>{post.conteudo}</p>
        </div>
        ))}
    </div>
   
  )

}
}

 

export default App;
