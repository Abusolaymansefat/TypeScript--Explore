// Enum 

// set of fixed string Leteral type 

// type UserRole = "admin" | "user"| "gest";

enum UserRole {
      Admin = "admin",
      Editor = "editor",
      Gest = "gest",
      User = 'user'
}

const canAccess = (role: UserRole) => {
      if (role === UserRole.Admin || role === UserRole.Editor || role === UserRole.Gest){
            return true
      }
      else return false
}

// const canAccess = (role: UserRole) => {
//       if (role === "admin" || role === "gest"){
//             return true
//       }
//       else return false
// };

const isEditorPermissin = canAccess(UserRole.Editor);
console.log(isEditorPermissin)