const pool = require('../utils/pool');

module.exports = class Cat {
  id;
  name;
  cat_type;
  url;
  birth_year;
  lives;
  is_sidekick;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.cat_type = row.cat_type;
    this.url = row.url;
    this.birth_year = row.birth_year;
    this.lives = row.lives;
    this.is_sidekick = row.is_sidekick;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cats;');
    return rows.map((row) => new Cat({ id: row.id, name: row.name }));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Cat(rows[0]);
  }
};
