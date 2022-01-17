import styles from './index.module.scss'
import produto_1 from '@/assets/produtos1.jpg'
import produto_2 from '@/assets/produtos2.jpg'
import produto_3 from '@/assets/produtos3.jpg'

export function Produtos() {
  return (
    <section className={styles.produtos} id="produtos">
      <h1>Produtos</h1>
      <div className={styles.produtosContainer}>
        <div className={`${styles.produtosItem} ${styles.purple}`}>
          <h2>Purple</h2>
          <img src={produto_1} alt="Produtos 1" />
        </div>
        <div className={`${styles.produtosItem} ${styles.pink}`}>
          <h2>Pink</h2>
          <img src={produto_2} alt="Produtos 2" />
        </div>
        <div className={`${styles.produtosItem} ${styles.blue}`}>
          <h2>Blue</h2>
          <img src={produto_3} alt="Produtos 3" />
        </div>
      </div>
    </section>
  )
}
