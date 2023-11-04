enum Roles {
  user = "user",
  admin = "admin",
}
type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: LoginDetails = {
  name: "ABC",
  email: "abc@gmailc.om",
  password: "qwer",
  role: Roles.user,
};

const user2: LoginDetails = {
  name: "xyz",
  email: "xyz@gmail.com",
  password: "aaa",
  role: Roles.admin,
};

const isAdmin = (user: LoginDetails) => {
  const { name, role } = user;
  return role === "admin"
    ? `${name} is allow to edit the webiste`
    : `${name} is not allow to edit the webiste`;
};
console.log(isAdmin(user1))
console.log(isAdmin(user2))