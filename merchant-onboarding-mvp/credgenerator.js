const crypto = require("crypto");

// Generate a random client ID for each of the merchant clients
function generateClientId() {

// 16 characters
  return "client_" + crypto.randomBytes(8).toString("hex"); 
}

// Generate a random client secret that should be long and hard to debunk
function generateClientSecret() {

// 64 characters    
  return "secret_" + crypto.randomBytes(32).toString("hex"); 
}

// This exports the generated Client ID and the generated client secret
module.exports = { generateClientId, generateClientSecret };