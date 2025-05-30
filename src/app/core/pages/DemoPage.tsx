import Image from "next/image"
import styles from '../styles/demo/demo.module.css'

export default function DemoPage() {
    return (
        <main className={styles.main}>
            <section className={styles.demoSection}>
                <div className={styles.container}>
                    <div className={styles.contentSide}>
                        <h2 className={styles.smallHeading}>Опробовать демо</h2>
                        <h1 className={styles.mainHeading}>
                            Попробуйте сами — <br />
                            это удобно!
                        </h1>
                        <p className={styles.description}>
                            Никаких рисков: просто оставьте заявку и получите доступ к демо-версии.
                        </p>
                        <p className={styles.description}>Оцените, как легко автоматизировать работу склада.</p>
                        <div className={styles.imagesContainer}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src='/demo-1.jpg'
                                    alt="Dashboard screenshot 1"
                                    width={400}
                                    height={240}
                                    className={styles.demoImage}
                                />
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/demo-1.jpg"
                                    alt="Dashboard screenshot 2"
                                    width={400}
                                    height={240}
                                    className={styles.demoImage}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.formSide}>
                        <form className={styles.demoForm}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="firstName" className={styles.formLabel}>
                                        Имя
                                    </label>
                                    <input type="text" id="firstName" placeholder="Введите имя" className={styles.formInput} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="lastName" className={styles.formLabel}>
                                        Фамилия
                                    </label>
                                    <input type="text" id="lastName" placeholder="Введите фамилию" className={styles.formInput} />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="company" className={styles.formLabel}>
                                    Название компании
                                </label>
                                <input type="text" id="company" placeholder="Введите название компании" className={styles.formInput} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>
                                    Email
                                </label>
                                <input type="email" id="email" placeholder="Введите почту" className={styles.formInput} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.formLabel}>
                                    Номер телефона
                                </label>
                                <input type="tel" id="phone" placeholder="+998 - xxx - xx - xx" className={styles.formInput} />
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Отправить заявку
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
