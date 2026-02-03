const { generateClientId, generateClientSecret } = require("./credgenerator");

console.log("Generated Client ID:", generateClientId());
console.log("Generated Client Secret:", generateClientSecret());
