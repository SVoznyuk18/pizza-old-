import React, {useState} from "react";

import { AccordionWrapper, AccordionItem, AccordionHeader, AccordionBody, AccordionContent } from './StyledComponents';

const Accordion = ({}) => {


    console.log(toggleShowContent);
    return (
        <AccordionWrapper>
            <AccordionItem>
                <AccordionHeader onClick={() => setToggleShowContent(!toggleShowContent)}> order1</AccordionHeader>
                <AccordionBody isShowContent={toggleShowContent}>
                    <AccordionContent>
                        1.	Браузер перевіряє локальний кеш для збережених ресурсів. Якщо сторінка або інші ресурси вже були завантажені, браузер може відобразити їх без відправки запиту до сервера.
                        2.	Якщо сторінка або ресурси не зберігалися локально або їх кеш було очищено, браузер формує запит до DNS-сервера для перетворення введеної користувачем адреси у числову IP-адресу.
                        3.	Після того як  відомо IP браузер розпочинає встановлення зєднання з сервером через HadleShake. Після того як зєднання встановленно браузер відправляє HTTP або HTTPS на сервер
                        4.	Браузер завантажує HTML-код сторінки з сервера.
                        5.	Як тільки браузер отримає перші данні він розпочинає парсинг
                        6.	Перш за все створюється DOM. Коли парсер доходить до неблокуючих ресурсів (картинки, css) браузер відправляє запит на сервер, якщо парсер доходить до script  він блокується до завершення завантаження файлу js
                        7.	Другий етам  це створення CSSOM. Це дуже схоже на DOM, але для CSS
                        8.	3 етап рендерінг включає в себе  стилізацію, компоновку(layout), отрисовку(Paint), композицію(Composition).
                        9.	Стилізація  це  комбінування DOM та CSSOM в дерево рендерінга. Конструювання цього дерева починається з проходу всього DOM-дерева від кореня, з виявленням кожного видимого вузла. Дерево рендеру містить всі видимі вузли з вмістом і стилями
                        10.	компоновкf(layout) На цьому кроці обчислюється геометрія кожного вузла, тобто ширина, висота, положення елементів

                    </AccordionContent>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader onClick={() => setToggleShowContent(!toggleShowContent)}> order2</AccordionHeader>
                <AccordionBody isShowContent={toggleShowContent}>
                    <AccordionContent>
                        1.	Браузер перевіряє локальний кеш для збережених ресурсів. Якщо сторінка або інші ресурси вже були завантажені, браузер може відобразити їх без відправки запиту до сервера.
                        2.	Якщо сторінка або ресурси не зберігалися локально або їх кеш було очищено, браузер формує запит до DNS-сервера для перетворення введеної користувачем адреси у числову IP-адресу.
                        3.	Після того як  відомо IP браузер розпочинає встановлення зєднання з сервером через HadleShake. Після того як зєднання встановленно браузер відправляє HTTP або HTTPS на сервер
                        4.	Браузер завантажує HTML-код сторінки з сервера.
                        5.	Як тільки браузер отримає перші данні він розпочинає парсинг
                        6.	Перш за все створюється DOM. Коли парсер доходить до неблокуючих ресурсів (картинки, css) браузер відправляє запит на сервер, якщо парсер доходить до script  він блокується до завершення завантаження файлу js
                        7.	Другий етам  це створення CSSOM. Це дуже схоже на DOM, але для CSS
                        8.	3 етап рендерінг включає в себе  стилізацію, компоновку(layout), отрисовку(Paint), композицію(Composition).
                        9.	Стилізація  це  комбінування DOM та CSSOM в дерево рендерінга. Конструювання цього дерева починається з проходу всього DOM-дерева від кореня, з виявленням кожного видимого вузла. Дерево рендеру містить всі видимі вузли з вмістом і стилями
                        10.	компоновкf(layout) На цьому кроці обчислюється геометрія кожного вузла, тобто ширина, висота, положення елементів
                    </AccordionContent>
                </AccordionBody>
            </AccordionItem>
        </AccordionWrapper>
    )


}

export default Accordion;