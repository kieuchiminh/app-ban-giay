import React from 'react'
export function moneyFormat(num) {
    return parseFloat(num).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
export function sale(price,old_price) {
    return '-'+(((parseFloat(old_price)-parseFloat(price))/parseFloat(old_price))*100).toFixed()+'%'
}
