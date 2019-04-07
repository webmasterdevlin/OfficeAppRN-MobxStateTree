import { types, flow, applySnapshot, onPatch, destroy } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";
import {
  getDepartments,
  getDepartment,
  deleteDepartment,
  postDepartment,
  putDepartment
} from "./DepartmentService";

const Department = types.model("Department", {
  id: types.identifier,
  name: types.string,
  description: types.string,
  head: types.string,
  code: types.string
});

const DepartmentStore = types
  .model("DepartmentStore", {
    departments: types.optional(types.array(Department), []),
    department: types.model("Department", {
      id: types.identifier,
      name: types.string,
      description: types.string,
      head: types.string,
      code: types.string
    }),
    error: types.string,
    fetching: types.boolean
  })
  .views(self => ({
    get departmentsCount() {
      return self.departments.length;
    },
    get selectedDepartment() {
      return self.department;
    },
    get allDepartments() {
      return self.departments;
    }
  }))
  .actions(self => ({
    loadDepartments: flow(function*() {
      try {
        applySnapshot(self.departments, yield getDepartments());
      } catch (e) {
        self.error = e.message;
      }
    }),

    loadDepartment: flow(function*(id) {
      try {
        self.department = yield getDepartment(id);
      } catch (e) {
        self.error = e.message;
      }
    }),

    addDepartment: flow(function*(department) {
      try {
        yield postDepartment(department);
        self.departments = self.departments.concat(department);
      } catch (e) {
        self.error = e.message;
      }
    }),

    updateDepartment: flow(function*(department) {
      try {
        yield putDepartment(department);
        const index = self.departments.findIndex(d => d.id === department.id);
        self.departments[index] = department;
      } catch (e) {
        self.error = e.message;
      }
    }),

    removeDepartment: flow(function*(department) {
      try {
        yield deleteDepartment(department);
        destroy(department); // no need to splice.

        /* const index = self.departments.findIndex(d => d.id === department.id);
         self.departments.splice(index, 1);*/
      } catch (e) {
        self.error = e.message;
      }
    })
  }))
  .create({
    departments: [],
    department: {
      id: "",
      name: "",
      description: "",
      head: "",
      code: ""
    },
    error: "",
    fetching: false
  });

// Debugging tools
onPatch(DepartmentStore, patch => {
  console.log(patch);
});
makeInspectable(DepartmentStore);

export default DepartmentStore;
