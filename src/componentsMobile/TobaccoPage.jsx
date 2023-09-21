import { dataBase, descriptionTobaccoData, photos, outWords } from "../DataBase";
import { useParams, Link } from "react-router-dom";
import styles from './../pages/MainPageMobile.module.css';
import { motion, AnimatePresence } from "framer-motion";

const markTobacco = {
    0: dataBase.mustHave,
    1: dataBase.darkSide,
    2: dataBase.darkSmoke,
}


const flavoursData = (index) => {
    return (
        <>{markTobacco[index].map((flavour) => {
            return (
                <div className={styles.type__tobacco__page__one__row}>
                    <div className={styles.type__tobacco__page__one__name}>
                        <b>{flavour.title}</b>
                    </div>
                    <div className={styles.type__tobacco__page__one__flavour}>
                        {flavour.flavour}
                    </div>
                </div>
            )
        })}
        </>)
}

const pageTobacco = (index) => {
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
                    {descriptionTobaccoData[index].title}
                </div>
                <div className={styles.type__tobacco__page__photo}>
                    <img src={photos[1][index].src} alt={photos[1][index].alt} className={styles.type__tobacco__page__img} />
                </div>
                <div className={styles.type__tobacco__page__description}>
                    &emsp;{descriptionTobaccoData[index].description}
                </div>
                <div className={styles.type__tobacco__page__info}>
                    <div className={styles.type__tobacco__page__dimension}>{outWords.dimension[0]}: {descriptionTobaccoData[index].dimension}</div>
                    <div className={styles.type__tobacco__page__price}>{outWords.price[0]}: {descriptionTobaccoData[index].price}</div>
                </div>
                <div className={styles.type__tobacco__page__flavours}>
                    <div className={styles.type__tobacco__page__flavours__title}>Список вкусов</div>
                    {flavoursData(index)}
                </div>
                <div className={styles.page__back}><Link to='/typeProduct/2'>Назад</Link></div>
            </motion.div>
        </AnimatePresence>
    )
}

const TobaccoPage = () => {
    const typeTobacco = useParams();
    const index = parseInt(typeTobacco.id, 10) - 1;
    return (
        <div className={styles.mobile__page__wrapper}>
            {pageTobacco(index)}
        </div>
    )
}

export default TobaccoPage;