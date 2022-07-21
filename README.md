# Тестовое задание по React/Redux/Typescript*

[URL APP](https://react-bastion-tasks.vercel.app/)  

[FIGMA](https://www.figma.com/file/fZoiXvZ8hMLw31oAs1spJD/Published-RU-%C2%ABBastion-Group%C2%BB)

## ТЗ:
<details>  

+ (1) Сверстать главную страницу.    
Все элементы могут быть нефункциональными (то есть их просто сверстать, без эффектов), а просто сверстанными, кроме тех, что обозначены ниже.  
+ (2) В шапке вместо "О нас, производство, ..." поставить ссылки "Типы продуктов", "Продукты"   
  При переходе на ссылки шапка и подвал  остаются неизменными. А вместо основного контента  
  + 2.1. Типы продуктов - форма добавления типов продуктов (id + название)  
  + 2.2. Продукты - форма добавления продукта. (id + название + выбор типа продукта из предыдущего пункта + цена + ГОСТ).  
Загрузка фотографии по заданию не обязательно (можно просто для все одинаковую заглушку выводить). Но если сделаете, будет преимуществом.  
  + 2.3. В каждой из форм реализовать валидацию данных.  
  + 2.4. Если в названии есть буква "о", то такой товар  - "хит". Если есть буква "а", то акция.  
  + 2.5. Удаления реализовывать НЕ надо.  
  + 2.6. Сохранять где-то на сервере ничего НЕ требуется. Нас интересует только react часть  
+ (3) Блок с товарами на главной.  
  + 3.1. Карточки.  (отображаются те, что мы добавили)  
    + 3.1.1. Эффект при наведении, как в макете  
    + 3.1.2. Кнопки +/- и добавление в корзину  
    + 3.1.3. При добавлении в корзину в шапке у иконки значение меняется  
    + 3.1.4. Надписи Хит и Акция исходя из данных пункта 2.4.  
  + 3.2. Над карточками список ГОСТОВ.
    + Список уникальных гостов, согласно добавленным товарам.
    + Если нажимаем, гост выделяется, если отжимаем, то убирается.
    + Если выбран  ОДИН или несколько гостов. То фильтруются карточки по Этим ГОСТАМ.
  + 3.3. Блок фильтрации Достаточно реализовать только 2 фильтра
    + 3.3.1. По цене. (разрешено использовать библиотеки для слайдера)
    + 3.3.2. По Типу продукта.
+ (4) При клике на Корзину в шапке открывается страница Корзины с соответствующим списком товаров.
    + 4.1. Функционал корзины работоспособный делаем.
    + 4.1. При клике на Оформить заказ в консоль вывести перечь бронируемого и Данные о покупателе.
    + 4.2. Обеспечить валидацию формы покупателя.  
    
    UPD.      
Подвал в макете картинкой. Его можно так картинкой и вставить, раз он там в таком виде.  
Можно использовать redux toolkit.  
Bootstrap лучше не использовать, но карать за это не буду.  
</details>



### Сделано
<details>  

+ Добавлены страницы (- главная с карточками товара, - корзина, - добавление типа, - добавление продукта ) [роутинг]   
  + Валидация форм,в продукт, можно добавить товар без гостов, либо с ценной, содержащей 1 цифру после запятой
+ КАРТОЧКИ С ТОВАРОМ  
  + Оставил 3 тестовых, для наполнения...
  + Если один и тот же товар добавлять в корзинцу, происходит просто увелечения счётчика(на кол-во установленное в данный момент)
+  ФИЛЬТРЫ
    + При установки цены слайдером, данные корректируються только после остановки ползунка (Не происходит 10000 отправок в redux store)
    + Слайдер синхронен с инпутами(если в инпуте пусто, появляется placeholder)
    + Фильтр цены изначально установлен на мин,макс ценник присутсвующих товаров в списке (ниже иливыше выбрать нельзя)
    + Кнопка сброса фильтров не активна,если они не установлены
    + Фильтры сочитаются с друг другом
+ КОРЗИНА
    + Если корзина пустая,выводяться сообщение об этом
    + Возможность очистить корзину или удалить элемент
    + Можно ввести кол-во товара в инпут(или изменять кнопками +1 || -1), если товара больше 100 или меньше 1, то выскакивает предупреждение, и корректируются данные
    + Итоговая цена указывается с разбиением (13 600, 2 400 и тп)
    + Валидация формы + вывод в консоль данные  
    
</details>

