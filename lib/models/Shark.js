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
  static async updateById(id, attrs) {
    const shark = await Shark.getById(id);
    console.log(shark, attrs);
    if (!shark) return null;
    const { scientific_name, family, kingdom, living, random_fact } = {
      ...shark,
      ...attrs,
    };
    console.log(family);
    const { rows } = await pool.query(
      'UPDATE sharks SET scientific_name=$2,family=$3,kingdom=$4,living=$5,random_fact=$6 WHERE id=$1 RETURNING*',
      [id, scientific_name, family, kingdom, living, random_fact]
    );
    return new Shark(rows[0]);
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

  static async remove(id) {
    const { rows } = await pool.query(
      `DELETE FROM sharks WHERE id = $1 RETURNING *`,
      [id]
    );
    return new Shark(rows[0]);
  }
};
