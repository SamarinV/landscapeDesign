import automaticWatering from '../assets/services-section/automaticWatering.webp'
import improvement from '../assets/services-section/improvement.webp'
import landscapeDesign from '../assets/services-section/landscapeDesign.webp'
import landscaping from '../assets/services-section/landscaping.webp'
import lawnLaying from '../assets/services-section/lawnLaying.webp'
import planting from '../assets/services-section/planting.webp'
import s from './servicesSection.module.scss'
const services = [
 { title: 'Ландшафтный проект', text: 'От планировки и подбора растений до чертежей, по которым сад становится реальностью.', image: landscapeDesign, tag: 'Сначала — идея' },
 { title: 'Озеленение участка', text: 'Деревья, цветники и природные композиции, которые раскрываются в каждом сезоне.', image: landscaping, tag: 'Живая архитектура' },
 { title: 'Благоустройство', text: 'Удобные дорожки, уютные места отдыха и детали, связывающие дом с садом.', image: improvement, tag: 'Место для жизни' },
 { title: 'Посадка растений', text: 'Подбираем растения с учётом почвы, освещения и будущего роста.', image: planting, tag: 'Внимание к деталям' },
 { title: 'Газон', text: 'Мягкий зелёный фон для сада — от подготовки основания до укладки.', image: lawnLaying, tag: 'Босиком по траве' },
 { title: 'Автоматический полив', text: 'Продуманная забота о растениях, чтобы у вас оставалось время наслаждаться садом.', image: automaticWatering, tag: 'Забота каждый день' },
]
const ServicesSection = () => <section className={s.services} id="services" aria-labelledby="services-title">
 <div className={s.heading}><div><p className={s.eyebrow}>01 / ЧЕМ МЫ МОЖЕМ ПОМОЧЬ</p><h2 id="services-title">От замысла<br />до живого сада</h2></div><p>Можно начать с консультации или доверить нам весь путь. Подберём решение под ваш участок и ритм жизни.</p></div>
 <div className={s.grid}>{services.map(({ title, text, image, tag }, index) => <a key={title} className={s.card} href="#contact"><div className={s.imageWrapper}><img src={image} alt={title} loading="lazy" width="600" height="450" /><span className={s.arrow} aria-hidden="true">↗</span></div><div className={s.meta}><span>{tag}</span><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></a>)}</div>
 </section>
export default ServicesSection
