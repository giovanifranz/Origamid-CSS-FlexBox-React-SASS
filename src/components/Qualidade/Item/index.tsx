import styles from './index.module.scss'

interface ItemProps {
  title: string
  description: string
}

export default function Item({ title, description }: ItemProps) {
  return (
    <div className={styles.qualidadeItem}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
