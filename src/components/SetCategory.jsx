import React, { useRef, useEffect, useState } from "react";
import styles from './AllComponents.module.css';
import ContactsModal from "./ContactsModal";

const categoryName = [
    'аксессуары', 'кальяны', 'табак'
]

const SetCategory = ({ setTypeProduct, typeProduct, setNumberProduct }) => {

    const refShisha = useRef(null);
    const refTobacco = useRef(null);
    const refAccessories = useRef(null);
    const [openAdress, setOpenAdress] = useState(false);
    const ChangePageUp = () => {
        setNumberProduct(1);
        if (typeProduct == 1) {
            setTypeProduct(3)
        } else {
            setTypeProduct(typeProduct - 1)
        }
    }
    const ChangePageDown = () => {
        setNumberProduct(1);
        if (typeProduct == 3) {
            setTypeProduct(1)
        } else {
            setTypeProduct(typeProduct + 1)
        }
    }
    const openContacts = () => {
        setOpenAdress(true);
    }
    useEffect(() => {
        if (refShisha.current && refTobacco.current && refAccessories.current) {
            if (typeProduct == 1) {
                refShisha.current.style.top = '33%';
                refShisha.current.style.color = 'white';
                refShisha.current.style.fontSize = 'min(1.8vw, 3.6vh)';
                refTobacco.current.style.top = '78%';
                refTobacco.current.style.color = 'rgb(136, 136, 136)';
                refTobacco.current.style.fontSize = 'min(1.2vw, 2.4vh)';
                refAccessories.current.style.top = '3%';
                refAccessories.current.style.color = 'rgb(136, 136, 136)';
                refAccessories.current.style.fontSize = 'min(1.2vw, 2.4vh)';
            }
            if (typeProduct == 2) {
                refTobacco.current.style.color = 'white';
                refTobacco.current.style.fontSize = 'min(1.8vw, 3.6vh)';
                refTobacco.current.style.top = '33%';
                refShisha.current.style.top = '3%';
                refShisha.current.style.color = 'rgb(136, 136, 136)';
                refShisha.current.style.fontSize = 'min(1.2vw, 2.4vh)';
                refAccessories.current.style.top = '78%';
                refAccessories.current.style.color = 'rgb(136, 136, 136)';
                refAccessories.current.style.fontSize = 'min(1.2vw, 2.4vh)';
            }
            if (typeProduct == 3) {
                refAccessories.current.style.color = 'white';
                refAccessories.current.style.fontSize = 'min(1.8vw, 3.6vh)';
                refAccessories.current.style.top = '33%';
                refTobacco.current.style.top = '3%';
                refTobacco.current.style.color = 'rgb(136, 136, 136)';
                refTobacco.current.style.fontSize = 'min(1.2vw, 2.4vh)';
                refShisha.current.style.top = '78%';
                refShisha.current.style.color = 'rgb(136, 136, 136)';
                refShisha.current.style.fontSize = 'min(1.2vw, 2.4vh)';
            }
        }
    }, [typeProduct])

    return (
        <div className={styles.set__category__wrapper}>
            <div className={styles.set__category__main__content}>
                <div className={styles.set__category__name}>
                    <div className={styles.set__category__name__point} ref={refAccessories}>{categoryName[0]}</div>
                    <div className={styles.set__category__name__point} ref={refShisha}>{categoryName[1]}</div>
                    <div className={styles.set__category__name__point} ref={refTobacco}>{categoryName[2]}</div>
                </div>
                <div className={styles.set__category__number}>
                    <div className={styles.set__category__number__top__arrow} onClick={ChangePageUp} />
                    <div className={styles.set__category__number__current}>{typeProduct}</div>
                    <div className={styles.set__category__number__bottom__arrow} onClick={ChangePageDown} />
                </div>
            </div>
            {openAdress && <ContactsModal setOpenAdress={setOpenAdress} />}
        </div>
    )
}

export default SetCategory;