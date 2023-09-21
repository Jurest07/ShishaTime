import react from 'react';
import styles from './AllComponents.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { descriptionTobaccoData, outWords, shopConstant } from './../DataBase';

const DescriptionTobbaco = ({ numberProduct, setNumberProduct, setModalActive }) => {

    const GoUp = (event) => {
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        if (numberProduct == 1) {
            setNumberProduct(shopConstant.typesTobacco);
        } else {
            setNumberProduct(numberProduct - 1);
        }
    }
    const GoDown = (event) => {
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        if (numberProduct == shopConstant.typesTobacco) {
            setNumberProduct(1);
        } else {
            setNumberProduct(numberProduct + 1);
        }
    }

    const openModal = (event) => {
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        setModalActive(true);
    }

    const tobaccoData = (typeTobbaco) => {
        return (
            <>
                <AnimatePresence mode="wait">
                    {<motion.div
                        key={typeTobbaco}
                        className={styles.tobacco__content}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <div className={styles.tobacco__title}>{descriptionTobaccoData[typeTobbaco].title}</div>
                        <div className={styles.tobacco__body}>
                            <div className={styles.tobacco__body__string}>
                                {outWords.production[0]}
                                <img  className={styles.tobacco__body__production__photo} src={descriptionTobaccoData[typeTobbaco].production}/>
                            </div>
                            <div className={styles.tobacco__body__string}>
                                {outWords.strength[0]}
                                <div className={styles.tobacco__body__line} />
                                <div className={styles.tobacco__body__line__fill} style={{ backgroundColor: `rgba(${(0.3 + descriptionTobaccoData[typeTobbaco].strengthValue / 10) * 255}, ${(0.2 + descriptionTobaccoData[typeTobbaco].strengthValue / 10) * 165}, 0, 0.7)`, width: `${descriptionTobaccoData[typeTobbaco].strengthValue / 10 * 100}%` }} />
                            </div>
                            <div className={styles.tobacco__body__string}>
                                {outWords.heatResistance[0]}
                                <div className={styles.tobacco__body__line} />
                                <div className={styles.tobacco__body__line__fill} style={{ backgroundColor: `rgba(${(0.3 + descriptionTobaccoData[typeTobbaco].heatResistanceValue / 10) * 255}, ${(0.2 +descriptionTobaccoData[typeTobbaco].heatResistanceValue / 10) * 165}, 0, 0.7)`, width: `${descriptionTobaccoData[typeTobbaco].heatResistanceValue / 10 * 100}%` }} />
                            </div>
                            <div className={styles.tobacco__body__string}>
                                {outWords.smokiness[0]}
                                <div className={styles.tobacco__body__line} />
                                <div className={styles.tobacco__body__line__fill} style={{ backgroundColor: `rgba(${(0.3 +descriptionTobaccoData[typeTobbaco].smokinessValue / 10) * 255}, ${(0.2 +descriptionTobaccoData[typeTobbaco].smokinessValue / 10) * 165}, 0, 0.7)`, width: `${descriptionTobaccoData[typeTobbaco].smokinessValue / 10 * 100}%` }} />
                            </div>
                        </div>
                        <div className={styles.tobacco__button} onClick={(event) => { openModal(event) }}>{outWords.flavours[0]}</div>
                    </motion.div>}
                </AnimatePresence>
            </>)
    }

    return (
        <div className={styles.description__tobbaco__wrapper}>
            <div className={styles.description__block__top__arrow} onClick={(event) => { GoUp(event) }} />
            <div className={styles.tobacco__content__wrapper}>
                {tobaccoData(numberProduct - 1)}
            </div>
            <div className={styles.description__block__bottom__arrow} onClick={(event) => { GoDown(event) }} />
        </div>
    )
}

export default DescriptionTobbaco;