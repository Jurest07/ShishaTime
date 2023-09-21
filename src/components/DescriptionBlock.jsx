import react from 'react';
import styles from './AllComponents.module.css';
import DescriptionTobbaco from './DescriptionTobbaco';
import DescriptionSourse from './DescriptionSourse';
import DescriptionShisha from './DescriptionShisha';

const DescriptionBlock = ({ typeProduct, numberProduct, setNumberProduct, setModalActive }) => {

    return (
        <div className={styles.description__block__wrapper}>
            {typeProduct == 2
                ? <DescriptionTobbaco
                    numberProduct={numberProduct}
                    setNumberProduct={setNumberProduct}
                    setModalActive={setModalActive}
                />
                : typeProduct == 1
                    ?
                    <DescriptionShisha
                        numberProduct={numberProduct}
                        setNumberProduct={setNumberProduct}
                    />
                    :
                    <DescriptionSourse
                        numberProduct={numberProduct}
                        setNumberProduct={setNumberProduct}
                        setModalActive={setModalActive}
                    />}
        </div>
    )
}

export default DescriptionBlock;