import styles from './index.module.scss'
import sobre_1 from '@/assets/sobre1.jpg'
import sobre_2 from '@/assets/sobre2.jpg'

export function Sobre() {
  return (
    <section className={styles.sobre} id="sobre">
      <div className={styles.sobreInfo}>
        <h1>Sobre</h1>
        <p>
          O que temos que ter sempre em mente é que a determinação clara de
          objetivos afeta positivamente a correta previsão das condições
          inegavelmente apropriadas objetivos.
        </p>
      </div>
      <div className={styles.sobreImg}>
        <img src={sobre_1} alt="Sobre 1" />
      </div>
      <div className={styles.sobreImg}>
        <img src={sobre_2} alt="Sobre 2" />
      </div>
    </section>
  )
}
