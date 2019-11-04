const SWIPE_TIMEOUT = 160;

/**
 * Переворачивает конкретную карточку с информацией о машине
 * @param {object} card Объект карты, над которой неободимо совершить действие
 * @param {string} action Действие: открытие/закрытие карточки
 * @returns {Number} Код ошибки
 */

function swipeAction(card, action) {
    if (action === "open"){
        card.style.transform = "rotateY(0deg)";
    }
    else if (action === "close"){
        card.style.transform = "rotateY(90deg)";
    }
    else {
        return -1;
    }
    return 0;
}


/**
 * Сворачивает основную карточку, разворачивает карточку с информацией
 * Используется при нажатии на кнопку "button-info"
 */

function showInfo() {
    let card = document.getElementsByClassName("card-container")[0];
    let info_card = document.getElementsByClassName("card-container-info")[0];
    swipeAction(card, "close");
    setTimeout(swipeAction, SWIPE_TIMEOUT, info_card, "open");
}

/**
 * Сворачивает карточку с информацией, разворачивает основную карточку
 * Используется при нажатии на кнопку "button-info"
 */

function hideInfo() {
    let card = document.getElementsByClassName("card-container")[0];
    let info_card = document.getElementsByClassName("card-container-info")[0];
    swipeAction(info_card, "close");
    setTimeout(swipeAction, SWIPE_TIMEOUT, card, "open");
}


/**
 * Класс Car предназначен для описания и взаимодействия карточки машины
 */

class Car {
    /**
     * Конструктор класса
     * Вызывает метод, устанавливающий параметры автомобиля
     */
    constructor() {

        this.car_elem = {};
        this.id = 0;
        this.name = "";

        this.logo_src = "";
        this.image_src = "";

        this.price = 0;
        this.dialer = "";
        this.number_of_cars = 0;


        this.getCarDescription();

        this.setCarElement(this.id);
        this.setCarLogo(this.logo_src);
        this.setCarPhoto(this.image_src);
        this.setCarName(this.name);
        this.setCarPrice(this.price);
        this.setCarDialer(this.dialer);
        this.setCarNumber(this.number_of_cars);
    }

    /**
     * public method, устанавливающий параметры автомобиля
     */
    getCarDescription(){
        this.id = 0;
        this.name = "Mercedes-benz E class";
        this.logo_src = "img/cars/mb-logo.png";
        this.image_src ="img/cars/mercedes-ben-e-class.png";
        this.price = 2500000;
        this.dialer = "Мерседес Авто";
        this.number_of_cars = 150
    }

    setCarElement(id){
        this.car_elem = document.getElementsByClassName("card-container")[0];
    }

    setCarLogo(src){
        let car_logo = this.car_elem.getElementsByClassName("car-logo")[0];
        car_logo.src = src;

    }

    setCarPhoto(src){
        let car_image = this.car_elem.getElementsByClassName("car-photo")[0];
        car_image.src = src;
    }

    setCarName(name){
        let car_name = this.car_elem.getElementsByClassName("car-name")[0];
        car_name.innerHTML = name;
    }

    setCarPrice(price){
        let car_price = this.car_elem.getElementsByClassName("car-description-thin")[0];
        car_price.innerHTML = this.priceConvert(price);
    }

    setCarDialer(dialer){
        let car_dialer = this.car_elem.getElementsByClassName("car-description-thin")[1];
        car_dialer.innerHTML = dialer;
    }

    setCarNumber(number_of_cars){
        let car_number = this.car_elem.getElementsByClassName("car-description-thin")[2];
        car_number.innerHTML = number_of_cars;
    }

    priceConvert(price){
        let price_tmp = price.toString();
        let price_result = "";
        let count = 0;

        for (let i = price_tmp.length - 1; i >= 0; i--){
            price_result += price_tmp.charAt(i);

            if (count % 3 === 2){
                price_result += ".";
            }
            count++;
        }
        price_result = price_result.split("").reverse().join("") + "₽";
        return price_result;
    }

}

let car_1 = new Car();