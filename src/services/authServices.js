export function getUserFromSessionStorage() {
    return sessionStorage.getItem("loggedInUser");
}

export function setUserInSessionStorage(user) {
    user ? sessionStorage.setItem("loggedInUser", user) 
    : sessionStorage.removeItem("loggedInUser");
}