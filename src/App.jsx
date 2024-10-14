import { useEffect, useState } from 'react'
import { phrases } from './data/phrases'
import { colors } from './data/colors'
import './css/styles.css'

function App() {

  const [index, setIndex] = useState(Math.floor(Math.random()*phrases.length));
  const [indexColor, setIndexColor] = useState(
    Math.floor(Math.random() * colors.length)
  )

  const [color, setColor] = useState(colors[indexColor].hex)

  const [phrase, setPhrase] = useState(phrases[index].quote);
  const [author, setAuthor] = useState(phrases[index].author);

  useEffect(()=>{
    setPhrase(phrases[index].quote);
    setAuthor(phrases[index].author);
    setColor(colors[indexColor].hex);
    document.body.style.backgroundColor = colors[indexColor].hex;
  }, [index])

  return (
    <>
    <article
      className='card'
      style={{color:color, backgroundColor: '#fff', padding: '10px', borderRadius:'15px', textAlign:'center'}}
      onClick={() => {
        setIndex(Math.floor(Math.random() * phrases.length));
  
        setIndexColor(Math.floor(Math.random() * colors.length))
      }}
    >
      <h2>Autor: {author}</h2>
      <p>{phrase}</p>
    </article>
    </>
  )
}

export default App
