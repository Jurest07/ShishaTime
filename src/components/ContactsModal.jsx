import { useEffect, useRef } from "react";
import styles from './AllComponents.module.css';
import { contacts, outWords } from "../DataBase";

const ContactsModal = ({ setOpenAdress }) => {

    const modalRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (modalRef.current) {
                modalRef.current.style.opacity = '1'
            }
        }, 10)
    })
    const closeModal = (e) => {
        e.stopPropagation();
        if (modalRef.current){
            modalRef.current.style.opacity = '0';
        }
        setTimeout(() => setOpenAdress(false), 500)
    }

    const addressData = () => {
        return (
            <div className={styles.contacts__data}>
                {contacts.map((oneRowContacts) => {
                    return (
                        <div className={styles.contact__row}>
                            {oneRowContacts.map((oneContact) => {
                                return (
                                    <div className={styles.one__contact}>
                                        <div className={styles.one__contact__map}>
                                            {oneContact.map}
                                        </div>
                                        <div className={styles.one__contact__address}>
                                            {outWords.address[0]}: {oneContact.address}
                                        </div>
                                        <div className={styles.one__contact__worktime}>
                                            {outWords.workTime[0]}:  {oneContact.workTime}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
                }</div>)
    }

    return (
        <div className={styles.black__bg} onClick={(e) => { closeModal(e) }} ref={modalRef}>
            <div className={styles.modal} onClick={(e) => { e.stopPropagation() }}>
                {addressData()}
            </div>
        </div>
    )
}

export default ContactsModal;