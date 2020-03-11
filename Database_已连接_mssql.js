const sql = require("msnodesqlv8");

 const connectionString = "server=localhost;Database=xw;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const query = "SELECT * FROM plb";
 
sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
});
