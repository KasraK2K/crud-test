<template>
  <div class="home">
    <div class="container mt-5">
      <!-- ---------------------------- Create Button ---------------------------- -->
      <button
        class="btn btn-primary mb-5"
        data-bs-toggle="modal"
        data-bs-target="#createModal"
      >
        Create
      </button>

      <!-- ---------------------------- Table Header ----------------------------- -->
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">BirthDate</th>
              <th scope="col">Bank Account Number</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <!-- --------------------------- Rows Component ---------------------------- -->
            <customer-table-body
              v-for="(customer, index) in customers"
              :key="customer.id"
              :index="index"
              :customer="customer"
              @handle-edit="fillEditCustomer"
              @handle-delete="fillDeleteCustomer"
            />
          </tbody>
        </table>
      </div>
    </div>

    <!-- ---------------------------- Create Modal ----------------------------- -->
    <div
      id="createModal"
      aria-hidden="true"
      aria-labelledby="createModalLabel"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="createModalLabel" class="modal-title">Edit Customer</h5>
            <button
              aria-label="Close"
              class="btn-close"
              data-bs-dismiss="modal"
              type="button"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label" for="create-firstNameInput">
                First Name
              </label>
              <input
                id="create-firstNameInput"
                v-model="createCustomer.firstName"
                class="form-control"
                placeholder="Kasra"
                type="text"
              />
            </div>

            <div class="mb-3">
              <label class="form-label" for="create-lastNameInput">
                Last Name
              </label>
              <input
                id="create-lastNameInput"
                v-model="createCustomer.lastName"
                class="form-control"
                placeholder="Karami"
                type="text"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="create-emailInput">
                Email address
              </label>
              <input
                id="create-emailInput"
                v-model="createCustomer.email"
                class="form-control"
                placeholder="name@example.com"
                type="email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="create-phoneInput">Phone</label>
              <input
                id="create-phoneInput"
                v-model.number="createCustomer.phoneNumber"
                class="form-control"
                placeholder="+48123456789"
                type="text"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="create-dateInput">Birthday</label>
              <input
                id="create-dateInput"
                v-model="createCustomer.dateOfBirth"
                class="form-control"
                placeholder="1968/3/21"
                type="text"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="create-bankAccountNumber">
                Bank Account Number
              </label>
              <input
                id="create-bankAccountNumber"
                v-model.number="createCustomer.bankAccountNumber"
                class="form-control"
                placeholder="9999999999999"
                type="number"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              type="button"
            >
              Close
            </button>
            <button class="btn btn-primary" type="button" @click="handleCreate">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ----------------------------- Edit Modal ------------------------------ -->
    <div
      id="editedModal"
      aria-hidden="true"
      aria-labelledby="editedModalLabel"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="editedModalLabel" class="modal-title">Edit Customer</h5>
            <button
              aria-label="Close"
              class="btn-close"
              data-bs-dismiss="modal"
              type="button"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label" for="firstNameInput">
                First Name
              </label>
              <input
                id="firstNameInput"
                v-model="editedCustomer.firstName"
                class="form-control"
                placeholder="Kasra"
                type="text"
              />
            </div>

            <div class="mb-3">
              <label class="form-label" for="lastNameInput"> Last Name </label>
              <input
                id="lastNameInput"
                v-model="editedCustomer.lastName"
                class="form-control"
                placeholder="Karami"
                type="text"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="emailInput"> Email address </label>
              <input
                id="emailInput"
                v-model="editedCustomer.email"
                class="form-control"
                placeholder="name@example.com"
                type="email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="phoneInput">Phone</label>
              <input
                id="phoneInput"
                v-model.number="editedCustomer.phoneNumber"
                class="form-control"
                placeholder="+48123456789"
                type="text"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="dateInput">Birthday</label>
              <input
                id="dateInput"
                v-model="editedCustomer.dateOfBirth"
                class="form-control"
                placeholder="1968/3/21"
                type="text"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="bankAccountNumber">
                Bank Account Number
              </label>
              <input
                id="bankAccountNumber"
                v-model.number="editedCustomer.bankAccountNumber"
                class="form-control"
                placeholder="9999999999999"
                type="number"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              type="button"
            >
              Close
            </button>
            <button class="btn btn-primary" type="button" @click="handleEdit">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ---------------------------- Delete Modal ----------------------------- -->
    <div
      id="deletedModal"
      aria-hidden="true"
      aria-labelledby="deletedModalLabel"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="deletedModalLabel" class="modal-title">Delete Customer</h5>
            <button
              aria-label="Close"
              class="btn-close"
              data-bs-dismiss="modal"
              type="button"
            ></button>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              type="button"
            >
              Close
            </button>
            <button class="btn btn-danger" type="button" @click="handleDelete">
              Delete Customer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import CustomerTableBody from "@/components/customers/CustomerTableBody.vue";

export default {
  name: "Home",
  components: { CustomerTableBody },

  mounted() {
    this.findAll();
  },

  // TODO: get Customers from api
  data() {
    return {
      customers: [],
      editedCustomer: {},
      deleteId: "",
      createCustomer: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        phoneNumber: "",
        email: "",
        bankAccountNumber: "",
      },
    };
  },

  methods: {
    async findAll() {
      this.customers = [
        {
          id: "61d1764569352033502e4c20",
          firstName: "John",
          lastName: "Doe",
          dateOfBirth: "1986-02-28T20:30:00.000Z",
          phoneNumber: "+49123456789",
          email: "John@Doe.com",
          bankAccountNumber: "123456789",
        },
      ];
    },

    fillEditCustomer({ customer }) {
      this.editedCustomer = {
        ...customer,
        dateOfBirth: moment(customer.dateOfBirth).format("YYYY/MM/DD"),
      };
    },

    fillDeleteCustomer({ id }) {
      this.deleteId = id;
    },

    handleCreate() {
      console.log(this.createCustomer);
    },

    handleEdit() {
      console.log(this.editedCustomer);
    },

    handleDelete() {
      console.log(this.deleteId);
    },
  },
};
</script>
