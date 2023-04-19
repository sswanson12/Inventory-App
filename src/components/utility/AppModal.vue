<template>
<v-sheet :id="'modal' + modalId" class="appModal">
  <app-button icon="mdi-close"
              tool-tip="Close"
              tool-tip-location="left"
              :button-action="closeModal"
              id="addGoalFormCloseButton"
              class="elevation-0 px-0">
  </app-button>
  <header class="font-weight-medium appModalHeader">{{modalTitle}}</header>
  <v-form>
    <slot>
      //All Inputs will come from a more specific modal component.
    </slot>
    <div class="d-flex flex-column">
      <app-button button-text="Submit&nbsp"
                  icon="mdi-pencil"
                  color="primary"
                  :button-action="submitForm">
      </app-button>

      <app-button button-text="Clear Form&nbsp"
                  icon="mdi-restart"
                  :button-action="clearForm"
                  color="warning"
                  class="mt-3">
      </app-button>
    </div>
  </v-form>
</v-sheet>
</template>

<script>
import {inputTypes} from "@/models/data/initData";
import AppButton from "@/components/utility/AppButton";
import randomIdGenerator from "@/models/utilities/randomIdGenerator";

export default {
  name: "AppModal",
  emits: ["close-modal", "submit-form", "clear-form"],
  components: { AppButton, },
  props: {
    modalTitle: {
      type: String,
      required: true,
    },
  },
  methods: {
    //must be picked up by the component implementing this component
    closeModal() {
      this.$emit("close-modal")
    },
    submitForm() {
      this.$emit("submit-form");
    },
    clearForm() {
      this.$emit("clear-form");
    },
  },
  data: () => ({
    modalId: randomIdGenerator(),
  }),
}
</script>

<style scoped>
.appModal{
  width: 340px;
  padding: 20px;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.appModalHeader{
  position: relative;
  text-align: center;
  bottom: 8px;
}
</style>
