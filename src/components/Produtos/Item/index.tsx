import styles from './index.module.scss'
import produto_1 from '@/assets/produtos1.jpg'
import produto_2 from '@/assets/produtos2.jpg'
import produto_3 from '@/assets/produtos3.jpg'

interface ItemProps {
  color: 'purple' | 'pink' | 'blue'
  produto: 'Produto 1' | 'Produto 2' | 'Produto 3'
}

const colorsMap = {
  purple: styles.purple,
  pink: styles.pink,
  blue: styles.blue
}

const produtoMap = {
  'Produto 1': produto_1,
  'Produto 2': produto_2,
  'Produto 3': produto_3
}

export default function Item({ color, produto }: ItemProps) {
  return (
    <div className={`${styles.produtosItem} ${colorsMap[color]}`}>
      <h2>purple</h2>
      <img src={produtoMap[produto]} alt={produto} />
    </div>
  )
}
