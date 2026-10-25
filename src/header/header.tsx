import { useState } from 'react'
import heroImage from '../assets/hero-image.webp'
import s from './header.module.scss'

const links = [['#about', 'Подход'], ['#services', 'Услуги'], ['#process', 'Процесс']] as const

const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false)
 return (
  <header className={s.header} id="top">
   <a className={s.skip} href="#main">Перейти к содержимому</a>
   <div className={s.navigation}>
    <a href="#top" className={s.logo} aria-label="Тихий сад — на главную">тихий сад<span>Ландшафтная студия</span></a>
    <button className={s.menuButton} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Закрыть −' : 'Меню +'}</button>
    <nav id="navigation" className={`${s.links} ${menuOpen ? s.open : ''}`} aria-label="Основная навигация">
     {links.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
     <a href="#contact" className={s.navCta} onClick={() => setMenuOpen(false)}>Обсудить проект <span aria-hidden="true">↗</span></a>
    </nav>
   </div>
   <div className={s.hero}>
    <p className={s.eyebrow}>ЧАСТНЫЕ САДЫ / ЛАНДШАФТНАЯ АРХИТЕКТУРА</p>
    <h1>Природа.<br /><span>С вашей точки</span><br />зрения<span className={s.dot}>.</span></h1>
    <div className={s.heroVisual}>
     <img className={s.heroImage} src={heroImage} alt="Сад с дорожкой, газоном и взрослыми деревьями" fetchPriority="high" />
     <span className={s.imageCaption}>Живая архитектура. Естественная среда.</span>
    </div>
    <div className={s.heroAside}>
     <svg className={s.plan} viewBox="0 0 240 190" fill="none" aria-hidden="true">
      <path d="M12 14H228V176H12zM32 34H208V156H32zM102 34V104H208M32 124H82V156M82 124V104H102M102 104V176" />
      <path d="M132 48H192V88H132zM32 114C70 114 63 72 102 72M112 176V116H228" />
      <circle cx="55" cy="54" r="14" /><circle cx="76" cy="85" r="11" /><circle cx="158" cy="133" r="15" /><circle cx="191" cy="137" r="10" />
      <path d="M55 34V74M35 54H75M158 112V154M137 133H179M4 184H236M4 180V188M236 180V188" />
     </svg>
     <p>Соединяем архитектуру дома, характер места и ваш образ жизни.</p>
     <a className="button" href="#contact">Обсудить ваш участок <span aria-hidden="true">↗</span></a>
    </div>
   </div>
   <div className={s.heroBottom}><span>Продумано до корней.</span><a href="#services">Исследовать возможности <span aria-hidden="true">↓</span></a></div>
  </header>
 )
}
export default Header