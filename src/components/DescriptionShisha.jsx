import react from 'react';
import styles from './AllComponents.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { descriptionShishaData, outWords, shopConstant } from './../DataBase';

const DescriptionShisha = ({ numberProduct, setNumberProduct }) => {

    const GoUp = (event) => {
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        if (numberProduct == 1){
            setNumberProduct(shopConstant.typesShishas);
        }else{
            setNumberProduct(numberProduct - 1);
        }
    }
    const GoDown = (event) => {
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        if (numberProduct == shopConstant.typesShishas){
            setNumberProduct(1);
        }else{
            setNumberProduct(numberProduct + 1);
        }
    }

    const shishaData = (typeShisha) => {
        return (
            <>
                <AnimatePresence mode="wait">
                    {<motion.div
                        key = {descriptionShishaData[typeShisha].title + `${typeShisha}`}
                        className={styles.tobacco__content}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <div className={styles.shisha__title}>{descriptionShishaData[typeShisha].title}</div>
                        <div className={styles.shisha__description}>&emsp;{descriptionShishaData[typeShisha].description}</div>
                        <div className={styles.shisha__price}>{outWords.price[0]}: {descriptionShishaData[typeShisha].price}</div>
                    </motion.div>}
                </AnimatePresence>
            </>)
    }

    return (
        <div className={styles.description__shisha__wrapper}>
            <div className={styles.description__block__top__arrow} onClick={(event) => { GoUp(event) }} />
            <div className={styles.shisha__content__wrapper}>
                {shishaData(numberProduct - 1)}
            </div>
            <div className={styles.description__block__bottom__arrow} onClick={(event) => { GoDown(event) }} />
        </div>
    )
}

export default DescriptionShisha;