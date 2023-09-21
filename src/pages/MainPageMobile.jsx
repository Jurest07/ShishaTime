import React, { useState } from "react";
import styles from './MainPageMobile.module.css';
import StartPage from "../componentsMobile/StartPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const MainPageMobile = () => {

    const [typeProduct, setTypeProduct] = useState(1);
    const [numberProduct, setNumberProduct] = useState(1);
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={styles.main__page__mobile__wrapper}>
            <StartPage/>
        </div>
    )
}

export default MainPageMobile;