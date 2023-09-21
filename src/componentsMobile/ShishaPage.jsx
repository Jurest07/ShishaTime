import styles from './../pages/MainPageMobile.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { descriptionShishaData, outWords, photos } from '../DataBase';
import { useParams, Link } from 'react-router-dom';

const pageShisha = (index) => {
    return (
        <AnimatePresence>
            <motion.div
                className={styles.type__tobacco__page__wrapper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className={styles.type__tobacco__page__title}>
                    {descriptionShishaData[index].title}
                </div>
                <div className={styles.type__tobacco__page__photo}>
                    <img src={photos[0][index].src} alt={photos[0][index].alt} className={styles.type__tobacco__page__img} />
                </div>
                <div className={styles.type__tobacco__page__description}>
                    &emsp;{descriptionShishaData[index].description}
                </div>
                <div className={styles.type__tobacco__page__info}>
                    <div className={styles.type__tobacco__page__price}>{outWords.price[0]}: {descriptionShishaData[index].price}</div>
                </div>
                <div className={styles.page__back}><Link to='/typeProduct/1'>Назад</Link></div>
            </motion.div>
        </AnimatePresence>
    )
}

const ShishaPage = () => {
    const typeShisha = useParams();
    const index = parseInt(typeShisha.id, 10) - 1;
    return (
        <div className={styles.mobile__page__wrapper}>
            {pageShisha(index)}
        </div>
    )
}

export default ShishaPage;