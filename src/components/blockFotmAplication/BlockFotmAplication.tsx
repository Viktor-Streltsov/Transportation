'use client'

import React, {useState} from 'react';

import styles from './BlockFotmAplication.module.scss'
import {useSession} from "next-auth/react";

interface Props {
    name: string;
    phone: string;
    paymentMethod: string;
    delivery: boolean;
    processed: boolean;
}

const BlockFotmAplication = () => {

    const session = useSession();
    const [newDirection, setNewDirection] = useState<Props>({
        name: '',
        phone: '',
        paymentMethod: '',
        delivery: false,
        processed: false,
    });

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setNewDirection(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', newDirection.name);
            formData.append('phone', newDirection.phone);
            formData.append('paymentMethod', newDirection.paymentMethod);
            formData.append('delivery', newDirection.delivery.toString());
            formData.append('processed', newDirection.processed.toString());

            const response = await fetch('http://localhost:5000/api/application/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('добавлен объект');
            } else {
                console.error('Ошибка при добавлении нового направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/example.pdf';
        link.download = 'example.pdf';
        link.click();
    };


    return (
        <>
            <div className={styles.blockInfo}>
                <div className={styles.textInfo}>
                    <h2 className={styles.textName}>Gruzi.ru</h2>
                    <p className={styles.text}>
                        Это цифровая платформа для грузоперевозок. Пользователям доступны продукты и сервисы для
                        автоматизации закупки и исполнения перевозок: транспортные тендеры, спот-аукционы, TMS и
                        трекинг. Цифровые продукты Gruzi.ru объединены в экосистему, интегрированы с ИТ-системами
                        грузоотправителей, позволяют оптимизировать рутинные процессы и значительно снизить расходы на
                        транспортную логистику.
                    </p>
                </div>
                <button className={styles.btn} onClick={handleDownload}>
                    Скачать презентацию
                </button>
            </div>
            <div className={styles.blockForm}>
                <div className={styles.imges}></div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 className={styles.nameApplication}>Связаться с нами</h2>
                    <div className={styles.inputsAdds}>
                        <div className={styles.inputForm}>
                            <label className={styles.textInput}>Имя *</label>
                            <input type='text' name='name' value={newDirection.name} className={styles.inputs}
                                   placeholder='Полное имя * ' onChange={handleChange}/>
                        </div>
                        <div className={styles.inputForm}>
                            <label className={styles.textInput}>Адрес электронной почты *</label>
                            <input type='email' name='email' value={newDirection.phone} className={styles.inputs}
                                   placeholder='example@gmail.com  ' onChange={handleChange}/>
                        </div>
                        <div className={styles.inputForm}>
                            <label className={styles.textInput}>Компания *</label>
                            <input type='text' name='Компания' value={newDirection.phone} className={styles.inputs}
                                   placeholder='ООО “Ромашка”' onChange={handleChange}/>
                        </div>
                        <div className={styles.inputForm}>
                            <label className={styles.textInput}>Телефон *</label>
                            <input type='tel' name='phone' value={newDirection.phone} className={styles.inputs}
                                   placeholder='8(999)-000-00-00' onChange={handleChange}/>
                        </div>
                    </div>
                    {
                        !session?.data ? <button className={styles.submit}>Отправить</button> :
                            <div className={styles.warning}>Для того что бы купить книгу вы должны
                                авторизоваться</div>
                    }
                </form>
            </div>
        </>
    );
};

export default BlockFotmAplication