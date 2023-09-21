import React, { useState } from "react";
import styles from './../pages/MainPageMobile.module.css';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const StartPage = () => {

    const [typeProduct, setTypeProduct] = useState(0);
    const [numberProduct, setNumberProduct] = useState(1);
    const [modalActive, setModalActive] = useState(false);
    return (
        <AnimatePresence mode="wait">
            <motion.div
                className={styles.mobile__page__wrapper}
                initial = {{opacity: 0}}
                animate = {{opacity : 1}}
                exit = {{ opacity: 0}}
                transition={{duration: 1}}>
                <div className={styles.main__page__mobile__company__logo}>
                    <img src="/img/logo_shisha_time.png" className={styles.main__page__mobile__company__logo__photo} />
                </div>
                <div className={styles.main__page__mobile__main__content}>
                    <div className={styles.start__page__point}>
                        <Link to={'/typeProduct/1'}>
                            Кальяны
                        </Link>
                    </div>
                    <div className={styles.start__page__point}>
                        <Link to={'/typeProduct/2'}>
                            Табак
                        </Link>
                    </div>
                    <div className={styles.start__page__point}>
                        <Link to={'/typeProduct/3'}>
                            Аксесуары
                        </Link>
                    </div>
                    <div className={styles.start__page__point}>
                        <Link to={'/typeProduct/4'}>
                            Контакты
                        </Link>
                    </div>
                </div>
                <div className={styles.main__page__mobile__footer}>
                    По вопросам наличия узнавайте по телефону <br /> +995-599-55-52-22 <br /> или через социальные сети
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default StartPage;