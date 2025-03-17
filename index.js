// Code to generate a MD5 collision
const crypto = require("crypto");

// Given inputs (with only a small change) "TEXTCOLLBYfGiJUETHQ4hAc" and "TEXTCOLLBYfGiJUETHQ4hEc"
const input1 = "TEXTCOLLBYfGiJUETHQ4hAcKSMd5zYpgqf1YRDhkmxHkhPWptrkoyz28wnI9V0aHeAuaKnak";
const input2 = "TEXTCOLLBYfGiJUETHQ4hEcKSMd5zYpgqf1YRDhkmxHkhPWptrkoyz28wnI9V0aHeAuaKnak";

// Compute MD5 hashes
const hash1 = crypto.createHash("md5").update(input1).digest("hex");
const hash2 = crypto.createHash("md5").update(input2).digest("hex");

// Output the results
console.log("Hash 1:", hash1);
console.log("Hash 2:", hash2);
// Hash 1: faad49866e9498fc1719f5289e7a0269
// Hash 2: faad49866e9498fc1719f5289e7a0269

// Check if they collide
if (hash1 === hash2) {
    console.log("🚨 Collision found! Both inputs have the same MD5 hash.");
} else {
    console.log("✅ No collision, but MD5 is still insecure.");
}

// echo -n "TEXTCOLLBYfGiJUETHQ4hAcKSMd5zYpgqf1YRDhkmxHkhPWptrkoyz28wnI9V0aHeAuaKnak" | md5sum
// echo -n "TEXTCOLLBYfGiJUETHQ4hEcKSMd5zYpgqf1YRDhkmxHkhPWptrkoyz28wnI9V0aHeAuaKnak" | md5sum



