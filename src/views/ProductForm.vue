<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-4 hide" id="form">
      <form @submit.prevent="addProduct" @reset="reset">
        <fieldset>
          <legend>{{ this.editando ? "Editar" : "Nuevo" }} producto</legend>
          <!-- Aquí los inputs y botones del form -->
          <label for="newprod-id" id="newprod-id-label">Id: </label><br />
          <input
            type="number"
            id="newprod-id-input"
            name="newprod-id"
            disabled
            v-model.number="newProd.id"
          /><br />
          <label for="newprod-name">Nombre: </label><br />
          <input
            type="text"
            id="newprod-name"
            name="newprod-name"
            required
            minlength="3"
            v-model="newProd.name"
          /><br />
          <label for="newprod-price">Precio/u: </label><br />
          <input
            type="number"
            id="newprod-price"
            name="newprod-price"
            step="0.01"
            value="0.00"
            placeholder="0.00"
            v-model.number="newProd.price"
          /><br />
          <label for="newprod-units" id="newprod-units-label" class="hide"
            >Unidades: </label
          ><br />
          <input
            type="number"
            id="newprod-units-input"
            class="hide"
            name="newprod-units"
            min="0"
            step="1"
            v-model.number="newProd.units"
          /><br />
          <button type="submit" class="btn btn-default btn-primary">
            {{ this.editando ? "Editar" : "Añadir" }}
          </button>
          <button type="reset" class="btn btn-danger">Reset</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import api from "../service/API";
export default {
  name: "product-form",
  props: ["id"],
  data() {
    return {
      newProd: {
        id: "",
        name: "",
        price: "",
        units: "",
      },
      editando: false,
    };
  },
  methods: {
    addProduct() {
      if (this.id) {
        api.productos
          .modify(this.newProd)
          .then(() => {
            this.newProd = {};
            this.$router.push("/");
          })
          .catch((error) =>
            console.error(
              "Error: " + (error.statusText || error.message || error)
            )
          );
      } else {
        api.productos
          .create(this.newProd)
          .then(() => {
            this.newProd = {};
            this.$router.push("/");
          })
          .catch((error) =>
            console.error(
              "Error: " + (error.statusText || error.message || error)
            )
          );
      }
    },
    loadProd() {
      api.productos
        .getOne(this.id)
        .then((response) => (this.newProd = response.data))
        .catch((error) =>
          console.error(
            "Error: " + (error.statusText || error.message || error)
          )
        );
    },
    reset() {
      if (this.id) {
        this.loadProd()
      } else {
        this.newProd = {}
      }
    }
  },
  mounted() {
    if (this.id) {
      this.editando = true;
      this.loadProd()
    }
  },
};
</script>