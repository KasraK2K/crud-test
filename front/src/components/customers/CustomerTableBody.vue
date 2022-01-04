<template>
  <tr>
    <th scope="row">{{ index + 1 }}</th>
    <td>{{ customer.firstName }}</td>
    <td>{{ customer.lastName }}</td>
    <td>{{ customer.email }}</td>
    <td>{{ customer.phoneNumber }}</td>
    <td>{{ birthDate }}</td>
    <td>{{ customer.bankAccountNumber }}</td>
    <td class="d-flex align-content-center">
      <span
        class="cursor-pointer"
        data-bs-toggle="modal"
        data-bs-target="#editedModal"
      >
        <i
          class="fs-5 bi bi-pencil-square text-warning"
          @click="$emit('handle-edit', { customer })"
        ></i>
      </span>
      <span
        data-bs-toggle="modal"
        data-bs-target="#deletedModal"
        class="ms-3 cursor-pointer"
        @click="$emit('handle-delete', { id: customer.id })"
      >
        <i class="fs-5 bi bi-trash text-danger"></i>
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CustomerTableBody.vue",
  props: {
    customer: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  computed: {
    birthDate() {
      const date = new Date(this.customer.dateOfBirth);
      return date.toLocaleDateString("zh-Hans-CN");
    },
  },
};
</script>
