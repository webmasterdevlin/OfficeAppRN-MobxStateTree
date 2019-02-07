import { types, flow, applySnapshot, onPatch, destroy } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";
import {
  getDepartments,
  getDepartment,
  deleteDepartment,
  postDepartment,
  putDepartment
} from "./DepartmentService";
import { toJS } from "mobx";

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
        let departments = [];

        yield getDepartments().then(res => {
          departments = res;
        });
        console.log("loadDepartments: ", toJS(departments));
        applySnapshot(self.departments, departments);
      } catch (e) {
        self.error = e.message;
      }
    }),
    loadDepartment: flow(function*(id) {
      try {
        let department = {};
        yield getDepartment(id).then(res => (department = res));
        self.department = department;
      } catch (e) {
        self.error = e.message;
      }
    }),
    addDepartment: flow(function*(department) {
      try {
        yield postDepartment(department);
        self.departments.unshift(department);
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
        /*
          const index = self.departments.findIndex(d => d.id === department.id);
          self.departments.splice(index, 1);
         */
        destroy(department); // no need to splice.
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
