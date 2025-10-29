import s from './header.module.scss'

const Header = () => {
	return (
		<header className={s.header}>
			<h1 className={s.title}>Анкета-заявка на услуги специалиста по ландшафтному дизайну</h1>
			<div className={s.bottomBlock}>
				<h3 className={s.subtitle}> СДК Групп / Розовый сад</h3>
				<h4 className={s.description}>
					Уважаемый заказчик, данная анкета крайне необходима специалисту для качественного выполнения работы. На её
					заполнение у Вас уйдет 20 минут.
				</h4>
			</div>
		</header>
	)
}

export default Header
