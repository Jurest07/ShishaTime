import React, { useState } from "react";
import styles from './MainPage.module.css';
import SetCategory from "../components/SetCategory";
import DescriptionBlock from "../components/DescriptionBlock";
import PhotoBlock from "../components/PhotoBlock";
import ModalWindow from "../components/ModalWindow";


const MainPage = () => {

    const [typeProduct, setTypeProduct] = useState(1);
    const [numberProduct, setNumberProduct] = useState(1);
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={styles.main__page__wrapper}>
            <div className={styles.main__page__bg__photo}>
                <video autoPlay loop muted="muted">
                    <source src="/img/BG2.mp4" />
                </video>
            </div>
            <div className={styles.company__name}>
                Shisha Time
            </div>
            <div className={styles.company__logo}>
                <img src="/img/logo_shisha_time.png" className={styles.company__logo__photo}/>
            </div>
            <div className={styles.main__page__contacts}>
                +995-599-55-52-22
            </div>
            <div className={styles.main__page__content}>
                <DescriptionBlock
                    typeProduct={typeProduct}
                    numberProduct={numberProduct}
                    setNumberProduct={setNumberProduct}
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                />
                <PhotoBlock
                    typeProduct={typeProduct}
                    numberProduct={numberProduct}
                />
                <SetCategory
                    setTypeProduct={setTypeProduct}
                    typeProduct={typeProduct}
                    setNumberProduct={setNumberProduct}
                />
                {modalActive && <ModalWindow
                    typeProduct={typeProduct}
                    numberProduct={numberProduct}
                    setModalActive={setModalActive} />}
            </div>
        </div>
    )
}

export default MainPage;