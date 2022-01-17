import styles from './index.module.css'

export function Header() {
  return (
    <>
      <div className={styles.superinfoBg}>
        <div className={styles.superinfo}>
          <p>Seg / Sex - 08:00 às 18:00</p>
          <a href="tel:+552199999999">+55 21 9999-9999</a>
          <p>Av. Ali Perto, 330, Botafogo - RJ</p>
        </div>
      </div>
      <header className={styles.menuBg}>
        <div className={styles.menu}>
          <div className={styles.menuLogo}>
            <a href="#">FlexBlog</a>
          </div>
          <nav className={styles.menuNav}>
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#produtos">Produtos</a>
              </li>
              <li>
                <a href="#preco">Preço</a>
              </li>
              <li>
                <a href="#qualidade">Qualidade</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
