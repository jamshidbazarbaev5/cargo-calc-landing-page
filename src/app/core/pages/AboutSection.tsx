import { Package, Target, Monitor } from 'lucide-react';
import styles from '../styles/about/about-section.module.css'

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>О нас</h2>

                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={`${styles.iconWrapper} ${styles.first}`}>
                            <Package className={styles.icon} />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.description}>
                                Мы — команда IT-специалистов с опытом в разработке бизнес-решений для
                                логистики и складской отрасли.
                            </p>
                        </div>
                    </div>

                    <div className={styles.featureItem}>
                        <div className={`${styles.iconWrapper} ${styles.second}`}>
                            <Target className={styles.icon} />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.description}>
                                Наша цель — упростить и ускорить работу таможенных складов с помощью
                                современных технологий. Мы понимаем реальные задачи бизнеса и предлагаем
                                удобные инструменты, которые экономят время, снижают ошибки и повышают
                                эффективность.
                            </p>
                        </div>
                    </div>

                    <div className={styles.featureItem}>
                        <div className={`${styles.iconWrapper} ${styles.third}`}>
                            <Monitor className={styles.icon} />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.description}>
                                Наше приложение уже внедряется на действующих складах и успешно помогает
                                автоматизировать повседневные процессы — от расчета тарифов до учёта заявок.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
