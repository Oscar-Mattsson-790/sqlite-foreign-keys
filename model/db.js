const sqlite3 = require("sqlite3").verbose();

function creteDbConnection() {
  const db = new sqlite3.Database("./airbean.sqlite", (error) => {
    if (error) return console.log(error.message);
    createTable(db);
  });

  return db;
}

function createTable(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      productId text NOT NULL,
      title text NOT NULL,
      desc text NOT NULL,
      price INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS orders (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      orderNr text NOT NULL,
      deliveryTime INTEGER NOT NULL,
      total INTEGER NOT NULL,
      orderDate text NOT NULL
    );
    CREATE TABLE IF NOT EXISTS order_items (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      orderNr text NOT NULL,
      productId text NOT NULL,
      FOREIGN KEY (orderNr) REFERENCES orders(orderNr),
      FOREIGN KEY (productId) REFERENCES products(productId)
    )

    
    INSERT INTO products (productId, title, desc, price) VALUES ("coffee-vxig26my4y", "Bryggkaffe", "Bryggd på månadens bönor.", 39);
    INSERT INTO products (productId, title, desc, price) VALUES ("coffee-220dodpzmg", "Caffè Doppio", "Bryggd på månadens bönor.", 49);
    INSERT INTO products (productId, title, desc, price) VALUES ("coffee-4pdksmrkfa", "Cappuccino", "Bryggd på månadens bönor.", 49);
    INSERT INTO products (productId, title, desc, price) VALUES ("coffee-m2h37k2mnh", "Latte Macchiato", "Bryggd på månadens bönor.", 49);
    INSERT INTO products (productId, title, desc, price) VALUES ("coffee-0lp6ter3bh", "Kaffe Latte", "Bryggd på månadens bönor.", 54);
    INSERT INTO products (productId, title, desc, price) VALUES ("coffee-e8hz0lk7q5", "Cortado", "Bryggd på månadens bönor.", 39);




  `);
}

module.exports = creteDbConnection;
