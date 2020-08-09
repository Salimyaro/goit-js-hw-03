// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
  balance: 0,
  transactions: [],
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
    };
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW),
    );
  },
  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const temp of this.transactions) {
      if (id === temp.id) {
        return temp;
      }
    }
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const temp of this.transactions) {
      if (type === temp.type) {
        total += temp.amount;
      }
    }
    return total;
  },
};

account.deposit(30000);
account.withdraw(3445);
account.withdraw(3445);
account.deposit(534);
account.deposit(768);
account.withdraw(100);
account.deposit(3000);
account.withdraw(25);
account.deposit(12340);
account.deposit(457);

console.log('баланс:', account.getBalance());
console.log('поиск транзакции:', account.getTransactionDetails(6));
console.log('сумма поступлений:', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('сумма расходов:', account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account);
