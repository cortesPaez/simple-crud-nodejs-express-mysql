import { db } from "../db/config.js";

export const createController = (req, res) => {
  const query = "INSERT INTO books(`name`, `description`, `cover`) VALUES(?)";
  const values = [req.body.name, req.body.description, req.body.cover];
  db.query(query, [values], (error, data) => {
    if (error) return res.json({ status: 400, error: error });
    return res.status(201).json(data);
  });
};

export const readController = (_, res) => {
  const query = "SELECT * from books";
  db.query(query, (error, data) => {
    error && res.status(400).json({ status: 400, error: 'no se logro ver los libros' });
    return res.json(data);
  });
};

export const updateController = (req, res) => {
  const id = req.params.id;
  const query =
    "UPDATE books SET `name` = ?, `description` = ?, `cover` = ? WHERE `id` = ?";
  const values = [req.body.name, req.body.description, req.body.cover];
  db.query(query, [...values, id], (error, data) => {
    error && res.status(400).json({ status: 400, error: error });
    if(data.affectedRows === 0) return res.status(404).json({ status: 404, message: "ID no encontrado" });
    return res.status(200).json({ status: 200, values });
  });
};

export const deleteController = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM books WHERE `id` = ?";
  db.query(query, [id], (error, data) => {
    error && res.status(400).json({ status: 400, error: 'ID incorrecto' });
    if(data.affectedRows === 0) return res.status(404).json({ status: 404, message: "ID no encontrado" });
    return res.json({ status: 200, message: "eliminado" });
  });
};
