// Module
/// <reference path="./module/user.ts" />
console.log(UserModule.name);
// console.log(UserModule.AddressModule.city);
var addr = UserModule.AddressModule;
console.log(addr.city);
