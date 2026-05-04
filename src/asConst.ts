//  as const assertion 

// const user: {
//       name: string;
//       age: number;
// } = {
//       name: "Leo Messi",
//       age: 30,
// };

// enum UserRole {
//       Admin = "admin",
//       Editor = "editor",
//       Gest = "gest",
//       User = 'user'
// }

const UserRoles = {
      Admin: "ADMIN",
      Editor: "EDITOR",
      Viewer: "VIEWER",
} as const;

// UserRole.Admin = " Ami kico khabo na";

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);


// const canAccess = (role: UserRole) => {
//       if (role === "admin" || role === "gest"){
//             return true
//       }
//       else return false
// };

// const isEditorPermissin = canAccess(UserRole.Editor);
// console.log(isEditorPermissin)


// explain as const & ennum co file 