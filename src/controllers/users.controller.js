const { getConnection, sql, querys } = require('../database');
const { getGeocoder } = require('../geocoder');

const createNewUser = async (req, res) => {
  let latitud = 0;
  let longitud = 0;
  let estadogeo = 'F';
  console.log(req.body.nombre);
  const { nombre, apellido, direccion, ciudad } = req.body;
  if (
    typeof nombre === 'undefined' ||
    typeof apellido === 'undefined' ||
    typeof direccion === 'undefined' ||
    typeof ciudad === 'undefined'
  ) {
    return res
      .status(400)
      .json({ message: 'Nombre, apellido, dirección y ciudad son requeridos' });
  }

  try {
    const response = await getGeocoder(direccion, ciudad);
    if (response.length !== 0) {
      latitud = response[0].latitude;
      longitud = response[0].longitude;
      estadogeo = 'A';
    }
    const pool = await getConnection();
    await pool
      .request()
      .input('nombre', sql.VarChar, nombre)
      .input('apellido', sql.VarChar, apellido)
      .input('direccion', sql.VarChar, direccion)
      .input('ciudad', sql.VarChar, ciudad)
      .input('longitud', sql.VarChar, longitud)
      .input('latitud', sql.VarChar, latitud)
      .input('estadogeo', sql.Char, estadogeo)
      .query(querys.createNewUser);
    res.json({
      nombre,
      apellido,
      direccion,
      ciudad,
      longitud,
      latitud,
      estadogeo,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const pool = await getConnection();
    const { recordset } = await pool.request().query(querys.getAllUsers);
    res.json({ Users: recordset });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', id)
      .query(querys.getUserById);
    if (result.recordset.length === 0) {
      return res.json({ message: 'Usuario no encontrado' });
    }
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', id)
      .query(querys.deleteUserById);
    if (result.rowsAffected[0] === 0) {
      return res.json({ message: 'Usuario no encontrado' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
module.exports = {
  getUsers,
  createNewUser,
  getUserById,
  deleteUserById,
};
