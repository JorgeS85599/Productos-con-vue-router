<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
        <table class="table table-striped table-hover">
          <thead class="thead-dark bg-light">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Uds.</th>
              <th>Precio/u</th>
              <th>Importe</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <product-row
              @change-units="changeUnits"
              @delete-product="deleteProduct"
              v-for="(product, key) in products"
              :key="key"
              :product="product"
            ></product-row>
          </tbody>
          <tfoot>
            <th colspan="4">Importe total del almacén:</th>
            <th id="total">{{totalImport.toFixed(2)}} €</th>
            <th></th>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../service/API";
import ProductRow from "../components/ProductRow.vue";

export default {
  components: { ProductRow },
  name: "products-table",
  data() {
    return {
      products: [],
      totalImport: 0,
    };
  },
  methods: {
    changeUnits(producto, unidad) {
      api.productos
        .modify({
          name: producto.name,
          price: producto.price,
          id: producto.id,
          units: producto.units + unidad,
        })
        .then((response) =>
          this.products.splice(
            this.products.indexOf(producto),
            1,
            response.data
          )
        )
        .catch((error) =>
          console.error(
            "Error: " + (error.statusText || error.message || error)
          )
        );
    },
    deleteProduct(producto) {
      api.productos
        .delete(producto.id)
        .then(this.products.splice(this.products.indexOf(producto), 1))
        .catch((error) =>
          console.error(
            "Error: " + (error.statusText || error.message || error)
          )
        );
    },
    addProduct(producto) {
      api.productos
        .create({
          name: producto.name,
          price: producto.price,
          units: producto.units,
        })
        .then((response) => this.products.push(response.data))
        .catch((error) =>
          console.error(
            "Error: " + (error.statusText || error.message || error)
          )
        );
    },
    editProd() {
      this.$router.push("/editProduct/" + this.product.id);
    },
  },
  mounted() {
    api.productos
      .getAll()
      .then((response) =>
        response.data.forEach((product) => {
          this.totalImport += (product.units * product.price);
          this.products.push(product);
        })
      )
      .catch((error) =>
        console.error("Error: " + (error.statusText || error.message || error))
      );
  },
};
</script>