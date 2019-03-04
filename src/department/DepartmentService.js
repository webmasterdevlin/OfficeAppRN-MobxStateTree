import { BaseUrl } from "../utils/constants";

export function getDepartments() {
  return fetch(BaseUrl.departments)
    .then(response => response.json())
    .catch(err => err.json());
}

export function getDepartment(id) {
  return fetch(BaseUrl.departments + `/${id}`)
    .then(response => response.json())
    .catch(err => err.json());
}

export function postDepartment(department) {
  return fetch(BaseUrl.departments, {
    method: "POST",
    body: JSON.stringify(department),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .catch(err => err.json());
}

export function putDepartment(department) {
  return fetch(BaseUrl.departments + `/${department.id}`, {
    method: "PUT",
    body: JSON.stringify(department),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .catch(err => err.json());
}

export function deleteDepartment(department) {
  return fetch(BaseUrl.departments + `/${department.id}`, {
    method: "DELETE",
    body: JSON.stringify(department),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .catch(err => err.json());
}
