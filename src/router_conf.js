import VueRouter from "vue-router";
import CrearReserva from "./components/CrearReserva";
import ConsultarReserva from "./components/ConsultarReserva";

const router = new VueRouter
(
    {
        //mode: "history",
        routes:
            [
                {
                name:"crear",
                path: "/crear",
                component: CrearReserva  
                },
                {
                name:"consulta",
                path: "/ConsultaReserva",
                component: ConsultarReserva 
                }
            ]
    }
);

export default router;