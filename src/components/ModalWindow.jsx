import { useEffect, useState, useRef } from 'react';
import styles from './AllComponents.module.css';
import { descriptionTobaccoData, outWords, dataBase, descriptionAccessoriesData } from './../DataBase';
import { motion, AnimatePresence } from 'framer-motion';

const ModalWindow = ({ typeProduct, numberProduct, setModalActive }) => {

    const [modalPage, setModalPage] = useState(1);
    const [chousePhoto, setChousePhoto] = useState(0);
    const modalRef = useRef(null);
    const [firstOpen, setFirstOpen] = useState(true);
    const goUp = useState(true);

    useEffect(() => {
        setTimeout(() => { setFirstOpen(false) }, 3000)
    }, [modalPage])

    const changePage = (e, goUp, len) => {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
        setFirstOpen(true);
        if (goUp) {
            if (modalPage == len) {
                setModalPage(1);
            } else {
                setModalPage(modalPage + 1);
            }
        } else {
            if (modalPage == 1) {
                setModalPage(len);
            } else {
                setModalPage(modalPage - 1);
            }
        }
    }

    const accessoriesNames = {
        1: dataBase.bowls,
        2: dataBase.coals,
        3: dataBase.accessories,
    }
    const tobaccoNames = {
        1: dataBase.mustHave,
        2: dataBase.darkSide,
        3: dataBase.darkSmoke,
        4: dataBase.mustHave,
        5: dataBase.darkSide,
        6: dataBase.darkSmoke,
        7: dataBase.mustHave,
        8: dataBase.darkSide,
    }
    const oneTobbacoFlavoursData = tobaccoNames[numberProduct].map((oneFlavour) => {
        return (
            <div className={styles.one__tobacco}>
                <div className={styles.one__tobacco__title}>{oneFlavour.title}</div>
                <div className={styles.one__tobacco__discription}>&emsp;&emsp;{oneFlavour.flavour}</div>
            </div>)
    });

   

    const photoEditor = (avatersArray) => {
        return (
            <div className={styles.modal__body__photo__block}>
                    <img
                        className={styles.modal__body__photo__block__photo}
                        src={avatersArray[chousePhoto]}
                        alt={avatersArray[chousePhoto]}
                    />
            </div>
        )
    }

    const accessorieModal = (numberProduct) => {
        return (
            <AnimatePresence mode='wait'>
                <motion.div
                    className={styles.modal__arrow__right}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: `${firstOpen ? 3 : 0}`, duration: 0.5 }}
                    onClick={(e) => { changePage(e, goUp, accessoriesNames[numberProduct].length) }}
                />
                <motion.div
                    className={styles.modal__arrow__left}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: `${firstOpen ? 3 : 0}`, duration: 0.5 }}
                    onClick={(e) => { changePage(e, !goUp, accessoriesNames[numberProduct].length) }}
                />
                <motion.div
                    className={styles.modal__accessories}
                    key={accessoriesNames[numberProduct][modalPage - 1].title + `${modalPage}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    <div className={styles.modal__title}>
                        <div className={styles.modal__title__text}>
                        {numberProduct == 3 ? '' : descriptionAccessoriesData[numberProduct - 1].title[0]}
                            &nbsp;<b>{accessoriesNames[numberProduct][modalPage - 1].title[0]}</b>
                        </div>
                        <motion.div
                            className={styles.modal__title__close__modal}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ delay: `${firstOpen ? 3 : 0}`, duration: 0.5 }}
                            onClick={(e) => { closeModal(e) }}>
                            X
                        </motion.div>
                    </div>
                    <div className={styles.modal__body__accessories}>
                        <div className={styles.modal__body__accessories__content}>
                            {photoEditor(accessoriesNames[numberProduct][modalPage - 1].avatar)}
                            <div className={styles.modal__body__text}>
                                {accessoriesNames[numberProduct][modalPage - 1].description}
                            </div>
                        </div>
                    </div>
                    <div className={styles.modal__footer}>
                        <div className={styles.modal__footer__price}>
                            {outWords.price[0]}: {accessoriesNames[numberProduct][modalPage - 1].price}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence >
        )
    }

    const closeModal = (e) => {
        e.stopPropagation();
        if (modalRef.current) {
            modalRef.current.style.opacity = '0';
        }
        setTimeout(() => {
            setModalActive(false);
        }, 500);

    }

    useEffect(() => {
        setTimeout(() => {
            if (modalRef.current) {
                modalRef.current.style.opacity = '1';
            }
        }, 10)
    });

    return (
        <div className={styles.black__bg} onClick={(e) => { closeModal(e) }} ref={modalRef}>
            <div className={styles.modal} onClick={(e) => { e.stopPropagation() }}>
                {typeProduct == 2
                    ?
                    <div className={styles.modal__tobbaco}>
                        <div className={styles.modal__title}>
                            <div className={styles.modal__title__text}>{outWords.flavours[0]} &nbsp;<b>{descriptionTobaccoData[numberProduct - 1].title}</b></div>
                            <div className={styles.modal__title__close__modal} onClick={(e) => { closeModal(e) }}>X</div>
                        </div>
                        <div className={styles.modal__body}>
                            {oneTobbacoFlavoursData}
                        </div>
                        <div className={styles.modal__footer}>
                            <div className={styles.modal__footer__dimension}>
                                {outWords.dimension[0]}: {descriptionTobaccoData[numberProduct - 1].dimension}
                            </div>
                            <div style={{fontSize: 'min(1.1vw, 2.2vh)'}}>
                                {outWords.havess[0]}
                            </div>
                            <div className={styles.modal__footer__price}>
                                {outWords.price[0]}: {descriptionTobaccoData[numberProduct - 1].price}
                            </div>
                        </div>
                    </div>
                    : typeProduct == 3
                        ? accessorieModal(numberProduct)
                        : <></>}
            </div>
        </div >
    )
}

export default ModalWindow;