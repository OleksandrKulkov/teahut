export const converNumberToHrivna = (num: number) =>
    num.toLocaleString("uk-UA", {
        style: "currency",
        currency: "UAH",
    })

export function formatDate(date: any) {
    const d = new Date(date);

    return d.toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
      
export function exchangePrice(price: number) {
    const courseRate = 40;
    const coursePrice = courseRate * price;
    return coursePrice.toFixed();
}