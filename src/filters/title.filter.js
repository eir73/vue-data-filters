export default function titleFilter(value) {
    return value.length > 59 ? value.split('').splice(0, 59).join('').concat('...') : value
}