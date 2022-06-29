const pool = require('../utils/pool');

module.exports = class Shark {
  id;
  scientific_name;
  family;
  kingdom;
  living;
  random_fact;

  constructor(row) {
    this.id = row.id;
    this.scientific_name = row.scientific_name;
    this.family = row.family;
    this.kingdom = row.kingdom;
    this.living = row.living;
    this.random_fact = row.random_fact;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM sharks');
    return rows;
  }
};
