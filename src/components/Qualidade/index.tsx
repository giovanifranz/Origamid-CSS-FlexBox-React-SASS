import styles from './index.module.scss'
import Item from './Item'

export function Qualidade() {
  return (
    <section className={styles.qualidade} id="qualidade">
      <Item
        title="Inteligente"
        description="O que temos que ter sempre em mente é que a determinação clara de
          objetivos afeta positivamente a correta previsão"
      />
      <Item
        title="Compacto"
        description="O que temos que ter sempre em mente é que a determinação clara de
          objetivos afeta positivamente a correta previsão das condições
          inegavelmente"
      />
      <Item
        title="Econômico"
        description="O que temos que ter sempre em mente é que a determinação clara de
          objetivos afeta positivamente a correta previsão"
      />
      <Item
        title="Transparente"
        description="O que temos que ter sempre em mente é que a determinação clara de
        objetivos afeta positivamente a correta previsão"
      />
      <Item
        title="Opaco"
        description="O que temos que ter sempre em mente é que a determinação clara de
        objetivos afeta positivamente a correta previsão das condições
        inegavelmente"
      />
      <Item
        title="Sustentável"
        description="O que temos que ter sempre em mente é que a determinação clara de
        objetivos afeta positivamente a correta previsão"
      />
    </section>
  )
}
