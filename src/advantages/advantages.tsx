import plants1 from '../assets/adventages/plants1.webp'
import plants2 from '../assets/adventages/plants2.webp'
import plants3 from '../assets/adventages/plants3.webp'
import gardenDetails from '../assets/services-section/landscapeDesign.webp'
import planting from '../assets/services-section/planting.webp'
import garden from '../assets/services-section/improvement.webp'
import s from './advantages.module.scss'

const steps = [
 { title: 'Знакомимся с вами и участком', text: 'Обсуждаем пожелания, изучаем рельеф, почву и освещение. Определяем задачи и состав будущего проекта.', result: 'Понимаем, что важно именно вам' },
 { title: 'Находим образ вашего сада', text: 'Разрабатываем эскизные решения: зонирование, маршруты, посадки и места для отдыха. Вместе выбираем направление.', result: 'Идея обретает форму', image: gardenDetails, alt: 'Сочетание камня, зелени и разных фактур в саду' },
 { title: 'Продумываем каждую деталь', text: 'Готовим генеральный план, дендроплан и чертежи. Подбираем материалы и растения, связываем всё в единую систему.', result: 'От общей картины — к деталям' },
 { title: 'Помогаем саду обрести жизнь', text: 'Переходим к благоустройству и посадкам. Объясняем, как ухаживать за растениями и сохранять красоту сада.', result: 'От проекта — к первым посадкам', image: planting, alt: 'Подготовка почвы для посадки растений' },
]

const questions = [
 ['Можно ли преобразить уже существующий сад?', 'Да. Начнём с того, что уже есть: оценим посадки и планировку, обсудим, что хочется сохранить, и предложим изменения.'],
 ['Нужно ли сразу заказывать полный проект?', 'Нет, начать можно с консультации. Она поможет понять возможности участка и определить, какой объём проектирования вам нужен.'],
 ['От чего зависит стоимость?', 'От площади, особенностей участка и состава работ. После знакомства с задачей можно определить объём проекта и подготовить индивидуальный расчёт.'],
 ['Я пока не знаю, какой сад хочу. Это нормально?', 'Конечно. Расскажите, как вы проводите время за городом, что любите и сколько времени готовы уделять уходу. Это уже хорошая отправная точка.'],
]

const Advantages = () => (
 <>
  <section className={s.about} id="about" aria-labelledby="about-title">
   <div className={s.aboutText}>
    <p className={s.eyebrow}>МЕСТО ДИКТУЕТ РЕШЕНИЕ</p>
    <h2 id="about-title">У каждого участка<br />есть свой <em>характер.</em></h2>
    <p>Мы помогаем его раскрыть. Сохраняем ценные деревья, учитываем естественный рельеф и создаём пространство, в котором удобно именно вам.</p>
    <p>Сад должен жить вместе с хозяевами: меняться от сезона к сезону, радовать деталями и оставлять место для простых удовольствий.</p>
    <a href="#process">Узнать о нашем подходе <span aria-hidden="true">↗</span></a>
   </div>
   <div className={s.collage}>
    <img src={plants1} alt="Природные посадки и зелёные акценты сада" loading="lazy" width="600" height="700" />
    <img src={plants2} alt="Детали ландшафтной композиции" loading="lazy" width="300" height="350" />
    <span>В гармонии с природой.<br />В согласии с вами.</span>
   </div>
  </section>

  <section id="process" className={s.process} aria-labelledby="process-title">
   <div className={s.processIntro}>
    <p className={s.eyebrow}>КАК РОЖДАЕТСЯ САД</p>
    <h2 id="process-title">Хороший сад <br />начинается <br />с диалога</h2>
    <figure className={s.processPhoto}>
     <img src={plants3} alt="Дизайнер делает наброски во время знакомства с участком" loading="lazy" width="500" height="350" />
     <figcaption>Сначала слушаем. Затем проектируем.</figcaption>
    </figure>
   </div>
   <ol className={s.steps}>
    {steps.map(({ title, text, result, image, alt }) => (
     <li key={title}>
      <div className={s.stepCopy}><h3>{title}</h3><p>{text}</p></div>
      {image && <figure className={s.stepPhoto}><img src={image} alt={alt} loading="lazy" width="640" height="427" /><figcaption>{result}</figcaption></figure>}
     </li>
    ))}
   </ol>
  </section>

  <section className={s.faq} aria-labelledby="faq-title">
   <div className={s.faqIntro}>
    <p className={s.eyebrow}>ПЕРЕД ТЕМ КАК НАЧАТЬ</p>
    <h2 id="faq-title">Возможно, вы<br />хотели спросить</h2>
    <figure className={s.faqPhoto}>
     <img src={garden} alt="Дом, окружённый садом, с газоном и дорожкой" loading="lazy" width="640" height="426" />
     <figcaption>У каждого сада — своя отправная точка.</figcaption>
    </figure>
   </div>
   <div className={s.questions}>
    {questions.map(([question, answer]) => <details key={question}><summary>{question}<span className={s.faqToggle} aria-hidden="true" /></summary><p>{answer}</p></details>)}
    <a className={s.questionLink} href="#contact">Обсудим ваш вопрос <span aria-hidden="true">↗</span></a>
   </div>
  </section>
 </>
)
export default Advantages