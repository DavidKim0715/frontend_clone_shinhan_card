<template>
  <section>
    <h2>설정 페이지</h2>

  </section>
</template>

<script lang="ts">
import { defineComponent, ref,
  reactive,
  computed,
  toRefs,
  watch,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex"; // @ is an alias to /src
interface Pagination {
  currentPage: number
  totalPage: number
}
const state = reactive<Pagination>({
  currentPage: 1,
  totalPage: 0
})

const ConfigPage = defineComponent({
  name : 'ConfigPage',
  components:{

  },
  props: {
    name: String
  },
  setup(props, context) {
    const store = useStore()



    /*
    const store = useStore()
        const setModal = () => {
          store.commit(MutationType.SetCreateModal, true)
        }
        const showCreateModal = computed(() => store.state.showCreateModal)
        const showEditModal = computed(() => store.state.showEditModal)
        const editTaskId = computed(() => store.state.editModalTaskId)
        const showTaskModal = computed(() => store.state.showTaskModal)
        const showTaskId = computed(()=> store.state.showTaskId)
        const tasks = computed(() => store.state.tasks)

        return { showCreateModal, setModal, tasks, showEditModal,showTaskModal, editTaskId, showTaskId }
     */
  }

})
export default ConfigPage
</script>
