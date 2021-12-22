<template>
  <tr>
    <th>{{ product.id }}</th>
    <th>{{ product.name }}</th>
    <th>{{ product.units }}</th>
    <th>{{ product.price.toFixed(2) }} €</th>
    <th>{{ productImport.toFixed(2) }} €</th>
    <th>
      <button @click="upUnits" class="unitsup btn btn-secondary">
        <i class="bi bi-arrow-up"></i>
      </button>

      <button v-if="product.units" @click="downUnits" class="unitsdown btn btn-secondary">
        <i class="bi bi-arrow-down"></i>
      </button>

      <button v-else class="unitsdown btn btn-secondary" disabled>
        <i class="bi bi-arrow-down"></i>
      </button>

      <button @click="editProduct" class="edit btn btn-secondary">
        <i class="bi bi-pencil"></i>
      </button>

      <button @click="deleteProduct" class="delete btn btn-secondary">
        <i class="bi bi-trash"></i>
      </button>
    </th>
  </tr>
</template>

<script>
export default {
  name: "product-row",
  props: ["product"],
  computed: {
        productImport() {
            return this.product.units * this.product.price
        }
    },
    methods: {
      upUnits() {
        this.$emit('change-units',this.product,1)
      },
      downUnits() {
        this.$emit('change-units',this.product,-1)
      },
      deleteProduct() {
        this.$emit('delete-product',this.product)
      },
      editProduct() {
        this.$router.push('/editProduct/'+ this.product.id)
      }
    }
};
</script>