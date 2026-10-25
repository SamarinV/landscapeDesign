import Advantages from '../advantages/advantages'
import FormList from '../form-list/form-list'
import ServicesSection from '../services-section/servicesSection'
import s from './main.module.scss'

const Main = () => (
 <main className={s.wrapper} id="main">
  <ServicesSection />
  <Advantages />
  <FormList />
 </main>
)
export default Main