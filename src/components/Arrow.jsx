import React, { useState, useEffect } from 'react';
import styles from './AllComponents.module.css';

const Arrow = (style, modalPage, goUp, setModalPage) => {
    const [show, setShow] = useState(true);

    const changePage = (e) => {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
        if(goUp){
            if (modalPage == 2) {
                setModalPage(1);
            } else {
                setModalPage(modalPage + 1);
            }
        }else{
            if (modalPage == 1) {
                setModalPage(2);
            } else {
                setModalPage(modalPage - 1);
            }
        }  
    }

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000);
    }, []);

    return (
        <>
            {show && (
                <div
                    className={styles.modal__arrow}
                    style = {style}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    onClick={changePage}
                />
            )}
            {!show && (<div className={`${styles.modal__arrow} ${styles.hidden}`} style = {style}/>)}
        </>
    );
};

export default Arrow;