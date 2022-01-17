import styles from '@/styles/App.module.css'
import { Sobre, Produtos, Preco, Qualidade, Newsletter } from '@/components'

function App() {
  return (
    <>
      <h1 className={styles.introducao}>
        Novos valores e <br />
        Propriedades de CSS
      </h1>
      <Sobre />
      <Produtos />
      <Preco />
      <Qualidade />
      <Newsletter />
    </>
  )
}

export default App
