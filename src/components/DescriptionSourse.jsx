import react from 'react';
import styles from './AllComponents.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { outWords, shopConstant, descriptionAccessoriesData } from './../DataBase';

const DescriptionSourse = ({ numberProduct, setNumberProduct, setModalActive }) => {

    const GoUp = (event) => {
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        if (numberProduct == 1){
            setNumberProduct(shopConstant.typesAccessories);
        }else{
            setNumberProduct(numberProduct - 1);
        }
    }
    const GoDown = (event) => {
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        if (numberProduct == shopConstant.typesAccessories){
            setNumberProduct(1);
        }else{
            setNumberProduct(numberProduct + 1);
        }
    }

    const openModal = (event) => {
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        setModalActive(true);
    }

    const accessoriesData = (typeAccessorie) => {
        return (
            <>
                <AnimatePresence mode="wait">
                    {<motion.div
                        key = {descriptionAccessoriesData[typeAccessorie].title[0] + `${typeAccessorie}`}
                        className={styles.accessorie__content}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <div className={styles.accessorie__title}>{descriptionAccessoriesData[typeAccessorie].title[0]}</div>
                        <div className={styles.accessorie__description}>&emsp;{descriptionAccessoriesData[typeAccessorie].description}</div>
                        <div className={styles.accessorie__button} onClick={(event) => {openModal(event)}}>{outWords.views[0]}</div>
                    </motion.div>}
                </AnimatePresence>
            </>)
    }

    return (
        <div className={styles.description__accessories__wrapper}>
            <div className={styles.description__block__top__arrow} onClick={(event) => { GoUp(event) }} />
            <div className={styles.accessories__content__wrapper}>
                {accessoriesData(numberProduct - 1)}
            </div>
            <div className={styles.description__block__bottom__arrow} onClick={(event) => { GoDown(event) }} />
        </div>
    )
}

export default DescriptionSourse;