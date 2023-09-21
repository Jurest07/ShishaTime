import { Link, useParams } from "react-router-dom";
import styles from './../pages/MainPageMobile.module.css';
import { motion, AnimatePresence } from "framer-motion";

const TypeProductPage = () => {
    const testValue = useParams()
    return (
        <>{testValue.id == '1'
            ?
            <div className={styles.mobile__page__wrapper}>
                <AnimatePresence>
                    <motion.div
                        className={styles.main__page__mobile__wrapper}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}>
                        <div className={styles.page__title}>Кальяны</div>
                        <div className={styles.page__main__content} >
                            <div className={styles.start__page__point}><Link to='/shisha/1'>BigEyfel</Link></div>
                            <div className={styles.start__page__point}><Link to='/shisha/2'>MadPear</Link></div>
                            <div className={styles.start__page__point}><Link to='/shisha/3'>Target</Link></div>
                            <div className={styles.start__page__point}><Link to='/shisha/4'>Runner</Link></div>
                        </div>
                        <div className={styles.page__back}><Link to='/'>Назад</Link></div>
                    </motion.div>
                </AnimatePresence>
            </div>
            : testValue.id == '2'
                ?
                <div className={styles.mobile__page__wrapper}>
                    <AnimatePresence>
                        <motion.div
                            className={styles.main__page__mobile__wrapper}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}>
                            <div className={styles.page__title}>Табак</div>
                            <div className={styles.page__main__content} >
                                <div className={styles.start__page__point}><Link to='/tobacco/1'>Musthave</Link></div>
                                <div className={styles.start__page__point}><Link to='/tobacco/2'>Darkside</Link></div>
                                <div className={styles.start__page__point}><Link to='/tobacco/3'>Darksmoke</Link></div>
                                <div className={styles.start__page__point}><Link to='/tobacco/4'>Brusko</Link></div>
                            </div>
                            <div className={styles.page__back}><Link to='/'>Назад</Link></div>
                        </motion.div>
                    </AnimatePresence>
                </div >
                :
                <div className={styles.mobile__page__wrapper}>
                    <AnimatePresence>
                        <motion.div
                            className={styles.main__page__mobile__wrapper}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}>
                            <div className={styles.page__title}>Аксессуары</div>
                            <div className={styles.page__main__content} >
                                <div className={styles.start__page__point}><Link to='/accessories/1'>Чаши</Link></div>
                                <div className={styles.start__page__point}><Link to='/accessories/2'>Калауды</Link></div>
                                <div className={styles.start__page__point}><Link to='/accessories/3'>Уголь</Link></div>
                                <div className={styles.start__page__point}><Link to='/accessories/4'>Мунштуки</Link></div>
                            </div>
                            <div className={styles.page__back}><Link to='/'>Назад</Link></div>
                        </motion.div>
                    </AnimatePresence>
                </div>}
        </>
    )
}

export default TypeProductPage;