import Img1 from "@/components/blockTransport/icons/img1";
import Img2 from "@/components/blockTransport/icons/img2";
import Img3 from "@/components/blockTransport/icons/img3";


export const data = [
    {
        id: 1,
        title: 'Транспортные тендеры',
        desc: (
            <ul>
                <li>Обеспечим контроль и исполнение бюджета в ТМС</li>
                <li>Сильнейший аналитический модуль</li>
                <li>Единый сквозной процесс «Закупки-исполнение»</li>
                <li>Независимость принятых решений</li>
                <li>Работа только с проверенными перевозчиками</li>
            </ul>
        ),
        img: (
            <><Img1/></>
        ),
    },
    {
        id: 2,
        title: 'Спот-аукционы',
        desc: (
            <ul>
                <li>Заменяем почту и мессенджеры</li>
                <li>Все торги организации в одном окне</li>
                <li>Закройте горящий рейс в пару кликов</li>
                <li>Четкий контроль круга участников</li>
                <li>Разные типы аукционов под любую ситуацию</li>
            </ul>
        ),
        img: (
            <><Img2/></>
        ),
    },
    {
        id: 3,
        title: 'ТMS / Система управления перевозками',
        desc: (
            <ul>
                <li>Контроль всех этапов от закупки до оплаты</li>
                <li>Бесшовная интеграция продуктов в экосистеме ТМС</li>
                <li>Отслеживание статуса заказа онлайн</li>
                <li>Контроль документооборота</li>
                <li>Оперативная обработка отклонений</li>
            </ul>
        ),
        img: (
            <><Img3/></>
        ),
    },
]