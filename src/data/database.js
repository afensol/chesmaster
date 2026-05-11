import { open } from 'react-native-quick-sqlite';

// Veritabanını açıyoruz
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
      console.log("Quick-SQLite: Tablo hazır.");
    } catch (error) {
      console.error("Tablo oluşturma hatası:", error);
    }
  },

  registerUser: async (username, email, password) => {
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

  loginUser: async (email, password) => {
    try {
      const { rows } = db.execute(
        'SELECT * FROM Users WHERE email = ? AND password = ?',
        [email, password]
      );
      if (rows && rows.length > 0) {
        return rows._array[0]; // Kullanıcıyı dön
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
};

export default database;