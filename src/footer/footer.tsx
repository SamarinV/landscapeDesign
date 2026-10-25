import s from './footer.module.scss'
const Footer = () => <footer className={s.footer}><div><a href="#top" className={s.logo}>тихий сад</a><p>Пространство, в котором хорошо.</p></div><div className={s.bottom}><span>© {new Date().getFullYear()} Тихий сад · Ландшафтный дизайн</span><span>Демонстрационный проект</span><a href="#top">Наверх ↑</a></div></footer>
export default Footer