import { useState } from 'react'
import automaticWatering from '../assets/services-section/automaticWatering.webp'
import improvement from '../assets/services-section/improvement.webp'
import landscapeDesign from '../assets/services-section/landscapeDesign.webp'
import landscaping from '../assets/services-section/landscaping.webp'
import lawnLaying from '../assets/services-section/lawnLaying.webp'
import planting from '../assets/services-section/planting.webp'
import s from './servicesSection.module.scss'

const services = [
 { title: 'Ландшафтный проект', text: 'Начинаем с пространства: как вы будете двигаться, где отдыхать и что видеть из окна. Затем собираем идею в планы, чертежи и понятные решения.', image: landscapeDesign, tag: 'Планировка / Дендроплан / Визуализация' },
 { title: 'Озеленение участка', text: 'Создаём объём и настроение с помощью растений. Учитываем смену сезонов, освещение и то, каким станет сад через несколько лет.', image: landscaping, tag: 'Композиция / Сезонность / Подбор растений' },
 { title: 'Благоустройство', text: 'Дорожки связывают пространство, а площадки дают место повседневной жизни. Подбираем материалы, которые сочетаются с архитектурой дома.', image: improvement, tag: 'Дорожки / Зоны отдыха / Материалы' },
 { title: 'Посадка растений', text: 'Находим правильное место для каждого растения с учётом почвы, света и будущего роста. Объясняем, как помочь посадкам прижиться.', image: planting, tag: 'Деревья / Кустарники / Цветники' },
 { title: 'Газон', text: 'Открытое пространство для игр, отдыха и прогулок босиком. От подготовки основания до укладки — с учётом условий вашего участка.', image: lawnLaying, tag: 'Подготовка / Укладка / Уход' },
 { title: 'Автоматический полив', text: 'Разным растениям нужно разное количество воды. Продумываем зоны полива, чтобы сад получал необходимую заботу.', image: automaticWatering, tag: 'Зонирование / Система полива' },
]

const ServicesSection = () => {
 const [activeIndex, setActiveIndex] = useState(0)
 const active = services[activeIndex]
 return (
  <section className={s.services} id="services" aria-labelledby="services-title">
   <div className={s.heading}>
    <p className={s.eyebrow}>ЧТО МЫ ДЕЛАЕМ</p>
    <h2 id="services-title">Форма. Функция.<br /><span>И немного природы.</span></h2>
    <p className={s.description}>Один участок — много возможностей.<br />От отдельной задачи до целого сада.</p>
   </div>
   <div className={s.layout}>
    <figure className={s.visual}>
     <img key={active.image} src={active.image} alt={active.title} loading="lazy" width="600" height="700" />
     <figcaption>{active.tag}</figcaption>
    </figure>
    <div className={s.list}>
     {services.map((service, index) => {
      const expanded = index === activeIndex
      return (
       <div className={`${s.item} ${expanded ? s.active : ''}`} key={service.title}>
        <h3><button type="button" id={`service-button-${index}`} aria-expanded={expanded} aria-controls={`service-panel-${index}`} onClick={() => setActiveIndex(index)}>{service.title}<span aria-hidden="true">{expanded ? '−' : '+'}</span></button></h3>
        <div id={`service-panel-${index}`} role="region" aria-labelledby={`service-button-${index}`} hidden={!expanded} className={s.panel}>
         <p>{service.text}</p>
         <img src={service.image} alt={service.title} loading="lazy" width="600" height="450" className={s.mobileImage} />
         <a href="#contact">Обсудить задачу <span aria-hidden="true">↗</span></a>
        </div>
       </div>
      )
     })}
    </div>
   </div>
  </section>
 )
}
export default ServicesSection