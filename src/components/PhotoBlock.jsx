import react, { useEffect, useRef } from 'react';
import styles from './AllComponents.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { photos } from './../DataBase'

const PhotoBlock = ({ typeProduct, numberProduct }) => {

    const photoData = (typeProduct, numberProduct) => {
        return (
        <AnimatePresence mode="wait">
            <motion.img
                key={photos[typeProduct - 1][numberProduct - 1].src + `${typeProduct}${numberProduct}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.photo__block__photo}
                src={photos[typeProduct - 1][numberProduct - 1].src}
                alt={photos[typeProduct - 1][numberProduct - 1].alt} />
        </AnimatePresence>
        )
    }

   

    return (
        <div className={styles.photo__block__wrapper}>
            {photoData(typeProduct, numberProduct)}
        </div>
    )
}

export default PhotoBlock;