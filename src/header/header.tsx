import heroImage from '../assets/hero-image.webp'
import s from './header.module.scss'

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.heroImageWrapper}>
				<img className={s.heroImage} src={heroImage} alt="Ландшафтный дизайн" />
				<h1 className={s.title}>Best Landscape Design</h1>
			</div>
		</header>
	)
}

export default Header
