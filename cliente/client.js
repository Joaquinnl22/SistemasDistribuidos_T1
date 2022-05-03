const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;  

const texto = process.argv[2];

const client = new todoPackage.Todo("0.0.0.0:40000", 
  grpc.credentials.createInsecure())

client.createTodo({
    "id": -1,
    "text" : texto
}, (err, response) => {
    console.log("Recibido de server: " + JSON.stringify(response));
})

client.readTodos(null, (err, response) => {
  //console.log("Items de array: " + JSON.stringify(response));
  if(!response.items){
    response.items.forEach(a => console.log(a.text))
  }
})

const call = client.readTodosStream();
call.on("data", item => {
  console.log("item recibido de server: " + JSON.stringify(item))
})

call.on("end", e => console.log("server done!"))

app.listen(3000, () => {
  console.log("Server started at port 3000");
});