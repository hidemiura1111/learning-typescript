var UserModule;
(function (UserModule) {
    UserModule.name = "John";
    var AddressModule;
    (function (AddressModule) {
        AddressModule.city = "New York";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
// Module
/// <reference path="./module/user.ts" />
console.log(UserModule.name);
// console.log(UserModule.AddressModule.city);
var addr = UserModule.AddressModule;
console.log(addr.city);
