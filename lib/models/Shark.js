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

  static async insert({
    scientific_name,
    family,
    kingdom,
    living,
    random_fact,
  }) {
    const { rows } = await pool.query(
      'INSERT INTO sharks (scientific_name,family,kingdom,living,random_fact) VALUES ($1, $2, $3, $4 , $5) RETURNING*',
      [scientific_name, family, kingdom, living, random_fact]
    );
    return new Shark(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM sharks');
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM sharks WHERE id = $1', [
      id,
    ]);
    if (!rows[0]) {
      return null;
    }
    return new Shark(rows[0]);
  }
};
