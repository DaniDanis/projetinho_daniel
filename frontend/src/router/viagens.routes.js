import EmptyLayout from "@/layouts/default/EmptyLayout.vue"
import ViagemView from "@/views/viagens/ViagensView.vue"

export default [
  {
    path: "/viagens",
    component: EmptyLayout,
    children: [
      {
        path: "",
        name: "viagens-form",
        component: ViagemView,
      }
    ],
  },
]
