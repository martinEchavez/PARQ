const querys = {
  createNewUser:
    'INSERT INTO Usuarios (nombre, apellido, direccion, ciudad, longitud, latitud, estadogeo) VALUES(@nombre, @apellido, @direccion, @ciudad, @longitud, @latitud, @estadogeo)',
  getAllUsers:
    'SELECT nombre, apellido, direccion, ciudad, longitud, latitud, estadogeo FROM Usuarios',
  getUserById:
    'SELECT nombre, apellido, direccion, ciudad, longitud, latitud, estadogeo FROM Usuarios WHERE id = @id',
  deleteUserById: 'DELETE FROM [PARQ].[dbo].[Usuarios] WHERE id = @id',
};

module.exports = {
  querys,
};
