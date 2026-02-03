// This is where the connection from the database come from
const pool = require('./Database');

//This uses the generateCredientials from the credgenerator.js file 
const { generateCredentials } = require('./credgenerator');  

//this function trys to add a new merchant to the db with parameters of store name, faqlink, productdata link, and support docs link
//this function also calls the generate credientials to generate the random client_id and random_client secret
async function addMerchant(storeName, faqLink, productDataLink, supportDocsLink) {
  const { client_id, client_secret } = generateCredentials();
  try {
    const [result] = await pool.execute(
      `INSERT INTO merchants 
      (store_name, client_id, client_secret, faq_link, product_data_link, support_docs_link) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [storeName, client_id, client_secret, faqLink, productDataLink, supportDocsLink]
    );

    console.log('Merchant added with ID:', result.insertId);
    console.log('Client ID:', client_id);
    console.log('Client Secret:', client_secret);
  } catch (err) {
    console.error('❌ Error adding merchant:', err);
  }
}

// Example run
/*
addMerchant(
  "Test Store", 
  "https://example.com/faq", 
  "https://example.com/products", 
  "https://example.com/docs"
);
*/