import { createStore } from "vuex";
import { createNamespacedHelpers } from 'vuex'
import auth from "@/store/modules/service/auth";

const { mapState, mapActions } = createNamespacedHelpers('./module')

const store =  createStore({
  modules: {
    auth : auth
  },
});
export default store
