import Advantages from '../advantages/advantages'
import FormList from '../form-list/form-list'
import ServicesSection from '../services-section/servicesSection'
import s from './main.module.scss'
const Main = () => <main className={s.wrapper} id="main"><AdvantagesIntro /><ServicesSection /><Advantages /><FormList /></main>
const AdvantagesIntro = () => <div className={s.note}><span>ПРОЕКТИРУЕМ С УВАЖЕНИЕМ К ПРИРОДЕ</span><span>Сады для жизни, а не только для фотографий <span aria-hidden="true">✳</span></span></div>
export default Main
