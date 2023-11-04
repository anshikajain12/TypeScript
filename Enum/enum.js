"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "ABC",
    email: "abc@gmailc.om",
    password: "qwer",
    role: Roles.user,
};
const user2 = {
    name: "xyz",
    email: "xyz@gmail.com",
    password: "aaa",
    role: Roles.admin,
};
const isAdmin = (user) => {
    const { name, role } = user;
    return role === "admin"
        ? `${name} is allow to edit the webiste`
        : `${name} is not allow to edit the webiste`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
