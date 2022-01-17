import styles from './index.module.scss'
import Item from './Item'

export function Preco() {
  return (
    <section className={styles.preco} id="preco">
      <Item title="Cobre" price={19} />
      <Item title="Prata" price={39} />
      <Item title="Ouro" price={79} />
    </section>
  )
}
