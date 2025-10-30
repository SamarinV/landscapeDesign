import Advantages from '../advantages/advantages'
import FormList from '../form-list/form-list'
import ServicesSection from '../services-section/servicesSection'
import s from './main.module.scss'

const Main = () => {
	return (
		<div className={s.wrapper}>
			<ServicesSection />
			<Advantages />
			<FormList />
		</div>
	)
}

export default Main
