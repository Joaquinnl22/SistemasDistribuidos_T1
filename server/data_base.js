const { Pool} =require('pg');

const config={
    dbname : 'POSTGRES_DATABASE',
    user : 'POSTGRES_USER',
    host: 'POSTGRES_HOST',
    pssword: 'POSTGRES_PASSWORD',
   /* database: 'library'*/
};
const pool = new Pool(config);

const getBooks = async() =>{
    console.log("Get");
    const res= await pool.query('SELECT * FROM name');
    console.log(res);
};

getBooks();