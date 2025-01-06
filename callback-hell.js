function fetchUser(userId, callback) {
  setTimeout(() => {
    console.log('Fetched user');
    callback({ id: userId, name: 'John' });
  }, 1000);
}

function fetchOrders(user, callback) {
  setTimeout(() => {
    console.log(`Fetched orders for user ${user.name}`);
    callback([{ id: 1, item: 'Laptop' }, { id: 2, item: 'Phone' }]);
  }, 1000);
}

function fetchOrderDetails(order, callback) {
  setTimeout(() => {
    console.log(`Fetched details for order ${order.id}`);
    callback({ ...order, shipping: 'Express' });
  }, 1000);
}

// Callback Hell
fetchUser(1, (user) => {
  fetchOrders(user, (orders) => {
    fetchOrderDetails(orders[0], (orderDetails) => {
      console.log('Order Details:', orderDetails);
    });
  });
});
