import { redirect } from "react-router-dom";

export default function Logout() {

}

export function action() {
    localStorage.removeItem('token');
    return redirect('/');
}