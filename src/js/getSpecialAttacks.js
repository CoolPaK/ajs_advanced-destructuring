export const getSpecialAttacks = ({ special }) => {
    return special.map(({ id, name, icon, description }) => ({
        id,
        name,
        icon,
        description: description || 'Описание недоступно'
    }));
};

// Пример использования
const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
            // Описание "засекречено"
        }
    ]
};

console.log(getSpecialAttacks(character));