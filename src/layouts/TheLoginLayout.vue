<template>
  <div class="container-fluid" :class="containerClasses">
    <div class="row" :class="rowClasses">
        <div :class="columnClasses">
            <slot name="col">
                <h1>Spalte</h1>
            </slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "TheLoginLayout",
    props: {
        columnClass: {
            type: String,
            default:"col-12",
        },
          fullsize: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        columnClasses () {
            return [this.columnClass, this.fullsize ? "h-100" : ""];
        },
         rowClasses() {
            return [this.fullsize ? "h-100" : ""]; 
        },
        containerClasses() {
            return [this.fullsize ? "vh-100" : ""];
        },
    },
};
</script>

<style scoped>
</style>