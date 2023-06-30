import { create } from "zustand";

const zus=create((set)=>({
    pp:["a", "b",],
    setPp:(par)=>set((st)=>({pp:[...st.pp,par]}))
}))

export default zus;