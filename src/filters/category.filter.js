export default function categoryFilter(value) {
    switch (value) {
        case 'business_trips': 
            return 'Відрядження'
        case 'currency':
            return 'Валюта'
        case 'production':
            return 'Виробництво і собівартість'
        case 'vacation': 
            return 'Відпустки'
        case 'excise_tax':
            return 'Акцизний податок'
        case 'all':
            return 'Усі відео'
        case 'popular': 
            return 'Популярні'
        case 'discount': 
            return 'Акція'
        case 'nevv': 
            return 'Новинки'
        default: 
            return 'Помилка'
    }
}