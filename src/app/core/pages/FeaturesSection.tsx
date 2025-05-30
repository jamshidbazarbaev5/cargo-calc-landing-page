import React from 'react';
import { User, Plus, Database, FileText, FileArchive, Download } from 'lucide-react';
import styles from '../styles/features/features.module.css'

const FeatureSection = () => {
    const features = [
        {
            icon: <User className={styles.icon} />,
            title: "Управление пользователями",
            description: "— Гибкая система доступа для сотрудников с разграничением прав."
        },
        {
            icon: <Plus className={styles.icon} />,
            title: "Добавление услуг, товаров и тар...",
            description: "— Возможность формировать собственные тарифные планы, настраивать цены и учитывать специфику разных типов грузов."
        },
        {
            icon: <Database className={styles.icon} />,
            title: "Работа с организациями",
            description: "— Добавление и управление клиентами, партнерами и поставщиками в удобном интерфейсе."
        },
        {
            icon: <FileText className={styles.icon} />,
            title: "Дашборд и аналитика",
            description: "— Визуализация ключевых показателей: количество заявок, доходность, загруженность склада и другие важные метрики."
        },
        {
            icon: <FileArchive className={styles.icon} />,
            title: "Работа с заявками и архив заявок",
            description: "— Удобный учет всех обработанных и текущих заявок, поиск и фильтрация по ключевым параметрам."
        },
        {
            icon: <Download className={styles.icon} />,
            title: "Экспорт данных",
            description: "— Выгрузка отчетов в Excel для удобной работы с финансами и аналитикой.\n\n— Формирование актов с возможностью экспорта в Excel, что облегчает..."
        }
    ];

    return (
        <section className={styles.featureSection} >
            <div className={styles.container}>
                <h2 className={styles.title}>Что умеет наше приложение?</h2>
                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {feature.icon}
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <button className={styles.expandButton}>
                                    <Plus className={styles.plusIcon} />
                                </button>
                            </div>
                            <div className={styles.featureDescription}>
                                {feature.description.split('\n').map((line, lineIndex) => (
                                    <p key={lineIndex} className={styles.descriptionLine}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;