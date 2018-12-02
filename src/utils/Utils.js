export class Utils{

 static isLoggedIn(){
     return localStorage.getItem("isLoggedIn") === "true";
    }

    static getTokenFromLocal(){
        let user = JSON.parse(localStorage.getItem("user"));
        return user.authToken;
    }
}