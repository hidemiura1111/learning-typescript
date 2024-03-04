var UserModule;
(function (UserModule) {
    UserModule.name = "John";
    var AddressModule;
    (function (AddressModule) {
        AddressModule.city = "New York";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
