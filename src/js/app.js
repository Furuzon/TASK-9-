   /*     ZADACHA 9   */
   
   const purchases = [
    {id: 1, date: '01.01.2020', values: [
        {id: 1, amount: 2000, category: 'auto'},
        {id: 2, amount: 3000, category: 'food'},
        {id: 3, amount: 300, category: 'beauty'},
    ]},
    {id: 2, date: '03.01.2020', values: [
        {id: 4, amount: 3000, category: 'auto'},
        {id: 5, amount: 30000, category: 'travel'},
    ]},
    {id: 6, date: '04.01.2020', values: [
        {id: 6, amount: 3000, category: 'food'},
    ]},
];

/*9.1 Находят дату, в которую совершено максимальное количество покупок (количество, а не стоимость) */
const max = purchases
.map(o => ({date: o.date, count: o.values.length}))
.reduce((acc, curr) => acc.count > curr.count ? acc : curr);

const result = max.date;
console.log(result);

/*9.2 Находят дату, в которую совершено максимальное количество покупок (по суммарной стоимости)    */
const findDateMaxPurchase = purchases
.map(o => ({date: o.date, count: o.values
.reduce((item, items) => item + items.amount, 0)}))
.reduce((acc, curr) => acc.count > curr.count ? acc : curr);


const dateMaxPurchase = findDateMaxPurchase.date
console.log(dateMaxPurchase);

/*9.3  Найти самую дорогую покупку   */
const findMaxExpensivePurchase = purchases.map(o => o.values)
.flat()
.reduce((acc, curr) => acc.amount > curr.amount ? acc : curr);

const expensivePurchase = findMaxExpensivePurchase;
console.log(expensivePurchase);

/*9.4    Найти категорию, в которой совершено максимальное количество покупок по сумме  */
const maxSummPurchaseByCategory = purchases.map(o => o.values)
    .flat()
    .reduce((acc, curr) => {
        const existent = acc.find(o => o.category === curr.category);
        if (existent === undefined) {
            acc.push({
                category: curr.category,
                amount: curr.amount,
            });
        } else {
            existent.amount += curr.amount;
        }
        return acc;
    }, [])
 .reduce((acc, curr) => acc.amount > curr.amount ? acc : curr);

const outcome = maxSummPurchaseByCategory;
console.log(outcome)




/*9.5 Найти среднюю стоимость трат в день avaragecostExpensizperDAy */
const averagePurchasesByDate = purchases
.map(o => ({
    date: o.date, 
    averageAmount: o.values
.reduce((item, items) => item + items.amount, 0) / o.values.length
}));

const avarageCostExpensizPerDay = averagePurchasesByDate; 
console.log(avarageCostExpensizPerDay);

/* 9.6 Подготовить статистику в разрезе (сумма трат в день) */
const statsBySumAmount = purchases
.map(o =>({
    date: o.date,
    amount: o.values
.reduce((item, items) => item +items.amount, 0)}));

const statsSumAmount = statsBySumAmount;
console.log(statsSumAmount);

/*     9.7  Подготовить статистику в разрезе (сумма трат по категориям) */

const statsByCategory = purchases.map(o => o.values)
    .flat()
    .reduce((acc, curr) => {
        const existent = acc.find(o => o.category === curr.category);
        if (existent === undefined) {
            acc.push({
                category: curr.category,
                amount: curr.amount,
            });
        } else {
            existent.amount += curr.amount;
        }
        return acc;
    }, [])
 
  const statsCategory = statsByCategory  
 console.log(statsCategory);


/* 9.8 Выбрать только покупки по определённой категории (в функцию передаётся категория и массив) */

function filterByCategory(purchases, category) {
    const result = purchases.map(o => o.values)
    .flat()
    .filter(purchase => {
        if (purchase.category === category) {
            return true
        }
    })

    return result
}

const categoryFilter = filterByCategory(purchases, 'auto')
console.log(categoryFilter);
