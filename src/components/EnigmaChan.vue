<script>
import { defineComponent, reactive, onMounted } from "vue";
import { Enigma } from "@/modules/Enigma";


export default defineComponent({
  props: {},

  setup(props) {
    // data
    const state = reactive({
      inputText: "",
      outputText: "",
      reversedText: "",
      offset1: 0,
      offset2: 0,
      offset3: 0
    });

    onMounted(() => {
    });

    // methods
    const submit = (event) => {
      state.outputText = "";
      const enigma = new Enigma(state.offset1, state.offset2, state.offset3);
      const lowerCaseText = state.inputText.toLowerCase();
      try {
        for (let i=0;i<lowerCaseText.length;i++) {
          const ret = enigma.encrypt(lowerCaseText[i]);
          state.outputText += ret;
        }
      } catch(error) {
        window.alert(error.message);
      }
    };

    const range = (start, end) => {
      return Array.from({ length: end - start + 1 }, (_, i) => i + start);
    };

    return {
      state,
      submit,
      range
    };
  }
});
</script>

<template>
  <div>
    <h1>
      Enigma Encrypter
    </h1>
    <form @submit.prevent="submit">
      <div>
        <div class="form-group" style="margin-bottom:1em;">
          <b>Offsets</b>
          <div class="col-md-offset-2 col-md-5">
            <select v-model="state.offset1">
              <option v-for="n in range(0, 26)" :key="n" :value="n">
                {{ n }}
              </option>
            </select>
            <select v-model="state.offset2">
              <option v-for="n in range(0, 26)" :key="n" :value="n">
                {{ n }}
              </option>
            </select>
            <select v-model="state.offset3">
              <option v-for="n in range(0, 26)" :key="n" :value="n">
                {{ n }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <b>Text</b>
          <div class="col-md-10">
            <textarea
              type="text"
              class="form-control"
              id="textForm"
              placeholder="Text"
              v-model="state.inputText"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-offset-2 col-md-5">
            <button type="submit" class="btn btn-default">Encrypt</button>
          </div>
        </div>
      </div>
    </form>
    <div v-if="state.outputText.length > 0">
      <hr>
      <div>
        Encrypted Text
      </div>
      <div>
        <textarea v-model="state.outputText" />
      </div>
    </div>
  </div>
</template>
