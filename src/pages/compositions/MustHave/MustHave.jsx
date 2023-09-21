import React, { useState, useEffect } from "react";
import styles from './MustHave.module.css';
import { DataBase } from "../../../DataBase";

const MustHaveContent = () => {

    const [mustHaveData, setMustHaveData] = useState([]);

    useEffect(() => {
        let mustHaveRow = [];
        const finishArrayMustHave = [];
        for (let mustHave of DataBase.mustHave) {
            mustHaveRow.push(mustHave);
            if (!(mustHaveRow.length % 4)) {
                finishArrayMustHave.push([...mustHaveRow])
                mustHaveRow = [];
            }
        }
        if (mustHaveRow){
            finishArrayMustHave.push([...mustHaveRow]);
            mustHaveRow = [];
        }
        setMustHaveData(finishArrayMustHave);
    }, [DataBase.mustHave])

    return (
        <div className={styles.musthave__content__body}>
            {mustHaveData.map((oneRowMustHave) => {
                return (
                    <div className={styles.musthave__one__row}>
                        {oneRowMustHave.map((oneMustHave) => {
                            return (
                                <div className={styles.one__musthave}>
                                    <img src={oneMustHave.avatar} className={styles.one__musthave__photo} />
                                    <div className={styles.one__musthave__title}>{oneMustHave.title}</div>
                                    <div className={styles.one__musthave__body}>
                                        <div className={styles.one__musthave__flavour__type}><b>Тип вкуса:</b> {oneMustHave.flavourType} </div>
                                        <div className={styles.one__musthave__flavour}><b>Вкус:</b> {oneMustHave.flavour}  </div>
                                        <div className={styles.one__musthave__dimension}><b>Объем:</b> {DataBase.dimensionMushHave}</div>
                                        <div className={styles.one__musthave__price}><b>Цена:</b> {DataBase.priceMushHave} {DataBase.valute}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )

}
const MustHave = () => {
    return (
        <div className={styles.musthave__content__wrapper}>
            <div className={styles.musthave__content__title}>
                Табак для кальяна <b>MustHave</b> <br />Качественный табак для кальяна российского производства. Обладает средней жаростойкостью и дымностью.
                Крепость табака средняя. Может варьироваться от 4 из 10 до 6 из 10 в зависимости от забивки. Имеет приятную, не приторную ароматизацию.
            </div>
            <MustHaveContent />
        </div>
    )
}

export default MustHave;