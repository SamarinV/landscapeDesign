import { useState } from 'react'
import heroImage from '../assets/hero-image.webp'
import s from './header.module.scss'
const links = [['#about', 'Подход'], ['#services', 'Услуги'], ['#process', 'Как мы работаем']] as const
const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false)
 return <header className={s.header} id="top">
  <a className={s.skip} href="#main">Перейти к содержимому</a>
  <div className={s.navigation}>
   <a href="#top" className={s.logo} aria-label="Тихий сад — на главную"><span aria-hidden="true">✳</span> тихий сад<small>ЛАНДШАФТНЫЙ ДИЗАЙН</small></a>
   <button className={s.menuButton} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Закрыть −' : 'Меню +'}</button>
   <nav id="navigation" className={`${s.links} ${menuOpen ? s.open : ''}`} aria-label="Основная навигация">
    {links.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
    <a href="#contact" className={s.navCta} onClick={() => setMenuOpen(false)}>Обсудить участок ↗</a>
   </nav>
  </div>
  <div className={s.hero}>
   <img className={s.heroImage} src={heroImage} alt="Зелёный сад с пышными посадками и местом для отдыха" fetchPriority="high" />
   <div className={s.heroContent}>
    <p className={s.eyebrow}>ПРИРОДА БЛИЖЕ, ЧЕМ КАЖЕТСЯ</p>
    <h1>Сад, в котором<br />хочется <em>остаться.</em></h1>
    <p className={s.description}>Создаём живые пространства для неспешных утренних прогулок, тёплых встреч и вашей жизни за городом.</p>
    <a className="button" href="#contact">Начать историю вашего сада <span aria-hidden="true">↗</span></a>
   </div>
   <div className={s.heroBottom}><span>От первой идеи до последнего растения</span><a href="#about">Листайте, здесь всё начинается ↓</a></div>
  </div>
 </header>
}
export default Header
