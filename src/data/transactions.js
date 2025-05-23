// const transactionData = [
//   {
//     transactionId: "txn001",
//     customerId: "cust01",
//     customerName: "Alice",
//     amount: 120,
//     date: "2025-03-15",
//   },
//   {
//     transactionId: "txn002",
//     customerId: "cust01",
//     customerName: "Alice",
//     amount: 220,
//     date: "2025-04-10",
//   },
//   {
//     transactionId: "txn003",
//     customerId: "cust02",
//     customerName: "Bob",
//     amount: 75.5,
//     date: "2025-04-18",
//   },
//   {
//     transactionId: "txn004",
//     customerId: "cust03",
//     customerName: "Charlie",
//     amount: 49.99,
//     date: "2025-02-05",
//   },
//   {
//     transactionId: "txn005",
//     customerId: "cust02",
//     customerName: "Bob",
//     amount: 110.5,
//     date: "2025-03-25",
//   },
//   {
//     transactionId: "txn006",
//     customerId: "cust03",
//     customerName: "Charlie",
//     amount: 199.99,
//     date: "2025-01-15",
//   }
// ];

// export default transactionData;


const transactionData = [
  // January
  { transactionId: "txn001", customerId: "cust01", customerName: "Alice", amount: 120, date: "2025-01-05" },
  { transactionId: "txn002", customerId: "cust01", customerName: "Alice", amount: 80, date: "2025-01-10" },
  { transactionId: "txn003", customerId: "cust02", customerName: "Bob", amount: 95, date: "2025-01-12" },
  { transactionId: "txn004", customerId: "cust03", customerName: "Charlie", amount: 49.99, date: "2025-01-15" },
  { transactionId: "txn005", customerId: "cust02", customerName: "Bob", amount: 110.5, date: "2025-01-20" },
  { transactionId: "txn006", customerId: "cust03", customerName: "Charlie", amount: 199.99, date: "2025-01-22" },
  { transactionId: "txn007", customerId: "cust04", customerName: "Diana", amount: 140.0, date: "2025-01-25" },
  { transactionId: "txn008", customerId: "cust01", customerName: "Alice", amount: 110, date: "2025-01-25" },
  { transactionId: "txn009", customerId: "cust01", customerName: "Alice", amount: 120, date: "2025-01-25" },
  { transactionId: "txn010", customerId: "cust01", customerName: "Alice", amount: 130, date: "2025-01-25" },
  { transactionId: "txn011", customerId: "cust01", customerName: "Alice", amount: 140, date: "2025-01-25" },

  // February
  { transactionId: "txn008", customerId: "cust01", customerName: "Alice", amount: 200, date: "2025-02-02" },
  { transactionId: "txn009", customerId: "cust02", customerName: "Bob", amount: 75.5, date: "2025-02-05" },
  { transactionId: "txn010", customerId: "cust03", customerName: "Charlie", amount: 60.75, date: "2025-02-08" },
  { transactionId: "txn011", customerId: "cust04", customerName: "Diana", amount: 90.0, date: "2025-02-11" },
  { transactionId: "txn012", customerId: "cust01", customerName: "Alice", amount: 130, date: "2025-02-14" },
  { transactionId: "txn013", customerId: "cust02", customerName: "Bob", amount: 45.0, date: "2025-02-18" },
  { transactionId: "txn014", customerId: "cust03", customerName: "Charlie", amount: 220, date: "2025-02-20" },

  // March
  { transactionId: "txn015", customerId: "cust01", customerName: "Alice", amount: 180, date: "2025-03-01" },
  { transactionId: "txn016", customerId: "cust02", customerName: "Bob", amount: 95.25, date: "2025-03-03" },
  { transactionId: "txn017", customerId: "cust04", customerName: "Diana", amount: 100, date: "2025-03-07" },
  { transactionId: "txn018", customerId: "cust01", customerName: "Alice", amount: 99.99, date: "2025-03-10" },
  { transactionId: "txn019", customerId: "cust03", customerName: "Charlie", amount: 190.0, date: "2025-03-12" },
  { transactionId: "txn020", customerId: "cust04", customerName: "Diana", amount: 80.0, date: "2025-03-15" },
  { transactionId: "txn021", customerId: "cust01", customerName: "Alice", amount: 220, date: "2025-03-17" },
  { transactionId: "txn022", customerId: "cust02", customerName: "Bob", amount: 70.5, date: "2025-03-20" },
  { transactionId: "txn023", customerId: "cust03", customerName: "Charlie", amount: 50, date: "2025-03-23" },
  { transactionId: "txn024", customerId: "cust04", customerName: "Diana", amount: 130.25, date: "2025-03-26" },

  // April
  { transactionId: "txn025", customerId: "cust01", customerName: "Alice", amount: 140.75, date: "2025-04-01" },
  { transactionId: "txn026", customerId: "cust02", customerName: "Bob", amount: 60.0, date: "2025-04-02" },
  { transactionId: "txn027", customerId: "cust03", customerName: "Charlie", amount: 110, date: "2025-04-04" },
  { transactionId: "txn028", customerId: "cust04", customerName: "Diana", amount: 240.5, date: "2025-04-06" },
  { transactionId: "txn029", customerId: "cust01", customerName: "Alice", amount: 90, date: "2025-04-08" },
  { transactionId: "txn030", customerId: "cust02", customerName: "Bob", amount: 180.0, date: "2025-04-11" },
  { transactionId: "txn031", customerId: "cust03", customerName: "Charlie", amount: 105.5, date: "2025-04-15" },
  { transactionId: "txn032", customerId: "cust04", customerName: "Diana", amount: 50.0, date: "2025-04-17" },
  { transactionId: "txn033", customerId: "cust01", customerName: "Alice", amount: 175.0, date: "2025-04-20" },
  { transactionId: "txn034", customerId: "cust02", customerName: "Bob", amount: 49.0, date: "2025-04-23" },
  { transactionId: "txn035", customerId: "cust03", customerName: "Charlie", amount: 89.99, date: "2025-04-26" },
  { transactionId: "txn036", customerId: "cust04", customerName: "Diana", amount: 115.75, date: "2025-04-28" },
];

export default transactionData;
