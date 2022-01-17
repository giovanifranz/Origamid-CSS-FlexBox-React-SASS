import styles from './index.module.scss'

interface ItemProps {
  title: 'Prata' | 'Ouro' | 'Cobre'
  price: number
}

export default function Item({ title, price }: ItemProps) {
  return (
    <div className={styles.precoItem}>
      <h2>{title}</h2>
      <span>
        <sup>R$</sup>
        {price}
      </span>
      <ul>
        <li>Planos Ilimitados</li>
        <li>Acesso Restrito</li>
        <li>Conteúdo Secreto</li>
        <li>Suporte 24h</li>
        <li>Compra Exclusiva</li>
      </ul>
      <a href="#">Comprar</a>
    </div>
  )
}
