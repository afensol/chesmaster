import { open } from 'react-native-quick-sqlite';

const db = open({ name: 'ChessMaster.db' });

const database = {
  initDB: () => {
    try {
      db.execute(`
        CREATE TABLE IF NOT EXISTS Users (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          username TEXT, 
          email TEXT, 
          password TEXT
        );
      `);
      console.log("Database initialized");
    } catch (error) {
      console.error("Init error:", error);
    }
  },

  registerUser: (username, email, password) => {
    try {
      const result = db.execute(
        'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)',
        [username, email, password]
      );
      return result;
    } catch (error) {
      throw error;
    }
  },

  loginUser: (email, password) => {
    try {
      const result = db.execute(
        'SELECT * FROM Users WHERE email = ? AND password = ?',
        [email, password]
      );
      
      if (result.rows && result.rows.length > 0) {
        return result.rows.item(0);
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
};

export default database;