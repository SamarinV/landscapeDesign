import { Box, Grid } from '@mui/material'
import plants1 from '../assets/adventages/plants1.webp'
import plants2 from '../assets/adventages/plants2.webp'
import plants3 from '../assets/adventages/plants3.webp'
import s from './advantages.module.scss'

const Advantages = () => {
	return (
		<Box component="section" mt={6} className={s.footer}>
			<Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid size={{ xs: 12, sm: 5 }} sx={{ order: { xs: 1, sm: 1 } }}>
					<Box sx={{ height: '100%' }}>
						<img className={s.image} src={plants1} alt="Ландшафтный дизайн" />
					</Box>
				</Grid>
				<Grid size={{ xs: 12, sm: 7 }} sx={{ order: { xs: 2, sm: 2 } }}>
					<Box sx={{ textAlign: 'left', height: '100%', px: { xs: 2, sm: 0 } }}>
						<h4>Выездная консультация — первый шаг к преображению</h4>
						<h4>Приезжаем к вам, чтобы:</h4>
						<ul className={s.list}>
							<li>внимательно осмотреть участок и «прочувствовать» его характер</li>
							<li>снять все необходимые замеры — без догадок, только точные данные</li>
							<li>обсудить ваши идеи и дать экспертные рекомендации по зонированию и подбору растений</li>
						</ul>
					</Box>
				</Grid>

				<Grid size={{ xs: 12, sm: 7 }} sx={{ order: { xs: 4, sm: 3 } }}>
					<Box sx={{ textAlign: 'left', height: '100%', px: { xs: 2, sm: 0 } }}>
						<h4>Эскизный проект — пространство возможностей</h4>
						<h4>
							Создаём два уникальных варианта благоустройства и озеленения, где каждая деталь отражает ваши пожелания:
						</h4>
						<ul className={s.list}>
							<li>продуманное зонирование — чтобы каждый уголок работал на комфорт</li>
							<li>подбор растений — с учётом климата, почвы и вашего вкуса</li>
						</ul>
					</Box>
				</Grid>
				<Grid size={{ xs: 12, sm: 5 }} sx={{ order: { xs: 3, sm: 4 } }}>
					<Box sx={{ height: '100%' }}>
						<img className={s.image} src={plants2} alt="Ландшафтный дизайн" />
					</Box>
				</Grid>

				<Grid size={{ xs: 12, sm: 5 }} sx={{ order: { xs: 5, sm: 5 } }}>
					<Box sx={{ height: '100%' }}>
						<img className={s.image} src={plants3} alt="Ландшафтный дизайн" />
					</Box>
				</Grid>
				<Grid size={{ xs: 12, sm: 7 }} sx={{ order: { xs: 6, sm: 6 } }}>
					<Box sx={{ textAlign: 'left', height: '100%', px: { xs: 2, sm: 0 } }}>
						<h4>Полный дизайн-проект — ваша подробная дорожная карта</h4>
						<h4>Когда концепция выбрана, разрабатываем комплект документов для воплощения мечты:</h4>
						<ul className={s.list}>
							<li>Генеральный план — основа всех будущих работ, где каждый элемент на своём месте</li>
							<li>
								Дендроплан и ведомость растений — детальный список «живых» акцентов сада с учётом стиля и ваших
								предпочтений
							</li>
							<li>Посадочный чертёж — чёткая привязка мест для каждого растения</li>
							<li>План освещения — магия вечернего сада</li>
							<li>Баланс площадей — расчёт газонов, дорожек, цветников и других зон</li>
							<li>Технические задания для МАФ — проектируем всё, что сделает сад уникальным</li>
							<li>3D-визуализации — увидите сад до его появления</li>
						</ul>
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Advantages
