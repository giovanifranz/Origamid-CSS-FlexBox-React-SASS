import styles from './index.module.scss'
import Item from './Item'

export function Produtos() {
  return (
    <section className={styles.produtos} id="produtos">
      <h1>Produtos</h1>
      <div className={styles.produtosContainer}>
        <Item color="purple" produto="Produto 1" />
        <Item color="pink" produto="Produto 2" />
        <Item color="blue" produto="Produto 3" />
      </div>
    </section>
  )
}
