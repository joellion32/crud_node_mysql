const controller = {}

controller.index = (req, res) => {
req.getConnection((err, conn) => {
conn.query('SELECT * FROM usuarios', (err, usuarios)=> {
if(err){
res.json(err);    
}
// renderizar vista
res.render('index', {    
data: usuarios
});
});
});
}

controller.guardar = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
if(err){
res.json(err);  
}
conn.query("INSERT INTO usuarios set ?", [data]);
console.log('usuario creado correctamente');
res.redirect('/');
});
}


controller.editar = (req, res) => {
const id = req.params.id;
req.getConnection((err, conn) => {
if(err){
res.json(err);  
}
conn.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, rows) => {
res.render('editar', {
data: rows[0]  
})
});
});
}


controller.actualizar = (req, res) => {
const id = req.params.id;
const data = req.body;
req.getConnection((err, conn) =>{
if(err){
res.json(err);  
}
conn.query("UPDATE usuarios SET ? WHERE id = ?", [data, id], (err, rows) => {
console.log(`usuario actualizado correctamente`);  
res.redirect('/');
});
});
}


controller.eliminar = (req, res) => {
const id = req.params.id;
console.log(id);
req.getConnection((err, conn) => {
if(err){
res.json();  
}
conn.query("DELETE FROM usuarios WHERE id = ?", [id]);
res.redirect('/');
}); 
}


module.exports = controller;