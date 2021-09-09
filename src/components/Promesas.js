const productos = [
  { id: 1, name: "auto", descripcion: "bmw" },
  { id: 2, name: "moto", descripcion: "honda" },
  { id: 3, name: "camioneta", descripcion: "ford" },
  { id: 4, name: "bicicleta", descripcion: "montaña" },
];

const task = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
task()
  .then(
    (result) => {
      console.log(result);
    },
    (err) => console.log(err)
  )
  .finally(() => console.log("proceso finalizado correctamente"));
console.log("ejecutando promesas");
