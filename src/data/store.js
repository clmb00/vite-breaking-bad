import { reactive } from "vue";

export const store = reactive ({
  characters: [],
  counter: 0,
  isLoading: true,
  movieFilter: "",
  nameFilter: ""
})