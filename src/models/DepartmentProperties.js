import { DepartmentProperties, DepartmentSnapshot } from "mobx-state-tree";

export const DepartmentProperties = {
  id: types.identifier,
  name: types.string,
  description: types.string,
  head: types.string,
  code: types.string
};

export const DepartmentSnapshot = {
  id: "",
  name: "",
  description: "",
  head: "",
  code: ""
};
