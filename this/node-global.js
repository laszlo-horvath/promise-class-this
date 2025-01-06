// 4. Global context (Node.js)
function checkGlobal() {
   console.log('Global this:', this === global);
}
checkGlobal();
